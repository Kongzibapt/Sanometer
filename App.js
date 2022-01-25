import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Chapter1} from './screens/Chapter1.js';
//import {Chapter5} from './screens/Chapter5.js';
// import { NavigationContainer } from 'react-navigation/native';

export default function App() {
  return (
   
    <Chapter1/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
