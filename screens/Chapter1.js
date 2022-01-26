import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';


const Chapter1 = function() {
  const [lastname, onChangeText1] = react.useState(null);
  const [firstname, onChangeText2] = react.useState(null);
  const [birthdate, onChangeText3] = react.useState(null);
  const [country, onChangeText4] = react.useState(null);
  const [isChecked, setChecked] = react.useState(false);


  return (
    <SafeAreaView>
      <Text  style = {styles.headerText}>Enter your personal data : </Text>
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText1={onChangeText1}
        value={lastname}
        placeholder="Your lastname"
        keyboardType="default"
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText2={onChangeText2}
        value={firstname}
        placeholder="Your firstname"
        keyboardType="default"
      />
      <Text style={styles.label}>Birth Date</Text>
      <TextInput
        style={styles.input}
        onChangeText3={onChangeText3}
        value={birthdate}
        placeholder="Your birthdate"
        keyboardType="default"
      />
      <Text style={styles.label}>Your country of residence</Text>
      <TextInput
        style={styles.input}
        onChangeText4={onChangeText4}
        value={country}
        placeholder="Your country of residence"
        keyboardType="default"
      />
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </SafeAreaView>

    
  );
}

export {Chapter1};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    top: 100,
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    top: 100,
    margin: 12,
  },
  headerText2: {
    fontSize: 16,
    color: 'black',
    top: 100,
    margin: 12,
  },
  label: {
    fontSize: 16,
    color: 'grey',
    top: 120,
    margin: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  section: {
    top: 100,
    margin: 12,
  },
});
