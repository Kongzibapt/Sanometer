import AsyncStorage from "@react-native-async-storage/async-storage";

export const sexAndAgeAdvices = async () => {
    const sex = await AsyncStorage.getItem('sex');
    var birth_date = await AsyncStorage.getItem('age');

    birth_date = new Date(birth_date);

    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    console.log(age);

    if (sex == "male"){
        // if ()
    } else if (sex == "female"){

    }


}