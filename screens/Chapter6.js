import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Chapter6 = function() {
  
  const [selectedperim, setSelectedperim] = react.useState();
  const [selectedslope, setSelectedslope] = react.useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Tolerance to the effort: </Text>
        <Text style={styles.label}>Walking perimeter (flat):</Text>
        <Picker
          selectedValue={selectedperim}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 1km" value="<1km" />
          <Picker.Item label="1-4km" value="1-4km" />
          <Picker.Item label="> 4km" value=">4km" />
        </Picker>
        <Text style={styles.label}>Walking in the slope:</Text>
        <Picker
          selectedValue={selectedslope}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 10min" value="<10min" />
          <Picker.Item label="10-30min" value="10-30min" />
          <Picker.Item label="> 30min" value=">30min" />
        </Picker>
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter6};

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
