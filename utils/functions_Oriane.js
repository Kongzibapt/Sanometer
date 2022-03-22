import AsyncStorage from "@react-native-async-storage/async-storage";

export const sexAndAgeAdvices = () => {
    
    const age = await AsyncStorage.getItem('age');
    const period = await AsyncStorage.getItem('period');
    const amount = await AsyncStorage.getItem('amount');
    const smoke = await AsyncStorage.getItem('smoke');

    
function advice(age,period,amount,smoke) {
    var Advice ;
    if (age)
        if (checked === 'yes') {

        }
}
 
    /* Do you smoke ? : checked
    renderdropdown : period // amount // 


        */


}