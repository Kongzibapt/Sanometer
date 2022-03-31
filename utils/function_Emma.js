import AsyncStorage from "@react-native-async-storage/async-storage";

export const BloodSugarLevelAdvices = () => {
    var result = "";
    const bloodsugarlevel = parseFloat(await AsyncStorage.getItem('bloodsugar'));
    const thirsty = await AsyncStorage.getItem('thirsty');
    const physiourinate = await AsyncStorage.getItem('physiourinate');
    const weigthloss = await AsyncStorage.getItem('weightloss');
    const tiredvision = await AsyncStorage.getItem('tiredvision');
    const emptysto = await AsyncStorage.getItem('emptysto');
    const glysymp = await AsyncStorage.getItem('glysymp');
    const groinpain = await AsyncStorage.getItem('groinpain');
    const groinpainsympt = await AsyncStorage.getItem('groinpainsympt');

    if ( groinpain==="yes" && groinpainsympt==='yes') {
        result = "An abdominal/visceral surgeon should be consulted within the next month for your groin pain.";
    }

    if ( thirsty==="yes" && physiourinate==='yes' && weigthloss==="yes" && tiredvision==="yes") {
        result = "It is recommended that you check your blood sugar levels as a matter of urgency on an empty stomach (minimum 8 hours after your last meal)";
    }

    if ((bloodsugarlevel>2 && glysymp==="yes")||(bloodsugarlevel>=1.26 && glysymp==="no" && emptysto==="no")){
        result+="You should consult your doctor.";
    }
}

export const GroinAdvices = () => {
    var result = "";
    const groinpain = await AsyncStorage.getItem('groinpain');
    const groinpainsympt = await AsyncStorage.getItem('groinpainsympt');

    if ( groinpain==="yes" && groinpainsympt==='yes') {
        result = "An abdominal/visceral surgeon should be consulted within the next month for your groin pain.";
    }
}