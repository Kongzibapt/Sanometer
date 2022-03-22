import AsyncStorage from "@react-native-async-storage/async-storage";

export const sexAndAgeAdvices = () => {
    
    var birth_date = await AsyncStorage.getItem('birth_date');
    const period = await AsyncStorage.getItem('period');
    const amount = await AsyncStorage.getItem('amount');
    const smoke = await AsyncStorage.getItem('smoke');

    birth_date = new Date(birth_date);

    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    console.log(age);

    var advice ;
    if (age > 50  && age < 80 ) {
        
        if (smoke === 'yes') {
            if (amount >= 1) {
                advice = "The USPSTF recommends you an annual screening for lung cancer with LDCT (Low-dose computed tomography)"
            }
        }
    }
    console.log(advice)
}
 


