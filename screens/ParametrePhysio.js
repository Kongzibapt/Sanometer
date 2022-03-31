import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const ParametrePhysio = function({navigation}) {

  
  const [dataIsReady,setDataIsReady] = react.useState(false);
  
  const [bloodsugar, setBloodSugar] = react.useState("");
  
  const [thirsty, setthirst] = react.useState(0);
  const [physiourinate, setphysiourinate] = react.useState(0);
  const [weightloss, setweightloss] = react.useState(0);
  const [tiredvision, settiredvision] = react.useState(0);
  const [emptysto, setemptysto] = react.useState(0);
  const [glysymp, setglysymp] = react.useState(0);
  const [groinpain, setgroinpain] = react.useState(0);
  const [groinpainsympt, setgroinpainsympt] = react.useState(0);

  // Style
  const [borderColorInputBloodSugar,setBorderColorInputBloodSugar] = react.useState("black");
  

  const submitParametrePhysio = async () => {
    try {     
      bloodsugar && await AsyncStorage.setItem('bloodsugar',bloodsugar);
      
      thirsty && await AsyncStorage.setItem('thirsty',thirsty.toString());
      physiourinate && await AsyncStorage.setItem('physiourinate',physiourinate.toString());
      weightloss && await AsyncStorage.setItem('weightloss',weightloss.toString());
      tiredvision && await AsyncStorage.setItem('tiredvision',tiredvision.toString());
      emptysto && await AsyncStorage.setItem('emptysto',emptysto.toString());
      glysymp && await AsyncStorage.setItem('glysymp',glysymp.toString());
      groinpain && await AsyncStorage.setItem('groinpain',groinpain.toString());
      groinpainsympt && await AsyncStorage.setItem('groinpainsympt',groinpainsympt.toString());
      
      navigation.navigate("Home");
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try {     
      setBloodSugar(await AsyncStorage.getItem('bloodsugar'));
        
      const pTh = await AsyncStorage.getItem('thirsty');
      {pTh !== null ? setthirst(parseInt(pTh)) : null};
      const pUr = await AsyncStorage.getItem('physiourinate');
        {pUr !== null ? setphysiourinate(parseInt(pUr)) : null};
      const pWL = await AsyncStorage.getItem('weightloss');
        {pWL !== null ? setweightloss(parseInt(pWL)) : null};
      const pTV = await AsyncStorage.getItem('tiredvision');
        {pTV !== null ? settiredvision(parseInt(pTV)) : null};
      const pES = await AsyncStorage.getItem('emptysto');
        {pES !== null ? setemptysto(parseInt(pES)) : null};
      const pGS = await AsyncStorage.getItem('glysymp');
        {pGS !== null ? setglysymp(parseInt(pGS)) : null};
      const pGP = await AsyncStorage.getItem('groinpain');
        {pGP !== null ? setgroinpain(parseInt(pGP)) : null};
      const pGPS = await AsyncStorage.getItem('groinpainsympt');
        {pGPS !== null ? setgroinpainsympt(parseInt(pGPS)) : null};
        
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
      {!dataIsReady ?
      <ActivityIndicator size='large' color='black'/>
      :
      <ScrollView style={styles.scrollView}>

        <Text  style = {styles.headerText}>Enter your changes in Physiological parameters : </Text>

        <Text style={styles.label}>Are you feeling an intense thirst (apart from high outside temperatures and physical exercise) ?</Text>
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

        <Text style={styles.label}>Are you feeling like you need to urinate more (frequent and occurs day and night, with abundant urine) ?</Text>
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

        <Text style={styles.label}>Did you loose weight without a loss in apetite ?</Text>
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

        <Text style={styles.label}>Are you feeling really tired or having a blurry vision ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
            <RadioButton
              value="yes"
              status={ tiredvision === 'yes' ? 'checked' : 'unchecked' }
              onPress={() => settiredvision('yes')}
            />
          </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ tiredvision === 'no' ? 'checked' : 'unchecked' }
              onPress={() => settiredvision('no')}
            />
          </View>
        </View>

        
        {tiredvision && weightloss && physiourinate && thirsty &&
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
                placeholder="Level"
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
          </View>
        }



        <Text style={styles.label}>Are you bothered in the groin with local swelling ?</Text>
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

        {groinpain &&
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
        }
        
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitParametrePhysio} color="#4bcbd6"/>
        </View>
        <View style={{margin:5}}>
          <Button title="Home" onPress={() => navigation.navigate("Home")} color="#4bcbd6"/>
        </View>
      </ScrollView>
      }
    </SafeAreaView>

    
  );
}

export {ParametrePhysio};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
    display:'flex',
    justifyContent:'center'
  },
  names:{
    display:'flex',
    flexDirection:'row'
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
