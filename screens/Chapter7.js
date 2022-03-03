import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Chapter1 } from './Chapter1.js';

const Chapter7 = function() {

  const currentDate = new Date().getDate();
  const [date, onChangeText_date] = react.useState(null);
  const [result, onChangeText_result] = react.useState(null);
  const [where, onChangeText_where] = react.useState(null);
  const [where2, onChangeText_where2] = react.useState(null);
  const [where3, onChangeText_where3] = react.useState(null);
  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [selectedanalysis, setSelectedanalysis] = react.useState();
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [checkedPSA, setCheckedPSA] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [visible3, setVisible3] = react.useState(false);
  const [visible4, setVisible4] = react.useState(false);
  const [visiblePSA, setVisiblePSA] = react.useState(false);
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
  const toggleDropdownPSA = () => {
    setVisiblePSA(!visiblePSA);
  };
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
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_result}
            value={result}
            placeholder="Your result"
            keyboardType="default"
          />
      </View>
    );
  }
};
  const renderDropdown2 = () => {
    if (visible2) {
    return (
      <View>
          <Text style={styles.label}>When?</Text>
          <View style={styles.chooseDate}>
            <Button color="black" onPress={showDatepicker2} title="Choose" />
          </View>
          {show2 && (<DateTimePicker
            testID="dateTimePicker"
            value={date_result2}
            mode={mode2}
            is24Hour={true}
            display="default"
            onChange={onChange2}
          />)}
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
            placeholder="Location"
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
          <Text style={styles.label}>When?</Text>
          <View style={styles.chooseDate}>
            <Button color="black" onPress={showDatepicker3} title="Choose" />
          </View>
          {show3 && (<DateTimePicker
            testID="dateTimePicker"
            value={date_result3}
            mode={mode3}
            is24Hour={true}
            display="default"
            onChange={onChange3}
          />)}
          <Text style={styles.label}>Where:</Text>
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
            placeholder="Location"
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
          <View style={styles.chooseDate}>
            <Button color="black" onPress={showDatepicker4} title="Choose" />
          </View>
          {show4 && (<DateTimePicker
            testID="dateTimePicker"
            value={date_result4}
            mode={mode4}
            is24Hour={true}
            display="default"
            onChange={onChange4}
          />)}
          <Text style={styles.label}>Where:</Text>
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
            placeholder="Location"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdownPSA = () => {
    if (visiblePSA) {
    return (
      <View>
          <Text style={styles.label}>Did you do PSA ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checkedPSA === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedPSA('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checkedPSA === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedPSA('no')}
              />
            </View>
          </View>
      </View>
    );
  }
  };
return (
  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

       <Text  style = {styles.headerText}>Your paraclinical data : inferior to 3 months : </Text>
          <Text style={styles.label}>List analysis</Text>
          <Picker
            selectedValue={selectedanalysis}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedanalysis(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="Complete hemoleucogram" value="complete_hemoleucogram" />
            <Picker.Item label="CRP" value="CRP" />
            <Picker.Item label="Blood glucose" value="blood_glucose" />
            <Picker.Item label="Urea" value="urea" />
            <Picker.Item label="Creatinine" value="creatinine" />
            <Picker.Item label="Full lipidogram" value="full_lipidogram" />
            <Picker.Item label="GOT" value="GOT" />
            <Picker.Item label="GPT" value="GPT" />
            <Picker.Item label="GGT" value="GGT" />
            <Picker.Item label="VIT D3" value="VIT_D3" />
            <Picker.Item label="TSH" value="TSH" />
          </Picker>

          {/*if it is a men > 65 years old, ask for the PSA*/}
          {(((Chapter1.date-currentDate)>65)&&(Chapter1.checked === 'male')) && 
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
        }  
          
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
