import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Chapter6 = function() {
  
  const [selectedperim, setSelectedperim] = react.useState();
  const [selectedslope, setSelectedslope] = react.useState();
  const [selectedfreq, setSelectedfreq] = react.useState();
  const [selectedfreq2, setSelectedfreq2] = react.useState();
  const [selectedcaloric, setSelectedcaloric] = react.useState();
  const [selectedsport, setSelectedsport] = react.useState();
  const [energy, onChangeText2] = react.useState(null);
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [checked5, setChecked5] = react.useState('');
  const [checked6, setChecked6] = react.useState('');
  const [checked7, setChecked7] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [visible3, setVisible3] = react.useState(false);
  const [visible4, setVisible4] = react.useState(false);
  const [visible5, setVisible5] = react.useState(false);
  const [visible6, setVisible6] = react.useState(false);
  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [period, onChangeText_period] = react.useState(null);
  const [amount, onChangeText_amount] = react.useState(null);
  const [frequency, onChangeText_frequency] = react.useState(null);
  const [method, onChangeText_method] = react.useState(null);
  const [age, onChangeText_age] = react.useState(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };
  const toggleDropdown3 = () => {
    setVisible3(!visible3);
  };
  const toggleDropdown4 = () => {
    setVisible4(!visible4);
  };
  const toggleDropdown5 = () => {
    setVisible5(!visible5);
  };
  const toggleDropdown6 = () => {
    setVisible6(!visible6);
  };
  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>Period:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_period}
            value={period}
            placeholder="Your period"
            keyboardType="default"
          />
          <Text style={styles.label}>Amount per day:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_amount}
            value={amount}
            placeholder="Your amount"
            keyboardType="default"
          />
          <Text style={styles.label}>Electronic cigarette ?</Text>
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
      </View>

    );
  }
};
  const renderDropdown2 = () => {
    if (visible2) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_frequency}
            value={frequency}
            placeholder="Your frequency"
            keyboardType="default"
          />
          <Text style={styles.label}>Administration method:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_method}
            value={method}
            placeholder="Your administration method"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdown3 = () => {
    if (visible3) {
    return (
      <View>
          <Text style={styles.label}>From what age:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput("black");
            }}
            onChangeText={onChangeText_age}
            value={age}
            placeholder="Your age"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdown4 = () => {
    if (visible4) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <Picker
          selectedValue={selectedfreq}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
      </View>
    );
  }
  };
  const renderDropdown5 = () => {
    if (visible5) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <Picker
          selectedValue={selectedfreq2}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq2(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 glass per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
      </View>
    );
  }
  };
  const renderDropdown6 = () => {
    if (visible6) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <Picker
          selectedValue={selectedfreq2}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq2(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 glass per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
      </View>
    );
  }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text  style = {styles.headerText}>Enter your data about your life style: </Text>
        <Text  style = {styles.label}>Tolerance to the effort: </Text>
        <Text style={styles.label}>Walking perimeter (flat):</Text>
        <Picker
          selectedValue={selectedperim}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedperim(itemValue)
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
            setSelectedslope(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 10min" value="<10min" />
          <Picker.Item label="10-30min" value="10-30min" />
          <Picker.Item label="> 30min" value=">30min" />
        </Picker>
        <Text style={styles.label}>Diet:</Text>
        <Picker
          selectedValue={selectedslope}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Vegetarian" value="vegetarian" />
          <Picker.Item label="Vegan" value="vegan" />
          <Picker.Item label="Normal" value="normal" />
        </Picker>
        <Text style={styles.label}>Caloric intake</Text>
        <Picker
          selectedValue={selectedcaloric}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedcaloric(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 2000 calories" value="<2000cal" />
          <Picker.Item label="Between 2000 and 3000 calories" value="2000-3000cal" />
          <Picker.Item label="> 3000 calories" value=">3000cal" />
        </Picker>
        <Text style={styles.label}>The quality of the food:</Text>
        <Picker
          selectedValue={selectedslope}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Restaurant/delivery" value="Restaurant/delivery" />
          <Picker.Item label="Cooked at home" value="Cooked_at_home" />
          <Picker.Item label="Fastfood" value="Fastfood" />
        </Picker>
        <Text style={styles.label}>Risk factors:</Text>
        <Text style={styles.label}>Do you smoke ?</Text>
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
                <Text style={styles.titledrop}>Fill in your info about smoking.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take drugs ?</Text>
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
          {(checked3==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about drugs.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take alcohol ?</Text>
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
          {(checked4==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown3}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about alcohol.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown3()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take beer ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked5 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked5('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked5 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked5('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
          {(checked5==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown4}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about beer.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown4()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take wine ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked6 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked6('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked6 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked6('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
          {(checked6==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown5}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about wine.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown5()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take hard alcohol ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked7 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked7('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked7 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked7('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
          {(checked7==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown6}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about hard alcohol.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown6()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Sports:</Text>
        <Picker
          selectedValue={selectedsport}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedsport(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Basketball" value="basketball" />
          <Picker.Item label="Running" value="running" />
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
