import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Chapter1 } from './screens/Chapter1.js';
import { Chapter2 } from './screens/Chapter2.js';
import { Chapter3 } from './screens/Chapter3.js';
import { Chapter4 } from './screens/Chapter4.js';
import { Chapter5 } from './screens/Chapter5.js';
import { Chapter6 } from './screens/Chapter6.js';
import { Chapter7 } from './screens/Chapter7.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react, { useEffect } from 'react';
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
import { sexAndAgeAdvices } from './utils/functions_Bapt.js';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

  const [firstname,setFirstname] = React.useState("");
  const [lastname,setLastname] = React.useState("");
  const [advice,setAdvice] = React.useState("");

  sexAndAgeAdvices();

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

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',() =>{
      getInfos();
    });
    getInfos();
  },[])


  return (
    <View style={styles.homepage}>

      <View style={{ flex: 1,justifyContent: 'center',alignItems:'center', backgroundColor:'#18acb9', height:"130%", flexGrow:2}}>
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
        <Text>{advice}</Text>
      </View>
    </View>
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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chapter 1" component={Chapter1} />
          <Stack.Screen name="Chapter 2" component={Chapter2} />
          <Stack.Screen name="Chapter 3" component={Chapter3} />
          <Stack.Screen name="Chapter 4" component={Chapter4} />
          <Stack.Screen name="Chapter 5" component={Chapter5} />
          <Stack.Screen name="Chapter 6" component={Chapter6} />
          <Stack.Screen name="Chapter 7" component={Chapter7} />
        </Stack.Navigator>
      </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  homepage:{
    display:'flex',
    flexDirection:'row'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 14,
    fontFamily:"Montserrat_400Regular",
    width:"100%",
    justifyContent: 'center',
    position:'relative',

  },
  containerbutton : {
    position:'relative',
    width:"100%",
    height:"20%"
  },
  input: {
    flex:0.2,
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
  labelname: {
    fontSize: 16,
    color: 'white',
    fontFamily:"Montserrat_400Regular",
    position:'absolute',
    top:120,
    left:17,

  },
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily:"Montserrat_400Regular",
    margin:12,
  },
});
