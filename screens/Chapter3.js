import { StatusBar } from 'expo-status-bar';
import react, { useEffect } from 'react';
import { StyleSheet, Text, View,Button, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chapter3 = function({navigation}) {

  const [dataIsReady,setDataIsReady] = react.useState(false);

  const [StandardProgressiveMatrices, onChangeText1] = react.useState(null);
  const [BeckDepressionInventory, onChangeText2] = react.useState(null);
  const [SPM, setSPM] = react.useState('');
  const [BDI, setBDI] = react.useState('');
  const [visible1, setVisible1] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [borderColorInput,setBorderColorInput] = react.useState("#BBBBBB");
  const [borderColorInput2,setBorderColorInput2] = react.useState("#BBBBBB");
  //const sex = route.params.checked_sex;

  const submitChapter3 = async () => {
    try {     
      StandardProgressiveMatrices && await AsyncStorage.setItem('StandardProgressiveMatrices',StandardProgressiveMatrices);
      BeckDepressionInventory && await AsyncStorage.setItem('BeckDepressionInventory',BeckDepressionInventory);
      SPM && await AsyncStorage.setItem('SPM',SPM);
      BDI && await AsyncStorage.setItem('BDI',BDI);
      navigation.navigate("Chapter 4");
    }
    catch (error) {
      console.log(error)
    }
  }

  const getChapterInfos = async() => {
    try {
      onChangeText1(await AsyncStorage.getItem('StandardProgressiveMatrices'));
      onChangeText2(await AsyncStorage.getItem('BeckDepressionInventory'));
      setSPM(await AsyncStorage.getItem('SPM'));
      setBDI(await AsyncStorage.getItem('BDI'));
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

  const toggleDropdown1 = () => {
    setVisible1(!visible1);
  };

  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };

  const renderDropdown1 = () => {
    if (visible1) {
      return (
        <View>
          <Text style={styles.label}>What was your result ? (number between 0 and 63)</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput}}
            onFocus={() => {
              setBorderColorInput("cyan");
            }}
            onBlur={() => {
              setBorderColorInput('#BBBBBB');
            }}
            onChangeText={onChangeText1}
            value={StandardProgressiveMatrices}
            placeholder="Your result"
            keyboardType="default"
          />
        </View>
      );
    }
  };

  const renderDropdown2 = () => {
    if (visible2) {
      return (
        <View>
          <Text style={styles.label}>What was your result ? (number between 0 and 63) </Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInput2}}
            onFocus={() => {
              setBorderColorInput2("cyan");
            }}
            onBlur={() => {
              setBorderColorInput2('#BBBBBB');
            }}
            onChangeText={onChangeText2}
            value={BeckDepressionInventory}
            placeholder="Your result"
            keyboardType="default"
          />
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
          <Text  style = {styles.headerText}>Psychological data</Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 2")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("Chapter 4")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.barre}></View>
        <Text style={styles.label}>Have you done a Standard Progressive Matrices Test ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ SPM === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setSPM('yes')}
              />
            </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ SPM === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setSPM('no')}
            />
          </View>
        </View>
        {(SPM==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown1}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in the spm test result.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown1()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Have you done a Beck Depression Inventory test ?</Text>
        <View style={styles.checkboxview}>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ BDI === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setBDI('yes')}
              />
            </View>
          <View style={styles.containerbutton}>
            <Text style={styles.paragraph}>No</Text>
            <RadioButton
              value="no"
              status={ BDI === 'no' ? 'checked' : 'unchecked' }
              onPress={() => setBDI('no')}
            />
          </View>
        </View>
        {( BDI ==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in the BDI test result.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
          </View>
        }
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter3} color="#4bcbd6"/>
        </View>
      </ScrollView>
    }
    </SafeAreaView>
  );
}

export {Chapter3};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  logoPart:{
    padding:"8%"
  },
  logo:{
    width:210,
    height:50
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
    color: '#18acb9',
    margin: 12,
    fontFamily:"Montserrat_400Regular"
  },
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
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
  paragraph : {
    fontFamily:"Montserrat_400Regular"
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
  label: {
    fontSize: 16,
    color: '#18acb9',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  dropdown:{
    borderWidth:1,
    borderRadius:6,
    borderColor: '#BBBBBB',
  }
});
