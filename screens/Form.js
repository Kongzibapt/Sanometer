import { StatusBar } from 'expo-status-bar';
import react , { useEffect }from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Button, Image} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Chapter1 } from './Chapter1.js';
import { Chapter2 } from './Chapter2.js';
import { Chapter3 } from './Chapter3.js';
import { Chapter4 } from './Chapter4.js';
import { Chapter5 } from './Chapter5.js';
import { Chapter6 } from './Chapter6.js';
import { Chapter7 } from './Chapter7.js';
import { ParametrePhysio } from './ParametrePhysio.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Form = function({navigation}) {

  

  useEffect(()=>{
    // getChapterInfos().then(()=>{
    //   setDataIsReady(true);
    // });
  },[])

  

  return (
    <SafeAreaView style={styles.container}>
      {/* {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      : */}
      <View style={styles.logoPart}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Choose a chapter : </Text>
        {/* <View style={styles.button}>
          <Button
            title="Get started"
            onPress={() => navigation.navigate(Chapter1)}
            color="#18acb9"
          />
        </View> */}
        <View style={styles.containerbutton}>
        <View style={styles.button}>
          <Button
            title="Personal data"
            onPress={() => navigation.navigate('Chapter 1')}
            color="#18acb9"
            border="none"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Medical data"
            onPress={() => navigation.navigate('Chapter 2')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Psychological data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 3')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Emotional profile"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 4')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Physical data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 5')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Life style"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 6')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Paraclinical data"
            style={styles.button}
            onPress={() => navigation.navigate('Chapter 7')}
            color="#18acb9"
          />
        </View>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="Physiogical parameters"
            style={styles.button}
            onPress={() => navigation.navigate('Parametre Physio')}
            color="#18acb9"
          />
        </View>
      </View>
      </ScrollView>
    {/* } */}
    </SafeAreaView>
  );
}


export {Form};

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
  checkboxview:{
    display:'flex',
    flexDirection:'row',
    margin:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  containerbutton:{
    flex:1,
    paddingRight:10,
    position:'relative',
    width:"100%",
    height:"20%"
  },
  button:{
    fontSize: 17.2,
    fontFamily: "Montserrat_600SemiBold",
    width:"100%",
    justifyContent: 'center',
    position:'relative'
  },
  firstname:{
    flex:1,
    paddingRight:10
  },
  lastname:{
    flex:1,
    paddingRight:10
  },
  logoPart:{
    padding:"8%"
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
