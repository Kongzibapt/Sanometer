import AsyncStorage from "@react-native-async-storage/async-storage";

export const chapter2 = async () => {

    
    const allergies = await AsyncStorage.getItem('checked_allergiesante');
    const severefood = await AsyncStorage.getItem('checked_severefood');
    const severedrugs = await AsyncStorage.getItem('checked_severedrugs');
    const severeseason = await AsyncStorage.getItem('checked_severeseason');
    const severeothers = await AsyncStorage.getItem('checked_severeothers');
    const vaccines = await AsyncStorage.getItem('checked_vax');

    var tab = [];

    if (allergies == 'no') {
        tab[0] = 0;
        tab[1] = 0;
    } else if (allergies == 'yes') {
        tab[0] = 1;
        if (severefood == 'yes' || severedrugs == 'yes' || severeseason== 'yes' || severeothers == 'yes'){
            tab[1]=1;
        }
    }

    if (vaccines == 'yes') {
        tab[2] = 1;
    } else {
        tab[2] = 0;
    }

    console.log(tab);


    return tab;

}