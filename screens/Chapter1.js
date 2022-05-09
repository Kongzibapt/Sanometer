import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Chapter1 = function({navigation}) {

  const [dataIsReady,setDataIsReady] = react.useState(false);
  
  const [lastname, setLastname] = react.useState("");
  const [firstname, setFirstname] = react.useState("");
  const [birthdate, setBirthdate] = react.useState(new Date());
  const [birthcountry, setBirthcountry] = react.useState("");
  const [birthtown, setBirthtown] = react.useState("");
  const [country, setCountry] = react.useState("");
  const [sex, setSex] = react.useState("");
  const [selectedgeo, setSelectedgeo] = react.useState();
  const [selectedrace, setSelectedrace] = react.useState();
  const [selectedarea, setSelectedarea] = react.useState();
  const [physicalEffort, setPhysicalEffort] = react.useState(0);
  const [professionalChange, setProfessionalChange] = react.useState("");
  const [selectededuc, setSelectededuc] = react.useState("");

  // Style
  const [borderColorInputLastName,setBorderColorInputLastName] = react.useState("#BBBBBB");
  const [borderColorInputFirstName,setBorderColorInputFirstName] = react.useState("#BBBBBB");
  const [borderColorInputBirthPlace,setBorderColorInputBirthPlace] = react.useState("#BBBBBB");
  const [borderColorInputBirthTown,setBorderColorInputBirthTown] = react.useState("#BBBBBB");
  const [borderColorInputCountry,setBorderColorInputCountry] = react.useState("#BBBBBB");
  const [mode, setMode] = react.useState('date');
  const [show, setShow] = react.useState(false);

  const submitChapter1 = async () => {
    try {     
      lastname && await AsyncStorage.setItem('lastname',lastname);
      firstname && await AsyncStorage.setItem('firstname',firstname);
      birthdate && await AsyncStorage.setItem('birthdate',birthdate.toString());
      birthcountry && await AsyncStorage.setItem('birthcountry',birthcountry);
      birthtown && await AsyncStorage.setItem('birthtown',birthtown);
      sex && await AsyncStorage.setItem('sex',sex);
      country && await AsyncStorage.setItem('country',country);
      selectedrace && await AsyncStorage.setItem('selectedrace',selectedrace);
      selectedgeo && await AsyncStorage.setItem('selectedgeo',selectedgeo);
      selectedarea && await AsyncStorage.setItem('selectedarea',selectedarea);
      physicalEffort && await AsyncStorage.setItem('physicalEffort',physicalEffort.toString());
      professionalChange && await AsyncStorage.setItem('professionalChange',professionalChange);
      selectededuc && await AsyncStorage.setItem('selectededuc',selectededuc);
      navigation.navigate("Chapter 2");
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {     
        setLastname(await AsyncStorage.getItem('lastname'));
        setFirstname(await AsyncStorage.getItem('firstname'));
        setBirthdate(new Date(await AsyncStorage.getItem('birthdate')));
        setBirthcountry(await AsyncStorage.getItem('birthcountry'));
        setBirthtown(await AsyncStorage.getItem('birthtown'));
        setSex(await AsyncStorage.getItem('sex'));
        setCountry(await AsyncStorage.getItem('country'));
        setSelectedrace(await AsyncStorage.getItem('selectedrace'));
        setSelectedgeo(await AsyncStorage.getItem('selectgeo'));
        setSelectedarea(await AsyncStorage.getItem('selectedarea'));
        const pEff = await AsyncStorage.getItem('physicalEffort');
        {pEff !== null ? setPhysicalEffort(parseInt(pEff)) : null};
        setProfessionalChange(await AsyncStorage.getItem('professionalChange'));
        setSelectededuc(await AsyncStorage.getItem('selectededuc'));
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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
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
        <Text  style = {styles.headerText}>Personal data</Text>
        <Text style = {styles.barre}>__________________________________________________</Text>
        <View style={styles.names}>
          <View style={styles.firstname}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputFirstName}}
              onFocus={() => {
                setBorderColorInputFirstName("cyan");
              }}
              onBlur={() => {
                setBorderColorInputFirstName('#BBBBBB');
              }}
              onChangeText={setFirstname}
              value={firstname}
              placeholder="Your firstname"
              keyboardType="default"
            />
          </View>
          <View style={styles.lastname}>
            <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputLastName}}
            onFocus={() => {
              setBorderColorInputLastName("cyan");
            }}
            onBlur={() => {
              setBorderColorInputLastName('#BBBBBB');
            }}
            onChangeText={setLastname}
            value={lastname}
            placeholder="Your lastname"
            keyboardType="default"
          />
          </View>
          
        </View>
        <Text style={styles.label}>Birth Date</Text>
        <View style={styles.chooseDate}>
          {birthdate !== null ? <Button color='#BBBBBB' onPress={showDatepicker} title={birthdate.toLocaleDateString()} /> : <Button color="black" onPress={showDatepicker} title={"Choisir"} />}
        </View>
        {show && (<DateTimePicker
          testID="dateTimePicker"
          value={birthdate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />)}
        <Text style={styles.label}>Birth place</Text>
        <TextInput
         style={{...styles.input,borderColor:borderColorInputBirthPlace}}
         onFocus={() => {
           setBorderColorInputBirthPlace("cyan");
         }}
         onBlur={() => {
           setBorderColorInputBirthPlace('#BBBBBB');
         }}
          onChangeText={setBirthcountry}
          value={birthcountry}
          placeholder="Country"
          keyboardType="default"
        />
        <TextInput
         style={{...styles.input,borderColor:borderColorInputBirthTown}}
         onFocus={() => {
          setBorderColorInputBirthTown("cyan");
        }}
        onBlur={() => {
          setBorderColorInputBirthTown('#BBBBBB');
        }}
          onChangeText={setBirthtown}
          value={birthtown}
          placeholder="Town"
          keyboardType="default"
        />

        <Text style={styles.label}>Sex</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Male</Text>
            <RadioButton
              value="male"
              status={ sex === 'male' ? 'checked' : 'unchecked' }
              onPress={() => setSex('male')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Female</Text>
            <RadioButton
              value="female"
              status={ sex === 'female' ? 'checked' : 'unchecked' }
              onPress={() => setSex('female')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Neutral</Text>
            <RadioButton
              value="neutral"
              status={ sex === 'neutral' ? 'checked' : 'unchecked' }
              onPress={() => setSex('neutral')}
            /> 
          </View>

        </View>

        <Text style={styles.label}>Your country of residence</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputCountry}}
          onFocus={() => {
            setBorderColorInputCountry("cyan");
          }}
          onBlur={() => {
            setBorderColorInputCountry('#BBBBBB');
          }}
          onChangeText={setCountry}
          value={country}
          placeholder="Your country of residence"
          keyboardType="default"
        />


        <Text style={styles.label}>Ethnicity</Text>
        <Picker
          selectedValue={selectedrace}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedrace(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Caucasian" value="white" />
          <Picker.Item label="African" value="black" />
          <Picker.Item label="Asian" value="asian" />
          {/* <Picker.Item label="Metis" value="metis" /> */}
          <Picker.Item label="Others" value="ethnicity" />
        </Picker>

        <Text style={styles.label}>Geographical location</Text>
        <Picker
          selectedValue={selectedgeo}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedgeo(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Plane" value="plane" />
          <Picker.Item label="Hill" value="hill" />
          <Picker.Item label="Mountain" value="mountain" />
          <Picker.Item label="Sea" value="sea" />
          <Picker.Item label="I'm not sure" value="" />
        </Picker>

        <Text style={styles.label}>Population</Text>
        <Picker
          selectedValue={selectedarea}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedarea(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Below 100.000" value="below" />
          <Picker.Item label="100.01 - 1.000.000" value="equal" />
          <Picker.Item label="Above 1.000.000" value="above" />
        </Picker>

        <Text style={styles.label}>Physical effort related to your job</Text>
        <View style={[styles.contentView]}>
          <Slider
            value={physicalEffort}
            onValueChange={setPhysicalEffort}
            maximumValue={10}
            minimumValue={0}
            step={1}
            allowTouchTrack
            trackStyle={{ height: 5, backgroundColor: 'transparent' }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
            thumbProps={{
              children: (
                <Icon
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={'#18acb9'}
              />
              ),
            }}
          />
          <Text style={{ paddingTop: 10 }}>Value: {physicalEffort}</Text>
        </View>

        <Text style={styles.label}>Any major Professional change?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ professionalChange === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setProfessionalChange('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ professionalChange === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setProfessionalChange('no')}
            />
          </View>
        </View>
        <Text style={styles.label}>Education level</Text>
        <Picker
          selectedValue={selectededuc}
          onValueChange={(itemValue, itemIndex) =>
            setSelectededuc(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Below highschool" value="below" />
          <Picker.Item label="High school" value="high_school" />
          <Picker.Item label="Professional school" value="professional_school" />
          <Picker.Item label="Bachelor" value="bachelor" />
          <Picker.Item label="Master Phd" value="master_phd" />
        </Picker>
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter1} color="#4bcbd6"/>
        </View>
        <View style={{margin:5}}>
          <Button title="Home" onPress={() => navigation.navigate("Home")} color="#4bcbd6"/>
        </View>
      </ScrollView>
      }
    </SafeAreaView>

    
  );
}

export {Chapter1};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
    display:'flex',
    justifyContent:'center'
  },
  logoPart:{
    padding:"8%"
  },
  names:{
    display:'flex',
    flexDirection:'row'
  },
  checkboxview:{
    display:'flex',
    flexDirection:'row',
    margin:'auto',
    justifyContent:'center'
  },
  containerbutton:{
    flex:1,
    paddingRight:10
  },
  firstname:{
    flex:1,
    paddingRight:10
  },
  lastname:{
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
    borderRadius:5,
    color: 'black'
  },
  chooseDate: {
    width:"50%"
  },
  headerText: {
    fontSize: 18,
    color: '#18acb9',
    marginTop : 50,
    margin: 12,
    fontFamily:"Montserrat_700Bold"
  },
  barre:{
    color: '#BBBBBB'
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
});
