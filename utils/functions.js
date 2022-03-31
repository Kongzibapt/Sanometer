import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';



const calculateAge = (birth_date) => {
    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
}

export const sexAndAgeAdvices = async () => {
    
    var advice = "";
    var age;

    const sex = await AsyncStorage.getItem('sex');
    const birth_date = await AsyncStorage.getItem('birthdate');

    if (sex && birth_date){

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
    }

    return advice;
}

export const IMCAdvices = async () => {
    var result="";

    var weight = await AsyncStorage.getItem('weight');
    var height = await AsyncStorage.getItem('height');

    height = height/100;

    if (weight && height){

        var imc = weight / (height*height);

        if (imc < 18.9){
            result = "Malnutrition : URGENT : medical advice needed";
        }

    }
    return result;
}

export const metabolicAdvice = async () => {
    const diabetes = await AsyncStorage.getItem('isEnabled_diabetes');
    var res10 = "";
    const bloodPressure = await AsyncStorage.getItem('pressure');
    const weight = await AsyncStorage.getItem('weight');
    const height = await AsyncStorage.getItem('height');
    var sbp = parseInt(bloodPressure.split('/')[0]);
    var dbp = parseInt(bloodPressure.split('/')[1]);
    const hbp = sbp>90 || dbp>140 ;
    var imc = weight / (height*height);
  
  
    const obesity = imc>30;//si l'IMC est supérieur à 30 le sujet est en obésité modérée
    if (diabetes && hbp && obesity){
      res10 = "metabolic syndrome->make the SCORE test for CardioVascular risk factors";
    }

    return res10;
  }

  export const bloodSugarAdvices = async () => {
    var result = "";
    const glocoseLevel = await AsyncStorage.getItem('selectedglucose');
    const checkedHb = await AsyncStorage.getItem('checkedHb');

    if (glocoseLevel !== "normal" && checkedHb === 'no') {
        result = "You are recommended to do the A1C test or the Glucose Tolerance Test";
    }

    return result;
}

export const smokeAdvices = async () => {
    
    var birth_date = await AsyncStorage.getItem('birth_date');
    const amount = await AsyncStorage.getItem('amount');
    const smoke = await AsyncStorage.getItem('smoke');

    var bod = new Date(birth_date);

    var age = calculateAge(bod);

    var advice ;
    if (age >= 50  && age <= 80 ) {
        
        if (smoke === 'yes') {
            if (amount >= 1) {
                advice = "The USPSTF recommends you an annual screening for lung cancer with LDCT (Low-dose computed tomography)"
            }
        }
    }
    
    return advice;
}