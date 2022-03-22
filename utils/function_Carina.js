import AsyncStorage from "@react-native-async-storage/async-storage";

export const IMCAdvices = () => {
    const weight = await AsyncStorage.getItem('weight');
    const height = await AsyncStorage.getItem('height');

    var imc = weight / (height*height);
    var result="";
    if (imc < 18.9){
        result = "Malnutrition : URGENT : medical advice needed";
    }
}