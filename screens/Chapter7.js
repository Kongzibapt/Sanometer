import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';

const Chapter7 = function({navigation}) {

  const currentDate = new Date().getDate();
  const [date, onChangeText_date] = react.useState(null);
  const [result, onChangeText_result] = react.useState(null);
  const [where, onChangeText_where] = react.useState(null);
  const [where2, onChangeText_where2] = react.useState(null);
  const [where3, onChangeText_where3] = react.useState(null);
  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [start, onChangeText_start] = react.useState(null);
  const [start2, onChangeText_start2] = react.useState(null);
  const [start3, onChangeText_start3] = react.useState(null);

  const [selectedhemo, setSelectedhemo] = react.useState();
  const [selectedcrp, setSelectedcrp] = react.useState();
  const [selectedglucose, setSelectedglucose] = react.useState();
  const [selectedurea, setSelectedurea] = react.useState();
  const [selectedcrea, setSelectedcrea] = react.useState();
  const [selectedlipi, setSelectedlipi] = react.useState();
  const [selectedgot, setSelectedgot] = react.useState();
  const [selectedgpt, setSelectedgpt] = react.useState();
  const [selectedggt, setSelectedggt] = react.useState();
  const [selectedvit, setSelectedvit] = react.useState();
  const [selectedtsh, setSelectedtsh] = react.useState();
  // const [selectedpsa, setSelectedpsa] = react.useState();

  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [visible3, setVisible3] = react.useState(false);
  const [visible4, setVisible4] = react.useState(false);
  // const [visiblePSA, setVisiblePSA] = react.useState(false);
  const [date_result, setDate] = react.useState(new Date());
  const [date_result2, setDate2] = react.useState(new Date());
  const [date_result3, setDate3] = react.useState(new Date());
  const [date_result4, setDate4] = react.useState(new Date());
  const [mode, setMode] = react.useState('date');
  const [show, setShow] = react.useState(false);
  const [mode2, setMode2] = react.useState('date');
  const [show2, setShow2] = react.useState(false);
  const [mode3, setMode3] = react.useState('date');
  const [show3, setShow3] = react.useState(false);
  const [mode4, setMode4] = react.useState('date');
  const [show4, setShow4] = react.useState(false);

  //pour récupérer la date de naissance
  const [birthdate,setbirthdate] = React.useState("");
  const getInfos = async () => {
    try {     
      const birthdate = await AsyncStorage.getItem('birthdate');
      setbirthdate(birthdate);
    }
    catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',() =>{
      getInfos();
    });
    getInfos();
  },[])
  
  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };
  const toggleDropdown3 = () => {
    setVisible3(!visible3);
  };
  const toggleDropdown4 = () => {
    setVisible4(!visible4);
  };
  // const toggleDropdownPSA = () => {
  //   setVisiblePSA(!visiblePSA);
  // };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };
  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
  };
  const onChange4 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow4(Platform.OS === 'ios');
    setDate4(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
  };
  const showMode4 = (currentMode) => {
    setShow4(true);
    setMode4(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };  
  const showDatepicker2 = () => {
    showMode2('date');
  };
  const showDatepicker3 = () => {
    showMode3('date');
  };
  const showDatepicker4 = () => {
    showMode4('date');
  };
  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>When?</Text>
          <View style={styles.chooseDate}>
            <Button color="black" onPress={showDatepicker} title="Choose" />
          </View>
          {show && (<DateTimePicker
            testID="dateTimePicker"
            value={date_result}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />)}
          <Text style={styles.label}>Result:</Text>
          <Picker
            selectedValue={selectedhemo}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedhemo(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="< 5,7%" value="normal" />
            <Picker.Item label="5,7 - 6,4%" value="prediabetes" />
            <Picker.Item label="> 6,4%" value="diabetes" />
          </Picker>
      </View>
    );
  }
};
  const renderDropdown2 = () => {
    if (visible2) {
    return (
      <View>
          <Text style={styles.label}>Start of pain?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_start}
            value={start}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_where}
            value={where}
            placeholder="Anatomical localization"
            keyboardType="default"
          />
      </View>
    );
  }
};
  const renderDropdown3 = () => {
    if (visible3) {
    return (
      <View>
          <Text style={styles.label}>Start of pain?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_start2}
            value={start2}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_where2}
            value={where2}
            placeholder="Anatomical localization"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdown4 = () => {
    if (visible4) {
    return (
      <View>
          <Text style={styles.label}>When?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_start3}
            value={start3}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_where3}
            value={where3}
            placeholder="Anatomical localization"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  // const renderDropdownPSA = () => {
  //   if (visiblePSA) {
  //   return (
  //     <View>
  //         <Text style={styles.label}>PSA test</Text>
  //         <Picker
  //           selectedValue={selectedpsa}
  //           onValueChange={(itemValue, itemIndex) =>
  //             setSelectedpsa(itemValue)
  //           }
  //           mode='dropdown'>
  //           <Picker.Item label="In the standard" value="standard" />
  //           <Picker.Item label="Higher than the standard" value=">standard" />
  //           <Picker.Item label="Lower than the standard" value="<standard" />
  //         </Picker>
  //     </View>
  //   );
  // }
  // };
return (
  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

       <Text  style = {styles.headerText}>Your paraclinical data : inferior to 3 months : </Text>
          <Text style={styles.label}>List analysis</Text>
          <Text style={styles.label}>Complete hemoleucogram</Text>
          <Picker
            selectedValue={selectedhemo}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedhemo(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>CRP</Text>
          <Picker
            selectedValue={selectedcrp}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedcrp(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>Blood glucose</Text>
          <Picker
            selectedValue={selectedglucose}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedglucose(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>Urea</Text>
          <Picker
            selectedValue={selectedurea}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedurea(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>Creatinine</Text>
          <Picker
            selectedValue={selectedcrea}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedcrea(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>Full lipidogram</Text>
          <Picker
            selectedValue={selectedlipi}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedlipi(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>GOT</Text>
          <Picker
            selectedValue={selectedgot}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedgot(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>GPT</Text>
          <Picker
            selectedValue={selectedgpt}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedgpt(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>GGT</Text>
          <Picker
            selectedValue={selectedggt}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedggt(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>VIT D3</Text>
          <Picker
            selectedValue={selectedvit}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedvit(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>
          <Text style={styles.label}>TSH</Text>
          <Picker
            selectedValue={selectedtsh}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedtsh(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="In the standard" value="standard" />
            <Picker.Item label="Higher than the standard" value=">standard" />
            <Picker.Item label="Lower than the standard" value="<standard" />
          </Picker>

          {/*if it is a men > 65 years old, ask for the PSA : &&(Chapter1.checked === 'male')*/}
          {/* {((birthdate-currentDate)>65) && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdownPSA}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your HbA1C and glucose challenge test.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdownPSA()}
            
            </TouchableOpacity>  
          </View>
        }   */}
          
          {/*???? PT diabetics and blood glucose> 1g */}

           <Text style={styles.label}>Is HbA1C and glucose challenge test ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
           {(checked==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your HbA1C and glucose challenge test.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown()}
            
            </TouchableOpacity>  
          </View>
        }  

          <Text style={styles.label}>For vertebral pain: you did MRI ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked2 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked2('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked2 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked2('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
         {(checked2==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your vertebral pain.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
          </View>
        }

          <Text style={styles.label}>For abdominal pain: did you make ultrasound ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked3 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked3('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked3 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked3('no')}
              />
            </View>
          </View> 

          {/*when ? result*/}
          {(checked3==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown3}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your abdominal pain.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown3()}
            
            </TouchableOpacity>  
          </View>
        }

          <Text style={styles.label}>For heart pain: Did you do ECG ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked4 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked4('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked4 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked4('no')}
              />
            </View>
          </View>
          {/*when ? result*/}
          {(checked4==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown4}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your heart pain.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown4()}
            
            </TouchableOpacity>  
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter7};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  drop:{
    display:'flex',
    flexDirection:'row'
  },
  titledrop:{
    flex:1,
    paddingRight:10,
    fontSize: 16,
    color: 'black',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  symboldrop:{
    flex:1,
    paddingRight:10
  },
  checkboxview:{
    display:'flex',
    flexDirection:'row',
    margin:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  containerbutton:{
    flex:1,
    paddingRight:10
  },
  input: {
    height: 40,
    // margin: 12, 
    marginBottom:15,   
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    fontFamily:"Montserrat_400Regular",
    borderWidth:2,
    borderRadius:5
  },
  chooseDate: {
    width:"50%"
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginTop : 50,
    margin: 12,
    fontFamily:"Montserrat_400Regular"
  },
  headerText2: {
    fontSize: 16,
    color: 'white',
    margin: 12,
    fontFamily:"Montserrat_400Regular"
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    fontFamily:"Montserrat_400Regular"
  },
  checkbox: {
    alignSelf: "center",
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 12,
  },
  paragraph : {
    fontFamily:"Montserrat_400Regular"
  },
  scrollView: {
    backgroundColor: '#18acb9',
    marginHorizontal: 20,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
});
