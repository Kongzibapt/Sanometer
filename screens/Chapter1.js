import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Chapter1 = function() {
  return (
    <View style={styles.container}>
      <Text>First chapter</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export {Chapter1};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
