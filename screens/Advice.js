import { StatusBar } from 'expo-status-bar';
import react , { useEffect }from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Button, Image, FlatList} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { IMCAdvices, metabolicAdvice, sexAndAgeAdvices, smokeAdvices, bloodSugarAdvices, bloodSugarLevelAdvices, groinAdvices, contraceptionAdvices, BMIAdvices } from '../utils/functions.js';
import {score_param} from "../utils/modelIA_ParaPhysio.js";
import {score_chapter1} from "../utils/modelIA_C1.js";
import { useIsFocused } from "@react-navigation/native";
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Advice = function({navigation}) {

  const [advice,setAdvice] = React.useState([]);

  fillAdvice = () => {
    console.log("fillAdvice");
    
    sexAndAgeAdvices().then((response)=>{
     
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    IMCAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    metabolicAdvice().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    smokeAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    bloodSugarAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    bloodSugarLevelAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    groinAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    contraceptionAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    BMIAdvices().then((response)=>{
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    score_chapter1().then((response)=>{
      console.log("IA_chap1");
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    
    score_param().then((response)=>{
      console.log("IA_param");
      response && setAdvice(oldAdvice => [...oldAdvice,response]);
    })
    
    
    console.log(advice.length);
    console.log(advice);
  }

  const isFocused = useIsFocused();

  useEffect(()=>{
    // getChapterInfos().then(()=>{
    //   setDataIsReady(true);
    // });
    setAdvice([]);
    fillAdvice();
  },[isFocused])

  

  return (
    <SafeAreaView style={styles.container}>
      {/* {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      : */}
      <View style={styles.logoPart}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Personalized advice for you</Text>
        <View style={styles.ads}>
          {advice.map((ad,index)=>(
            <View style={styles.ad} key={index}>
              <Text  style={styles.advice}>{ad}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    {/* } */}
    </SafeAreaView>
  );
}

export {Advice};

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  names:{
    display:'flex',
    flexDirection:'row'
  },
  ad:{
    marginVertical:10
  },
  advice:{
    textAlign:'justify',
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
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
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
    // backgroundColor: '#18acb9',
    marginHorizontal: 20,
  },
});
