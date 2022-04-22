import AsyncStorage from "@react-native-async-storage/async-storage";

export const chapter6 = async () => {

    const bloodsugar = await AsyncStorage.getItem('bloodsugar');
    const bloodsugar2 = await AsyncStorage.getItem('bloodsugar2');
    const thirsty = await AsyncStorage.getItem('thirsty');
    const poliuria = await AsyncStorage.getItem('physiourinate');

    if (bloodsugar > 1,26 && bloodsugar2 > 1,26) {
        tab[0] = 1;
    } else {
        tab[0] = 0;
    }

    if (thirsty == 'yes' || poliuria == 'yes' ) {
        tab[1] = 1;
    } else {
        tab[1] = 0;
    }

    


}