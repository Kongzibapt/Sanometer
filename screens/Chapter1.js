import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Chapter1 = function() {
  
  const [lastname, onChangeText1] = react.useState(null);
  const [firstname, onChangeText2] = react.useState(null);
  const [birthdate, onChangeText3] = react.useState(null);
  const [country, onChangeText4] = react.useState(null);
  const [birthcountry, onChangeText5] = react.useState(null);
  const [birthtown, onChangeText6] = react.useState(null);
  const [value, setValue] = react.useState(0);
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [selectedgeo, setSelectedgeo] = react.useState();
  const [selectededuc, setSelectededuc] = react.useState();
  const [selectederace, setSelectederace] = react.useState();
  const [selectedarea, setSelectedarea] = react.useState();
  const [borderColorInputLastName,setBorderColorInputLastName] = react.useState("black");
  const [borderColorInputFirstName,setBorderColorInputFirstName] = react.useState("black");
  const [borderColorInputBirthDate,setBorderColorInputBirthDate] = react.useState("black");
  const [borderColorInputBirthPlace,setBorderColorInputBirthPlace] = react.useState("black");
  const [borderColorInputBirthTown,setBorderColorInputBirthTown] = react.useState("black");
  const [borderColorInputCountry,setBorderColorInputCountry] = react.useState("black");
  const [date, setDate] = react.useState(new Date());
  const [mode, setMode] = react.useState('date');
  const [show, setShow] = react.useState(false);

  const submitChapter1 = async () => {
    try {     
      await AsyncStorage.setItem('lastname',lastname);
  }
  catch (error) {
      console.log(error)
  }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Enter your personal data : </Text>
        <View style={styles.names}>
          <View style={styles.firstname}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputFirstName}}
              onFocus={() => {
                setBorderColorInputFirstName("cyan");
              }}
              onBlur={() => {
                setBorderColorInputFirstName("black");
              }}
              onChangeText={onChangeText2}
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
              setBorderColorInputLastName("black");
            }}
            onChangeText={onChangeText1}
            value={lastname}
            placeholder="Your lastname"
            keyboardType="default"
          />
          </View>
          
        </View>
        <Text style={styles.label}>Birth Date</Text>
        <View style={styles.chooseDate}>
          <Button color="black" onPress={showDatepicker} title="Choose" />
        </View>
        {show && (<DateTimePicker
          testID="dateTimePicker"
          value={date}
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
           setBorderColorInputBirthPlace("black");
         }}
          onChangeText={onChangeText5}
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
          setBorderColorInputBirthTown("black");
        }}
          onChangeText={onChangeText6}
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
              status={ checked === 'male' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('male')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Female</Text>
            <RadioButton
              value="female"
              status={ checked === 'female' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('female')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Neutral</Text>
            <RadioButton
              value="neutral"
              status={ checked === 'neutral' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('neutral')}
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
            setBorderColorInputCountry("black");
          }}
          onChangeText={onChangeText4}
          value={country}
          placeholder="Your country of residence"
          keyboardType="default"
        />


        <Text style={styles.label}>Race</Text>
        <Picker
          selectedValue={selectederace}
          onValueChange={(itemValue, itemIndex) =>
            setSelectederace(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="White" value="white" />
          <Picker.Item label="Black" value="black" />
          <Picker.Item label="Asian" value="asian" />
          <Picker.Item label="Metis" value="metis" />
          <Picker.Item label="Ethnicity" value="ethnicity" />
        </Picker>

        <Text style={styles.label}>Geographical form</Text>
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

        <Text style={styles.label}>Urban area</Text>
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
            value={value}
            onValueChange={setValue}
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
                color={'#fbe31c'}
              />
              ),
            }}
          />
          <Text style={{ paddingTop: 10 }}>Value: {value}</Text>
        </View>

        <Text style={styles.label}>Major Professional change during the last 5 years</Text>
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
        <Text style={styles.label}>Education</Text>
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
      </ScrollView>
    </SafeAreaView>

    
  );
}

export {Chapter1};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
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
});
