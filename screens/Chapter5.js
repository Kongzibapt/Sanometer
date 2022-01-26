import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from "react-native";

const Chapter5 = function() {
  const [Height, onChangeText] = react.useState(null);
  const [Weight, onChangeText] = react.useState(null);
  const [Abdominal_param, onChangeText] = react.useState(null);
  const [Thigh_perim, onChangeText] = react.useState(null);
  const [Ankle_perim, onChangeText] = react.useState(null);
  const [Pressure, onChangeText] = react.useState(null);
  const [Pulse, onChangeText] = react.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Height}
        placeholder="Your height"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Weight}
        placeholder="Your weight"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Abdominal_param}
        placeholder="Your abdominal parameter"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Thigh_perim}
        placeholder="Your thigh perimeter"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Ankle_perim}
        placeholder="Your ankle perimeter"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Pressure}
        placeholder="Your pressure"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Pulse}
        placeholder="Your pulse"
        keyboardType="default"
      />
      <Text>{Height}</Text>
      <Text>{Weight}</Text>
      <Text>{Abdominal_param}</Text>
      <Text>{Thigh_perim}</Text>
      <Text>{Ankle_perim}</Text>
      <Text>{Pressure}</Text>
      <Text>{Pulse}</Text>
    </SafeAreaView>
  );
}

export {Chapter5};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
