import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, ScrollView} from "react-native";
import { Slider, Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Chapter6 = function() {
  
  const [selectedperim, setSelectedperim] = react.useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text  style = {styles.headerText}>Tolerance to the effort: </Text>
        <Text style={styles.label}>Walking perimeter (flat):</Text>
        <Picker
          selectedValue={selectedperim}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedanalysis(itemValue)
          }
          mode='dropdown'>
          <Picker.Item label="< 1km" value="<1km" />
          <Picker.Item label="1-4km" value="1-4km" />
          <Picker.Item label="> 4km" value=">4km" />
        </Picker>
      </ScrollView>
    </SafeAreaView>
  );
}

export {Chapter6};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#18acb9',
    paddingTop: StatusBar.currentHeight,
    flex :1,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginTop : 50,
    margin: 12,
  },
});
