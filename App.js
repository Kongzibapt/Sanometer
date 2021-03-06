import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,SafeAreaView, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Chapter1 } from './screens/Chapter1.js';
import { Chapter2 } from './screens/Chapter2.js';
import { Chapter3 } from './screens/Chapter3.js';
import { Chapter4 } from './screens/Chapter4.js';
import { Chapter5 } from './screens/Chapter5.js';
import { Chapter6 } from './screens/Chapter6.js';
import { Chapter7 } from './screens/Chapter7.js';
import { ParametrePhysio } from './screens/ParametrePhysio.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react, { useEffect } from 'react';
import { chapter1 } from './utils/modelIA_C1.js';
// import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic
} from '@expo-google-fonts/montserrat'
import { TextInput } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import { AppLoading } from './screens/AppLoading.js';
import { IMCAdvices, metabolicAdvice, sexAndAgeAdvices, smokeAdvices, bloodSugarAdvices, bloodSugarLevelAdvices, groinAdvices, contraceptionAdvices, BMIAdvices } from './utils/functions.js';
import {score_q1, score_q2, score_q3} from "./utils/modelIA_ParaPhysio.js";
import {scoreC1_q1, scoreC1_q2, scoreC1_q3, scoreC1_q4, scoreC1_q5} from "./utils/modelIA_C1.js";
import { useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Advice } from './screens/Advice.js';
import { Form } from './screens/Form.js';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {

  const [firstname,setFirstname] = React.useState("");
  const [lastname,setLastname] = React.useState("");
  const [advice,setAdvice] = React.useState([]);

  const getInfos = async () => {
    try {
      const lastname = await AsyncStorage.getItem('lastname');
      setLastname(lastname);
      const firstname = await AsyncStorage.getItem('firstname');
      setFirstname(firstname);
    }
    catch (error) {
        console.log(error)
    }
  }

  // fillAdvice = () => {
  //   console.log("fillAdvice");
    
  //   sexAndAgeAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   IMCAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   metabolicAdvice().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   smokeAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   bloodSugarAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   bloodSugarLevelAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   groinAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   contraceptionAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   BMIAdvices().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   scoreC1_q1().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   scoreC1_q2().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   scoreC1_q3().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   scoreC1_q4().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   scoreC1_q5().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   score_q1().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   score_q2().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
  //   score_q3().then((response)=>{
  //     response && setAdvice(oldAdvice => [...oldAdvice,response]);
  //   })
    
  //   console.log(advice.length);
  // }
  
  // const isFocused = useIsFocused();

  // useEffect(()=>{
  //   setAdvice([]);
  //   const unsubscribe = navigation.addListener('focus',() =>{
  //     getInfos();
  //   });
  //   getInfos();
  //   fillAdvice();
  //   // chapter1();
  // },[isFocused])


  return (
    <SafeAreaView style={styles.homepage}>
      <View style={styles.logoPart}>
        <Image source={require('./assets/Logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.heroPart}>
        <Text style={styles.heroTxt}>Your health is important to us</Text>
      </View>
      <View style={styles.health}>
        <Image source={require('./assets/Image1.png')} style={styles.healthImg}/>
      </View>
      <View style={styles.heroPart}>
        <Text style={styles.hero2Txt}>How it works</Text>
      </View>
      <View style={styles.schema}>
        <Image source={require('./assets/Image2.png')} style={styles.schemaImg}/>
      </View>
       <View style={styles.containerbutton}>
        <TouchableOpacity onPress={() => navigation.navigate('Form')} style={styles.startButton}>
          <Text style={styles.startTxt}>Get started</Text>
        </TouchableOpacity>
        <Image source={require('./assets/Image3.png')} style={styles.startImg}/>
      </View>
      {/* <View style={{ flex: 1,justifyContent: 'center',alignItems:'center', backgroundColor:'#18acb9', height:"130%", flexGrow:2}}>
        <Image source={require('./logo.png')} style={{ width: 100, height: 80, position:'absolute', top:200, left:20 }}/>
        <Text style={styles.labelname}>Hi {firstname} !</Text>
        <Image source={require('./photo.jpg')} style={{ width: 100, height: 100,position:'absolute', top:10, left:20 }}/>

        <View style={styles.containerbutton}>
        <View style={styles.button}>
          <Button
            title="Personal data"
            onPress={() => navigation.navigate('Chapter 1')}
            color="#18acb9"
            border="none"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Medical data"
            onPress={() => navigation.navigate('Chapter 2')}
            color="#18acb9"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Psychological data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 3')}
            color="#18acb9"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Emotional profile"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 4')}
            color="#18acb9"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Physical data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 5')}
            color="#18acb9"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Life style"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 6')}
            color="#18acb9"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Paraclinical data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 7')}
            color="#18acb9"
          />
        </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: "scroll", flexGrow:3}}>
        <Text style={styles.label}>Find here your advices !</Text>
          <FlatList 
          data={advice}
          renderItem={({item,index,separators}) =>(
            item ? 
            <View key={index}>
              <Text  style={styles.advice}>{item}</Text>
            </View>
            :
            null
        )} />
        <View style={styles.containerbutton}>
          <View style={styles.button}>
            <Button
              title="Physiological Parameters"
              onPress={() => navigation.navigate('Parametre Physio')}
              color="#18acb9"
              border="none"
            />
          </View>
        </View>
      </View> */}
      
    </SafeAreaView>
  );

}

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic
  });

  if (!fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AppLoading">
          <Stack.Screen name="AppLoading" component={AppLoading} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle:{fontFamily: "Montserrat_700Bold"},
          tabBarStyle: { backgroundColor: "#17A8BC", height:65,paddingBottom:5},
          tabBarActiveTintColor:"#FFE01B",
          tabBarInactiveTintColor:"white",
          tabBarHideOnKeyboard: true
        }} >
          <Tab.Screen name="Advice" component={Advice} options={{
            headerShown:false,
            tabBarLabel: "Advice",
            tabBarIcon: (() => {
              return <Image source={require("./assets/Advice.png")} style={{width: 30, height: 30}}/>
            })
          }} />
          <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown:false,
            tabBarLabel: "Home",
            tabBarIcon: (() => {
              return <Image source={require("./assets/Home.png")} style={{width: 30, height: 30}}/>
            })
          }} />
          <Tab.Screen name="Form" component={Form} options={{
            headerShown:false,
            tabBarLabel: "Form",
            tabBarIcon: (() => {
              return <Image source={require("./assets/Form.png")} style={{width: 30, height: 30}}/>
            })
          }} />
          
          {/* <Stack.Screen name="Chapter 1" component={Chapter1} />
          <Stack.Screen name="Chapter 2" component={Chapter2} />
          <Stack.Screen name="Chapter 3" component={Chapter3} />
          <Stack.Screen name="Chapter 4" component={Chapter4} />
          <Stack.Screen name="Chapter 5" component={Chapter5} />
          <Stack.Screen name="Chapter 6" component={Chapter6} />
          <Stack.Screen name="Chapter 7" component={Chapter7} />
          <Stack.Screen name="Parametre Physio" component={ParametrePhysio} /> */}
        </Tab.Navigator>
        <Stack.Screen name="Chapter 1" component={Chapter1} />
      </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  homepage:{
    
  },
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
  },
  health:{
    alignItems: 'center',
    marginTop:20
  },
  healthImg:{
    width:48,
    height:40,
    
  },
  heroTxt:{
    fontSize: 21,
    paddingHorizontal:"20%",
    fontFamily: "Montserrat_600SemiBold",
    textAlign:"center",
    color: '#17A8BC',
    fontWeight: "600"
  },
  heroPart:{
    marginTop:40
  },
  hero2Txt:{
    fontSize: 21,
    fontFamily: "Montserrat_600SemiBold",
    textAlign:"center",
    color: '#18191F',
    fontWeight: "600"
  },
  schema:{
    alignItems: 'center',
    marginTop:20
  },
  schemaImg:{
    width:300,
    height:75,
    
  },
  containerbutton : {
    marginTop:50,
    alignItems: 'center',
  },
  startButton:{
    backgroundColor:"#18acb9",
    marginHorizontal:"15%",
    paddingHorizontal:"5%",
    paddingVertical:"2%",
    borderRadius:5,
    alignItems: 'center',
  },
  startTxt:{
    fontSize:18,
    color:"white",
    fontFamily:"Montserrat_600SemiBold",
    textAlign:"center"
  },
  startImg:{
    marginTop:20,
    width:40,
    height:51
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // button: {
  //   fontSize: 14,
  //   
  //   width:"100%",
  //   justifyContent: 'center',
  //   position:'relative',

  // },
  // containerbutton : {
  //   position:'relative',
  //   width:"100%",
  //   height:"20%"
  // },
  // input: {
  //   flex:0.2,
  //   height: 40,
  //   // margin: 12,
  //   marginBottom:15,
  //   borderWidth: 1,
  //   padding: 10,
  //   backgroundColor:'white',
  //   fontFamily:"Montserrat_400Regular",
  //   borderWidth:2,
  //   borderRadius:5
  // },
  // labelname: {
  //   fontSize: 16,
  //   color: 'white',
  //   fontFamily:"Montserrat_400Regular",
  //   position:'absolute',
  //   top:120,
  //   left:17,

  // },
  // label: {
  //   fontSize: 16,
  //   color: 'black',
  //   fontFamily:"Montserrat_700Bold",
  //   margin:12,
  // },
  // advice:{
  //   fontFamily:"Montserrat_400Regular",
  //   padding:15,
  //   fontSize:12,
  //   textAlign:"center",
  // }
});
