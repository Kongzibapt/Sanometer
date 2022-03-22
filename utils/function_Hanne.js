import AsyncStorage from "@react-native-async-storage/async-storage";

export const bloodSugarAdvices = () => {
    var result = "";
    const glocoseLevel = await AsyncStorage.getItem('selectedglucose');
    const checkedHb = await AsyncStorage.getItem('checkedHb');

    if (glocoseLevel !== "normal" && checkedHb === 'no') {
        result = "You are recommended to do the A1C test or the Glucose Tolerance Test";
    }
}