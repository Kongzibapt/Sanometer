import AsyncStorage from "@react-native-async-storage/async-storage";

export const chapter6 = async () => {

    const bloodsugar = await AsyncStorage.getItem('bloodsugar');
    const bloodsugar2 = await AsyncStorage.getItem('bloodsugar2');
    const thirsty = await AsyncStorage.getItem('thirsty');
    const poliuria = await AsyncStorage.getItem('physiourinate');
    const weightloss = await AsyncStorage.getItem('weightloss');

    const tired = await AsyncStorage.getItem('tired');
    const blurryvision = await AsyncStorage.getItem('blurryvision');

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
    
    return tab;

}

export const  score_q1 = async (input) =>{
    var result="";
    if (((((((-2.15655186840034) + ((input[0]) * (-1.3033444933546223))) + ((input[1]) * (1.2258227333331557))) + ((input[2]) * (0.7514427448388334))) + ((input[3]) * (0.7874778829074928))) + ((input[4]) * (0.059140423143553084))) + ((input[5]) * (-0.7986031979146693))>=0.5){
        result = "It is recommended to have a fasting blood sugar level control urgently  ";
    }
    return result;
}

export const  score_q2 = async (input) =>{
    var result="";
    if (((((((-1.294924564895582) + ((input[0]) * (2.5420795772639972))) + ((input[1]) * (0.22552344005664357))) + ((input[2]) * (0.23166941106823666))) + ((input[3]) * (0.8274669689880568))) + ((input[4]) * (0.39405810507810124))) + ((input[5]) * (-0.9999259177147318))>=0.5){
        result = " It is highly recommended to have a medical advise in max 10 days ";
    }
    return result;
}

export const  score_q3 = async (input) =>{
    var result="";
    if (((((((-1.294924564895582) + ((input[0]) * (2.5420795772639972))) + ((input[1]) * (0.22552344005664357))) + ((input[2]) * (0.23166941106823666))) + ((input[3]) * (0.8274669689880568))) + ((input[4]) * (0.39405810507810124))) + ((input[5]) * (-0.9999259177147318))>=0.5){
        result = "It is recommended to have an A1c blood test ";
    }
    return result;
}