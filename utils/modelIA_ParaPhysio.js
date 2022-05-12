import AsyncStorage from "@react-native-async-storage/async-storage";

export const score_param = async () => {
    var result="";
    const bloodsugar = await AsyncStorage.getItem('bloodsugar');
    const bloodsugar2 = await AsyncStorage.getItem('bloodsugar2');
    const thirsty = await AsyncStorage.getItem('thirsty');
    const poliuria = await AsyncStorage.getItem('physiourinate');
    const weightloss = await AsyncStorage.getItem('weightloss');

    const tired = await AsyncStorage.getItem('tired');
    const blurryvision = await AsyncStorage.getItem('blurryvision');

    var tab = [];

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

    if (weightloss == 'yes' ) {
        tab[2] = 1;
    } else {
        tab[2] = 0;
    }

    if (bloodsugar >2) {
        tab[3] = 1;
    } else {
        tab[3] = 0;
    }

    if (tired == 'yes' ) {
        tab[4] = 1;
    } else {
        tab[4] = 0;
    }

    if (blurryvision == 'yes' ) {
        tab[5] = 1;
    } else {
        tab[5] = 0;
    }
    //console.log("taba"+tab);
    
    //console.log("test advice" + (((((((-2.243025274145117) + ((tab[0]) * (-2.1579231525670735))) + ((tab[1]) * (2.565373064267963))) + ((tab[2]) * (0.7881891310279248))) + ((tab[3]) * (1.2598088769272828))) + ((tab[4]) * (0.05091127023054371))) + ((tab[5]) * (-1.4815667901918235))) );

    if ((((((((-2.243025274145117) + ((tab[0]) * (-2.1579231525670735))) + ((tab[1]) * (2.565373064267963))) + ((tab[2]) * (0.7881891310279248))) + ((tab[3]) * (1.2598088769272828))) + ((tab[4]) * (0.05091127023054371))) + ((tab[5]) * (-1.4815667901918235)))>=0.5){
        result += "It is recommended to have a fasting blood sugar level control urgently.  ";
    }
    if (((((((-1.9918921358721473) + ((tab[0]) * (2.8419046587086836))) + ((tab[1]) * (1.5731723233802648))) + ((tab[2]) * (0.7065055102334576))) + ((tab[3]) * (1.4594811627777624))) + ((tab[4]) * (0.2914503494533588))) + ((tab[5]) * (-1.6017957935641505))>=0.5){
        result += "It is highly recommended to have a medical advice in max 10 days. ";
    }
    if (((((((-1.5930076977272303) + ((tab[0]) * (3.4299627694870325))) + ((tab[1]) * (1.3806726041804105))) + ((tab[2]) * (0.6165462833579349))) + ((tab[3]) * (1.3177291416524413))) + ((tab[4]) * (-0.24085144480620613))) + ((tab[5]) * (-1.0872168895206806))>=0.5){
        result += "It is recommended to have an A1c blood test. ";
    }

    return result;

}

