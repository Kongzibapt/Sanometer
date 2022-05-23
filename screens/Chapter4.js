import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, Image} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { Switch } from 'react-native-elements/dist/switch/switch';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Chapter4 = function({navigation}) {

const [dataIsReady,setDataIsReady] = react.useState(false);
//const sex = route.params.checked_sex;
  const [isTestPerformed, setIsTestPerformed] = react.useState(false);
  const toggleSwitch = () => setIsTestPerformed(previousState => !previousState);
  const [MMSCEIT1, setMMSCEIT1] = react.useState(0);
  const [MMSCEIT2, setMMSCEIT2] = react.useState(0);
  const [MMSCEIT3, setMMSCEIT3] = react.useState(0);
  const [MMSCEIT4, setMMSCEIT4] = react.useState(0);
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checkedc, setCheckedc] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [borderColorInputMM,setBorderColorInputMM] = react.useState("#BBBBBB");
  const [borderColorInputMM2,setBorderColorInputMM2] = react.useState("#BBBBBB");
  const [borderColorInputMM3,setBorderColorInputMM3] = react.useState("#BBBBBB");
  const [borderColorInputMM4,setBorderColorInputMM4] = react.useState("#BBBBBB");
  const [selectedPainLocation, setSelectedPainLocation] = react.useState();
  const [painIntensity, setPainIntensity] = react.useState(0);
  const [painDurationTime, setPainDurationTime] = react.useState();
  const [painDurationSituation, setPainDurationSituation] = react.useState();
  const [medicineTaken, setMedicineTaken] = react.useState();

  const submitChapter4 = async () => {
    try {
      checked && await AsyncStorage.setItem('checked',checked);
      checked2 && await AsyncStorage.setItem('checked2',checked2);
      checkedc && await AsyncStorage.setItem('checkedc',checkedc);
      isTestPerformed && await AsyncStorage.setItem('isTestPerformed',isTestPerformed.toString());
      MMSCEIT1 && await AsyncStorage.setItem('MMSCEIT1',MMSCEIT1.toString());
      MMSCEIT2 && await AsyncStorage.setItem('MMSCEIT2',MMSCEIT2.toString());
      MMSCEIT3 && await AsyncStorage.setItem('MMSCEIT3',MMSCEIT3.toString());
      MMSCEIT4 && await AsyncStorage.setItem('MMSCEIT4',MMSCEIT4.toString());
      selectedPainLocation && await AsyncStorage.setItem('selectedPainLocation',selectedPainLocation);
      painIntensity && await AsyncStorage.setItem('painIntensity',painIntensity.toString());
      painDurationTime && await AsyncStorage.setItem('painDurationTime',painDurationTime);
      painDurationSituation && await AsyncStorage.setItem('painDurationSituation',painDurationSituation);
      medicineTaken && await AsyncStorage.setItem('medicineTaken',medicineTaken);
      navigation.navigate("Chapter 5");

  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {
      setChecked(await AsyncStorage.getItem('checked'));
      setChecked2(await AsyncStorage.getItem('checked2'));
      setCheckedc(await AsyncStorage.getItem('checkedc'));
        setIsTestPerformed(await AsyncStorage.getItem('isTestPerformed')=='true');
        //setMMSCEIT1(await AsyncStorage.getItem('MMSCEIT1'));
        const pEff1 = await AsyncStorage.getItem('MMSCEIT1');
        {pEff1 !== null ? setMMSCEIT1(parseInt(pEff1)) : null};
        //setMMSCEIT2(await AsyncStorage.getItem('MMSCEIT2'));
        const pEff2 = await AsyncStorage.getItem('MMSCEIT2');
        {pEff2 !== null ? setMMSCEIT2(parseInt(pEff2)) : null};
        //setMMSCEIT3(await AsyncStorage.getItem('MMSCEIT3'));
        const pEff3 = await AsyncStorage.getItem('MMSCEIT3');
        {pEff3 !== null ? setMMSCEIT3(parseInt(pEff3)) : null};
        //setMMSCEIT4(await AsyncStorage.getItem('MMSCEIT4'));
        const pEff4 = await AsyncStorage.getItem('MMSCEIT4');
        {pEff4 !== null ? setMMSCEIT4(parseInt(pEff4)) : null};
        setSelectedPainLocation(await AsyncStorage.getItem('selectedPainLocation'));
        //setPainIntensity(await AsyncStorage.getItem('painIntensity'));
        const pEff5 = await AsyncStorage.getItem('painIntensity');
        {pEff5 !== null ? setPainIntensity(parseInt(pEff5)) : null};
        setPainDurationTime(await AsyncStorage.getItem('painDurationTime'));
        setPainDurationSituation(await AsyncStorage.getItem('painDurationSituation'));
        setMedicineTaken(await AsyncStorage.getItem('medicineTaken'));
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


  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };

  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>MMSCEIT perceiving emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputMM}}
            onFocus={() => {
              setBorderColorInputMM("cyan");
            }}
            onBlur={() => {
              setBorderColorInputMM("#BBBBBB");
            }}
            onChangeText={setMMSCEIT1}
            value={MMSCEIT1}
            placeholder="MMSCEIT perceiving emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT using emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputMM2}}
            onFocus={() => {
              setBorderColorInputMM2("cyan");
            }}
            onBlur={() => {
              setBorderColorInputMM2("#BBBBBB");
            }}
            onChangeText={setMMSCEIT2}
            value={MMSCEIT2}
            placeholder="MMSCEIT using emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT understanding emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputMM3}}
            onFocus={() => {
              setBorderColorInputMM3("cyan");
            }}
            onBlur={() => {
              setBorderColorInputMM3("#BBBBBB");
            }}
            onChangeText={setMMSCEIT3}
            value={MMSCEIT3}
            placeholder="MMSCEIT understanding emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT managing emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputMM4}}
            onFocus={() => {
              setBorderColorInputMM4("cyan");
            }}
            onBlur={() => {
              setBorderColorInputMM4("#BBBBBB");
            }}
            onChangeText={setMMSCEIT4}
            value={MMSCEIT4}
            placeholder="MMSCEIT managing emotions score"
            keyboardType="numeric"
          />



      </View>

    );
  }
};

const renderDropdown2 = () => {
  if (visible2) {
  return (
    <View>
        <Text style={styles.label}>Pain location :</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedPainLocation}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPainLocation(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="back" value="back" />
          <Picker.Item label="head" value="head" />
          <Picker.Item label="arm" value="arm" />
          <Picker.Item label="shoulder" value="shoulder" />
          <Picker.Item label="leg" value="leg" />
          <Picker.Item label="stomach" value="stomach" />
          <Picker.Item label="chest" value="chest" />
          <Picker.Item label="feet" value="feet" />
          <Picker.Item label="other" value="other" />
        </Picker>
        </View>

        <Text style={styles.label}>Pain intensity :</Text>
        <Slider
          value={painIntensity}
          onValueChange={setPainIntensity}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
              name="flash"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={'#18acb9'}
            />
            ),
          }}
        />
        <Text style={{ paddingTop: 10 }}>Value: {painIntensity}</Text>

        <Text style={styles.label}>Duration:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={painDurationTime}
          onValueChange={(itemValue, itemIndex) =>
            setPainDurationTime(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="day" value="day" />
          <Picker.Item label="night" value="night" />
          <Picker.Item label="morning" value="morning" />
          <Picker.Item label="evening" value="evening" />
          <Picker.Item label="other" value="other" />
        </Picker>
        </View>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={painDurationSituation}
          onValueChange={(itemValue, itemIndex) =>
            setPainDurationSituation(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="effort" value="effort" />
          <Picker.Item label="rest" value="rest" />
          <Picker.Item label="other" value="other" />
        </Picker>
        </View>
        <Text style={styles.label}>Which medicines cancel the pain :</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={medicineTaken}
          onValueChange={(itemValue, itemIndex) =>
            setMedicineTaken(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="paracetamol" value="paracetamol" />
          <Picker.Item label="algocalmin" value="algocalmin" />
          <Picker.Item label="antinevralgic" value="antinevralgic" />
          <Picker.Item label="tramadol" value="tramadol" />
          <Picker.Item label="codeine" value="codeine" />
          <Picker.Item label="morphine" value="morphine" />
          <Picker.Item label="other" value="other" />
          <Picker.Item label="none" value="none" />
        </Picker>
        </View>


    </View>

  );
}
};

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
          <Text  style = {styles.headerText}>Emotional profile</Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 3")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("Chapter 5")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
      <View style = {styles.barre}></View>
      <Text style={styles.label}>Have you done an MMSCEIT V 2.0 test ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('no')}
              color='cyan'
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
              <Text style={styles.titledrop}>Fill in your MMSCEIT V 2.0 scores.</Text>
              <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
            </View>

            {renderDropdown()}

          </TouchableOpacity>
        </View>
      }

      <Text style={styles.label}>Do you have any back pain ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked2 === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked2('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked2 === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked2('no')}
              color='cyan'
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
              <Text style={styles.titledrop}>Fill in information about your pain.</Text>
              <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
            </View>

            {renderDropdown2()}

          </TouchableOpacity>
        </View>
      }

      <Text style={styles.label}>Do you have chest pain ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checkedc === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setCheckedc('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checkedc === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setCheckedc('no')}
              color='cyan'
            />
          </View>
        </View>

      <View style={{margin:5}}>
        <Button title="Submit" onPress={submitChapter4} color="#4bcbd6"/>
      </View>
      </ScrollView>
    }
    </SafeAreaView>
  );
}

export {Chapter4};

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
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
  },
  drop:{
    display:'flex',
    flexDirection:'row'
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
