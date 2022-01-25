import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from "react-native";

const Chapter1 = function() {
  const [prenom, onChangeText] = react.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={prenom}
        placeholder="Your firstname"
        keyboardType="default"
      />
      <Text>{prenom}</Text>
    </SafeAreaView>
  );
}

export {Chapter1};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
