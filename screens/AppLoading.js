import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
const AppLoading = function() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ActivityIndicator size='large' color="#18acb9" />
      </ScrollView>
    </SafeAreaView>
  );
}

export {AppLoading};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
});
