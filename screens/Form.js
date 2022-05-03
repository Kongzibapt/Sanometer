import { StatusBar } from 'expo-status-bar';
import react , { useEffect }from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Button} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Chapter1 } from './Chapter1.js';

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
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Choose a chapter : </Text>
        <View style={styles.button}>
          <Button
            title="Get started"
            onPress={() => navigation.navigate(Chapter1)}
            color="#18acb9"
          />
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
    color: 'black',
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
    // backgroundColor: '#18acb9',
    marginHorizontal: 20,
  },
});
