import AsyncStorage from "@react-native-async-storage/async-storage";

export const sexAndAgeAdvices = () => {
    const sex = await AsyncStorage.getItem('sex');
    const age = await AsyncStorage.getItem('age');



}