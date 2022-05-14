import { StatusBar } from 'expo-status-bar';
import react , { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Linking,ActivityIndicator, Image } from 'react-native';
import { SafeAreaView, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chapter6 = function({navigation}) {
  //const sex = route.params.checked_sex;
  const [selectedanalysis, setSelectedanalysis] = react.useState();
  const [selectedperim, setSelectedperim] = react.useState();
  const [selectedslope, setSelectedslope] = react.useState();
  const [selectedfreq, setSelectedfreq] = react.useState();
  const [selectedfreq2, setSelectedfreq2] = react.useState();
  const [selectedcaloric, setSelectedcaloric] = react.useState();
  const [selectedsport, setSelectedsport] = react.useState();
  const [selectedalco, setSelectedalco] = react.useState();
  const [energy, onChangeText2] = react.useState(null);
  const [checked, setChecked] = react.useState('');
  const [checked2, setChecked2] = react.useState('');
  const [checked3, setChecked3] = react.useState('');
  const [checked31, setChecked31] = react.useState('');
  const [checked4, setChecked4] = react.useState('');
  const [checked5, setChecked5] = react.useState('');
  const [checked6, setChecked6] = react.useState('');
  const [checked7, setChecked7] = react.useState('');
  const [visible, setVisible] = react.useState(false);
  const [visible2, setVisible2] = react.useState(false);
  const [visible3, setVisible3] = react.useState(false);
  const [visible4, setVisible4] = react.useState(false);
  const [visible5, setVisible5] = react.useState(false);
  const [visible6, setVisible6] = react.useState(false);
  const [borderColorInputPeriod,setBorderColorInputPeriod] = react.useState("#BBBBBB");
  const [borderColorInputAmount,setBorderColorInputAmount] = react.useState("#BBBBBB");
  const [borderColorInputFreq,setBorderColorInputFreq] = react.useState("#BBBBBB");
  const [borderColorInputAd,setBorderColorInputAd] = react.useState("#BBBBBB");
  const [borderColorInputFrom,setBorderColorInputFrom] = react.useState("#BBBBBB");
  const [period, onChangeText_period] = react.useState(null);
  const [amount, onChangeText_amount] = react.useState(null);
  const [frequency, onChangeText_frequency] = react.useState(null);
  const [method, onChangeText_method] = react.useState(null);
  const [age, onChangeText_age] = react.useState(null);

  const [dataIsReady,setDataIsReady]=react.useState(false);

  const submitChapter6 = async () => {
    try {     
      selectedperim && await AsyncStorage.setItem('selectedperim',selectedperim);
      selectedslope && await AsyncStorage.setItem('selectedslope',selectedslope);
      selectedfreq && await AsyncStorage.setItem('selectedfreq',selectedfreq);
      selectedfreq2 && await AsyncStorage.setItem('selectedfreq2',selectedfreq2);
      selectedcaloric && await AsyncStorage.setItem('selectedcaloric',selectedcaloric);
      selectedsport && await AsyncStorage.setItem('selectedsport',selectedsport);
      selectedanalysis && await AsyncStorage.setItem('selectedanalysis',selectedanalysis);

      checked && await AsyncStorage.setItem('checked',checked);
      checked2 && await AsyncStorage.setItem('checked2',checked2);
      checked3&& await AsyncStorage.setItem('checked3',checked3);
      checked4&& await AsyncStorage.setItem('checked4',checked4);
      checked5&& await AsyncStorage.setItem('checked5',checked5);
      checked6&& await AsyncStorage.setItem('checked6',checked6);
      checked7&& await AsyncStorage.setItem('checked7',checked7);

      period && await AsyncStorage.setItem('period',period);
      amount && await AsyncStorage.setItem('amount',amount);
      frequency && await AsyncStorage.setItem('frequency',frequency);
      method && await AsyncStorage.setItem('method',method);
      age && await AsyncStorage.setItem('age',age);


      navigation.navigate("Chapter 7");
      
  }
  catch (error) {
      console.log(error)
  }
  }

  const getChapterInfos = async () => {
    try { 
        setSelectedanalysis(await AsyncStorage.getItem('selectedanalysis'));    
        setSelectedperim(await AsyncStorage.getItem('selectedperim'));
        setSelectedslope(await AsyncStorage.getItem('selectedslope'));
        setSelectedfreq(await AsyncStorage.getItem('selectedfreq'));
        setSelectedfreq2(await AsyncStorage.getItem('selectedfreq2'));
        setSelectedcaloric(await AsyncStorage.getItem('selectedcaloric'));
        setSelectedsport(await AsyncStorage.getItem('selectedsport'));

        setChecked(await AsyncStorage.getItem('checked'));
        setChecked2(await AsyncStorage.getItem('checked2'));
        setChecked3(await AsyncStorage.getItem('checked3'));
        setChecked4(await AsyncStorage.getItem('checked4'));
        setChecked5(await AsyncStorage.getItem('checked5'));
        setChecked6(await AsyncStorage.getItem('checked6'));
        setChecked7(await AsyncStorage.getItem('checked7'));

        onChangeText_period(await AsyncStorage.getItem('period'));
        onChangeText_amount(await AsyncStorage.getItem('amount'));
        onChangeText_frequency(await AsyncStorage.getItem('frequency'));
        onChangeText_method(await AsyncStorage.getItem('method'));
        onChangeText_age(await AsyncStorage.getItem('age'));
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

  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const toggleDropdown2 = () => {
    setVisible2(!visible2);
  };
  const toggleDropdown3 = () => {
    setVisible3(!visible3);
  };
  const toggleDropdown4 = () => {
    setVisible4(!visible4);
  };
  const toggleDropdown5 = () => {
    setVisible5(!visible5);
  };
  const toggleDropdown6 = () => {
    setVisible6(!visible6);
  };
  const renderDropdown = () => {
    if (visible) {
    return (
      <View>
          <Text style={styles.label}>Period:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputPeriod}}
            onFocus={() => {
              setBorderColorInputPeriod("cyan");
            }}
            onBlur={() => {
              setBorderColorInputPeriod("#BBBBBB");
            }}
            onChangeText={onChangeText_period}
            value={period}
            placeholder="Your period"
            keyboardType="default"
          />
          <Text style={styles.label}>Amount per day:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputAmount}}
            onFocus={() => {
              setBorderColorInputAmount("cyan");
            }}
            onBlur={() => {
              setBorderColorInputAmount("#BBBBBB");
            }}
            onChangeText={onChangeText_amount}
            value={amount}
            placeholder="Your amount"
            keyboardType="default"
          />
          <Text style={styles.label}>Electronic cigarette ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked2 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked2('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked2 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked2('no')}
              />
            </View>
          </View>
      </View>

    );
  }
};
  const renderDropdown2 = () => {
    if (visible2) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputFreq}}
            onFocus={() => {
              setBorderColorInputFreq("cyan");
            }}
            onBlur={() => {
              setBorderColorInputFreq("#BBBBBB");
            }}
            onChangeText={onChangeText_frequency}
            value={frequency}
            placeholder="Your frequency"
            keyboardType="default"
          />
          <Text style={styles.label}>Administration method:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputAd}}
            onFocus={() => {
              setBorderColorInputAd("cyan");
            }}
            onBlur={() => {
              setBorderColorInputAd("#BBBBBB");
            }}
            onChangeText={onChangeText_method}
            value={method}
            placeholder="Your administration method"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdown3 = () => {
    if (visible3) {
    return (
      <View>
          <Text style={styles.label}>From what age:</Text>
          <TextInput
            style={{...styles.input,borderColor:borderColorInputFrom}}
            onFocus={() => {
              setBorderColorInputFrom("cyan");
            }}
            onBlur={() => {
              setBorderColorInputFrom("#BBBBBB");
            }}
            onChangeText={onChangeText_age}
            value={age}
            placeholder="Your age"
            keyboardType="default"
          />
      </View>
    );
  }
  };
  const renderDropdown4 = () => {
    if (visible4) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedfreq}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
        </View>
      </View>
    );
  }
  };
  const renderDropdown5 = () => {
    if (visible5) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedfreq2}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq2(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 glass per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
        </View>
      </View>
    );
  }
  };
  const renderDropdown6 = () => {
    if (visible6) {
    return (
      <View>
          <Text style={styles.label}>Frequency:</Text>
        <View style={style.dropdown}>
        <Picker
          selectedValue={selectedfreq2}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedfreq2(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Not at all" value="not_at_all" />
          <Picker.Item label="Occasionnal" value="occasionnal" />
          <Picker.Item label="1 glass per day" value="1_day" />
          <Picker.Item label="2 or + per day" value="2_day" />
        </Picker>
        </View>
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
          <Text  style = {styles.headerText}>Lifestyle</Text>
          <TouchableOpacity style={styles.prevArrow} onPress={()=>navigation.navigate("Chapter 5")}>
            <Image source={require('../assets/prevArrow.png')} style={styles.prevImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow}  onPress={()=>navigation.navigate("Chapter 7")}>
            <Image source={require('../assets/nextArrow.png')} style={styles.nextImg}/>
          </TouchableOpacity>
        </View>
      <View style = {styles.barre}></View>
        <Text  style = {styles.label}>Tolerance to the effort: </Text>
        <Text style={styles.label}>Walking distance (flat ground):</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedperim}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedperim(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 10min" value="<10min" />
          <Picker.Item label="10-30min" value="10-30min" />
          <Picker.Item label="> 30min" value=">30min" />
        </Picker>
        </View>
        <Text style={styles.label}>Walking uphill:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedslope}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedslope(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 10min" value="<10min" />
          <Picker.Item label="10-30min" value="10-30min" />
          <Picker.Item label="> 30min" value=">30min" />
        </Picker>
        </View>
        <Text style={styles.label}>Diet:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedanalysis}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Vegetarian" value="vegetarian" />
          <Picker.Item label="Vegan" value="vegan" />
          <Picker.Item label="Regular" value="normal" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        </View>
        <Text style={styles.label}>Caloric intake (per day)</Text>
        <Text style={styles.link}
          onPress={() => Linking.openURL('https://www.freedieting.com/')}>
          Tool to calculate your caloric intake
        </Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedcaloric}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedcaloric(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 2000 calories" value="<2000cal" />
          <Picker.Item label="Between 2000 and 3000 calories" value="2000-3000cal" />
          <Picker.Item label="> 3000 calories" value=">3000cal" />
        </Picker>
        </View>
        <Text style={styles.label}>Types of food:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedslope}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Restaurant/delivery" value="Restaurant/delivery" />
          <Picker.Item label="Cooked at home" value="Cooked_at_home" />
          <Picker.Item label="Fastfood" value="Fastfood" />
        </Picker>
        </View>
        <Text style={styles.label}>Risk factors:</Text>
        <Text style={styles.label}>Do you smoke ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
          {(checked==="yes") && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about smoking.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you take recreational drugs ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked3 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked3('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked3 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked3('no')}
              />
            </View>
          </View>
          <Text style={styles.label}>Do you take any medication ?</Text>
          <View style={styles.checkboxview}>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>Yes</Text>
              <RadioButton
                value="yes"
                status={ checked31 === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => setChecked31('yes')}
              />
            </View>
            <View style={styles.containerbutton}>
              <Text style={styles.paragraph}>No</Text>
              <RadioButton
                value="no"
                status={ checked31 === 'no' ? 'checked' : 'unchecked' }
                onPress={() => setChecked31('no')}
              />
            </View>
          </View>

          {/*when ? result*/}
          {((checked3==="yes")||(checked31=="yes")) && 
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleDropdown2}
            >
              <View style={styles.drop}>
                <Text style={styles.titledrop}>Fill in your info about drugs.</Text>
                <Icon style={styles.symboldrop} type='font-awesome' name='chevron-down'/>
              </View>

              {renderDropdown2()}
            
            </TouchableOpacity>  
          </View>
        }
        <Text style={styles.label}>Do you drink alcohol ?</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedalco}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedalco(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Heavy drinker" value="Heavy" />
          <Picker.Item label="Moderate drinker" value="moderate" />
          <Picker.Item label="Light drinker (1-3 glasses a week)" value="light" />
        </Picker>
        </View>
        <Text style={styles.label}>Exercise:</Text>
        <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedsport}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedsport(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Basketball" value="basketball" />
          <Picker.Item label="Running" value="running" />
        </Picker>
        </View>
        <View style={{margin:5}}>
          <Button title="Submit" onPress={submitChapter6} color="#4bcbd6"/>
        </View>
      </ScrollView>
      }
    </SafeAreaView>
  );
}

export {Chapter6};

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
  drop:{
    display:'flex',
    flexDirection:'row'
  },
  barre:{
    backgroundColor: '#BBBBBB',
    height:1,
    width:"95%",
    marginBottom:20
  },
  titledrop:{
    flex:1,
    paddingRight:10,
    fontSize: 16,
    color: '#18acb9',
    fontFamily:"Montserrat_700Bold",
    margin: 12,
  },
  link:{
    fontSize: 16,
    color: 'blue',
    fontFamily:"Montserrat_400Regular",
    margin: 10,
  },
  symboldrop:{
    flex:1,
    paddingRight:10
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
  dropdown:{
    borderWidth:1,
    borderRadius:6,
    borderColor: '#BBBBBB',
  }
});
