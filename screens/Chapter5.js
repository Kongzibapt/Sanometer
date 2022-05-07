import { StatusBar } from 'expo-status-bar';
import react , { useEffect }from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Button, Image} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chapter5 = function({navigation}) {

  const [height, onChangeText1] = react.useState(null);
  const [weight, onChangeText2] = react.useState(null);
  const [sex, onChangeText9] = react.useState(null);
  const [waist, onChangeText8] = react.useState(null);
  const [abdominal_param, onChangeText3] = react.useState(null);
  const [thigh_perim, onChangeText4] = react.useState(null);
  const [ankle_perim, onChangeText5] = react.useState(null);
  const [pressure, onChangeText6] = react.useState(null);
  const [pulse, onChangeText7] = react.useState(null);
  const [dataIsReady,setDataIsReady]=react.useState(false);
  const [borderColorInputHeight,setBorderColorInputHeight] = react.useState("#BBBBBB");
  const [borderColorInputWeight,setBorderColorInputWeight] = react.useState("#BBBBBB");
  const [borderColorInputWaist,setBorderColorInputWaist] = react.useState("#BBBBBB");
  const [borderColorInputAbdo,setBorderColorInputAbdo] = react.useState("#BBBBBB");
  const [borderColorInputThigh,setBorderColorInputThigh] = react.useState("#BBBBBB");
  const [borderColorInputAnkle,setBorderColorInputAnkle] = react.useState("#BBBBBB");
  const [borderColorInputPressure,setBorderColorInputPressure] = react.useState("#BBBBBB");
  const [borderColorInputPulse,setBorderColorInputPulse] = react.useState("#BBBBBB");

  const submitChapter5 = async () => {
    try {     
      height && await AsyncStorage.setItem('height',height);
      weight && await AsyncStorage.setItem('weight',weight);
      abdominal_param && await AsyncStorage.setItem('abdominal_param',abdominal_param);
      thigh_perim && await AsyncStorage.setItem('thigh_perim',thigh_perim);
      ankle_perim && await AsyncStorage.setItem('ankle_perim',ankle_perim);
      pressure && await AsyncStorage.setItem('pressure',pressure);
      pulse && await AsyncStorage.setItem('pulse',pulse);
      waist && await AsyncStorage.setItem('waist',waist);
      navigation.navigate("Chapter 6");
      
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {     
        onChangeText1(await AsyncStorage.getItem('height'));
        onChangeText2(await AsyncStorage.getItem('weight'));
        onChangeText3(await AsyncStorage.getItem('abdominal_param'));
        onChangeText4(await AsyncStorage.getItem('thigh_perim'));
        onChangeText5(await AsyncStorage.getItem('ankle_perim'));
        onChangeText6(await AsyncStorage.getItem('pressure'));
        onChangeText7(await AsyncStorage.getItem('pulse'));
        onChangeText8(await AsyncStorage.getItem('waist'));
        onChangeText9(await AsyncStorage.getItem('sex'));
    }
    catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getChapterInfos().then(()=>{
      setDataIsReady(true);
    });
  },[])

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
      <View style={styles.logoPart}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>
      {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      :
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Physical parameters</Text>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputHeight}}
          onFocus={() => {
            setBorderColorInputHeight("cyan");
          }}
          onBlur={() => {
            setBorderColorInputHeight('#BBBBBB');
          }}
          onChangeText={onChangeText1}
          value={height}
          placeholder="Your height"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputWeight}}
          onFocus={() => {
            setBorderColorInputWeight("cyan");
          }}
          onBlur={() => {
            setBorderColorInputWeight('#BBBBBB');
          }}
          onChangeText={onChangeText2}
          value={weight}
          placeholder="Your weight"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Waist circumference</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputWaist}}
          onFocus={() => {
            setBorderColorInputWaist("cyan");
          }}
          onBlur={() => {
            setBorderColorInputWaist('#BBBBBB');
          }}
          onChangeText={onChangeText8}
          value={waist}
          placeholder="Your waist circumference"
          keyboardType="default"
        />
        <Text style={styles.label}>Abdominal perimeter</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputAbdo}}
          onFocus={() => {
            setBorderColorInputAbdo("cyan");
          }}
          onBlur={() => {
            setBorderColorInputAbdo('#BBBBBB');
          }}
          onChangeText={onChangeText3}
          value={abdominal_param}
          placeholder="Your abdominal perimeter"
          keyboardType="default"
        />
        <Text style={styles.label}>Thigh perimeter</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputThigh}}
          onFocus={() => {
            setBorderColorInputThigh("cyan");
          }}
          onBlur={() => {
            setBorderColorInputThigh('#BBBBBB');
          }}
          onChangeText={onChangeText4}
          value={thigh_perim}
          placeholder="Your thigh perimeter"
          keyboardType="default"
        />
        <Text style={styles.label}>Ankle perimeter</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputAnkle}}
          onFocus={() => {
            setBorderColorInputAnkle("cyan");
          }}
          onBlur={() => {
            setBorderColorInputAnkle('#BBBBBB');
          }}
          onChangeText={onChangeText5}
          value={ankle_perim}
          placeholder="Your ankle perimeter"
          keyboardType="default"
        />
        <Text style={styles.label}>Pressure</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputPressure}}
          onFocus={() => {
            setBorderColorInputPressure("cyan");
          }}
          onBlur={() => {
            setBorderColorInputPressure('#BBBBBB');
          }}
          onChangeText={onChangeText6}
          value={pressure}
          placeholder="Your pressure"
          keyboardType="default"
        />
        <Text style={styles.label}>Pulse</Text>
        <TextInput
          style={{...styles.input,borderColor:borderColorInputPulse}}
          onFocus={() => {
            setBorderColorInputPulse("cyan");
          }}
          onBlur={() => {
            setBorderColorInputPulse('#BBBBBB');
          }}
          onChangeText={onChangeText7}
          value={pulse}
          placeholder="Your pulse"
          keyboardType="default"
        />
        {(sex=="male") &&
        <Text style={styles.label}>Your RFM is {64-(20*height/waist)}.</Text>
        }
        {(sex=="female") &&
        <Text style={styles.label}>Your RFM is {76-(20*height/waist)}.</Text>
        }
        <Text style={styles.label}>Your Body Mass Index is {weight/((height/100)*(height/100))} kg/m².</Text>
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter5} color="#4bcbd6"/>
        </View>
        <View style={{margin:5}}>
          <Button title="Home" onPress={() => navigation.navigate("Home")} color="#4bcbd6"/>
        </View>
      </ScrollView>
    }
    </SafeAreaView>
  );
}

export {Chapter5};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  logoPart:{
    padding:"8%"
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
    fontSize: 18,
    color: '#18acb9',
    marginTop : 50,
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
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});
