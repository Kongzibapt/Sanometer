import { StatusBar } from 'expo-status-bar';
import react, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Dropdown from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const Chapter7 = function() {

  const [analysis, onChangeText1] = react.useState(null);
  const [selectederace, setSelectedanalysis] = react.useState();
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

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
