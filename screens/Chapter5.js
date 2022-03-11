import { StatusBar } from 'expo-status-bar';
import react , { useEffect }from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Button} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chapter5 = function({navigation}) {

  const [height, onChangeText1] = react.useState(null);
  const [weight, onChangeText2] = react.useState(null);
  const [abdominal_param, onChangeText3] = react.useState(null);
  const [thigh_perim, onChangeText4] = react.useState(null);
  const [ankle_perim, onChangeText5] = react.useState(null);
  const [pressure, onChangeText6] = react.useState(null);
  const [pulse, onChangeText7] = react.useState(null);
  const [dataIsReady,setDataIsReady]=react.useState(false);

  const submitChapter5 = async () => {
    try {     
      height && await AsyncStorage.setItem('height',height);
      weight && await AsyncStorage.setItem('weight',weight);
      abdominal_param && await AsyncStorage.setItem('abdominal_param',abdominal_param);
      thigh_perim && await AsyncStorage.setItem('thigh_perim',thigh_perim);
      ankle_perim && await AsyncStorage.setItem('ankle_perim',ankle_perim);
      pressure && await AsyncStorage.setItem('pressure',pressure);
      pulse && await AsyncStorage.setItem('pulse',pulse);
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
      {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      :
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Enter your physical parameters : </Text>
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
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter5} color="#4bcbd6"/>
        </View>
      </ScrollView>
    }
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
