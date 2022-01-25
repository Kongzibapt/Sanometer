import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Chapter5() {
  return (
    <>  <View style={styles.container}>
            <Text>Fifth chapter</Text>
            <StatusBar style="auto" />
        </View>
        <View style={styles.container}>
            <Text>Measurements</Text>
            <StatusBar style="auto" />
        </View>
    </>
  );
}

export {Chapter5};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
