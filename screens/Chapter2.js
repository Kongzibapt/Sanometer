import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View, Switch, Button, Image} from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import SelectMultiple from 'react-native-select-multiple'
import { VirtualizedList } from 'react-native-web';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';



const Chapter2 = function({navigation}) {

  //const sex = route.params.checked_sex;
  const [dataIsReady,setDataIsReady] = react.useState(false);

  const [isEnabled_treatmentinfection, setIsEnabled_treatmentinfection] = react.useState(false);
  const toggleSwitch_treatmentinfection = () => setIsEnabled_treatmentinfection(previousState => !previousState);
  const [isEnabled_treatmentnaturist, setIsEnabled_treatmentnaturist] = react.useState(false);
  const toggleSwitch_treatmentnaturist = () => setIsEnabled_treatmentnaturist(previousState => !previousState);
  const [isEnabled_treatmentother, setIsEnabled_treatmentother] = react.useState(false);
  const toggleSwitch_treatmentother = () => setIsEnabled_treatmentother(previousState => !previousState);
  const [isEnabled_treatmentpressure, setIsEnabled_treatmentpressure] = react.useState(false);
  const toggleSwitch_treatmentpressure = () => setIsEnabled_treatmentpressure(previousState => !previousState);
  const [treatother,onChangeText_treatother]=react.useState('');
  const [isChecked_plants, setChecked_plants] = react.useState(false);
  const [isChecked_ayur, setChecked_ayur] = react.useState(false);
  const [isChecked_natother, setChecked_natother] = react.useState(false);
  const [treatnatureother,onChangeText_treatnatureother]=react.useState('');
  const [checked_treatment, setChecked_treatment] = react.useState('');
  
  const [checked_allergiesante, setChecked_allergiesante] = react.useState('');
  const [checked_treatmentallergiesante, setChecked_treatmentallergiesante] = react.useState('');
  const [checked_pressureante, setChecked_pressureante] = react.useState('');
  const [checked_treatmentpressureante, setChecked_treatmentpressureante] = react.useState('');
  const [checked_heartante, setChecked_heartante] = react.useState('');
  const [checked_treatmentheartante, setChecked_treatmentheartante] = react.useState('');
  const [checked_renalante, setChecked_renalante] = react.useState('');
  const [checked_treatmentrenalante, setChecked_treatmentrenalante] = react.useState('');
  const [checked_otherante, setChecked_otherante] = react.useState('');
  const [checked_treatmentotherante, setChecked_treatmentotherante] = react.useState('');
  const [checked_vascularante, setChecked_vascularante] = react.useState('');
  const [checked_treatmentvascularante, setChecked_treatmentvascularante] = react.useState('');
  const [checked_digestiveante, setChecked_digestiveante] = react.useState('');
  const [checked_treatmentdigestiveante, setChecked_treatmentdigestiveante] = react.useState('');
  const [checked_infectionante, setChecked_infectionante] = react.useState('');
  const [checked_treatmentinfectionante, setChecked_treatmentinfectionante] = react.useState('');

  //Men

  const [checked_toxic, setChecked_toxic] = react.useState('');
  const [checked_sport, setChecked_sport] = react.useState('');
  const [selectedage, setSelectedage] = react.useState();
  const [value, setValue] = react.useState(0);
  const [checked_urinate, setChecked_urinate] = react.useState('');

  //Women 
  const [checked, setChecked] = react.useState('');
  const [checked_menopause, setChecked_menopause] = react.useState('');
  const [checked_hormone, setChecked_hormone] = react.useState('');
  const [checked_contra, setChecked_contra] = react.useState('');
  const [checked_birth, setChecked_birth] = react.useState('');
  const [checked_breastfeed, setChecked_breastfeed] = react.useState('');
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
  
  const [medications_contra, onChangeText_medications_contra] = react.useState(null);
  const [contradate, onChangeText_medications_contradate] = react.useState(null);
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
  const [date_firstmenst, setDate_firstmenst] = react.useState(new Date());
  const [mode_firstmenst, setMode_firstmenst] = react.useState('date');
  const [show_firstmenst, setShow_firstmenst] = react.useState(false);
  const [date_lastmenst, setDate_lastmenst] = react.useState(new Date());
  const [mode_lastmenst, setMode_lastmenst] = react.useState('date');
  const [show_lastmenst, setShow_lastmenst] = react.useState(false);

  
  
  const [isChecked_venous, setChecked_venous] = react.useState(false);
  const [isChecked_arterita, setChecked_arterita] = react.useState(false);
  const [isChecked_aneurysm, setChecked_aneurysm] = react.useState(false);
  const [isChecked_angina, setChecked_angina] = react.useState(false);
  const [isChecked_arrhythmia, setChecked_arrhythmia] = react.useState(false);
  const [isChecked_stents, setChecked_stents] = react.useState(false);
  const [isChecked_insuf, setChecked_insuf] = react.useState(false);
  const [isEnabled_heart, setIsEnabled_heart] = react.useState(false);
  const toggleSwitch_heart = () => setIsEnabled_heart(previousState => !previousState);


  //allergies
  const [checked_allergies, setChecked_allergies] = react.useState('');
  const [isEnabled_food, setIsEnabled_food] = react.useState(false);
  const toggleSwitch_food = () => setIsEnabled_food(previousState => !previousState);
  const [checked_severefood, setChecked_severefood] = react.useState('');
  const [isEnabled_drugs, setIsEnabled_drugs] = react.useState(false);
  const toggleSwitch_drugs = () => setIsEnabled_drugs(previousState => !previousState);
  const [checked_severedrugs, setChecked_severedrugs] = react.useState('');
  const [isEnabled_seasonal, setIsEnabled_seasonal] = react.useState(false);
  const toggleSwitch_seasonal = () => setIsEnabled_seasonal(previousState => !previousState);
  const [checked_severeseason, setChecked_severeseason] = react.useState('');
  const [isEnabled_others, setIsEnabled_others] = react.useState(false);
  const toggleSwitch_others = () => setIsEnabled_others(previousState => !previousState);
  const [checked_severeothers, setChecked_severeothers] = react.useState('');
  const [trigger, onChangeText_trigger] = react.useState(null);
  const [checked_hospit, setChecked_hospit] = react.useState('');
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
  
  
  

  //vaccines
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

  const [checked_events, setChecked_events] = react.useState('');
  const [vax_events, onChangeText_vax_events] = react.useState(null);
  const [checked_vax, setChecked_vax] = react.useState('');
  const [checked_pb, setChecked_pb] = react.useState('');

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

  //chronical disease
  const [checked_chro, setChecked_chro] = react.useState('');
  const [isEnabled_cancer, setIsEnabled_cancer] = react.useState(false);
  const toggleSwitch_cancer = () => setIsEnabled_cancer(previousState => !previousState);
  const [loc_cancer, onChangeText_loc] = react.useState(null);
  const [phase_cancer, onChangeText_phase] = react.useState(null);
  const [treatment_cancer, onChangeText_treatment] = react.useState(null);
  const [begin_cancer, onChangeText_begin] = react.useState(null);
  const [end_cancer, onChangeText_end] = react.useState(null);
  const [checked_end, setChecked_end] = react.useState('');

  const [diseasegenetic, onChangeText_diseasegenetic] = react.useState(null);
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
  
  const [isEnabled_genetic, setIsEnabled_genetic] = react.useState(false);
  const toggleSwitch_genetic = () => setIsEnabled_genetic(previousState => !previousState);
  const [isEnabled_diabetes, setIsEnabled_diabetes] = react.useState(false);
  const toggleSwitch_diabetes = () => setIsEnabled_diabetes(previousState => !previousState);
  const [checked_treatmentdiabetes, setChecked_treatmentdiabetes] = react.useState('');
  const [checked_treatmentgenetic, setChecked_treatmentgenetic] = react.useState('');
  
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
  
  //injuries
  const [checked_injuries, setChecked_injuries] = react.useState('');
  const [checked_accident, setChecked_accident] = react.useState('');
  const [checked_sprains, setChecked_sprains] = react.useState('');
  const [checked_luxuries_fractures, setChecked_luxuries_fractures] = react.useState('');

  //sleep issue
  const [isEnabled_sleepingpb, setIsEnabled_sleepingpb] = react.useState(false);
  const toggleSwitch_sleepingpb = () => setIsEnabled_sleepingpb(previousState => !previousState);
  const [selectedsleep, setSelectedsleep] = react.useState();
  const [checked_dis_sleep, setChecked_dis_sleep] = react.useState(null);
  const [checked_treat_sleep, setChecked_treat_sleep] = react.useState(null);

  //senses disorders
  const [isEnabled_senses, setIsEnabled_senses] = react.useState(false);
  const toggleSwitch_senses = () => setIsEnabled_senses(previousState => !previousState);
  const [isChecked_sight, setChecked_sight] = react.useState(false);
  const [isChecked_hearing, setChecked_hearing] = react.useState(false);
  const [isChecked_taste, setChecked_taste] = react.useState(false);
  const [isChecked_smell, setChecked_smell] = react.useState(false);
  const [isChecked_touch, setChecked_touch] = react.useState(false);

  const [date, setDate] = react.useState(new Date());
  const [mode, setMode] = react.useState('date');
  const [show, setShow] = react.useState(false);

  const [checked_conflict, setChecked_conflict] = react.useState('');
  

  const [visible_allergies, setVisible1] = react.useState(false);
  const [visible_family, setVisible2] = react.useState(false);
  const [visible_vaccine, setVisible3] = react.useState(false);
  const [visible_chro, setVisible4] = react.useState(false);
  const [visible_male, setVisible5] = react.useState(false);
  const [visible_female, setVisible6] = react.useState(false);
  const [visible_surgery, setVisible7] = react.useState(false);
  const [visible_injuries, setVisible8] = react.useState(false);
  const [visible_treatment, setVisible9] = react.useState(false);

  
  
  

  const [borderColorInputSince,setBorderColorInputSince] = react.useState("#BBBBBB");
  const [borderColorInputWhat,setBorderColorInputWhat] = react.useState("#BBBBBB");
  const [borderColorInputFor,setBorderColorInputFor] = react.useState("#BBBBBB");
  const [borderColorInputWhat2,setBorderColorInputWhat2] = react.useState("#BBBBBB");
  const [borderColorInputFor2,setBorderColorInputFor2] = react.useState("#BBBBBB");
  const [borderColorInputWhen,setBorderColorInputWhen] = react.useState("#BBBBBB");
  const [borderColorInputHow,setBorderColorInputHow] = react.useState("#BBBBBB");
  const [borderColorInputWhen2,setBorderColorInputWhen2] = react.useState("#BBBBBB");
  const [borderColorInputHow2,setBorderColorInputHow2] = react.useState("#BBBBBB");
  const [borderColorInputHow3,setBorderColorInputHow3] = react.useState("#BBBBBB");
  const [borderColorInputWhen3,setBorderColorInputWhen3] = react.useState("#BBBBBB");
  const [borderColorInputHow4,setBorderColorInputHow4] = react.useState("#BBBBBB");
  const [borderColorInputHow5,setBorderColorInputHow5] = react.useState("#BBBBBB");
  const [borderColorInputWhen4,setBorderColorInputWhen4] = react.useState("#BBBBBB");
  const [borderColorInputHow6,setBorderColorInputHow6] = react.useState("#BBBBBB");
  const [borderColorInputHow7,setBorderColorInputHow7] = react.useState("#BBBBBB");
  const [borderColorInputYes,setBorderColorInputYes] = react.useState("#BBBBBB");
  const [borderColorInputWhat3,setBorderColorInputWhat3] = react.useState("#BBBBBB");
  const [borderColorInputYes2,setBorderColorInputYes2] = react.useState("#BBBBBB");
  const [borderColorInputYes3,setBorderColorInputYes3] = react.useState("#BBBBBB");
  const [borderColorInputWhich,setBorderColorInputWhich] = react.useState("#BBBBBB");
  const [borderColorInputWhich2,setBorderColorInputWhich2] = react.useState("#BBBBBB");
  const [borderColorInputLoc,setBorderColorInputLoc] = react.useState("#BBBBBB");
  const [borderColorInputFrom,setBorderColorInputFrom] = react.useState("#BBBBBB");
  const [borderColorInputTo,setBorderColorInputTo] = react.useState("#BBBBBB");
  const [borderColorInputTreat,setBorderColorInputTreat] = react.useState("#BBBBBB");
  const [borderColorInputCur,setBorderColorInputCur] = react.useState("#BBBBBB");
  const [borderColorInputHow8,setBorderColorInputHow8] = react.useState("#BBBBBB");
  const [borderColorInputWhich3,setBorderColorInputWhich3] = react.useState("#BBBBBB");
  const [borderColorInputYes4,setBorderColorInputYes4] = react.useState("#BBBBBB");
  const [borderColorInputDate,setBorderColorInputDate] = react.useState("#BBBBBB");
  const [borderColorInputDate2,setBorderColorInputDate2] = react.useState("#BBBBBB");
  const [borderColorInputDate3,setBorderColorInputDate3] = react.useState("#BBBBBB");
  const [borderColorInputDate4,setBorderColorInputDate4] = react.useState("#BBBBBB");
  const [borderColorInputDate5,setBorderColorInputDate5] = react.useState("#BBBBBB");
  const [borderColorInputDate6,setBorderColorInputDate6] = react.useState("#BBBBBB");
  const [borderColorInputDate7,setBorderColorInputDate7] = react.useState("#BBBBBB");
  const [borderColorInputDate8,setBorderColorInputDate8] = react.useState("#BBBBBB");
  const [borderColorInputDate9,setBorderColorInputDate9] = react.useState("#BBBBBB");
  const [borderColorInputDate10,setBorderColorInputDate10] = react.useState("#BBBBBB");
  const [borderColorInputTo2,setBorderColorInputTo2] = react.useState("#BBBBBB");
  const [borderColorInputMed,setBorderColorInputMed] = react.useState("#BBBBBB");
  const [borderColorInputTo3,setBorderColorInputTo3] = react.useState("#BBBBBB");
  const [borderColorInputMed2,setBorderColorInputMed2] = react.useState("#BBBBBB");
  const [borderColorInputTo4,setBorderColorInputTo4] = react.useState("#BBBBBB");
  const [borderColorInputMed3,setBorderColorInputMed3] = react.useState("#BBBBBB");
  const [borderColorInputTo5,setBorderColorInputTo5] = react.useState("#BBBBBB");
  const [borderColorInputMed4,setBorderColorInputMed4] = react.useState("#BBBBBB");
  const [borderColorInputTrig,setBorderColorInputTrig] = react.useState("#BBBBBB");
  const [borderColorInputDiph,setBorderColorInputDiph] = react.useState("#BBBBBB");
  
  

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

  const onChange_firstmenst = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow_firstmenst(Platform.OS === 'ios');
    setDate_firstmenst(currentDate);
  };

  const showMode_firstmenst = (currentMode) => {
    setShow_firstmenst(true);
    setMode_firstmenst(currentMode);
  };

  const showDatepicker_firstmenst = () => {
    showMode_firstmenst('date');
  }; 

  const onChange_lastmenst = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow_lastmenst(Platform.OS === 'ios');
    setDate_lastmenst(currentDate);
  };

  const showMode_lastmenst = (currentMode) => {
    setShow_lastmenst(true);
    setMode_lastmenst(currentMode);
  };

  const showDatepicker_lastmenst = () => {
    showMode_lastmenst('date');
  }; 

  const toggleDropdown1 = () => {
    setVisible1(!visible_allergies);
  };
  const toggleDropdown2 = () => {
    setVisible2(!visible_family);
  };
  const toggleDropdown3 = () => {
    setVisible3(!visible_vaccine);
  };
  const toggleDropdown4 = () => {
    setVisible4(!visible_chro);
  };
  const toggleDropdown5 = () => {
    setVisible5(!visible_male);
  };
  const toggleDropdown6 = () => {
    setVisible6(!visible_female);
  };
  const toggleDropdown7 = () => {
    setVisible7(!visible_surgery);
  };
  const toggleDropdown8 = () => {
    setVisible8(!visible_injuries);
  };
  const toggleDropdown9 = () => {
    setVisible9(!visible_treatment);
  };

  const submitChapter2 = async () => {
    try {     
      isEnabled_treatmentinfection && await AsyncStorage.setItem('treatmentinfection',isEnabled_treatmentinfection.toString());
      isEnabled_treatmentnaturist && await AsyncStorage.setItem('treatmentnaturist',isEnabled_treatmentnaturist.toString());
      isEnabled_treatmentother && await AsyncStorage.setItem('treatmentother',isEnabled_treatmentother.toString());
      isEnabled_treatmentpressure && await AsyncStorage.setItem('treatmentpressure',isEnabled_treatmentpressure.toString());
      treatother && await AsyncStorage.setItem('treatother',treatother.toString());
      isChecked_plants && await AsyncStorage.setItem('plants',isChecked_plants.toString());
      isChecked_ayur && await AsyncStorage.setItem('ayur',isChecked_ayur.toString());
      isChecked_natother && await AsyncStorage.setItem('natother',isChecked_natother.toString());
      treatnatureother && await AsyncStorage.setItem('treatnatureother',treatnatureother.toString());
      checked_treatment && await AsyncStorage.setItem('treatment',checked_treatment.toString());
      
      checked_allergiesante && await AsyncStorage.setItem('checked_allergiesante',checked_allergiesante);
      checked_treatmentallergiesante && await AsyncStorage.setItem('checked_treatmentallergiesante',checked_treatmentallergiesante);
      checked_pressureante && await AsyncStorage.setItem('checked_pressureante',checked_pressureante);
      checked_treatmentpressureante && await AsyncStorage.setItem('checked_treatmentpressureante',checked_treatmentpressureante);
      checked_heartante && await AsyncStorage.setItem('checked_heartante',checked_heartante);
      checked_treatmentheartante && await AsyncStorage.setItem('checked_treatmentheartante',checked_treatmentheartante);
      checked_renalante && await AsyncStorage.setItem('checked_renalante',checked_renalante);
      checked_treatmentrenalante && await AsyncStorage.setItem('checked_treatmentrenalante',checked_treatmentrenalante);
      checked_otherante && await AsyncStorage.setItem('checked_otherante',checked_otherante);
      checked_treatmentotherante && await AsyncStorage.setItem('checked_treatmentotherante',checked_treatmentotherante);
      checked_vascularante && await AsyncStorage.setItem('checked_vascularante',checked_vascularante);
      checked_treatmentvascularante && await AsyncStorage.setItem('checked_treatmentvascularante',checked_treatmentvascularante);
      checked_digestiveante && await AsyncStorage.setItem('checked_digestiveante',checked_digestiveante);
      checked_treatmentdigestiveante && await AsyncStorage.setItem('checked_treatmentdigestiveante',checked_treatmentdigestiveante);
      checked_infectionante && await AsyncStorage.setItem('checked_infectionante',checked_infectionante);
      checked_treatmentinfectionante && await AsyncStorage.setItem('checked_treatmentinfectionante',checked_treatmentinfectionante);
  
      checked_toxic && await AsyncStorage.setItem('checked_toxic',checked_toxic);
      checked_sport && await AsyncStorage.setItem('checked_sport',checked_sport);
      selectedage && await AsyncStorage.setItem('selectedage',selectedage);
      value && await AsyncStorage.setItem('value',value.toString());
      checked_urinate && await AsyncStorage.setItem('checked_urinate',checked_urinate);

      //checked && await AsyncStorage.setItem('checked_sex',checked);
      checked_menopause && await AsyncStorage.setItem('checked_menopause',checked_menopause);
      checked_hormone && await AsyncStorage.setItem('checked_hormone',checked_hormone);
      checked_contra && await AsyncStorage.setItem('checked_contra',checked_contra);
      checked_birth && await AsyncStorage.setItem('checked_birth',checked_birth);
      checked_breastfeed && await AsyncStorage.setItem('checked_breastfeed',checked_breastfeed);
      checked_caesarean && await AsyncStorage.setItem('checked_caesarean',checked_caesarean);
      checked_abort && await AsyncStorage.setItem('checked_abort',checked_abort);
      checked_lostpreg && await AsyncStorage.setItem('checked_lostpreg',checked_lostpreg);
      checked_path && await AsyncStorage.setItem('checked_path',checked_path);
      checked_breastpb && await AsyncStorage.setItem('checked_breastpb',checked_breastpb);
      checked_inspect && await AsyncStorage.setItem('checked_inspect',checked_inspect);
  
      isEnabled_gestdiab && await AsyncStorage.setItem('gest_diab',isEnabled_gestdiab.toString());
      checked_pregpb && await AsyncStorage.setItem('pregpb',checked_pregpb);
      isEnabled_othergestpb && await AsyncStorage.setItem('othergestpb',isEnabled_othergestpb.toString());
      checked_consultgyn && await AsyncStorage.setItem('consultgyn',checked_consultgyn);
      checked_papanicolau && await AsyncStorage.setItem('papanicolau',checked_papanicolau);
      menopause_date && await AsyncStorage.setItem('menopausedate',menopause_date);
      abortionhow && await AsyncStorage.setItem('abortionhow',abortionhow);

      abortionmany && await AsyncStorage.setItem('abortionmany',abortionmany);
      abortionwhen && await AsyncStorage.setItem('abortionwhen',abortionwhen);
      caesareandate && await AsyncStorage.setItem('caesareandate',caesareandate);
      medications_hormone && await AsyncStorage.setItem('medications_hormone',medications_hormone);
      hormonedate && await AsyncStorage.setItem('hormonedate',hormonedate);

      medications_contra && await AsyncStorage.setItem('medications_contra',medications_contra);
      contradate && await AsyncStorage.setItem('contradate',contradate);
      nbcaesarean && await AsyncStorage.setItem('nbcaesarean', nbcaesarean);
      lostpreghow && await AsyncStorage.setItem('lostpreghow', lostpreghow);
      lostpregwhen && await AsyncStorage.setItem('lostpregwhen', lostpregwhen);
      lostpregmany && await AsyncStorage.setItem('lostpregmany', lostpregmany);
      pathodate && await AsyncStorage.setItem('pathodate',pathodate);
      pathohow && await AsyncStorage.setItem('pathohow',pathohow);
      pathomany && await AsyncStorage.setItem('pathomany',pathomany);

      inspect && await AsyncStorage.setItem('inspect',inspect);
      gynpb_others && await AsyncStorage.setItem('gynpb_others',gynpb_others);
      medications_gyneco && await AsyncStorage.setItem('medications_gyneco',medications_gyneco);
      papanicolau && await AsyncStorage.setItem('papanicolau',papanicolau);
      date_firstmenst && await AsyncStorage.setItem('date_firstmenst',date_firstmenst.toString());
      date_lastmenst && await AsyncStorage.setItem('date_lastmenst',date_lastmenst.toString());

      isChecked_venous && await AsyncStorage.setItem('isChecked_venous',isChecked_venous.toString());
      isChecked_arterita && await AsyncStorage.setItem('isChecked_arterita',isChecked_arterita.toString());
      isChecked_aneurysm && await AsyncStorage.setItem('isChecked_aneurysm',isChecked_aneurysm.toString());
      isChecked_angina && await AsyncStorage.setItem('isChecked_angina',isChecked_angina.toString());
      isChecked_arrhythmia && await AsyncStorage.setItem('isChecked_arrhythmia',isChecked_arrhythmia.toString());
      isChecked_stents && await AsyncStorage.setItem('isChecked_stents',isChecked_stents.toString());
      isChecked_insuf && await AsyncStorage.setItem('isChecked_insuf',isChecked_insuf.toString());
      isEnabled_heart && await AsyncStorage.setItem('isEnabled_heart',isEnabled_heart.toString());

      checked_allergies && await AsyncStorage.setItem('checked_allergies',checked_allergies);
      isEnabled_food && await AsyncStorage.setItem('isEnabled_food',isEnabled_food.toString());
      checked_severefood && await AsyncStorage.setItem('checked_severefood', checked_severefood);
      isEnabled_drugs && await AsyncStorage.setItem('isEnabled_drugs',isEnabled_drugs.toString());
      checked_severedrugs && await AsyncStorage.setItem('checked_severedrugs',checked_severedrugs);
      isEnabled_seasonal && await AsyncStorage.setItem('isEnabled_seasonal',isEnabled_seasonal.toString());
      checked_severeseason && await AsyncStorage.setItem('checked_severeseason',checked_severeseason);
      isEnabled_others && await AsyncStorage.setItem('isEnabled_others',isEnabled_others.toString());
      checked_severeothers && await AsyncStorage.setItem('checked_severeothers',checked_severeothers);
      trigger && await AsyncStorage.setItem('trigger',trigger);
      checked_hospit && await AsyncStorage.setItem('checked_hospit',checked_hospit);

      allergies_food && await AsyncStorage.setItem('allergies_food',allergies_food);
      allergies_drugs && await AsyncStorage.setItem('allergies_drugs',allergies_drugs);
      allergies_seasonal && await AsyncStorage.setItem('allergies_seasonal',allergies_seasonal);
      allergies_others && await AsyncStorage.setItem('allergies_others',allergies_others);
      medications_food && await AsyncStorage.setItem('medications_food',medications_food);
      medications_drugs && await AsyncStorage.setItem('medications_drugs',medications_drugs);
      medications_seasonal && await AsyncStorage.setItem('medications_seasonal',medications_seasonal);
      medications_others && await AsyncStorage.setItem('medications_others',medications_others);
      
      booster1 && await AsyncStorage.setItem('booster1',booster1);
      booster2 && await AsyncStorage.setItem('booster2',booster2);
      booster3 && await AsyncStorage.setItem('booster3',booster3);
      booster4 && await AsyncStorage.setItem('booster4',booster4);
      booster5 && await AsyncStorage.setItem('booster5',booster5);
      booster6 && await AsyncStorage.setItem('booster6',booster6);
      booster7 && await AsyncStorage.setItem('booster7',booster7);
      booster8 && await AsyncStorage.setItem('booster8',booster8);
      booster9 && await AsyncStorage.setItem('booster9',booster9);
      booster10 && await AsyncStorage.setItem('booster10',booster10);
      booster11 && await AsyncStorage.setItem('booster11',booster11);

      isEnabled_vax1 && await AsyncStorage.setItem('isEnabled_vax1',isEnabled_vax1.toString());
      isEnabled_vax2 && await AsyncStorage.setItem('isEnabled_vax2',isEnabled_vax2.toString());
      isEnabled_vax3 && await AsyncStorage.setItem('isEnabled_vax3',isEnabled_vax3.toString());
      isEnabled_vax4 && await AsyncStorage.setItem('isEnabled_vax4',isEnabled_vax4.toString());
      isEnabled_vax5 && await AsyncStorage.setItem('isEnabled_vax5',isEnabled_vax5.toString());
      isEnabled_vax6 && await AsyncStorage.setItem('isEnabled_vax6',isEnabled_vax6.toString());
      isEnabled_vax7 && await AsyncStorage.setItem('isEnabled_vax7',isEnabled_vax7.toString());
      isEnabled_vax8 && await AsyncStorage.setItem('isEnabled_vax8',isEnabled_vax8.toString());
      isEnabled_vax9 && await AsyncStorage.setItem('isEnabled_vax9',isEnabled_vax9.toString());
      isEnabled_vax10 && await AsyncStorage.setItem('isEnabled_vax10',isEnabled_vax10.toString());
      isEnabled_vax11 && await AsyncStorage.setItem('isEnabled_vax11',isEnabled_vax11.toString());

      checked_events && await AsyncStorage.setItem('checked_events',checked_events);
      vax_events && await AsyncStorage.setItem('vax_events',vax_events);
      checked_vax && await AsyncStorage.setItem('checked_vax',checked_vax);
      checked_pb && await AsyncStorage.setItem('checked_pb',checked_pb);

      checked_surgery && await AsyncStorage.setItem('checked_surgery',checked_surgery);
      isChecked_appendic && await AsyncStorage.setItem('isChecked_appendic',isChecked_appendic.toString());
      isChecked_tonsilssurgery && await AsyncStorage.setItem('isChecked_tonsilssurgery',isChecked_tonsilssurgery.toString());
      isChecked_gallbladdersurgery && await AsyncStorage.setItem('isChecked_gallbladdersurgery',isChecked_gallbladdersurgery.toString());
      isChecked_innguinal && await AsyncStorage.setItem('isChecked_innguinal',isChecked_innguinal.toString());
      isChecked_umbilical && await AsyncStorage.setItem('isChecked_umbilical',isChecked_umbilical.toString());

      checked_injuries && await AsyncStorage.setItem('checked_injuries',checked_injuries);
      checked_accident && await AsyncStorage.setItem('checked_accident',checked_accident);
      checked_sprains && await AsyncStorage.setItem('checked_sprains',checked_sprains);
      checked_luxuries_fractures && await AsyncStorage.setItem('checked_luxuries_fractures',checked_luxuries_fractures);
      
      isEnabled_sleepingpb && await AsyncStorage.setItem('isEnabled_sleepingpb',isEnabled_sleepingpb.toString());
      selectedsleep && await AsyncStorage.setItem('selectedsleep',selectedsleep);
      checked_dis_sleep && await AsyncStorage.setItem('checked_dis_sleep',checked_dis_sleep);
      checked_treat_sleep && await AsyncStorage.setItem('checked_treat_sleep',checked_treat_sleep);

      date && await AsyncStorage.setItem('date',date.toString());

      checked_chro && await AsyncStorage.setItem('checked_chro',checked_chro.toString());
      isEnabled_cancer && await AsyncStorage.setItem('isEnabled_cancer',isEnabled_cancer.toString());
      loc_cancer && await AsyncStorage.setItem('loc_cancer',loc_cancer.toString());
      phase_cancer &&await AsyncStorage.setItem('phase_cancer',phase_cancer.toString());
      treatment_cancer &&await AsyncStorage.setItem('treatment_cancer',treatment_cancer.toString());
      begin_cancer &&await AsyncStorage.setItem('begin_cancer',begin_cancer.toString());
      end_cancer &&await AsyncStorage.setItem('end_cancer',end_cancer.toString());
      checked_end &&await AsyncStorage.setItem('checked_end',checked_end.toString());

      diseasegenetic &&await AsyncStorage.setItem('diseasegenetic',diseasegenetic.toString());
      treatment_hyper &&await AsyncStorage.setItem('treatment_hyper',treatment_hyper.toString());
      isEnabled_hypertension &&await AsyncStorage.setItem('isEnabled_hypertension',isEnabled_hypertension.toString());

      isEnabled_vascular &&await AsyncStorage.setItem('isEnabled_vascular',isEnabled_vascular.toString());
      isEnabled_lungs &&await AsyncStorage.setItem('isEnabled_lungs',isEnabled_lungs.toString());
      isChecked_bronchitis &&await AsyncStorage.setItem('isChecked_bronchitis',isChecked_bronchitis.toString());
      isChecked_asthma &&await AsyncStorage.setItem('isChecked_asthma',isChecked_asthma.toString());
      isChecked_repiratoryinsuf &&await AsyncStorage.setItem('isChecked_repiratoryinsuf',isChecked_repiratoryinsuf.toString());

      isEnabled_digestive &&await AsyncStorage.setItem('isEnabled_digestive',isEnabled_digestive.toString());
      isChecked_ulcer &&await AsyncStorage.setItem('isChecked_ulcer',isChecked_ulcer.toString());
      isChecked_gastritis &&await AsyncStorage.setItem('isChecked_gastritis',isChecked_gastritis.toString());
      isChecked_colonirrit &&await AsyncStorage.setItem('isChecked_colonirrit',isChecked_colonirrit.toString());

      isEnabled_kidney &&await AsyncStorage.setItem('isEnabled_kidney',isEnabled_kidney.toString());
      isChecked_stones &&await AsyncStorage.setItem('isChecked_stones',isChecked_stones.toString());
      isChecked_renalinsuf &&await AsyncStorage.setItem('isChecked_renalinsuf',isChecked_renalinsuf.toString());

      isEnabled_genetic &&await AsyncStorage.setItem('isEnabled_genetic',isEnabled_genetic.toString());
      isEnabled_diabetes &&await AsyncStorage.setItem('isEnabled_diabetes',isEnabled_diabetes.toString());
      checked_treatmentdiabetes &&await AsyncStorage.setItem('checked_treatmentdiabetes',checked_treatmentdiabetes.toString());
      checked_treatmentgenetic &&await AsyncStorage.setItem('checked_treatmentgenetic',checked_treatmentgenetic.toString());

      isEnabled_infection &&await AsyncStorage.setItem('isEnabled_infection',isEnabled_infection.toString());
      isChecked_urinary &&await AsyncStorage.setItem('isChecked_urinary',isChecked_urinary.toString());
      isChecked_sinuses &&await AsyncStorage.setItem('isChecked_sinuses',isChecked_sinuses.toString());
      isChecked_tonsils &&await AsyncStorage.setItem('isChecked_tonsils',isChecked_tonsils.toString());
      isChecked_gallbladder &&await AsyncStorage.setItem('isChecked_gallbladder',isChecked_gallbladder.toString());

      isEnabled_hormonalpb &&await AsyncStorage.setItem('isEnabled_hormonalpb',isEnabled_hormonalpb.toString());
      isChecked_thyroid &&await AsyncStorage.setItem('isChecked_thyroid',isChecked_thyroid.toString());
      isChecked_pituitary &&await AsyncStorage.setItem('isChecked_pituitary',isChecked_pituitary.toString());
      isChecked_polycystics &&await AsyncStorage.setItem('isChecked_polycystics',isChecked_polycystics.toString());
      isChecked_prostate &&await AsyncStorage.setItem('isChecked_prostate',isChecked_prostate.toString());

      isEnabled_senses &&await AsyncStorage.setItem('isEnabled_senses',isEnabled_senses.toString());
      isChecked_sight &&await AsyncStorage.setItem('isChecked_sight',isChecked_sight.toString());
      isChecked_smell &&await AsyncStorage.setItem('isChecked_smell',isChecked_smell.toString());
      isChecked_touch &&await AsyncStorage.setItem('isChecked_touch',isChecked_touch.toString());
      isChecked_taste &&await AsyncStorage.setItem('isChecked_taste',isChecked_taste.toString());
      isChecked_hearing &&await AsyncStorage.setItem('isChecked_hearing',isChecked_hearing.toString());
      navigation.navigate("Chapter 3");
      
  
    }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {
      setChecked_treatment(await AsyncStorage.getItem('treatment'));
      setIsEnabled_treatmentinfection(await AsyncStorage.getItem('treatmentinfection')=='true');
      setIsEnabled_treatmentnaturist(await AsyncStorage.getItem('treatmentnaturist')=='true');
      setIsEnabled_treatmentother(await AsyncStorage.getItem('treatmentother')=='true');
      setIsEnabled_treatmentpressure(await AsyncStorage.getItem('treatmentpressure')=='true');
      onChangeText_treatother(await AsyncStorage.getItem('treatother'));
      setChecked_plants(await AsyncStorage.getItem('plants')=='true');
      setChecked_ayur(await AsyncStorage.getItem('ayur')=='true');
      setChecked_natother(await AsyncStorage.getItem('natother')=='true');
      onChangeText_treatnatureother(await AsyncStorage.getItem('treatnatureother'));
      
      setChecked_allergiesante(await AsyncStorage.getItem('checked_allergiesante'));
      setChecked_treatmentallergiesante(await AsyncStorage.getItem('checked_treatmentallergiesante'));
      setChecked_pressureante(await AsyncStorage.getItem('checked_pressureante'));
      setChecked_treatmentpressureante(await AsyncStorage.getItem('checked_treatmentpressureante'));
      setChecked_heartante(await AsyncStorage.getItem('checked_heartante'));
      setChecked_treatmentheartante(await AsyncStorage.getItem('checked_treatmentheartante'));
      setChecked_renalante(await AsyncStorage.getItem('checked_renalante'));
      setChecked_treatmentrenalante(await AsyncStorage.getItem('checked_treatmentrenalante'));
      setChecked_otherante(await AsyncStorage.getItem('checked_otherante'));
      setChecked_treatmentotherante(await AsyncStorage.getItem('checked_treatmentotherante'));
      setChecked_vascularante(await AsyncStorage.getItem('checked_vascularante'));
      setChecked_treatmentvascularante(await AsyncStorage.getItem('checked_treatmentvascularante'));
      setChecked_digestiveante(await AsyncStorage.getItem('checked_digestiveante'));
      setChecked_treatmentdigestiveante(await AsyncStorage.getItem('checked_treatmentdigestiveante'));
      setChecked_infectionante(await AsyncStorage.getItem('checked_infectionante'));
      setChecked_treatmentinfectionante(await AsyncStorage.getItem('checked_treatmentinfectionante'));

      setChecked_toxic(await AsyncStorage.getItem('checked_toxic'));
      setChecked_sport(await AsyncStorage.getItem('checked_sport'));
      setSelectedage(await AsyncStorage.getItem('selectedage'));
      const pEff = await AsyncStorage.getItem('value');
        {pEff !== null ? setValue(parseInt(pEff)) : null};
      setChecked_urinate(await AsyncStorage.getItem('checked_urinate'));

      setChecked(await AsyncStorage.getItem('sex'));
      setChecked_menopause(await AsyncStorage.getItem('checked_menopause'));
      setChecked_hormone(await AsyncStorage.getItem('checked_hormone'));
      setChecked_contra(await AsyncStorage.getItem('checked_contra'));
      setChecked_birth(await AsyncStorage.getItem('checked_birth'));
      setChecked_breastfeed(await AsyncStorage.getItem('checked_breastfeed'));
      setChecked_caesarean(await AsyncStorage.getItem('checked_caesarean'));
      setChecked_abort(await AsyncStorage.getItem('checked_abort'));
      setChecked_lostpreg(await AsyncStorage.getItem('checked_lostpreg'));
      setChecked_path(await AsyncStorage.getItem('checked_path'));
      setChecked_breastpb(await AsyncStorage.getItem('checked_breastpb'));
      setChecked_inspect(await AsyncStorage.getItem('checked_inspect'));
    
      setIsEnabled_gestdiab(await AsyncStorage.getItem('gestidan')=='true');
      setChecked_pregpb(await AsyncStorage.getItem('pregpb'));
      setIsEnabled_othergestpb(await AsyncStorage.getItem('othergestpb')=='true');
      setChecked_consultgyn(await AsyncStorage.getItem('consultgyn'));
      setChecked_papanicolau(await AsyncStorage.getItem('papanicolau'));
      onChangeText_menopausedate(await AsyncStorage.getItem('menopause_date'));
      onChangeText_abortionhow(await AsyncStorage.getItem('abortionhow'));

      onChangeText_abortionmany(await AsyncStorage.getItem('abortionmany'));
      onChangeText_abortionwhen(await AsyncStorage.getItem('abortionwhen'));
      onChangeText_caesarean(await AsyncStorage.getItem('caesareandate'));
      onChangeText_medications_hormone(await AsyncStorage.getItem('medications_hormone'));
      onChangeText_medications_hormonedate(await AsyncStorage.getItem('hormonedate'));

      onChangeText_medications_contra(await AsyncStorage.getItem('medications_contra'));
      onChangeText_medications_contradate(await AsyncStorage.getItem('medications_contradate'));
      onChangeText_nbcaesarean(await AsyncStorage.getItem('nbcaesarean'));
      onChangeText_lostpreghow(await AsyncStorage.getItem('lostpreghow'));
      onChangeText_lostpregmany(await AsyncStorage.getItem('lostpregmany'));
      onChangeText_lostpregwhen(await AsyncStorage.getItem('lostpregwhen'));
      onChangeText_pathodate(await AsyncStorage.getItem('pathodate'));
      onChangeText_pathohow(await AsyncStorage.getItem('pathohow'));
      onChangeText_pathomany(await AsyncStorage.getItem('pathomany'));

      onChangeText_inspect(await AsyncStorage.getItem('inspect'));
      onChangeText_othersgynpb(await AsyncStorage.getItem('othersgynpb'));
      onChangeText_papanicolau(await AsyncStorage.getItem('papanicolau'));
      setDate_firstmenst(new Date(await AsyncStorage.getItem('date_firstmenst')));
      setDate_lastmenst(new Date(await AsyncStorage.getItem('date_lastmenst')));

      setChecked_venous(await AsyncStorage.getItem('isChecked_venous')=='true');
      setChecked_arterita(await AsyncStorage.getItem('isChecked_arterita')=='true');
      setChecked_aneurysm(await AsyncStorage.getItem('isChecked_aneurysm')=='true');
      setChecked_angina(await AsyncStorage.getItem('isChecked_angina')=='true');
      setChecked_arrhythmia(await AsyncStorage.getItem('isChecked_arrhythmia')=='true');
      setChecked_stents(await AsyncStorage.getItem('isChecked_stents')=='true');
      setChecked_insuf(await AsyncStorage.getItem('isChecked_insuf')=='true');
      setIsEnabled_heart(await AsyncStorage.getItem('isEnabled_heart')=='true');

      setIsEnabled_food(await AsyncStorage.getItem('isEnabled_food')=='true');
      setChecked_severefood(await AsyncStorage.getItem('checked_severefood'));
      setIsEnabled_drugs(await AsyncStorage.getItem('isEnabled_drugs')=='true');
      setChecked_severedrugs(await AsyncStorage.getItem('checked_severedrugs'));
      setIsEnabled_seasonal(await AsyncStorage.getItem('isEnabled_seasonal')=='true');
      setChecked_severeseason(await AsyncStorage.getItem('checked_severeseason'));
      setIsEnabled_others(await AsyncStorage.getItem('isEnabled_others')=='true');
      setChecked_severeothers(await AsyncStorage.getItem('checked_severeothers'));
      onChangeText_trigger(await AsyncStorage.getItem('trigger'));
      setChecked_hospit(await AsyncStorage.getItem('checked_hospit'));
      setChecked_allergies(await AsyncStorage.getItem('checked_allergies'));

      onChangeText_allergies_food(await AsyncStorage.getItem('allergies_food'));
      onChangeText_allergies_drugs(await AsyncStorage.getItem('allergies_drugs'));
      onChangeText_allergies_seasonal(await AsyncStorage.getItem('allergies_seasonal'));
      onChangeText_allergies_others(await AsyncStorage.getItem('allergies_others'));
      onChangeText_medications_food(await AsyncStorage.getItem('medications_food'));
      onChangeText_medications_drugs(await AsyncStorage.getItem('medications_drugs'));
      onChangeText_medications_seasonal(await AsyncStorage.getItem('medications_seasonal'));
      onChangeText_medications_others(await AsyncStorage.getItem('medications_others'));

      onChangeText_booster1(await AsyncStorage.getItem('booster1'));
      onChangeText_booster2(await AsyncStorage.getItem('booster2'));
      onChangeText_booster3(await AsyncStorage.getItem('booster3'));
      onChangeText_booster4(await AsyncStorage.getItem('booster4'));
      onChangeText_booster5(await AsyncStorage.getItem('booster5'));
      onChangeText_booster6(await AsyncStorage.getItem('booster6'));
      onChangeText_booster7(await AsyncStorage.getItem('booster7'));
      onChangeText_booster8(await AsyncStorage.getItem('booster8'));
      onChangeText_booster9(await AsyncStorage.getItem('booster9'));
      onChangeText_booster10(await AsyncStorage.getItem('booster10'));
      onChangeText_booster11(await AsyncStorage.getItem('booster11'));

      setChecked_events(await AsyncStorage.getItem('checked_events'));
      onChangeText_vax_events(await AsyncStorage.getItem('vax_events'));
      setChecked_vax(await AsyncStorage.getItem('checked_vax'));
      setChecked_pb(await AsyncStorage.getItem('checked_pb'));
      setIsEnabled_vax1(await AsyncStorage.getItem('isEnabled_vax1')=='true');
      setIsEnabled_vax2(await AsyncStorage.getItem('isEnabled_vax2')=='true');
      setIsEnabled_vax3(await AsyncStorage.getItem('isEnabled_vax3')=='true');
      setIsEnabled_vax4(await AsyncStorage.getItem('isEnabled_vax4')=='true');
      setIsEnabled_vax5(await AsyncStorage.getItem('isEnabled_vax5')=='true');
      setIsEnabled_vax6(await AsyncStorage.getItem('isEnabled_vax6')=='true');
      setIsEnabled_vax7(await AsyncStorage.getItem('isEnabled_vax7')=='true');
      setIsEnabled_vax8(await AsyncStorage.getItem('isEnabled_vax8')=='true');
      setIsEnabled_vax9(await AsyncStorage.getItem('isEnabled_vax9')=='true');
      setIsEnabled_vax10(await AsyncStorage.getItem('isEnabled_vax10')=='true');
      setIsEnabled_vax11(await AsyncStorage.getItem('isEnabled_vax11')=='true');

      setChecked_surgery(await AsyncStorage.getItem('checked_surgery'));
      setChecked_appendic(await AsyncStorage.getItem('isChecked_appendic')=='true');
      setChecked_tonsilssurgery(await AsyncStorage.getItem('isChecked_tonsilssurgery')=='true');
      setChecked_gallbladdersurgery(await AsyncStorage.getItem('isChecked_gallbladdersurgery')=='true');
      setChecked_innguinal(await AsyncStorage.getItem('isChecked_innguinal')=='true');
      setChecked_umbilical(await AsyncStorage.getItem('isChecked_umbilical')=='true');

      setChecked_injuries(await AsyncStorage.getItem('checked_injuries'));
      setChecked_accident(await AsyncStorage.getItem('checked_accident'));
      setChecked_sprains(await AsyncStorage.getItem('checked_sprains'));
      setChecked_luxuries_fractures(await AsyncStorage.getItem('checked_luxuries_fractures'));

      setIsEnabled_sleepingpb(await AsyncStorage.getItem('isEnabled_sleepingpb')=='true');
      setSelectedsleep(await AsyncStorage.getItem('selectedsleep'));
      setChecked_dis_sleep(await AsyncStorage.getItem('checked_dis_sleep'));
      setChecked_treat_sleep(await AsyncStorage.getItem('checked_treat_sleep'));
      
      setDate(new Date(await AsyncStorage.getItem('date')));
      
      setChecked_chro(await AsyncStorage.getItem('checked_chro'));
      setIsEnabled_cancer(await AsyncStorage.getItem('isEnabled_cancer')=='true');
      onChangeText_loc(await AsyncStorage.getItem('loc_cancer'));
      onChangeText_phase(await AsyncStorage.getItem('phase_cancer'));
      onChangeText_treatment(await AsyncStorage.getItem('treatment_cancer'));
      onChangeText_begin(await AsyncStorage.getItem('begin_cancer'));
      onChangeText_end(await AsyncStorage.getItem('end_cancer'));
      setChecked_end(await AsyncStorage.getItem('checked_end'));

      onChangeText_diseasegenetic(await AsyncStorage.getItem('diseasegenetic'));
      onChangeText_treatment_hyper(await AsyncStorage.getItem('treatment_hyper'));
      setIsEnabled_hypertension(await AsyncStorage.getItem('isEnabled_hypertension')=='true');

      setIsEnabled_vascular(await AsyncStorage.getItem('isEnabled_vascular')=='true');
      setIsEnabled_lungs(await AsyncStorage.getItem('isEnabled_lungs')=='true');
      setChecked_bronchitis(await AsyncStorage.getItem('isChecked_bronchitis')=='true');
      setChecked_asthma(await AsyncStorage.getItem('isChecked_asthma')=='true');
      setChecked_respiratoryinsuf(await AsyncStorage.getItem('isChecked_repiratoryinsuf')=='true');

      setIsEnabled_digestive(await AsyncStorage.getItem('isEnabled_digestive')=='true');
      setChecked_ulcer(await AsyncStorage.getItem('isChecked_ulcer')=='true');
      setChecked_gastritis(await AsyncStorage.getItem('isChecked_gastritis')=='true');
      setChecked_colonirrit(await AsyncStorage.getItem('isChecked_colonirrit')=='true');

      setIsEnabled_kidney(await AsyncStorage.getItem('isEnabled_kidney')=='true');
      setChecked_stones(await AsyncStorage.getItem('isChecked_stones')=='true');
      setChecked_renalinsuf(await AsyncStorage.getItem('isChecked_renalinsuf')=='true');

      setIsEnabled_genetic(await AsyncStorage.getItem('isEnabled_genetic')=='true');
      setIsEnabled_diabetes(await AsyncStorage.getItem('isEnabled_diabetes')=='true');
      setChecked_treatmentdiabetes(await AsyncStorage.getItem('checked_treatmentdiabetes'));
      setChecked_treatmentgenetic(await AsyncStorage.getItem('checked_treatmentgenetic'));

      setIsEnabled_infection(await AsyncStorage.getItem('isEnabled_infection')=='true');
      setChecked_urinary(await AsyncStorage.getItem('isChecked_urinary')=='true');
      setChecked_sinuses(await AsyncStorage.getItem('isChecked_sinuses')=='true');
      setChecked_tonsils(await AsyncStorage.getItem('isChecked_tonsils')=='true');
      setChecked_gallbladder(await AsyncStorage.getItem('isChecked_gallbladder')=='true');

      setIsEnabled_homonalpb(await AsyncStorage.getItem('isEnabled_hormonalpb')=='true');
      setChecked_thyroid(await AsyncStorage.getItem('isChecked_thyroid')=='true');
      setChecked_pituitary(await AsyncStorage.getItem('isChecked_pituitary')=='true');
      setChecked_polycystics(await AsyncStorage.getItem('isChecked_polycystics')=='true');
      setChecked_prostate(await AsyncStorage.getItem('isChecked_prostate')=='true');

      setIsEnabled_senses(await AsyncStorage.getItem('isEnabled_senses')=='true');
      setChecked_sight(await AsyncStorage.getItem('isChecked_sight')=='true');
      setChecked_touch(await AsyncStorage.getItem('isChecked_touch')=='true');
      setChecked_taste(await AsyncStorage.getItem('isChecked_taste')=='true');
      setChecked_smell(await AsyncStorage.getItem('isChecked_smell')=='true');
      setChecked_hearing(await AsyncStorage.getItem('isChecked_hearing')=='true');

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getChapterInfos().then(()=>{
      setDataIsReady(true);
    });
  },[])

  const renderDropdown_female = () => {
    if (visible_female){
      return(
        <View style={styles.containerDropdown}>
          <View style={styles.logoPart}>
            <Image source={require('../assets/Logo.png')} style={styles.logo}/>
          </View>
            <Text style={styles.label}>Date of first menstruation (Menarha) </Text>
            <View style={styles.chooseDate}>
              <Button color="#BBBBBB" onPress={showDatepicker_firstmenst} title="Choose" />
            </View>
            {show_firstmenst && (<DateTimePicker
              testID="dateTimePicker"
              value={date_firstmenst}
              mode={mode_firstmenst}
              is24Hour={true}
              display="default"
              onChange={onChange_firstmenst}
            />)}
            <Text style={styles.label}>Date of last menstruation </Text>
            <View style={styles.chooseDate}>
              <Button color="#BBBBBB" onPress={showDatepicker_lastmenst} title="Choose" />
            </View>
            {show_lastmenst && (<DateTimePicker
              testID="dateTimePicker"
              value={date_lastmenst}
              mode={mode_lastmenst}
              is24Hour={true}
              display="default"
              onChange={onChange_lastmenst}
            />)}

            <Text style={styles.label}>Are you menopaused ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_menopause === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_menopause('yes')}
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_menopause === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_menopause('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_menopause=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}>Since When ?</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputSince}}
                  onFocus={() => {
                    setBorderColorInputSince("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputSince("#BBBBBB");
                  }}
                  onChangeText={onChangeText_menopausedate}
                  value={menopause_date}
                  placeholder="Year"
                  keyboardType="default"
                />
                <Text style={styles.label}>Are you on Hormonal substitutions? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_hormone === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_hormone('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_hormone === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_hormone('no')}
                      color='cyan'
                    />
                  </View>
                </View>
                {checked_hormone=='yes' &&
                  <View>
                    <Text style={styles.label}> What substance ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputWhat}}
                      onFocus={() => {
                        setBorderColorInputWhat("cyan");
                      }}
                        onBlur={() => {
                          setBorderColorInputWhat("#BBBBBB");
                        }}
                          onChangeText={onChangeText_medications_hormone}
                          value={medications_hormone}
                          placeholder="Your medications"
                          keyboardType="default"
                    />

                    <Text style={styles.label}> For how long ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputFor}}
                      onFocus={() => {
                        setBorderColorInputFor("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputFor("#BBBBBB");
                      }}
                      onChangeText={onChangeText_medications_hormonedate}
                      value={hormonedate}
                      placeholder="Year"
                      keyboardType="default"
                    />
                  </View>
                }
              </View>
            }

            <Text style={styles.label}>Are you on a contraceptive treatment? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_contra === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_contra('yes')}
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_contra === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_contra('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_contra=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> What substance ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputWhat2}}
                  onFocus={() => {
                    setBorderColorInputWhat2("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputWhat2("#BBBBBB");
                  }}
                  onChangeText={onChangeText_medications_contra}
                  value={medications_contra}
                  placeholder="Your medications"
                  keyboardType="default"
                />

                <Text style={styles.label}> For how long ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputFor2}}
                  onFocus={() => {
                    setBorderColorInputFor2("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputFor2("#BBBBBB");
                  }}
                  onChangeText={onChangeText_medications_contradate}
                  value={contradate}
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_birth === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_birth('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_birth=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}>Did you breastfeed ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_breastfeed === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_breastfeed('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_breastfeed === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_breastfeed('no')}
                      color='cyan'
                    />
                  </View>
                </View>
                <Text style={styles.label}>Did you got a Caesarean ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_caesarean === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_caesarean('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_caesarean === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_caesarean('no')}
                      color='cyan'
                    />
                  </View>
                </View>
                {checked_caesarean=='yes' &&
                  <View>
                    <Text style={styles.label}> When ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputWhen}}
                      onFocus={() => {
                        setBorderColorInputWhen("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputWhen("#BBBBBB");
                      }}
                      onChangeText={onChangeText_caesarean}
                      value={caesareandate}
                      placeholder="Year"
                      keyboardType="default"
                    />
                    <Text style={styles.label}> How many ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputHow}}
                      onFocus={() => {
                        setBorderColorInputHow("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputHow("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_abort === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_abort('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_abort=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputWhen2}}
                  onFocus={() => {
                    setBorderColorInputWhen2("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputWhen2("#BBBBBB");
                  }}
                  onChangeText={onChangeText_abortionwhen}
                  value={abortionwhen}
                  placeholder="Year"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow2}}
                  onFocus={() => {
                    setBorderColorInputHow2("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow2("#BBBBBB");
                  }}
                  onChangeText={onChangeText_abortionhow}
                  value={abortionhow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow3}}
                  onFocus={() => {
                    setBorderColorInputHow3("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow3("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_lostpreg === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_lostpreg('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_lostpreg=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputWhen3}}
                  onFocus={() => {
                    setBorderColorInputWhen3("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputWhen3("#BBBBBB");
                  }}
                  onChangeText={onChangeText_lostpregwhen}
                  value={lostpregwhen}
                  placeholder="Year"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow4}}
                  onFocus={() => {
                    setBorderColorInputHow4("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow4("#BBBBBB");
                  }}
                  onChangeText={onChangeText_lostpreghow}
                  value={lostpreghow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow5}}
                  onFocus={() => {
                    setBorderColorInputHow5("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow5("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_path === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_path('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_path=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> When ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputWhen4}}
                  onFocus={() => {
                    setBorderColorInputWhen4("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputWhen4("#BBBBBB");
                  }}
                  onChangeText={onChangeText_pathodate}
                  value={pathodate}
                  placeholder="Your medications"
                  keyboardType="default"
                />
                <Text style={styles.label}> How ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow6}}
                  onFocus={() => {
                    setBorderColorInputHow6("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow6("#BBBBBB");
                  }}
                  onChangeText={onChangeText_pathohow}
                  value={pathohow}
                  placeholder=""
                  keyboardType="default"
                />
                <Text style={styles.label}> How many ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow7}}
                  onFocus={() => {
                    setBorderColorInputHow7("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow7("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_breastpb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_breastpb('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_breastpb=='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> Do you get periodic inspection ? </Text>   
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_inspect === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_inspect('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_inspect === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_inspect('no')}
                      color='cyan'
                    />
                  </View>
                </View>
                {checked_inspect =='yes' &&
                  <View style={styles.container}>
                    <Text style={styles.label}> When ? </Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputYes}}
                      onFocus={() => {
                        setBorderColorInputYes("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputYes("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_pregpb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pregpb('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_pregpb =='yes' &&
              <View style={styles.subcontainer2}>
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
                      style={{...styles.input,borderColor:borderColorInputWhat3}}
                      onFocus={() => {
                        setBorderColorInputWhat3("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputWhat3("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_consultgyn === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_consultgyn('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_consultgyn =='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.sublabel}> When was the last one ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputYes2}}
                  onFocus={() => {
                    setBorderColorInputYes2("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputYes2("#BBBBBB");
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_papanicolau === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_papanicolau('no')}
                  color='cyan'
                />
              </View>
            </View>
            {checked_papanicolau =='yes' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.sublabel}> When was the last one ? </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputYes3}}
                  onFocus={() => {
                    setBorderColorInputYes3("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputYes3("#BBBBBB");
                  }}
                  onChangeText={onChangeText_papanicolau}
                  value={papanicolau}
                  placeholder="Year"
                  keyboardType="default"
                />
              </View>
            }
          </View>

      );
    }
  };

  const renderDropdown_surgery = () => {
    if (visible_surgery){
      return(
        <View style={styles.containerDropdown}>
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

      );
    }
  };

  const renderDropdown_injuries = () => {
    if (visible_injuries){
      return(
        <View style={styles.containerDropdown}>
            <Text style={styles.label}> Did you had any accidents (car/sport) ? </Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ checked_accident === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_accident('yes')}
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_accident === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_accident('no')}
                  color='cyan'
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_sprains === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_sprains('no')}
                  color='cyan'
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
                  color='cyan'
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_luxuries_fractures === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_luxuries_fractures('no')}
                  color='cyan'
                />
              </View>
            </View>
        </View>

      );
    }
  };

  const renderDropdown_male = () => {
    if (visible_male){
      return(
        <View style={styles.containerDropdown}>
            <Text style={styles.label}> Your age range </Text>
            <View style={styles.dropdown}>
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
            </View>

            {selectedage =='less_40' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> Are you in a toxic environnement ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_toxic === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_toxic('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_toxic === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_toxic('no')}
                      color='cyan'
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
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_sport === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_sport('no')}
                      color='cyan'
                    />
                  </View>
                </View>
              </View>

            }
            {selectedage=='40_65' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}>Level of stress</Text>
                <View style={[styles.contentView]}>
                  <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={10}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                      children: (
                        <Icon
                        name="heartbeat"
                        type="font-awesome"
                        size={20}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color={'#18acb9'}
                      />
                      ),
                    }}
                  />
                  <Text style={{ paddingTop: 10 }}>Value: {value}</Text>
                </View>

              </View>
            }
            {selectedage=='more_65' &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}> Wake up at night to urinate more than once ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_urinate === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_urinate('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_urinate === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_urinate('no')}
                      color='cyan'
                    />
                  </View>
                </View>
              </View>

            }
          </View>

      );
    }
  };

  const renderDropdown_treatment = () => {
    if (visible_treatment){
      return(
        <View style={styles.containerDropdown}>
            <View style={styles.switchbox}>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_treatmentpressure? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_treatmentpressure}
                  value={isEnabled_treatmentpressure}
                />
                <Text style={styles.label}> Pressure </Text>
                <Text>
                
                </Text>
              </View>
            </View>
            <View style={styles.switchbox}>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_treatmentinfection? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_treatmentinfection}
                  value={isEnabled_treatmentinfection}
                />
                <Text style={styles.label}> Infection </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            <View style={styles.switchbox}>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_treatmentother? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_treatmentother}
                  value={isEnabled_treatmentother}
                />
                <Text style={styles.label}> Other </Text>
                <Text>
                
                </Text>
              </View>

            </View>
            {isEnabled_treatmentother &&
                  <View style={styles.subcontainer2}>
                    <Text style={styles.label}>Which one ?</Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputWhich}}
                      onFocus={() => {
                        setBorderColorInputWhich("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputWhich("#BBBBBB");
                      }}
                      onChangeText={onChangeText_treatother}
                      value={treatother}
                      placeholder="Treatment "
                      keyboardType="default"
                    />
                  </View>
                }
            <View style={styles.switchbox}>
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_treatmentnaturist? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_treatmentnaturist}
                  value={isEnabled_treatmentnaturist}
                />
                <Text style={styles.label}> Naturist treatment </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_treatmentnaturist &&
              <View style={styles.subcontainer2}>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_plants}
                    onValueChange={setChecked_plants}
                    color={isChecked_plants ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Plants </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_ayur}
                    onValueChange={setChecked_ayur}
                    color={isChecked_ayur ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}> Ayurveda </Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_natother}
                    onValueChange={setChecked_natother}
                    color={isChecked_natother ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Other</Text>
                </View>
                {isChecked_natother &&
                  <View>
                    <Text style={styles.label}>Which one ?</Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputWhich2}}
                      onFocus={() => {
                        setBorderColorInputWhich2("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputWhich2("#BBBBBB");
                      }}
                      onChangeText={onChangeText_treatnatureother}
                      value={treatnatureother}
                      placeholder="Treatment "
                      keyboardType="default"
                    />
                  </View>
                }
              </View>
            }
          </View>

      );
    }
  };

  const renderDropdown_chro = () => {
    if(visible_chro){
      return (  
        <View style={styles.containerDropdown}>
          <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_cancer ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_cancer}
                  value={isEnabled_cancer}
                />
                <Text style={styles.label}> Cancer </Text>
                <Text>
              
                </Text>
              </View>
            </View>
            {isEnabled_cancer &&
            
              <View style={styles.subcontainer2}>

                <Text style={styles.label}>Location</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputLoc}}
                  onFocus={() => {
                    setBorderColorInputLoc("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputLoc("#BBBBBB");
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
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_end === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_end('no')}
                      color='cyan'
                    />
                  </View>
                </View>
                <View style={styles.names}>
                  <View style={styles.firstname}>
                    <Text style={styles.label}>From</Text>
                    <TextInput
                      style={{...styles.input,borderColor:borderColorInputFrom}}
                      onFocus={() => {
                        setBorderColorInputFrom("cyan");
                      }}
                      onBlur={() => {
                        setBorderColorInputFrom("#BBBBBB");
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
                        style={{...styles.input,borderColor:borderColorInputTo}}
                        onFocus={() => {
                          setBorderColorInputTo("cyan");
                        }}
                        onBlur={() => {
                          setBorderColorInputTo("#BBBBBB");
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
                  style={{...styles.input,borderColor:borderColorInputTreat}}
                  onFocus={() => {
                    setBorderColorInputTreat("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputTreat("#BBBBBB");
                  }}
                  onChangeText={onChangeText_treatment}
                  value={treatment_cancer}
                  placeholder="Treatment"
                  keyboardType="default"
                />
                <Text style={styles.label}>Current Phase</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputCur}}
                  onFocus={() => {
                    setBorderColorInputCur("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputCur("#BBBBBB");
                  }}
                  onChangeText={onChangeText_phase}
                  value={phase_cancer}
                  placeholder="Current Phase"
                  keyboardType="default"
                />
              </View>

            }
            <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_hypertension ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_hypertension}
                  value={isEnabled_hypertension}
                />
                <Text style={styles.label}> HyperTension </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_hypertension &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}>How long have you been under Treatment ?</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputHow8}}
                  onFocus={() => {
                    setBorderColorInputHow8("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputHow8("#BBBBBB");
                  }}
                  onChangeText={onChangeText_treatment_hyper}
                  value={treatment_hyper}
                  placeholder="Duration of Treatment"
                  keyboardType="default"
                />
              </View>
            }
 
            <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_vascular ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_vascular}
                  value={isEnabled_vascular}
                />
                <Text style={styles.label}> Vascular diseases </Text>
                <Text>
                
                </Text>
              </View>
            </View>
            {isEnabled_vascular &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_heart ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_heart}
                  value={isEnabled_heart}
                />
                <Text style={styles.label}> Heart diseases </Text>
                <Text>
                
                </Text>
              </View>
            </View>
            {isEnabled_heart &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_lungs ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_lungs}
                  value={isEnabled_lungs}
                />
                <Text style={styles.label}> Lungs diseases </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_lungs &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_digestive ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_digestive}
                  value={isEnabled_digestive}
                />
                <Text style={styles.label}> Digestive diseases </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_digestive &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_genetic? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_genetic}
                  value={isEnabled_genetic}
                />
                <Text style={styles.label}> Genetic diseases </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_genetic &&
              <View style={styles.subcontainer2}>
                <Text style={styles.label}>Which one ?</Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputWhich3}}
                  onFocus={() => {
                    setBorderColorInputWhich3("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputWhich3("#BBBBBB");
                  }}
                  onChangeText={onChangeText_diseasegenetic}
                  value={diseasegenetic}
                  placeholder="Disease "
                  keyboardType="default"
                />
                <Text style={styles.label}>Are you under treatment? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_treatmentgenetic === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treatmentgenetic('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_treatmentgenetic === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treatmentgenetic('no')}
                      color='cyan'
                    />
                  </View>
                </View>
              </View>

            }

            <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_diabetes? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_diabetes}
                  value={isEnabled_diabetes}
                />
                <Text style={styles.label}> Diabetes </Text>
                <Text>
                
                </Text>
              </View>
            </View>
            {isEnabled_diabetes &&
              <View style={styles.subcontainer2}>
              
                <Text style={styles.label}>Are you under treatment? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_treatmentdiabetes === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treatmentdiabetes('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_treatmentdiabetes === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treatmentdiabetes('no')}
                      color='cyan'
                    />
                  </View>
                </View>
              </View>

            }
            
            
            <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_kidney? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_kidney}
                  value={isEnabled_kidney}
                />
                <Text style={styles.label}> Kidney diseases </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_kidney &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_infection ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_infection}
                  value={isEnabled_infection}
                />
                <Text style={styles.label}> Infection </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_infection &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_hormonalpb? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_homonalpb}
                  value={isEnabled_hormonalpb}
                />
                <Text style={styles.label}> Hormonal Problems </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_hormonalpb &&
              <View style={styles.subcontainer2}>
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
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_senses? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_senses}
                  value={isEnabled_senses}
                />
                <Text style={styles.label}> Senses disorders </Text>
                <Text>
                
                </Text>
              </View>
            </View>
            { isEnabled_senses &&
              <View style={styles.subcontainer2}>
                <View style={styles.checkboxContainer}>
                <View style={styles.section_checkbox}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked_sight}
                      onValueChange={setChecked_sight}
                      color={isChecked_sight ? 'cyan' : undefined}
                    />
                    <Text style={styles.paragraph}>Sight</Text>
                </View>
                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_hearing}
                    onValueChange={setChecked_hearing}
                    color={isChecked_hearing ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Hearing</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_taste}
                    onValueChange={setChecked_taste}
                    color={isChecked_taste ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Taste</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_smell}
                    onValueChange={setChecked_smell}
                    color={isChecked_smell ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Smell</Text>
                </View>

                <View style={styles.section_checkbox}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked_touch}
                    onValueChange={setChecked_touch}
                    color={isChecked_touch ? 'cyan' : undefined}
                  />
                  <Text style={styles.paragraph}>Touch</Text>
                </View>

              </View>
              
              </View>
            }

            <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_sleepingpb? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_sleepingpb}
                  value={isEnabled_sleepingpb}
                />
                <Text style={styles.label}> Sleeping disorders </Text>
                <Text>
               
                </Text>
              </View>
            </View>
            {isEnabled_sleepingpb &&
              <View style={styles.subcontainer2}>
                
                <Text style={styles.label}>How many hours do you sleep ?</Text>
                <View style={styles.dropdown}>
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
                </View>
                <Text style={styles.label}> Sleep discontinuously ? </Text>
                <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_dis_sleep === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_dis_sleep('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_dis_sleep === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_dis_sleep('no')}
                      color='cyan'
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
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_treat_sleep === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_treat_sleep('no')}
                      color='cyan'
                    />
                  </View>
                </View>
              </View>
            }


        </View>
      );
    }
  };
  

  const renderDropdown_family = () => {
    if(visible_family){
      return (
        <View style={styles.containerDropdown}>
          <Text style={styles.label}>Do you have any allergies? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_allergiesante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_allergiesante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_allergiesante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_allergiesante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_allergiesante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentallergiesante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentallergiesante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentallergiesante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentallergiesante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Pressure problems antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_pressureante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_pressureante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_pressureante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_pressureante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_pressureante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentpressureante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentpressureante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentpressureante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentpressureante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Infections antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_infectionante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_infectionante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_infectionante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_infectionante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_infectionante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentinfectionante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentinfectionante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentinfectionante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentinfectionante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Heart disease antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_heartante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_heartante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_heartante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_heartante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_heartante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentheartante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentheartante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentheartante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentheartante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Vascular disease antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_vascularante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_vascularante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_vascularante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_vascularante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_vascularante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentvascularante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentvascularante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentvascularante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentvascularante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Digestive disease antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_digestiveante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_digestiveante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_digestiveante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_digestiveante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_digestiveante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentdigestiveante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentdigestiveante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentdigestiveante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentdigestiveante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Renal disease antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_renalante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_renalante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_renalante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_renalante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_renalante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentrenalante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentrenalante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentrenalante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentrenalante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
          <Text style={styles.label}>Other antecedent? </Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked_otherante === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_otherante('yes')}
                color='cyan'
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked_otherante === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked_otherante('no')}
                color='cyan'
              />
            </View>
          </View>
          {checked_otherante=='yes' &&
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>Under treatment? </Text>
              <View style={styles.checkboxview}>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>Yes</Text>
                  <RadioButton
                    value="yes"
                    status={ checked_treatmentotherante === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentotherante('yes')}
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_treatmentotherante === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_treatmentotherante('no')}
                    color='cyan'
                  />
                </View>
              </View>
            </View>
          }
        </View>
      );
    }
  };

  const renderDropdown_vaccine = () => {
    if (visible_vaccine) {
      return (
        <View style={styles.containerDropdown}>
        <Text style={styles.label}>Adverse events which needed medical advise ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_events === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_events('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_events === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_events('no')}
              color='cyan'
            />
          </View>
        </View>
        {checked_events=='yes' &&
          <View >
            <TextInput
              style={{...styles.input,borderColor:borderColorInputYes4}}
              onFocus={() => {
                setBorderColorInputYes4("cyan");
              }}
              onBlur={() => {
                setBorderColorInputYes4("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate}}
              onFocus={() => {
                setBorderColorInputDate("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDiph}}
              onFocus={() => {
                setBorderColorInputDiph("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDiph("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate2}}
              onFocus={() => {
                setBorderColorInputDate2("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate2("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate3}}
              onFocus={() => {
                setBorderColorInputDate3("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate3("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate4}}
              onFocus={() => {
                setBorderColorInputDate4("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate4("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate5}}
              onFocus={() => {
                setBorderColorInputDate5("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate5("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate6}}
              onFocus={() => {
                setBorderColorInputDate6("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate6("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate7}}
              onFocus={() => {
                setBorderColorInputDate7("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate7("#BBBBBB");
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
              style={{...styles.input,borderColor:borderColorInputDate8}}
              onFocus={() => {
                setBorderColorInputDate8("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate8("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate9}}
              onFocus={() => {
                setBorderColorInputDate9("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate9("#BBBBBB");
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
          <View style={styles.subcontainer2}>
            <Text style={styles.label}>Date of your last booster</Text>
            <TextInput
              style={{...styles.input,borderColor:borderColorInputDate10}}
              onFocus={() => {
                setBorderColorInputDate10("cyan");
              }}
              onBlur={() => {
                setBorderColorInputDate10("#BBBBBB");
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

  const renderDropdown_allergies = () => {
    if (visible_allergies) {
      return (
        <View style={styles.containerDropdown}>
          <View style={styles.switchbox}>
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_food ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_food}
                value={isEnabled_food}
              />
            </View>
            <Text style={styles.label}> Food </Text>
          </View>
          {isEnabled_food && 
            <View style={styles.subcontainer2}>
              <Text style={styles.label}> Severe form ? </Text>
              <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_severefood === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severefood('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_severefood === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severefood('no')}
                      color='cyan'
                    />
                  </View>
              </View>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputTo2}}
                onFocus={() => {
                  setBorderColorInputTo2("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputTo2("#BBBBBB");
                }}
                onChangeText={onChangeText_allergies_food}
                value={allergies_food}
                placeholder="Your allergies"
                keyboardType="default"
              />
              <Text style={styles.label}>Medications</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputMed}}
                onFocus={() => {
                  setBorderColorInputMed("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputMed("#BBBBBB");
                }}
                onChangeText={onChangeText_medications_food}
                value={medications_food}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }
        
          <View style={styles.switchbox}>
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_drugs ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_drugs}
                value={isEnabled_drugs}
              />
            </View>
            <Text style={styles.label}> Drugs </Text>
          </View>


          {isEnabled_drugs && 
            <View style={styles.subcontainer2}>
              <Text style={styles.label}> Severe form ? </Text>
              <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_severedrugs === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severedrugs('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_severedrugs === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severedrugs('no')}
                      color='cyan'
                    />
                  </View>
              </View>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputTo3}}
                onFocus={() => {
                  setBorderColorInputTo3("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputTo3("#BBBBBB");
                }}
                onChangeText={onChangeText_allergies_drugs}
                value={allergies_drugs}
                placeholder="Your allergies"
                keyboardType="default"
              />
              <Text style={styles.label}>Medications</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputMed2}}
                onFocus={() => {
                  setBorderColorInputMed2("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputMed2("#BBBBBB");
                }}
                onChangeText={onChangeText_medications_drugs}
                value={medications_drugs}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }
          <View style={styles.switchbox}>
              
              <View style={styles.checkboxview}>
                <Switch
                  trackColor={{ false: "#767577", true: "cyan" }}
                  thumbColor={isEnabled_seasonal ? "#024e4e" : "#024e4e"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_seasonal}
                  value={isEnabled_seasonal}
                />
              </View>
              <Text style={styles.label}> Seasonal </Text>
          </View>

          {isEnabled_seasonal && 
            <View style={styles.subcontainer2}>
              <Text style={styles.label}> Severe form ? </Text>
              <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_severeseason === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severeseason('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_severeseason === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severeseason('no')}
                      color='cyan'
                    />
                  </View>
              </View>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputTo4}}
                onFocus={() => {
                  setBorderColorInputTo4("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputTo4("#BBBBBB");
                }}
                onChangeText={onChangeText_allergies_seasonal}
                value={allergies_seasonal}
                placeholder="Your allergies"
                keyboardType="default"
              />
              <Text style={styles.label}>Medications</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputMed3}}
                onFocus={() => {
                  setBorderColorInputMed3("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputMed3("#BBBBBB");
                }}
                onChangeText={onChangeText_medications_seasonal}
                value={medications_seasonal}
                placeholder="Your medications"
                keyboardType="default"
              />
            </View>
          }

  
          <View style={styles.switchbox}>
            
            <View style={styles.checkboxview}>
              <Switch
                trackColor={{ false: "#767577", true: "cyan" }}
                thumbColor={isEnabled_others ? "#024e4e" : "#024e4e"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch_others}
                value={isEnabled_others}
              />
              <Text style={styles.label}> Others </Text>
            </View>
          </View>
          {isEnabled_others && 
            <View style={styles.subcontainer2}>
              <Text style={styles.label}> Severe form ? </Text>
              <View style={styles.checkboxview}>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>Yes</Text>
                    <RadioButton
                      value="yes"
                      status={ checked_severeothers === 'yes' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severeothers('yes')}
                      color='cyan'
                    />
                  </View>
                  <View style={styles.containerbutton}>
                    <Text style={styles.paragraph}>No</Text>
                    <RadioButton
                      value="no"
                      status={ checked_severefood === 'no' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked_severeothers('no')}
                      color='cyan'
                    />
                  </View>
              </View>
              <Text style={styles.label}>To what</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputTo5}}
                onFocus={() => {
                  setBorderColorInputTo5("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputTo5("#BBBBBB");
                }}
                onChangeText={onChangeText_allergies_others}
                value={allergies_others}
                placeholder="Your allergies"
                keyboardType="default"
              />
              <Text style={styles.label}>Medications</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputMed4}}
                onFocus={() => {
                  setBorderColorInputMed4("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputMed4("#BBBBBB");
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
                  color='cyan'
                  
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ checked_pb === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked_pb('no')}
                  color='cyan'
                />
              </View>
          </View>

          

          {checked_pb=='yes' && 
          
            <View style={styles.subcontainer2}>
              <Text style={styles.label}>When</Text>
              <View style={styles.chooseDate}>
                <Button color="#BBBBBB" onPress={showDatepicker} title="Choose" />
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
                style={{...styles.input,borderColor:borderColorInputTrig}}
                onFocus={() => {
                  setBorderColorInputTrig("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputTrig("#BBBBBB");
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
                    color='cyan'
                  />
                </View>
                <View style={styles.containerbutton}>
                  <Text style={styles.paragraph}>No</Text>
                  <RadioButton
                    value="no"
                    status={ checked_hospit === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked_hospit('no')}
                    color='cyan'
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
      <View style={styles.logoPart}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>
      {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      :
      <ScrollView style={styles.scrollView}>

        <View style={styles.arrows}>
          <Text  style = {styles.headerText}>Medical data</Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 1")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("Chapter 3")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.barre}></View>
        <Text style={styles.label}>Do you have allergies ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              color='cyan'
              status={ checked_allergies === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_allergies('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              color='cyan'
              status={ checked_allergies === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_allergies('no')}
            />
          </View>
        </View>

        {(checked_allergies==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown1}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your allergies.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_allergies()}
            
            </TouchableOpacity>  
          </View>
        }

        <Text style={styles.label}>Have you had any vaccines? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              color='cyan'
              status={ checked_vax === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_vax('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              color='cyan'
              status={ checked_vax === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_vax('no')}
            />
          </View>
        </View>

        

        {(checked_vax==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown3}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your vaccines.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_vaccine()}
            
            </TouchableOpacity>  
          </View>
        }
        

        <Text style={styles.label}>Do you suffer/have you suffered from any chronical diseases? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_chro === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_chro('yes')}
              color='cyan'

            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_chro === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_chro('no')}
              color='cyan'

            />
          </View>
        </View>
        {checked_chro=="yes" &&
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown4}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your Chronical disease.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_chro()}
            
            </TouchableOpacity>  
          </View>

        }

        
        {/* <Text style={styles.label}> Any conflict situations at present ? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_conflict === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_conflict('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_conflict === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_conflict('no')}
              color='cyan'
            />
          </View>
        </View> */}

        <Text style={styles.label}>Have you ever had surgery?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_surgery === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_surgery('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_surgery === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_surgery('no')}
              color='cyan'
            />
          </View>
        </View>
        {checked_surgery=="yes" &&
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown7}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your surgeries.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_surgery()}
            
            </TouchableOpacity>  
          </View>
          
        }

        <Text style={styles.label}>Have you had any significant injuries?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_injuries === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_injuries('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_injuries === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_injuries('no')}
              color='cyan'
            />
          </View>
        </View>
        {checked_injuries=="yes" &&
            <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown8}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your injuries.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_injuries()}
            
            </TouchableOpacity>  
          </View>
          
        }
        
        <Text style={styles.label}>Your Sex : {checked}</Text>
        {console.log("sex = "+checked)}
        {checked==='female' &&
          <View style={styles.container}>
            
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown6}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_female()}
            
            </TouchableOpacity>  
          </View>
          
        }
        {checked==='male' &&
          <View style={styles.container}>
          
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown5}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_male()}
            
            </TouchableOpacity>  
          </View>
          
        }
        <Text style={styles.label}>Are you undergoing any treatments? </Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ checked_treatment === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_treatment('yes')}
              color='cyan'
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ checked_treatment === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setChecked_treatment('no')}
              color='cyan'
            />
          </View>
        </View>
        {checked_treatment=='yes' &&
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown9}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about your treatments.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_treatment()}
            
            </TouchableOpacity>  
          </View>
          
        }

        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Family medical data</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown_family()}
            
            </TouchableOpacity>  
          </View>
          <View style={{margin:5}}>
            <Button title="Submit" onPress={submitChapter2} color="#4bcbd6"/>
          </View>
      </ScrollView>}
    </SafeAreaView>
  );
}

export {Chapter2};

const styles = StyleSheet.create({
  containerDropdown:{
    backgroundColor: "white",
    borderWidth: 1,
    padding:5,
    display:'flex',
    justifyContent:'center'
  },
  arrows:{
    flexDirection:'row',
    alignItems:'center',
  },
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
  },
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
  },
  subcontainer:{
    backgroundColor: 'white',
  },
  subcontainer2:{
    backgroundColor: 'white',
    paddingLeft:5,
    paddingRight:5,
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
    backgroundColor:'white',
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
    color: '#18acb9',
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
    width:"75%",
    fontSize: 18,
    color: '#18acb9',
    marginTop : 20,
    margin: 12,
    fontFamily:"Montserrat_700Bold"
  },
  headerText2: {
    fontSize: 16,
    color: 'white',
    margin: 12,
    fontFamily:"Montserrat_400Regular"
  },
  label: {
    fontSize: 16,
    color: '#18acb9',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  checkboxContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    fontFamily:"Montserrat_400Regular",
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
  dropdown:{
    borderWidth:1,
    borderRadius:6,
    borderColor: '#BBBBBB',
  }
});

