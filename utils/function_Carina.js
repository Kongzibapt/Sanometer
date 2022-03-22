import AsyncStorage from "@react-native-async-storage/async-storage";

export const IMCAdvices = () => {
    const weight = await AsyncStorage.getItem('poids');
    const height = await AsyncStorage.getItem('taille');

    var imc = weight / (height*height);
    console.log(imc);
    result="";
    if (imc < 18.9){
        result = "Malnutrition : URGENT : medical advice needed";
    }
    console.log(result);
}