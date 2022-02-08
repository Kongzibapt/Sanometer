import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
//import Checkbox from 'expo-checkbox';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Chapter7 = function() {

  const [analysis, onChangeText1] = react.useState(null);
  const [selectederace, setSelectedanalysis] = react.useState();

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
        <Text  style = {styles.headerText}>Your paraclinical data : inferior to 3 months : </Text>
        <Text style={styles.label}>List analysis</Text>
        <Picker
          selectedValue={selectederace}
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
  names:{
    display:'flex',
    flexDirection:'row'
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
