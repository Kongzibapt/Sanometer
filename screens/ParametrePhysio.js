import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const ParametrePhysio = function({navigation}) {

  
  const [dataIsReady,setDataIsReady] = react.useState(false);
  
  const [bloodsugar, setBloodSugar] = react.useState("");
  const [bloodsugar2, setBloodSugar2] = react.useState("");
  
  const [thirsty, setthirst] = react.useState("");
  const [physiourinate, setphysiourinate] = react.useState("");
  const [weightloss, setweightloss] = react.useState("");
  const [tired, settired] = react.useState("");
  const [blurryvision, setblurryvision] = react.useState("");
  const [emptysto, setemptysto] = react.useState("");
  const [glysymp, setglysymp] = react.useState("");
  const [groinpain, setgroinpain] = react.useState("");
  const [groinpainsympt, setgroinpainsympt] = react.useState("");

  // Style
  const [borderColorInputBloodSugar,setBorderColorInputBloodSugar] = react.useState("black");
  

  const submitParametrePhysio = async () => {
    try {     
      bloodsugar && await AsyncStorage.setItem('bloodsugar',bloodsugar);
      bloodsugar2 && await AsyncStorage.setItem('bloodsugar2',bloodsugar2);
      thirsty && await AsyncStorage.setItem('thirsty',thirsty.toString());
      physiourinate && await AsyncStorage.setItem('physiourinate',physiourinate.toString());
      weightloss && await AsyncStorage.setItem('weightloss',weightloss.toString());
      tired && await AsyncStorage.setItem('tired',tired.toString());
      blurryvision && await AsyncStorage.setItem('blurryvision',blurryvision.toString());
      emptysto && await AsyncStorage.setItem('emptysto',emptysto.toString());
      glysymp && await AsyncStorage.setItem('glysymp',glysymp.toString());
      groinpain && await AsyncStorage.setItem('groinpain',groinpain.toString());
      groinpainsympt && await AsyncStorage.setItem('groinpainsympt',groinpainsympt.toString());
      
      navigation.navigate("FormMenu");
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {     
      setBloodSugar(await AsyncStorage.getItem('bloodsugar'));
      setBloodSugar2(await AsyncStorage.getItem('bloodsugar2'));
      setthirst(await AsyncStorage.getItem('thirsty'));
      setphysiourinate(await AsyncStorage.getItem('physiourinate'));
      setweightloss(await AsyncStorage.getItem('weightloss'));
      settired(await AsyncStorage.getItem('tired'));
      setblurryvision(await AsyncStorage.getItem('blurryvision'));
      
      setemptysto(await AsyncStorage.getItem('emptysto'));
      setglysymp(await AsyncStorage.getItem('glysymp'));
      setgroinpain(await AsyncStorage.getItem('groinpain'));
      setgroinpainsympt(await AsyncStorage.getItem('groinpainsympt'));
        
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
          <Text  style = {styles.headerText}>Enter your changes in Physiological parameters : </Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 7")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("FormMenu")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
       <View style = {styles.barre}></View>

        <Text style={styles.label}>Do you experience intense thirst (when not exercising/high heat) ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ thirsty === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setthirst('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ thirsty === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setthirst('no')}
            />
          </View>
        </View>

        <Text style={styles.label}>Do you feel the need to urinate more frequently than usual ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ physiourinate === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setphysiourinate('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ physiourinate === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setphysiourinate('no')}
            />
          </View>
        </View>

        <Text style={styles.label}>Have you lost any weight without any dietary changes ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ weightloss === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setweightloss('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ weightloss === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setweightloss('no')}
            />
          </View>
        </View>

        <Text style={styles.label}>Do you feel tired or have blurred vision ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ tired === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => settired('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ tired === 'no' ? 'checked' : 'unchecked' }
              onPress={() => settired('no')}
            />
          </View>
        </View>

        {/* <Text style={styles.label}>Do you have a blurred vision ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ blurryvision === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setblurryvision('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ blurryvision === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setblurryvision('no')}
            />
          </View>
        </View> */}

        {//(blurryvision === "yes" && tired === "yes" && weightloss === "yes" && physiourinate === "yes"&& thirsty=== "yes") ?
}
        {(tired === "yes" && weightloss === "yes" && physiourinate === "yes"&& thirsty=== "yes") ?
          <View>
            <View>
              <Text style={styles.label}>Your Blood Sugar Levels</Text>
              <TextInput
                style={{...styles.input,borderColor:borderColorInputBloodSugar}}
                onFocus={() => {
                  setBorderColorInputBloodSugar("cyan");
                }}
                onBlur={() => {
                  setBorderColorInputBloodSugar("black");
                }}
                onChangeText={setBloodSugar}
                value={bloodsugar}
                placeholder="Level in g/L, example : 1.2g/L"
                keyboardType="default"
              />
              
            </View>

            <Text style={styles.label}>Are you measuring on an empty stomach ?</Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ emptysto === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setemptysto('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ emptysto === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setemptysto('no')}
                />
              </View>
            </View>

            <Text style={styles.label}>Do you have symptoms ?</Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ glysymp === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setglysymp('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ glysymp === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setglysymp('no')}
                />
              </View>
            </View>

            {(emptysto==="yes")?
              
              <View>
                <Text style={styles.label}>Your Second measure of your Blood Sugar Levels </Text>
                <TextInput
                  style={{...styles.input,borderColor:borderColorInputBloodSugar}}
                  onFocus={() => {
                    setBorderColorInputBloodSugar("cyan");
                  }}
                  onBlur={() => {
                    setBorderColorInputBloodSugar("black");
                  }}
                  onChangeText={setBloodSugar2}
                  value={bloodsugar2}
                  placeholder="Level in g/L, example : 1.2g/L"
                  keyboardType="default"
                />
                
              </View>
            
              :
              null
            }
          </View>
          :
          null
         }

        

        <Text style={styles.label}>Do you have any pain or swelling in the groin area ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ groinpain === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => setgroinpain('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ groinpain === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setgroinpain('no')}
            />
          </View>
        </View> 

        {groinpain === "yes" ?
          <View>
            <Text style={styles.label}>Are the symptoms disappearing when you lay down and coming back when you are standing, coughing and lifting weights  ?</Text>
            <View style={styles.checkboxview}>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>Yes</Text>
                <RadioButton
                  value="yes"
                  status={ groinpainsympt === 'yes' ? 'checked' : 'unchecked' }
                  onPress={() => setgroinpainsympt('yes')}
                />
              </View>
              <View style={styles.containerbutton}>
                <Text style={styles.paragraph}>No</Text>
                <RadioButton
                  value="no"
                  status={ groinpainsympt === 'no' ? 'checked' : 'unchecked' }
                  onPress={() => setgroinpainsympt('no')}
                />
              </View>
            </View>
          </View>
          :
          null 
        }
        
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitParametrePhysio} color="#4bcbd6"/>
        </View>
      </ScrollView>
      }
    </SafeAreaView>

    
  );
}

export {ParametrePhysio};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  names:{
    display:'flex',
    flexDirection:'row'
  },
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
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
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
  },
  arrows:{
    flexDirection:'row',
    alignItems:'center',
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
    marginHorizontal: 20,
  },
});
