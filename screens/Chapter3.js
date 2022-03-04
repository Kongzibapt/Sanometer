import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { AsyncStorage } from 'react-native';

const Chapter3 = function() {

  const [StandardProgressiveMatrices, onChangeText1] = react.useState(null);
  const [BeckDepressionInventory, onChangeText2] = react.useState(null);
  const [SPM, setSPM] = react.useState('');
  const [BDI, setBDI] = react.useState('');
  const [visible1, setVisible1] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [borderColorInput,setBorderColorInput] = react.useState("black");

  const submitChapter3 = async () => {
    try {     
      await AsyncStorage.setItem('StandardProgressiveMatrices',StandardProgressiveMatrices);
      await AsyncStorage.setItem('BeckDepressionInventory',BeckDepressionInventory);
      await AsyncStorage.setItem('SPM',SPM);
      await AsyncStorage.setItem('BDI',BDI);
      await AsyncStorage.setItem('visible1',visible1);
      await AsyncStorage.setItem('visible2',visible2);
      await AsyncStorage.setItem('borderColorInput',borderColorInput);
    }
    catch (error) {
      console.log(error)
    }
  }

  const getChapterInfos = async() => {
    try {
      setStandardProgressiveMatrices(await AsyncStorage.getItem('StandardProgressiveMatrices'));
      setBeckDepressionInventory(await AsyncStorage.getItem('BeckDepressionInventory'));
      setSPM(await AsyncStorage.getItem('SPM'));
      setBDI(await AsyncStorage.getItem('BDI'));
      setBeckDepressionInventoryt(await AsyncStorage.getItem('BeckDepressionInventory'));
      setVisible1(await AsyncStorage.getItem('visible1'));
      setVisible2(await AsyncStorage.getItem('visible2'));
      setBorderColorInput(await AsyncStorage.getItem('borderColorInput'));
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

  const toggleDropdown1 = () => {
    setVisible1(!visible1);
  };

  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };

  const renderDropdown1 = () => {
    if (visible1) {
      return (
        <View>
          <Text style={styles.label}>What was your result ? (number between 0 and 63)</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            style={styles.input}
            onChangeText={onChangeText1}
            value={StandardProgressiveMatrices}
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
          <Text style={styles.label}>What was your result ? (number between 0 and 63) </Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            style={styles.input}
            onChangeText={onChangeText2}
            value={BeckDepressionInventory}
            placeholder="Your result"
            keyboardType="default"
          />
        </View>
      );
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style = {styles.headerText}>Psychological data : </Text>
        <Text style={styles.label}>Did you do the Standard Progressive Matrices Test ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ SPM === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setSPM('yes')}
              />
            </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ SPM === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setSPM('no')}
            />
          </View>
        </View>
        {(SPM==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown1}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about the spm test.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown1()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Did you do the Beck Depression Inventory (Second Edition) test ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ BDI === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setBDI('yes')}
              />
            </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ BDI === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setBDI('no')}
            />
          </View>
        </View>
        {( BDI ==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about the BDI test.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
          </View>
        }
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter1} color="#4bcbd6"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter3};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
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
    fontFamily:"Montserrat_400Regular"
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
  paragraph : {
    fontFamily:"Montserrat_400Regular"
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
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
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
