import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chapter7 = function({navigation}) {
  //const sex = route.params.checked_sex;
  const [date, onChangeText_date] = react.useState(null);
  const [where, onChangeText_where] = react.useState(null);
  const [where2, onChangeText_where2] = react.useState(null);
  const [where3, onChangeText_where3] = react.useState(null);
  const [borderColorInputStart,setBorderColorInputStart] = react.useState("#BBBBBB");
  const [borderColorInputWhere,setBorderColorInputWhere] = react.useState("#BBBBBB");
  const [borderColorInputStart2,setBorderColorInputStart2] = react.useState("#BBBBBB");
  const [borderColorInputWhere2,setBorderColorInputWhere2] = react.useState("#BBBBBB");
  const [borderColorInputWhen,setBorderColorInputWhen] = react.useState("#BBBBBB");
  const [borderColorInputWhere3,setBorderColorInputWhere3] = react.useState("#BBBBBB");
  const [start, onChangeText_start] = react.useState(null);
  const [start2, onChangeText_start2] = react.useState(null);
  const [start3, onChangeText_start3] = react.useState(null);

  const [selectedhemo, setSelectedhemo] = react.useState(null);
  const [selectedcrp, setSelectedcrp] = react.useState(null);
  const [selectedglucose, setSelectedglucose] = react.useState(null);
  const [selectedurea, setSelectedurea] = react.useState(null);
  const [selectedcrea, setSelectedcrea] = react.useState(null);
  const [selectedlipi, setSelectedlipi] = react.useState(null);
  const [selectedgot, setSelectedgot] = react.useState(null);
  const [selectedgpt, setSelectedgpt] = react.useState(null);
  const [selectedggt, setSelectedggt] = react.useState(null);
  const [selectedvit, setSelectedvit] = react.useState(null);
  const [selectedtsh, setSelectedtsh] = react.useState(null);
  // const [selectedpsa, setSelectedpsa] = react.useState();

  const [checked, setChecked] = react.useState(null);
  const [checkedHb, setCheckedHb] = react.useState(null);
  const [checked2, setChecked2] = react.useState(null);
  const [checked3, setChecked3] = react.useState(null);
  const [checked4, setChecked4] = react.useState(null);
  const [visible, setVisible] = react.useState(false);
  const [visibleHb, setVisibleHb] = react.useState(false);
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

  const [dataIsReady,setDataIsReady]=react.useState(false);
  
  const submitChapter7 = async () => {
    try {     
      date && await AsyncStorage.setItem('date',date);
      where && await AsyncStorage.setItem('where',where);
      where2 && await AsyncStorage.setItem('where2',where2);
      where3 && await AsyncStorage.setItem('where3',where3);
      start && await AsyncStorage.setItem('start',start);
      start2 && await AsyncStorage.setItem('start2',start2);
      start3 && await AsyncStorage.setItem('start3',start3);
      selectedhemo !== null && await AsyncStorage.setItem('selectedhemo',selectedhemo);
      selectedcrp !== null && await AsyncStorage.setItem('selectedcrp',selectedcrp);
      selectedglucose !== null && await AsyncStorage.setItem('selectedglucose',selectedglucose);
      selectedurea !== null && await AsyncStorage.setItem('selectedurea',selectedurea);
      selectedcrea !== null && await AsyncStorage.setItem('selectedcrea',selectedcrea);
      selectedlipi !== null && await AsyncStorage.setItem('selectedlipi',selectedlipi);
      selectedgot !== null && await AsyncStorage.setItem('selectedgot',selectedgot);
      selectedgpt !== null && await AsyncStorage.setItem('selectedgpt',selectedgpt);
      selectedggt !== null && await AsyncStorage.setItem('selectedggt',selectedggt);
      selectedvit !== null && await AsyncStorage.setItem('selectedvit',selectedvit);
      selectedtsh !== null && await AsyncStorage.setItem('selectedtsh',selectedtsh);
      checked !== null && await AsyncStorage.setItem('checked',checked);
      checkedHb !== null && await AsyncStorage.setItem('checkedHb',checkedHb);
      checked2 !== null && await AsyncStorage.setItem('checked2',checked2);
      checked3 !== null && await AsyncStorage.setItem('checked3',checked3);
      checked4 !== null && await AsyncStorage.setItem('checked4',checked4);
     
      date_result && await AsyncStorage.setItem('date_result',date_result.toString());
      date_result2 && await AsyncStorage.setItem('date_result2',date_result2.toString());
      date_result3 && await AsyncStorage.setItem('date_result3',date_result3.toString());
      date_result4 && await AsyncStorage.setItem('date_result4',date_result4.toString());
      mode && await AsyncStorage.setItem('mode',mode);
      mode2 && await AsyncStorage.setItem('mode2',mode2);
      mode3 && await AsyncStorage.setItem('mode3',mode3);
      mode4 && await AsyncStorage.setItem('mode4',mode4);
      show && await AsyncStorage.setItem('show',show);
      show2 && await AsyncStorage.setItem('show2',show2);
      show3 && await AsyncStorage.setItem('show3',show3);
      show4 && await AsyncStorage.setItem('show4',show4);
      
      navigation.navigate("Parametre Physio");
      
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try { 
      setSelectedhemo(await AsyncStorage.getItem('selectedhemo'));   
      setSelectedcrp(await AsyncStorage.getItem('selectedcrp'));   
      setSelectedglucose(await AsyncStorage.getItem('selectedglucose'));    
      setSelectedurea(await AsyncStorage.getItem('selectedurea'));   
      setSelectedcrea(await AsyncStorage.getItem('selectedcrea'));   
      setSelectedlipi(await AsyncStorage.getItem('selectedlipi'));   
      setSelectedgot(await AsyncStorage.getItem('selectedgot'));   
      setSelectedggt(await AsyncStorage.getItem('selectedggt'));   
      setSelectedgpt(await AsyncStorage.getItem('selectedgpt'));   
      setSelectedvit(await AsyncStorage.getItem('selectedvit'));   
      setSelectedtsh(await AsyncStorage.getItem('selectedtsh'));   

      setChecked(await AsyncStorage.getItem('checked'));   
      setCheckedHb(await AsyncStorage.getItem('checkedHb'));   
      setChecked2(await AsyncStorage.getItem('checked2'));   
      setChecked3(await AsyncStorage.getItem('checked3'));   
      setChecked4(await AsyncStorage.getItem('checked4'));   
      
      setDate(await AsyncStorage.getItem('date'));   
      setDate2(await AsyncStorage.getItem('date2'));   
      setDate3(await AsyncStorage.getItem('date3'));   
      setDate4(await AsyncStorage.getItem('date4'));   
      setMode(await AsyncStorage.getItem('mode'));   
      setMode2(await AsyncStorage.getItem('mode2'));    
      setMode3(await AsyncStorage.getItem('mode3'));   
      setMode4(await AsyncStorage.getItem('mode4'));   
      setShow(await AsyncStorage.getItem('show'));   
      setShow2(await AsyncStorage.getItem('show2'));   
      setShow3(await AsyncStorage.getItem('show3')); 
      setShow4(await AsyncStorage.getItem('show4'));  
      
      onChangeText_date(await AsyncStorage.getItem('date'));
      onChangeText_where(await AsyncStorage.getItem('where'));
      onChangeText_where2(await AsyncStorage.getItem('where2'));
      onChangeText_where3(await AsyncStorage.getItem('where3'));
      onChangeText_start(await AsyncStorage.getItem('start'));
      onChangeText_start2(await AsyncStorage.getItem('start2'));
      onChangeText_start3(await AsyncStorage.getItem('start3'));
        
    }
    catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getChapterInfos().then(()=>{
      setDataIsReady(true);
    });
  },[])

  const toggleDropdownHb = () => {
    setVisibleHb(!visibleHb);
  };
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
  const renderDropdownHb = () => {
    if (visibleHb) {
    return (
      <View>
          <Text style={styles.label}>When?</Text>
          <View style={styles.chooseDate}>
            <Button color="#BBBBBB" onPress={showDatepicker} title="Choose" />
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
          <View style={styles.dropdown}>
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
      </View>
    );
  }
  };
  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>Have you done a glucose challenge test ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checkedHb === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedHb('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checkedHb === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedHb('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
           {(checkedHb==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdownHb}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your glucose challenge test.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdownHb()}
            
            </TouchableOpacity>  
          </View>
        }  
        {/*glycemie a jeun*/}
        <Text style={styles.label}>What are your blood sugar levels (on a empty stomach) ?</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedglucose}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedglucose(itemValue)
            }
            mode='dropdown'>
            <Picker.Item label="99mg/dL or lower" value="normal" />
            <Picker.Item label="100 to 125mg/dL" value="prediabetes" />
            <Picker.Item label="126mg/dL or higher" value="diabetes" />
          </Picker>
          </View>
          <Text style={styles.label}>What are your glucose test results?</Text>
          <View style={styles.dropdown}>
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
          </View>
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
            style={{...styles.input,borderColor:borderColorInputStart}}
            onFocus={() => {
              setBorderColorInputStart("cyan");
            }}
            onBlur={() => {
              setBorderColorInputStart("#BBBBBB");
            }}
            onChangeText={onChangeText_start}
            value={start}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputWhere}}
            onFocus={() => {
              setBorderColorInputWhere("cyan");
            }}
            onBlur={() => {
              setBorderColorInputWhere("#BBBBBB");
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
            style={{...styles.input,borderColor:borderColorInputStart2}}
            onFocus={() => {
              setBorderColorInputStart2("cyan");
            }}
            onBlur={() => {
              setBorderColorInputStart2("#BBBBBB");
            }}
            onChangeText={onChangeText_start2}
            value={start2}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputWhere2}}
            onFocus={() => {
              setBorderColorInputWhere2("cyan");
            }}
            onBlur={() => {
              setBorderColorInputWhere2("#BBBBBB");
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
            style={{...styles.input,borderColor:borderColorInputWhen}}
            onFocus={() => {
              setBorderColorInputWhen("cyan");
            }}
            onBlur={() => {
              setBorderColorInputWhen("#BBBBBB");
            }}
            onChangeText={onChangeText_start3}
            value={start3}
            placeholder="Start of pain"
            keyboardType="default"
          />
          <Text style={styles.label}>Where?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputWhere3}}
            onFocus={() => {
              setBorderColorInputWhere3("cyan");
            }}
            onBlur={() => {
              setBorderColorInputWhere3("#BBBBBB");
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
    <View style={styles.logoPart}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>
    {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      :
      <ScrollView style={styles.scrollView}>
        <View style={styles.arrows}>
          <Text  style = {styles.headerText}>Paraclinical data - based on the last three months : </Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 6")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("Parametre Physio")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
       <View style = {styles.barre}></View>
          <Text style={styles.label}>List analysis</Text>
          <Text style={styles.label}>Complete hemoleucogram</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>CRP</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>Urea</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>Creatinine</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>Full lipidogram</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>GOT</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>GPT</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>GGT</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>VIT D3</Text>
          <View style={styles.dropdown}>
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
          </View>
          <Text style={styles.label}>TSH</Text>
          <View style={styles.dropdown}>
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
          </View>

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
          
          {/*seulement pour les diabetiques*/}

           <Text style={styles.label}>Are you diabetic ?</Text>
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
                <Text style={styles.titledrop}>Tell us more about your diabetis:</Text>
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

          <Text style={styles.label}>For back pain: have you had an abdominal ultrasound ?</Text>
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

          <Text style={styles.label}>Have you had ECG ?</Text>
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
      <View style={{margin:5}}>
        <Button title="Submit" onPress={submitChapter7} color="#4bcbd6"/>
      </View>
      </ScrollView>
    }
    </SafeAreaView>
  );
}

export {Chapter7};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
  },
  drop:{
    display:'flex',
    flexDirection:'row'
  },
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
  },
  titledrop:{
    flex:1,
    paddingRight:10,
    fontSize: 16,
    color: '#18acb9',
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
  arrows:{
    flexDirection:'row',
    alignItems:'center',
  },
  headerText: {
    width:"75%",
    fontSize: 18,
    color: '#18acb9',
    marginTop : 20,
    margin: 12,
    fontFamily:"Montserrat_700Bold"
  },
  headerText2: {
    fontSize: 16,
    color: 'white',
    margin: 12,
    fontFamily:"Montserrat_400Regular"
  },
  label: {
    fontSize: 16,
    color: '#18acb9',
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
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  dropdown:{
    borderWidth:1,
    borderRadius:6,
    borderColor: '#BBBBBB',
  }
});
