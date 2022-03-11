import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { Switch } from 'react-native-elements/dist/switch/switch';
import { useState } from 'react';


const Chapter4 = function() {
  const [isTestPerformed, setIsTestPerformed] = useState(false);
  const toggleSwitch = () => setIsTestPerformed(previousState => !previousState);
  const [MMSCEIT1, setMMSCEIT1] = useState(-1);
  const [MMSCEIT2, setMMSCEIT2] = useState(-1);
  const [MMSCEIT3, setMMSCEIT3] = useState(-1);
  const [MMSCEIT4, setMMSCEIT4] = useState(-1);
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [selectedPainLocation, setSelectedPainLocation] = react.useState();
  const [painIntensity, setPainIntensity] = react.useState(-1);
  const [painDurationTime, setPainDurationTime] = react.useState();
  const [painDurationSituation, setPainDurationSituation] = react.useState();
  const [medicineTaken, setMedicineTaken] = react.useState();


  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const toggleDropdown2 = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>MMSCEIT perceiving emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={setMMSCEIT1}
            value={MMSCEIT1}
            placeholder="MMSCEIT perceiving emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT using emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={setMMSCEIT2}
            value={MMSCEIT2}
            placeholder="MMSCEIT using emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT understanding emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={setMMSCEIT3}
            value={MMSCEIT3}
            placeholder="MMSCEIT understanding emotions score"
            keyboardType="numeric"
          />

          <Text style={styles.label}>MMSCEIT managing emotions score :</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
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
  if (visible) {
  return (
    <View>
        <Text style={styles.label}>Pain location :</Text>
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
              color={'#fbe31c'}
            />
            ),
          }}
        />
        <Text style={{ paddingTop: 10 }}>Value: {painIntensity}</Text>

        <Text style={styles.label}>Duration:</Text>
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

        <Text style={styles.label}>Which medicines cancel the pain :</Text>
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

  );
}
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text  style = {styles.headerText}>Enter your data about your emotional profile: </Text>
      <Text style={styles.label}>Have you performed the MMSCEIT V 2.0 test ?</Text>
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
              <Text style={styles.titledrop}>Fill in your MMSCEIT V 2.0 scores.</Text>
              <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
            </View>

            {renderDropdown()}

          </TouchableOpacity>
        </View>
      }

      <Text style={styles.label}>Do you have pain ?</Text>
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
              <Text style={styles.titledrop}>Fill in information about your pain.</Text>
              <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
            </View>

            {renderDropdown2()}

          </TouchableOpacity>
        </View>
      }
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter4};

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
