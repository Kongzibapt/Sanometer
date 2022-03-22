import AsyncStorage from "@react-native-async-storage/async-storage";
const fonction = fucntion(){
  const diabetes = await AsyncStorage.getItem('isEnabled_diabetes');
  const [res10, setRes10] = react.useState("");
  const bloodPressure = await AsyncStorage.getItem('pressure');
  var sbp = parseInt(bloodPressure.split('/')[0]);
  var dbp = parseInt(bloodPressure.split('/')[1]);
  const hbp = sdp>90 || dbp>140 ;


  const obesity = imc>30;//si l'IMC est supérieur à 30 le sujet est en obésité modérée
  if (diabetes && hbp && obesity){
    setRes10("metabolic syndrome->make the SCORE test for CardioVascular risk factors");
  }
}
