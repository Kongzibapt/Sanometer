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
import Checkbox from 'expo-checkbox';


const Chapter2 = function() {

  //Men
  const [checked_toxic, setChecked_toxic] = react.useState('');
  const [checked_sport, setChecked_sport] = react.useState('');
  const [selectedage, setSelectedage] = react.useState();

  //Women 
  const [checked, setChecked] = react.useState('');
  const [checked_menopause, setChecked_menopause] = react.useState('');
  const [checked_hormone, setChecked_hormone] = react.useState('');
  const [checked_birth, setChecked_birth] = react.useState('');
  const [checked_caesarean, setChecked_caesarean] = react.useState('');
  const [checked_abort, setChecked_abort] = react.useState('');
  const [checked_lostpreg, setChecked_lostpreg] = react.useState('');
  const [checked_path, setChecked_path] = react.useState('');
  const [checked_breastpb, setChecked_breastpb] = react.useState('');
  const [checked_inspect, setChecked_inspect] = react.useState('');
  const [isEnabled_gestdiab, setIsEnabled_gestdiab] = react.useState(false);
  const [checked_pregpb, setChecked_pregpb] = react.useState('');
  const toggleSwitch_gestdiab = () => setIsEnabled_gestdiab(previousState => !previousState);
  const [isEnabled_othergestpb, setIsEnabled_othergestpb] = react.useState(false);
  const toggleSwitch_othergestpb = () => setIsEnabled_othergestpb(previousState => !previousState);
  const [checked_consultgyn, setChecked_consultgyn] = react.useState('');
  const [checked_papanicolau, setChecked_papanicolau] = react.useState('');
  const [menopause_date, onChangeText_menopausedate] = react.useState(null);
  const [abortionhow, onChangeText_abortionhow] = react.useState(null);
  const [abortionmany, onChangeText_abortionmany] = react.useState(null);
  const [abortionwhen, onChangeText_abortionwhen] = react.useState(null);
  const [caesareandate, onChangeText_caesarean] = react.useState(null);
  const [medications_hormone, onChangeText_medications_hormone] = react.useState(null);
  const [hormonedate, onChangeText_medications_hormonedate] = react.useState(null);
  const [nbcaesarean, onChangeText_nbcaesarean] = react.useState(null);
  const [lostpreghow, onChangeText_lostpreghow] = react.useState(null);
  const [lostpregwhen, onChangeText_lostpregwhen] = react.useState(null);
  const [lostpregmany, onChangeText_lostpregmany] = react.useState(null);
  const [pathohow, onChangeText_pathohow] = react.useState(null);
  const [pathodate, onChangeText_pathodate] = react.useState(null);
  const [pathomany, onChangeText_pathomany] = react.useState(null);
  const [inspect, onChangeText_inspect] = react.useState(null);
  const [gynpb_others, onChangeText_othersgynpb] = react.useState(null);
  const [medications_gyneco, onChangeText_gyneco] = react.useState(null);
  const [papanicolau, onChangeText_papanicolau] = react.useState(null);


  const [isChecked_venous, setChecked_venous] = react.useState(false);
  const [isChecked_arterita, setChecked_arterita] = react.useState(false);
  const [isChecked_aneurysm, setChecked_aneurysm] = react.useState(false);

  const [isChecked_angina, setChecked_angina] = react.useState(false);
  const [isChecked_arrhythmia, setChecked_arrhythmia] = react.useState(false);
  const [isChecked_stents, setChecked_stents] = react.useState(false);
  const [isChecked_insuf, setChecked_insuf] = react.useState(false);
  const [isEnabled_heart, setIsEnabled_heart] = react.useState(false);
  const toggleSwitch_heart = () => setIsEnabled_heart(previousState => !previousState);




  //type of allergies
  const [allergies_food, onChangeText_allergies_food] = react.useState(null);
  const [allergies_drugs, onChangeText_allergies_drugs] = react.useState(null);
  const [allergies_seasonal, onChangeText_allergies_seasonal] = react.useState(null);
  const [allergies_others, onChangeText_allergies_others] = react.useState(null);

  //allergies medications
  const [medications_food, onChangeText_medications_food] = react.useState(null);
  const [medications_drugs, onChangeText_medications_drugs] = react.useState(null);
  const [medications_seasonal, onChangeText_medications_seasonal] = react.useState(null);
  const [medications_others, onChangeText_medications_others] = react.useState(null);


  const [borderColorInput,setBorderColorInput] = react.useState("black");
  const [checked_allergies, setChecked_allergies] = react.useState('');
  const [visible, setVisible] = react.useState(false);

  const [checked_chro, setChecked_chro] = react.useState('');

  const [checked_conflict, setChecked_conflict] = react.useState('');

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

  const [checked_events, setChecked_events] = react.useState('');
  const [vax_events, onChangeText_vax_events] = react.useState(null);
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
  const [phase_cancer, onChangeText_phase] = react.useState(null);
  const [treatment_cancer, onChangeText_treatment] = react.useState(null);
  const [begin_cancer, onChangeText_begin] = react.useState(null);
  const [end_cancer, onChangeText_end] = react.useState(null);
  const [checked_end, setChecked_end] = react.useState('');

  const [treatment_hyper, onChangeText_treatment_hyper] = react.useState(null);
  const [isEnabled_hypertension, setIsEnabled_hypertension] = react.useState(false);
  const toggleSwitch_hypertension = () => setIsEnabled_hypertension(previousState => !previousState);

  const [isEnabled_vascular, setIsEnabled_vascular] = react.useState(false);
  const toggleSwitch_vascular = () => setIsEnabled_vascular(previousState => !previousState);

  const [isEnabled_lungs, setIsEnabled_lungs] = react.useState(false);
  const toggleSwitch_lungs = () => setIsEnabled_lungs(previousState => !previousState);
  const [isChecked_bronchitis, setChecked_bronchitis] = react.useState(false);
  const [isChecked_asthma, setChecked_asthma] = react.useState(false);
  const [isChecked_repiratoryinsuf, setChecked_respiratoryinsuf] = react.useState(false);


  const [isEnabled_digestive, setIsEnabled_digestive] = react.useState(false);
  const toggleSwitch_digestive = () => setIsEnabled_digestive(previousState => !previousState);
  const [isChecked_ulcer, setChecked_ulcer] = react.useState(false);
  const [isChecked_gastritis, setChecked_gastritis] = react.useState(false);
  const [isChecked_colonirrit, setChecked_colonirrit] = react.useState(false);

  const [isEnabled_kidney, setIsEnabled_kidney] = react.useState(false);
  const toggleSwitch_kidney = () => setIsEnabled_kidney(previousState => !previousState);
  const [isChecked_stones, setChecked_stones] = react.useState(false);
  const [isChecked_renalinsuf, setChecked_renalinsuf] = react.useState(false);
  

  const [isEnabled_infection, setIsEnabled_infection] = react.useState(false);
  const toggleSwitch_infection = () => setIsEnabled_infection(previousState => !previousState);
  const [isChecked_urinary, setChecked_urinary] = react.useState(false);
  const [isChecked_sinuses, setChecked_sinuses] = react.useState(false);
  const [isChecked_tonsils, setChecked_tonsils] = react.useState(false);
  const [isChecked_gallbladder, setChecked_gallbladder] = react.useState(false);

  const [isEnabled_hormonalpb, setIsEnabled_homonalpb] = react.useState(false);
  const toggleSwitch_homonalpb = () => setIsEnabled_homonalpb(previousState => !previousState);
  const [isChecked_thyroid, setChecked_thyroid] = react.useState(false);
  const [isChecked_pituitary, setChecked_pituitary] = react.useState(false);
  const [isChecked_polycystics, setChecked_polycystics] = react.useState(false);
  const [isChecked_prostate, setChecked_prostate] = react.useState(false);

  //surgery
  const [checked_surgery, setChecked_surgery] = react.useState('');
  const [isChecked_appendic, setChecked_appendic] = react.useState(false);
  const [isChecked_tonsilssurgery, setChecked_tonsilssurgery] = react.useState(false);
  const [isChecked_gallbladdersurgery, setChecked_gallbladdersurgery] = react.useState(false);
  const [isChecked_innguinal, setChecked_innguinal] = react.useState(false);
  const [isChecked_umbilical, setChecked_umbilical] = react.useState(false);
  
  const [checked_injuries, setChecked_injuries] = react.useState('');
  const [checked_accident, setChecked_accident] = react.useState('');
  const [checked_sprains, setChecked_sprains] = react.useState('');
  const [checked_luxuries_fractures, setChecked_luxuries_fractures] = react.useState('');

  const [isEnabled_sleepingpb, setIsEnabled_sleepingpb] = react.useState(false);
  const toggleSwitch_sleepingpb = () => setIsEnabled_sleepingpb(previousState => !previousState);
  const [selectedsleep, setSelectedsleep] = react.useState();
  const [checked_dis_sleep, setChecked_dis_sleep] = react.useState(null);
  const [checked_treat_sleep, setChecked_treat_sleep] = react.useState(null);

  const [isEnabled_sightpb, setIsEnabled_sightpb] = react.useState(false);
  const toggleSwitch_sightpb = () => setIsEnabled_sightpb(previousState => !previousState);


  const [booster1, onChangeText_booster1] = react.useState(null);
  const [booster2, onChangeText_booster2] = react.useState(null);
  const [booster3, onChangeText_booster3] = react.useState(null);
  const [booster4, onChangeText_booster4] = react.useState(null);
  const [booster5, onChangeText_booster5] = react.useState(null);
  const [booster6, onChangeText_booster6] = react.useState(null);
  const [booster7, onChangeText_booster7] = react.useState(null);
  const [booster8, onChangeText_booster8] = react.useState(null);
  const [booster9, onChangeText_booster9] = react.useState(null);
  const [booster10, onChangeText_booster10] = react.useState(null);
  const [booster11, onChangeText_booster11] = react.useState(null);


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

  const renderDropdown2 = () => {
    if (visible) {
      return (
        <View style={styles.container}>
        <Text style={styles.label}>Adverse events which needed medical advise ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_events === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_events('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_events === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_events('no')}
            />
          </View>
        </View>
        {checked_events=='yes' &&
          <View>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_vax_events}
              value={vax_events}
              placeholder="Describe it."
              keyboardType="default"
            />
          </View>
        }


        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax1 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax1}
              value={isEnabled_vax1}
            />
            <Text style={styles.label}> HVB/TB </Text>
          </View>
        </View>
        {isEnabled_vax1 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster1}
              value={booster1}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax2 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax2}
              value={isEnabled_vax2}
            />
            <Text style={styles.label}> Diphtheria </Text>
          </View>
        </View>
        {isEnabled_vax2 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster2}
              value={booster2}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax3 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax3}
              value={isEnabled_vax3}
            />
            <Text style={styles.label}> Polio </Text>
          </View>
        </View>
        {isEnabled_vax3 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster3}
              value={booster3}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax4 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax4}
              value={isEnabled_vax4}
            />
            <Text style={styles.label}> TETANUS </Text>
          </View>
        </View>
        {isEnabled_vax4 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster4}
              value={booster4}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax5 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax5}
              value={isEnabled_vax5}
            />
            <Text style={styles.label}> Pertussis </Text>
          </View>
        </View>
        {isEnabled_vax5 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster5}
              value={booster5}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax6 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax6}
              value={isEnabled_vax6}
            />
            <Text style={styles.label}> RUBELLA </Text>
          </View>
        </View>
        {isEnabled_vax6 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster6}
              value={booster6}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax7 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax7}
              value={isEnabled_vax7}
            />
            <Text style={styles.label}> Rujeola </Text>
          </View>
        </View>
        {isEnabled_vax7 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster7}
              value={booster7}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax8 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax8}
              value={isEnabled_vax8}
            />
            <Text style={styles.label}> Mumps </Text>
          </View>
        </View>
        {isEnabled_vax8 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster8}
              value={booster8}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax9 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax9}
              value={isEnabled_vax9}
            />
            <Text style={styles.label}> Seasonal flu </Text>
          </View>
        </View>
        {isEnabled_vax9 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster9}
              value={booster9}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax10 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax10}
              value={isEnabled_vax10}
            />
            <Text style={styles.label}> Covid 19 </Text>
          </View>
        </View>
        {isEnabled_vax10 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster10}
              value={booster10}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
        <View style={styles.switchbox}>
          
          <View style={styles.checkboxview}>
            <Switch
              trackColor={{ false: "#767577", true: "cyan" }}
              thumbColor={isEnabled_vax11 ? "#024e4e" : "#024e4e"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_vax11}
              value={isEnabled_vax11}
            />
            <Text style={styles.label}> HPV </Text>
          </View>
        </View>
        {isEnabled_vax11 &&
          <View>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInput}}
              onFocus={() => {
                setBorderColorInput("cyan");
              }}
              onBlur={() => {
                setBorderColorInput("black");
              }}
              onChangeText={onChangeText_booster11}
              value={booster11}
              placeholder="Last Booster"
              keyboardType="default"
            />
          </View>
        }
      </View>
      );
    }
  };

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
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your vaccines</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
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
                <Text>
                {isEnabled_cancer ? 'Yes' : 'No'}
                </Text>
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
                  placeholder="Location"
                  keyboardType="default"
                />
                <Text style={styles.label}>Is it finished ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_end === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_end('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_end === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_end('no')}
                    />
                  </View>
                </View>
                <View style={styles.names}>
                  <View style={styles.firstname}>
                    <Text style={styles.label}>From</Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInput}}
                      onFocus={() => {
                        setBorderColorInput("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInput("black");
                      }}
                      onChangeText={onChangeText_begin}
                      value={begin_cancer}
                      placeholder="Year of Start"
                      keyboardType="default"
                    />
                  </View>
                  { checked_end === 'yes' &&
                    <View style={styles.lastname}>
                      <Text style={styles.label}>To</Text>
                      <TextInput
                        style={{...styles.input,borderColor:borderColorInput}}
                        onFocus={() => {
                          setBorderColorInput("cyan");
                        }}
                        onBlur={() => {
                          setBorderColorInput("black");
                        }}
                        onChangeText={onChangeText_end}
                        value={end_cancer}
                        placeholder="Year of end"
                        keyboardType="default"
                      />
                    </View> 
                  }
                </View>

                <Text style={styles.label}>Treatment</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_treatment}
                  value={treatment_cancer}
                  placeholder="Treatment"
                  keyboardType="default"
                />
                <Text style={styles.label}>Current Phase</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_phase}
                  value={phase_cancer}
                  placeholder="Current Phase"
                  keyboardType="default"
                />
              </View>

            }
            <View style={styles.switchbox}>
              <Text style={styles.label}> HyperTension </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_hypertension ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_hypertension}
                  value={isEnabled_hypertension}
                />
                <Text>
                {isEnabled_hypertension ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_hypertension &&
              <View>
                <Text style={styles.label}>How long have you been under Treatment ?</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_treatment_hyper}
                  value={treatment_hyper}
                  placeholder="Duration of Treatment"
                  keyboardType="default"
                />
              </View>
            }
 
            <View style={styles.switchbox}>
              <Text style={styles.label}> Vascular diseases </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vascular ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vascular}
                  value={isEnabled_vascular}
                />
                <Text>
                {isEnabled_vascular ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_vascular &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_venous}
                    onValueChange={setChecked_venous}
                    color={isChecked_venous ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Venous insufficiency</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_arterita}
                    onValueChange={setChecked_arterita}
                    color={isChecked_arterita ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Arterita</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_aneurysm}
                    onValueChange={setChecked_aneurysm}
                    color={isChecked_aneurysm ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Aneurysm</Text>
                </View>
              </View>
            }

            <View style={styles.switchbox}>
              <Text style={styles.label}> Heart diseases </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_heart ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_heart}
                  value={isEnabled_heart}
                />
                <Text>
                {isEnabled_heart ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_heart &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_insuf}
                    onValueChange={setChecked_insuf}
                    color={isChecked_insuf ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Cardiac insufficiency</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_arrhythmia}
                    onValueChange={setChecked_arrhythmia}
                    color={isChecked_arrhythmia ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Cardiac arrhythmia</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_angina}
                    onValueChange={setChecked_angina}
                    color={isChecked_angina ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Angina cardiac</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_stents}
                    onValueChange={setChecked_stents}
                    color={isChecked_stents ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Stents</Text>
                </View>

              </View>
            }


            <View style={styles.switchbox}>
              <Text style={styles.label}> Lungs diseases </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_lungs ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_lungs}
                  value={isEnabled_lungs}
                />
                <Text>
                {isEnabled_lungs ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_lungs &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_bronchitis}
                    onValueChange={setChecked_bronchitis}
                    color={isChecked_bronchitis ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Chronic Bronchitis</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_asthma}
                    onValueChange={setChecked_asthma}
                    color={isChecked_asthma ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Asthma</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_repiratoryinsuf}
                    onValueChange={setChecked_respiratoryinsuf}
                    color={isChecked_repiratoryinsuf ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Respiratory insufficiency</Text>
                </View>

              </View>
            }

            <View style={styles.switchbox}>
              <Text style={styles.label}> Digestive diseases </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_digestive ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_digestive}
                  value={isEnabled_digestive}
                />
                <Text>
                {isEnabled_digestive ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_heart &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_ulcer}
                    onValueChange={setChecked_ulcer}
                    color={isChecked_ulcer ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Ulcer</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_gastritis}
                    onValueChange={setChecked_gastritis}
                    color={isChecked_gastritis ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Gastritis</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_colonirrit}
                    onValueChange={setChecked_colonirrit}
                    color={isChecked_colonirrit ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Colon irritable</Text>
                </View>

              </View>
            }
            
            
            <View style={styles.switchbox}>
              <Text style={styles.label}> Kidney diseases </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_kidney? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_kidney}
                  value={isEnabled_kidney}
                />
                <Text>
                {isEnabled_kidney ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_kidney &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_stones}
                    onValueChange={setChecked_stones}
                    color={isChecked_stones ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Kidney Stones</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_renalinsuf}
                    onValueChange={setChecked_renalinsuf}
                    color={isChecked_renalinsuf ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Renal insufficiency</Text>
                </View>

              </View>
            }

            <View style={styles.switchbox}>
              <Text style={styles.label}> Infection </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_infection ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_infection}
                  value={isEnabled_infection}
                />
                <Text>
                {isEnabled_infection ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_infection &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_urinary}
                    onValueChange={setChecked_urinary}
                    color={isChecked_urinary ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Urinary</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_sinuses}
                    onValueChange={setChecked_sinuses}
                    color={isChecked_sinuses ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Sinuses</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_tonsils}
                    onValueChange={setChecked_tonsils}
                    color={isChecked_tonsils ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Tonsils</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_gallbladder}
                    onValueChange={setChecked_gallbladder}
                    color={isChecked_gallbladder ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Gallbladder</Text>
                </View>

              </View>
            }

            <View style={styles.switchbox}>
              <Text style={styles.label}> Hormonal Problems </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_hormonalpb? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_homonalpb}
                  value={isEnabled_hormonalpb}
                />
                <Text>
                {isEnabled_hormonalpb ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_hormonalpb &&
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_thyroid}
                    onValueChange={setChecked_thyroid}
                    color={isChecked_thyroid ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Thyroid </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_pituitary}
                    onValueChange={setChecked_pituitary}
                    color={isChecked_pituitary ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Pituitary </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_polycystics}
                    onValueChange={setChecked_polycystics}
                    color={isChecked_polycystics ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Polycystics ovaries</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_prostate}
                    onValueChange={setChecked_prostate}
                    color={isChecked_prostate ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Prostate</Text>
                </View>

              </View>
            }

            <View style={styles.switchbox}>
              <Text style={styles.label}> Sight problems </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_sightpb? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_sightpb}
                  value={isEnabled_sightpb}
                />
                <Text>
                {isEnabled_sightpb ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>

            <View style={styles.switchbox}>
              <Text style={styles.label}> Sleeping disorders </Text>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_sleepingpb? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_sleepingpb}
                  value={isEnabled_sleepingpb}
                />
                <Text>
                {isEnabled_sleepingpb ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
            {isEnabled_sleepingpb &&
              <View style={styles.checkboxContainer}>
                
                <Text style={styles.label}>How many hours do you sleep ?</Text>
                <Picker
                  selectedValue={selectedsleep}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedsleep(itemValue)
                  }
                  mode='dropdown'>
                  <Picker.Item label="sleep <4h" value="less_4" />
                  <Picker.Item label="4-6h" value="4_6" />
                  <Picker.Item label=">6h" value="more_6" />
  
                </Picker>
                <Text style={styles.label}> Sleep discontinuously ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_dis_sleep === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_dis_sleep('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_dis_sleep === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_dis_sleep('no')}
                    />
                  </View>
                </View>
                <Text style={styles.label}> Do you have a sleeping treatment ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_treat_sleep === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treat_sleep('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_treat_sleep === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treat_sleep('no')}
                    />
                  </View>
                </View>

              </View>
            }
            


          </View>

        }

        <Text style={styles.label}> Any conflict situations at present ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_conflict === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_conflict('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_conflict === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_conflict('no')}
            />
          </View>
        </View>

        <Text style={styles.label}> Did you had any Surgery </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_surgery === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_surgery('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_surgery === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_surgery('no')}
            />
          </View>
        </View>
        {checked_surgery=="yes" &&
          <View style={styles.subcontainer}>
              <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked_appendic}
                      onValueChange={setChecked_appendic}
                      color={isChecked_appendic ? 'cyan' : undefined}
                    />
                    <Text style={styles.paragraph}>Appendic surgery</Text>
                </View>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_tonsilssurgery}
                    onValueChange={setChecked_tonsilssurgery}
                    color={isChecked_tonsilssurgery ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Tonsils surgery </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_gallbladdersurgery}
                    onValueChange={setChecked_gallbladdersurgery}
                    color={isChecked_gallbladdersurgery ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Gallbladder surgery </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_innguinal}
                    onValueChange={setChecked_innguinal}
                    color={isChecked_innguinal ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Innguinal hernia</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_umbilical}
                    onValueChange={setChecked_umbilical}
                    color={isChecked_umbilical ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Umbilical hernia</Text>
                </View>

              </View>
          </View>
        }

        <Text style={styles.label}> Did you had any injuries ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_injuries === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_injuries('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_injuries === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_injuries('no')}
            />
          </View>
        </View>
        {checked_injuries=="yes" &&
          <View>
            <Text style={styles.label}> Did you had any accidents (car/sport) ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_accident === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_accident('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_accident === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_accident('no')}
                />
              </View>
            </View>
            <Text style={styles.label}> Did you had any sprains ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_sprains === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_sprains('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_sprains === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_sprains('no')}
                />
              </View>
            </View>
            <Text style={styles.label}> Did you had any Luxuries or fractures ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_luxuries_fractures === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_luxuries_fractures('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_luxuries_fractures === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_luxuries_fractures('no')}
                />
              </View>
            </View>
          </View>
        }
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

        {checked=='female' &&
          <View>
            <Text style={styles.label}>Date of first menstruation (Menarha) </Text>
            <Text style={styles.label}>Date of last menstruation </Text>

            <Text style={styles.label}>Are you menopaused ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_menopause === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_menopause('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_menopause === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_menopause('no')}
                />
              </View>
            </View>
            {checked_menopause=='yes' &&
              <View>
                <Text style={styles.label}>Since When ?</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_menopausedate}
                  value={menopause_date}
                  placeholder="Year"
                  keyboardType="default"
                />
              </View>
            }

            <Text style={styles.label}>Hormonal substitutions ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_hormone === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_hormone('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_hormone === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_hormone('no')}
                />
              </View>
            </View>
            {checked_hormone=='yes' &&
              <View>
                <Text style={styles.label}> What substance ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_medications_hormone}
                  value={medications_hormone}
                  placeholder="Your medications"
                  keyboardType="default"
                />

                <Text style={styles.label}> For how long ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_medications_hormonedate}
                  value={hormonedate}
                  placeholder="Year"
                  keyboardType="default"
                />
              </View>
            }


            <Text style={styles.label}>Did you gave Birth ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_birth === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_birth('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_birth === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_birth('no')}
                />
              </View>
            </View>
            {checked_birth=='yes' &&
              <View>
                <Text style={styles.label}>Did you got a Caesarean ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_caesarean === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_caesarean('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_caesarean === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_caesarean('no')}
                    />
                  </View>
                </View>
                {checked_caesarean=='yes' &&
                  <View>
                    <Text style={styles.label}> When ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInput}}
                      onFocus={() => {
                        setBorderColorInput("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInput("black");
                      }}
                      onChangeText={onChangeText_caesarean}
                      value={caesareandate}
                      placeholder="Year"
                      keyboardType="default"
                    />
                    <Text style={styles.label}> How many ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInput}}
                      onFocus={() => {
                        setBorderColorInput("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInput("black");
                      }}
                      onChangeText={onChangeText_nbcaesarean}
                      value={nbcaesarean}
                      placeholder=""
                      keyboardType="default"
                    />
                  </View>
                }
              </View>
            }    

            <Text style={styles.label}>Did you got an abortion ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_abort === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_abort('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_abort === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_abort('no')}
                />
              </View>
            </View>
            {checked_abort=='yes' &&
              <View>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_abortionwhen}
                  value={abortionwhen}
                  placeholder="Year"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_abortionhow}
                  value={abortionhow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_abortionmany}
                  value={abortionmany}
                  placeholder=""
                  keyboardType="default"
                />
              </View>
            }

            <Text style={styles.label}>Did you had lost in pregnancies ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_lostpreg === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_lostpreg('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_lostpreg === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_lostpreg('no')}
                />
              </View>
            </View>
            {checked_lostpreg=='yes' &&
              <View>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_lostpregwhen}
                  value={lostpregwhen}
                  placeholder="Year"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_lostpreghow}
                  value={lostpreghow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_lostpregmany}
                  value={lostpregmany}
                  placeholder=""
                  keyboardType="default"
                />
              </View>
            }

            <Text style={styles.label}>Any Pathological tasks ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_path === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_path('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_path === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_path('no')}
                />
              </View>
            </View>
            {checked_path=='yes' &&
              <View>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_pathodate}
                  value={pathodate}
                  placeholder="Your medications"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_pathohow}
                  value={pathohow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_pathomany}
                  value={pathomany}
                  placeholder=""
                  keyboardType="default"
                />
              </View>
            }

            <Text style={styles.label}>Any breast problems ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_breastpb === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_breastpb('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_breastpb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_breastpb('no')}
                />
              </View>
            </View>
            {checked_breastpb=='yes' &&
              <View>
                <Text style={styles.label}> Do you get periodic inspection ? </Text>   
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_inspect === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_inspect('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_inspect === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_inspect('no')}
                    />
                  </View>
                </View>
                {checked_inspect =='yes' &&
                  <View style={styles.container}>
                    <Text style={styles.label}> When ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInput}}
                      onFocus={() => {
                        setBorderColorInput("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInput("black");
                      }}
                      onChangeText={onChangeText_inspect}
                      value={inspect}
                      placeholder="Year"
                      keyboardType="default"
                    />
                  </View>
                }
              </View>
            }

            <Text style={styles.label}>Did you got pregnancies issues? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_pregpb === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pregpb('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_pregpb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pregpb('no')}
                />
              </View>
            </View>
            {checked_pregpb =='yes' &&
              <View style={styles.subcontainer}>
                <View style={styles.switchbox}>
                  <Text style={styles.label}> Gestational diabetes </Text>
                  <View style={styles.checkboxview}>
                    <Switch
                      trackColor={{ false: "#767577", true: "cyan" }}
                      thumbColor={isEnabled_gestdiab ? "#024e4e" : "#024e4e"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch_gestdiab}
                      value={isEnabled_gestdiab}
                    />
                    
                  </View>
                </View>

                <View style={styles.switchbox}>
                  <Text style={styles.label}> Others problems ? </Text>
                  <View style={styles.checkboxview}>
                    <Switch
                      trackColor={{ false: "#767577", true: "cyan" }}
                      thumbColor={isEnabled_othergestpb ? "#024e4e" : "#024e4e"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch_othergestpb}
                      value={isEnabled_othergestpb}
                    />
                    
                  </View>
                </View>
                {isEnabled_othergestpb &&
                  <View style={styles.subcontainer}>
                    <Text style={styles.sublabel}> What type ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInput}}
                      onFocus={() => {
                        setBorderColorInput("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInput("black");
                      }}
                      onChangeText={onChangeText_othersgynpb}
                      value={gynpb_others}
                      placeholder="Describe"
                      keyboardType="default"
                    />
                  </View>
                }
              </View>       
            }

            <Text style={styles.label}> Do you get periodic gynecological consult ? </Text>   
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_consultgyn === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_consultgyn('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_consultgyn === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_consultgyn('no')}
                />
              </View>
            </View>
            {checked_consultgyn =='yes' &&
              <View style={styles.subcontainer}>
                <Text style={styles.sublabel}> When was the last one ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_gyneco}
                  value={medications_gyneco}
                  placeholder="Year"
                  keyboardType="default"
                />
              </View>
            }

            <Text style={styles.label}> Did you got Papanicolau test ? </Text>   
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_papanicolau === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_papanicolau('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_papanicolau === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_papanicolau('no')}
                />
              </View>
            </View>
            {checked_papanicolau =='yes' &&
              <View style={styles.subcontainer}>
                <Text style={styles.sublabel}> When was the last one ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInput}}
                  onFocus={() => {
                    setBorderColorInput("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInput("black");
                  }}
                  onChangeText={onChangeText_papanicolau}
                  value={papanicolau}
                  placeholder="Year"
                  keyboardType="default"
                />
              </View>
            }
          </View>
        }
        {checked=='male' &&
          <View>
            <Text style={styles.label}> Your age range </Text>
            <Picker
              selectedValue={selectedage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedage(itemValue)
              }
              mode='dropdown'>
              <Picker.Item label="Age <4O" value="less_40" />
              <Picker.Item label="Age 40-65" value="40_65" />
              <Picker.Item label="Age >65" value="more_65" />

            </Picker>

            {selectedage=='less_40' &&
              <View>
                <Text style={styles.label}> Are you in a toxic environnement ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_toxic === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_toxic('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_toxic === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_toxic('no')}
                    />
                  </View>
                </View>
                <Text style={styles.label}> Do you practice extreme sport ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_sport === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_sport('yes')}
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_sport === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_sport('no')}
                    />
                  </View>
                </View>
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
  subcontainer2:{
    backgroundColor: 'white',
  },
  subcontainer:{
    backgroundColor: '#4bcbd6',
  },
  sublabel: {
    fontSize: 16,
    color: '#024e4e',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  switchbox:{
    display:'flex',
    flexDirection:'row'
  },
  names:{
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
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    fontFamily:"Montserrat_400Regular",
    backgroundColor: '#4bcbd6',
  },
  checkbox: {
    margin : 8,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 12,
    
  },
  paragraph : {
    fontFamily:"Montserrat_400Regular"
  },
  section_checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
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
  firstname:{
    flex:1,
    paddingRight:10
  },
  lastname:{
    flex:1,
    paddingRight:10
  },
});

