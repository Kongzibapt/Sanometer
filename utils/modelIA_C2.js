import AsyncStorage from "@react-native-async-storage/async-storage";

export const chapter2 = async () => {

    
    const allergies = await AsyncStorage.getItem('checked_allergiesante');

    var tab = [];

    if (allergies == 'no') {
        tab[0] = 0;
    } else if (allergies == 'yes') {
        tab[0] = 1;
    }

    console.log(tab);


    return tab;

}