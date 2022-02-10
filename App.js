import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Chapter1 } from './screens/Chapter1.js';
import { Chapter2 } from './screens/Chapter2.js';
import { Chapter3 } from './screens/Chapter3.js';
import { Chapter4 } from './screens/Chapter4.js';
import { Chapter5 } from './screens/Chapter5.js';
import { Chapter6 } from './screens/Chapter6.js';
import { Chapter7 } from './screens/Chapter7.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import { Provider as StoreProvider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstname, setLastname } from './redux/chapter1App'
import react from 'react';
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

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [firstname, onChangeFirstName] = react.useState(null);
  const params = useSelector(state => state);
  const dispatch = useDispatch()
  const setfirstname = firstname => dispatch(setFirstname(firstname));
  console.log(params);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{params[0].value}</Text>
      <TextInput
      style={styles.input}
      onChangeText={onChangeFirstName}
      value={firstname}
      placeholder="Your firstname"
      keyboardType="default">

      </TextInput>
      <Button
      title="Set"
      style={styles.button}
      onPress={() => setfirstname(firstname)}
      />
      <View style={styles.button}>
        <Button
          title="Chapter 1"
          onPress={() => navigation.navigate('Chapter 1')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 2"
          onPress={() => navigation.navigate('Chapter 2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 3"
          style={styles.button}
          onPress={() => navigation.navigate('Chapter 3')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 4"
          style={styles.button}
          onPress={() => navigation.navigate('Chapter 4')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 5"
          style={styles.button}
          onPress={() => navigation.navigate('Chapter 5')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 6"
          style={styles.button}
          onPress={() => navigation.navigate('Chapter 6')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Chapter 7"
          style={styles.button}
          onPress={() => navigation.navigate('Chapter 7')}
        />
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

  // if (!fontsLoaded) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="AppLoading">
  //         <Stack.Screen name="AppLoading" component={AppLoading} />
  //       </Stack.Navigator>
  //     </NavigationContainer>  
  //   );
  // } else {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 5
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
});
