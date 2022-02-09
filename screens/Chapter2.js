import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Switch, Button} from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import SelectMultiple from 'react-native-select-multiple'
import { VirtualizedList } from 'react-native-web';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';



const Chapter2 = function() {
  
  const [medications_food, onChangeText_medications_food] = react.useState(null);
  const [medications_drugs, onChangeText_medications_drugs] = react.useState(null);
  const [medications_seasonal, onChangeText_medications_seasonal] = react.useState(null);
  const [medications_others, onChangeText_medications_others] = react.useState(null);

  const [allergies_food, onChangeText_allergies_food] = react.useState(null);
  const [allergies_drugs, onChangeText_allergies_drugs] = react.useState(null);
  const [allergies_seasonal, onChangeText_allergies_seasonal] = react.useState(null);
  const [allergies_others, onChangeText_allergies_others] = react.useState(null);

  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [checked_allergies, setChecked_allergies] = react.useState('');
  const [visible, setVisible] = react.useState(false);

  const [checked_chro, setChecked_chro] = react.useState('');

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const [isEnabled_food, setIsEnabled_food] = react.useState(false);
  const toggleSwitch_food = () => setIsEnabled_food(previousState => !previousState);

  const [isEnabled_drugs, setIsEnabled_drugs] = react.useState(false);
  const toggleSwitch_drugs = () => setIsEnabled_drugs(previousState => !previousState);
  const [isEnabled_seasonal, setIsEnabled_seasonal] = react.useState(false);
  const toggleSwitch_seasonal = () => setIsEnabled_seasonal(previousState => !previousState);
  const [isEnabled_others, setIsEnabled_others] = react.useState(false);
  const toggleSwitch_others = () => setIsEnabled_others(previousState => !previousState);


  const [trigger, onChangeText_trigger] = react.useState(null);
  const [checked_hospit, setChecked_hospit] = react.useState('');

  const [checked_pb, setChecked_pb] = react.useState('');

  const [date, setDate] = react.useState(new Date());
  const [mode, setMode] = react.useState('date');
  const [show, setShow] = react.useState(false);

  const [checked_vax, setChecked_vax] = react.useState('');
  const [isEnabled_vax1, setIsEnabled_vax1] = react.useState(false);
  const toggleSwitch_vax1 = () => setIsEnabled_vax1(previousState => !previousState);

  const [isEnabled_vax2, setIsEnabled_vax2] = react.useState(false);
  const toggleSwitch_vax2 = () => setIsEnabled_vax2(previousState => !previousState);

  const [isEnabled_vax3, setIsEnabled_vax3] = react.useState(false);
  const toggleSwitch_vax3 = () => setIsEnabled_vax3(previousState => !previousState);
  const [isEnabled_vax4, setIsEnabled_vax4] = react.useState(false);
  const toggleSwitch_vax4 = () => setIsEnabled_vax4(previousState => !previousState);
  const [isEnabled_vax5, setIsEnabled_vax5] = react.useState(false);
  const toggleSwitch_vax5 = () => setIsEnabled_vax5(previousState => !previousState);
  const [isEnabled_vax6, setIsEnabled_vax6] = react.useState(false);
  const toggleSwitch_vax6 = () => setIsEnabled_vax6(previousState => !previousState);
  const [isEnabled_vax7, setIsEnabled_vax7] = react.useState(false);
  const toggleSwitch_vax7 = () => setIsEnabled_vax7(previousState => !previousState);
  const [isEnabled_vax8, setIsEnabled_vax8] = react.useState(false);
  const toggleSwitch_vax8 = () => setIsEnabled_vax8(previousState => !previousState);
  const [isEnabled_vax9, setIsEnabled_vax9] = react.useState(false);
  const toggleSwitch_vax9 = () => setIsEnabled_vax9(previousState => !previousState);
  const [isEnabled_vax10, setIsEnabled_vax10] = react.useState(false);
  const toggleSwitch_vax10 = () => setIsEnabled_vax10(previousState => !previousState);
  const [isEnabled_vax11, setIsEnabled_vax11] = react.useState(false);
  const toggleSwitch_vax11 = () => setIsEnabled_vax11(previousState => !previousState);

  const [isEnabled_cancer, setIsEnabled_cancer] = react.useState(false);
  const toggleSwitch_cancer = () => setIsEnabled_cancer(previousState => !previousState);
  const [loc_cancer, onChangeText_loc] = react.useState(null);
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

  const [date2, setDate2] = react.useState(new Date())
  const [open2, setOpen2] = react.useState(false)

  const renderDropdown = () => {
    if (visible) {
      return (
        <View>
          <View style={styles.switchbox}>
            <Text style={styles.label}> Food </Text>
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_food ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_food}
                value={isEnabled_food}
              />
            </View>
          </View>
          {isEnabled_food && 
            <View style={styles.container}>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInput}}
                onFocus={() => {
                  setBorderColorInput("cyan");
                }}
                onBlur={() => {
                  setBorderColorInput("black");
                }}
                onChangeText={onChangeText_allergies_food}
                value={allergies_food}
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
                onChangeText={onChangeText_medications_food}
                value={medications_food}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }
        
        <View style={styles.switchbox}>
            <Text style={styles.label}> Drugs </Text>
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_drugs ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_drugs}
                value={isEnabled_drugs}
              />
            </View>
          </View>

          {isEnabled_drugs && 
            <View style={styles.container}>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInput}}
                onFocus={() => {
                  setBorderColorInput("cyan");
                }}
                onBlur={() => {
                  setBorderColorInput("black");
                }}
                onChangeText={onChangeText_allergies_drugs}
                value={allergies_drugs}
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
                onChangeText={onChangeText_medications_drugs}
                value={medications_drugs}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }
          <View style={styles.switchbox}>
              <Text style={styles.label}> Seasonal </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_seasonal ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_seasonal}
                  value={isEnabled_seasonal}
                />
              </View>
          </View>
          {isEnabled_seasonal && 
            <View style={styles.container}>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInput}}
                onFocus={() => {
                  setBorderColorInput("cyan");
                }}
                onBlur={() => {
                  setBorderColorInput("black");
                }}
                onChangeText={onChangeText_allergies_seasonal}
                value={allergies_seasonal}
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
                onChangeText={onChangeText_medications_seasonal}
                value={medications_seasonal}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }

  
          <View style={styles.switchbox}>
            <Text style={styles.label}> Others </Text>
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_others ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_others}
                value={isEnabled_others}
              />
            </View>
          </View>
          {isEnabled_others && 
            <View style={styles.container}>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInput}}
                onFocus={() => {
                  setBorderColorInput("cyan");
                }}
                onBlur={() => {
                  setBorderColorInput("black");
                }}
                onChangeText={onChangeText_allergies_others}
                value={allergies_others}
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
                onChangeText={onChangeText_medications_others}
                value={medications_others}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }

          
          <Text style={styles.label}> Edema quincke or anaphylactic shock in antecedent </Text>
          <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_pb === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pb('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_pb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pb('no')}
                />
              </View>
          </View>

          

          {checked_pb=='yes' && 
          
            <View style={styles.container}>
              <Text style={styles.label}>When</Text>
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
              <Text style={styles.label}>Trigger</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInput}}
                onFocus={() => {
                  setBorderColorInput("cyan");
                }}
                onBlur={() => {
                  setBorderColorInput("black");
                }}
                onChangeText={onChangeText_trigger}
                value={trigger}
                placeholder="What was the trigger?"
                keyboardType="default"
              />
              <Text style={styles.label}>Hospitalization </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_hospit === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_hospit('yes')}
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_hospit === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_hospit('no')}
                  />
                </View>
              </View>
            </View>
          }

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

        <Text style={styles.label}>Do you have any vaccines ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_vax === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_vax('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_vax === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_vax('no')}
            />
          </View>
        </View>

        {(checked_vax==="yes") && 
          <View style={styles.container}>
            <View style={styles.switchbox}>
              <Text style={styles.label}> HVB/TB </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax1 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax1}
                  value={isEnabled_vax1}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Diphtheria </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax2 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax2}
                  value={isEnabled_vax2}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Polio </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax3 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax3}
                  value={isEnabled_vax3}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> TETANUS </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax4 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax4}
                  value={isEnabled_vax4}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Pertussis </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax5 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax5}
                  value={isEnabled_vax5}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> RUBELLA </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax6 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax6}
                  value={isEnabled_vax6}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Rujeola </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax7 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax7}
                  value={isEnabled_vax7}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Mumps </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax8 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax8}
                  value={isEnabled_vax8}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Seasonal flu </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax9 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax9}
                  value={isEnabled_vax9}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> Covid 19 </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax10 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax10}
                  value={isEnabled_vax10}
                />
              </View>
            </View>
            <View style={styles.switchbox}>
              <Text style={styles.label}> HPV </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vax11 ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vax11}
                  value={isEnabled_vax11}
                />
              </View>
            </View>
          </View>
        }
        <Text style={styles.label}>Do you have/had any chronical disease ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_chro === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_chro('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_chro === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_chro('no')}
            />
          </View>
        </View>
        {checked_chro=="yes" &&
          <View>

          
            <View style={styles.switchbox}>
              <Text style={styles.label}> Cancer </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_cancer ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_cancer}
                  value={isEnabled_cancer}
                />
              </View>
            </View>
            {isEnabled_cancer &&
            
              <View>

                <Text style={styles.label}>Location</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_loc}
                  value={loc_cancer}
                  placeholder="What was the Location?"
                  keyboardType="default"
                />
              </View>

            }
          </View>
          
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter2};

const styles = StyleSheet.create({
  switchbox:{
    display:'flex',
    flexDirection:'row'
  },
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

