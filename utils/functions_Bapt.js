import AsyncStorage from "@react-native-async-storage/async-storage";



const calculateAge = (birth_date) => {
    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
}

export const sexAndAgeAdvices = async () => {

    const sex = await AsyncStorage.getItem('sex');
    const birth_date = await AsyncStorage.getItem('age');

    var advice = "";
    var bod = new Date(birth_date);

    age = calculateAge(bod);
    
    if (sex == "female"){
        if (age >= 21 && age <= 29){
            advice += "The USPSTF (US Preventive Services Task Force) recommends screening for cervical cancer every 3 years with cervical cytology alone in women aged 21 to 29 years."
        } 
        if (age >= 30 && age <= 65){
            advice += "The USPSTF recommends screening every 3 years with cervical cytology alone, every 5 years with high-risk human papillomavirus (hrHPV) testing alone, or every 5 years with hrHPV testing in combination with cytology (cotesting)"
        } 
        if (age >= 50 && age <= 74){
            advice += "The French Health Authority recommends a mammography every 2 years"
        }
        if (age >= 50 && age <= 75){
            advice += "The French Health Authority recommends a screening stool test every 2 years : the high-sensitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT)"
        }
        
    } else if (sex == "male"){
        if (age >= 50 && age <= 75){
            advice += "The French Health Authority recommends a home screening stool test every 2 years : the high-sensitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT)"
        }
    }

    return advice;
}