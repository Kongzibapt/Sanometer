import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';



export const calculateAge = (birth_date) => {
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
                advice += "The USPSTF (US Preventive Services Task Force) recommends screening for cervical cancer every 3 years with cervical cytology alone in women aged 21 to 29 years. "
            } 
            if (age >= 30 && age <= 65){
                advice += "The USPSTF recommends screening every 3 years with cervical cytology alone, every 5 years with high-risk human papillomavirus (hrHPV) testing alone, or every 5 years with hrHPV testing in combination with cytology (cotesting). "
            } 
            if (age >= 45){
                advice += "The French Health Authority recommends a mammography every 2 years. "
            }
            if (age >= 50 && age <= 75){
                advice += "The French Health Authority recommends a screening stool test every 2 years : the high-sensitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT). "
            }
            
        } else if (sex == "male"){
            if (age >= 50 && age <= 75){
                advice += "The French Health Authority recommends a home screening stool test every 2 years : the high-sensitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT). "
            }
        }
    }

    return advice;
}

/*
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
}*/

export const metabolicAdvice = async () => {
    var res10 = "";
    
    const diabetes = await AsyncStorage.getItem('isEnabled_diabetes');
    const checked_chro = await AsyncStorage.getItem('checked_chro');
    const bloodPressure = await AsyncStorage.getItem('pressure');
    const weight = await AsyncStorage.getItem('weight');
    const height = await AsyncStorage.getItem('height');

    if (bloodPressure) {
        var sbp = parseInt(bloodPressure.split('/')[0]);
        var dbp = parseInt(bloodPressure.split('/')[1]);
        const hbp = sbp>90 || dbp>140 ;
        var imc = weight / (height*height);


        const obesity = imc>30;//si l'IMC est supérieur à 30 le sujet est en obésité modérée
        if (checked_chro==="yes" &&diabetes && hbp && obesity){
        res10 = "metabolic syndrome->make the SCORE test for CardioVascular risk factors";
        }
    }
    

    return res10;
  }

  export const bloodSugarAdvices = async () => {
    var result = "";
    const diabetic = await AsyncStorage.getItem('checked');
    const glocoseLevel = await AsyncStorage.getItem('selectedglucose');
    const checkedHb = await AsyncStorage.getItem('checkedHb');

    if ( diabetic==='yes' && glocoseLevel !== "normal" && checkedHb === 'no') {
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

    var advice = "";
    if (age >= 50  && age <= 80 ) {
        
        if (smoke === 'yes') {
            if (amount >= 1) {
                advice = "The USPSTF recommends you an annual screening for lung cancer with LDCT (Low-dose computed tomography)"
            }
        }
    }
    
    return advice;
}

export const bloodSugarLevelAdvices = async () => {
    var result = "";
    const bloodsugarlevel = parseFloat(await AsyncStorage.getItem('bloodsugar'));
    const bloodsugarlevel2 = parseFloat(await AsyncStorage.getItem('bloodsugar2'));
    const thirsty = await AsyncStorage.getItem('thirsty');
    const physiourinate = await AsyncStorage.getItem('physiourinate');
    const weigthloss = await AsyncStorage.getItem('weightloss');
    //const blurryvision = await AsyncStorage.getItem('blurryvision');
    const tired = await AsyncStorage.getItem('tired');
    const emptysto = await AsyncStorage.getItem('emptysto');
    const glysymp = await AsyncStorage.getItem('glysymp');

    if ( thirsty==="yes" && physiourinate==='yes' && weigthloss==="yes" && tired==='yes') {
        result = "It is recommended that you check your blood sugar levels as a matter of urgency on an empty stomach (minimum 8 hours after your last meal)";
        if ((bloodsugarlevel>2 && glysymp==="yes")||(bloodsugarlevel>=1.26 && bloodsugarlevel2>=1.26 && glysymp==="no" && emptysto==="yes")){
            result+="You should consult your doctor.";
        }
    }

    

    return result;
}

export const groinAdvices = async () => {
    var result = "";
    const groinpain = await AsyncStorage.getItem('groinpain');
    const groinpainsympt = await AsyncStorage.getItem('groinpainsympt');

    if ( groinpain==="yes" && groinpainsympt==='yes') {
        result = "An abdominal/visceral surgeon should be consulted within the next month for your groin pain.";
    }

    return result;
}


export const contraceptionAdvices = async () => {
    var result = "";
    const checked = AsyncStorage.getItem('sex');
    const contraception = await AsyncStorage.getItem('checked_contra');
    const smoke = await AsyncStorage.getItem('smoke');

    if ( checked === 'female' && contraception==="yes" && smoke==="yes") {
        result = "Please fill in the form \"Emotional profile\" for your pain symptoms.";
    }

    return result;
}

export const BMIAdvices = async () => {
    var result = "";
    const weight = await AsyncStorage.getItem('weight');
    const height = await AsyncStorage.getItem('height');
    var bmi = weight/((height/100)*(height/100));
    const bloodsugarlevel = parseFloat(await AsyncStorage.getItem('bloodsugar'));
    const abdominal_perim = await AsyncStorage.getItem('abdominal_param');
    const thirsty = await AsyncStorage.getItem('thirsty');
    const physiourinate = await AsyncStorage.getItem('physiourinate');
    const weigthloss = await AsyncStorage.getItem('weightloss');
    const tired = await AsyncStorage.getItem('tired');
    const emptysto = await AsyncStorage.getItem('emptysto');
    const glysymp = await AsyncStorage.getItem('glysymp');

    if (bmi<19) {
        result = "Urgent medical advice needed (risk of malnutrition). ";
    } else if (bmi>=30 && bmi<=34.9) {
        result = "You have a moderate obésity, you will receive the individualise illness risk factors. ";
    } else if (bmi<=39.9 && bmi>=35) {
        result = "You have a mild obésity, you will receive the individualise illness risk factors. ";
    } else if (bmi>40){
        result = "You have a severe obésity, you will receive the individualise illness risk factors and you have a formal indication for bariatric surgery. ";
    }

  
    if ( thirsty==="yes" && physiourinate==='yes' && weigthloss==="yes" && tired==='yes') {
        
        if (bmi>30 && bloodsugarlevel>2) {
            result += "Metabolic syndrome suspected, you need a screening for high blood pressure You will be able to calculate your risk for cardiovascular disease. ";
        } 
        
    }
    
    if (abdominal_perim>88){
        result += "You have a higher risk for cardiovascular disease.  ";
    }
    

    return result;
}