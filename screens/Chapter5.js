import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import Checkbox from 'expo-checkbox';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Chapter5 = function() {
  const [height, onChangeText1] = react.useState(null);
  const [weight, onChangeText2] = react.useState(null);
  const [abdominal_param, onChangeText3] = react.useState(null);
  const [thigh_perim, onChangeText4] = react.useState(null);
  const [ankle_perim, onChangeText5] = react.useState(null);
  const [pressure, onChangeText6] = react.useState(null);
  const [pulse, onChangeText7] = react.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Enter your personal data : </Text>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={height}
          placeholder="Your height"
          keyboardType="default"
        />
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={weight}
          placeholder="Your weight"
          keyboardType="default"
        />
        <Text style={styles.label}>Abdominal parameter</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={abdominal_param}
          placeholder="Your abdominal parameter"
          keyboardType="default"
        />
        <Text style={styles.label}>Thigh perimeter</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText4}
          value={thigh_perim}
          placeholder="Your thigh perimeter"
          keyboardType="default"
        />
        <Text style={styles.label}>Ankle perimeter</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText5}
          value={ankle_perim}
          placeholder="Your ankle perimeter"
          keyboardType="default"
        />
        <Text style={styles.label}>Pressure</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText6}
          value={pressure}
          placeholder="Your pressure"
          keyboardType="default"
        />
        <Text style={styles.label}>Pulse</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText7}
          value={pulse}
          placeholder="Your pulse"
          keyboardType="default"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter5};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  input: {
    height: 40,
    margin: 12,
    
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white'
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginTop : 50,
    margin: 12,
  },
  headerText2: {
    fontSize: 16,
    color: 'white',
 
    margin: 12,
  },
  label: {
    fontSize: 16,
    color: 'cyan',
  
    margin: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
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
  },
  scrollView: {
    backgroundColor: '#18acb9',
    marginHorizontal: 20,
  },
});
