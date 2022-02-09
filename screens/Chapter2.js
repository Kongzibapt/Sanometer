import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';





const Chapter2 = function() {
  const [allergies, onChangeText_allergies] = react.useState(null);
  const [medications, onChangeText_medications] = react.useState(null);
  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [checked_allergies, setChecked_allergies] = react.useState('');

  const [visible, setVisible] = react.useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View>
          <Text style={styles.label}>What are you allergic to ?</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_allergies}
            value={allergies}
            placeholder="Your allergies"
            keyboardType="default"
          />
          <Text style={styles.label}>Medications</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_medications}
            value={medications}
            placeholder="Your medications"
            keyboardType="default"
          />
        </View>


      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text  style = {styles.headerText}>Medical Data : </Text>

        <Text style={styles.label}>Do you have allergies ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_allergies === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_allergies('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_allergies === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_allergies('no')}
            />
          </View>
        </View>

        {(checked_allergies==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your allergies.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown()}
            
            </TouchableOpacity>  
          </View>
        }

      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter2};

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

