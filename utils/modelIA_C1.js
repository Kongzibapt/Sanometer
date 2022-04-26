
import AsyncStorage from "@react-native-async-storage/async-storage";
import { calculateAge } from "./functions";

const calculateAge = (birth_date) => {
    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
}
export const chapter1 = async () => {

    
    const sex = await AsyncStorage.getItem('sex');
    const birth_date = await AsyncStorage.getItem('birthdate');
    const country = await AsyncStorage.getItem('country');
    const race = await AsyncStorage.getItem('selectedrace');
    const area = await AsyncStorage.getItem('selectedarea');
    const geo = await AsyncStorage.getItem('selectedgeo');
    const educ = await AsyncStorage.getItem('selectededuc');
    const professionalChange = await AsyncStorage.getItem('professionalChange');
    const physicalEffort = await AsyncStorage.getItem('physicalEffort');
   
    var tab = [];

    //Sex  : neutral ?
    if (sex=="female") {
        tab[0]=0;
        tab[1]=1;
        tab[2]=0;
    } else if (sex=="male") {
        tab[0]=1;
        tab[1]=0;
        tab[2]=0;
    } else {
        tab[0]=0;
        tab[1]=0;
        tab[2]=1;
    }

    //Age
    var bod = new Date(birth_date);
    var age = calculateAge(bod);
    tab[3]=age;

    //Country of birth
    console.log(country);
    var country2 = country.toLowerCase();

    tab[4]=0;
    tab[5]=0;
    tab[6]=0;
    tab[7]=0;
    tab[8]=0;

    if (country2.charAt(0) == "f") {
        //Français
        tab[4]=1;
    } 
    else if (country2.charAt(0) == "i"){
        tab[8]=1;
    }
    else if (country2.substr(0,3) == "afr") {
        //African
        if (country2.charAt(3)=="i") {
            tab[5]=1
        } else if (country2.charAt(3)=="o") {
            //Afro-American
            tab[6]=1;
        }
    } else if (country2.charAt(0) == "c") {
        //Chinese
        tab[7]=1;
    }

    tab[9]=0;
    tab[10]=0;
    tab[11]=0;
    tab[12]=0;
    tab[13]=0;

    // Race
    if (race=="white") {
        tab[9]=1;
    } else if (race == "black") {
        tab[10]=1;
    } else if (race == "asian") {
        tab[11]=1;
    }  else if (race == "metis") {
        tab[12]=1;
    } else if (race == "ethnicity") {
        tab[13]=1;
    }

    tab[14]=0;
    tab[15]=0;
    tab[16]=0;
    

    //Place of living (area)
    if (area == "below") {
        tab[15]=1;
    } else if (area == "equal") {
        tab[16]=1;
    } else if (area == "above") {
        tab[14]=1;
    }

    tab[17]=0;
    tab[18]=0;
    tab[19]=0;
    tab[20]=0;
    tab[21]=0;
    

    //Geography
    if (geo == "plane") {
        tab[17] = 1;
    }else if (geo == "hill") {
        tab[18] = 1;
    }else if (geo == "mountain") {
        tab[19] = 1;
    }else if (geo == "sea") {
        tab[20] = 1;
    }else {
        tab[21] = 1;
    }

    tab[22]=0;
    tab[23]=0;
    tab[24]=0;
    tab[25]=0;
    tab[26]=0;

    //Education
    if (educ == "below") {
        tab[22] = 1;
    }else if (educ == "high_school") {
        tab[23] = 1;
    }else if (educ == "professional_school") {
        tab[24] = 1;
    }else if (educ == "bachelor") {
        tab[25] = 1;
    }else if (educ == "master_phd") {
        tab[26] = 1;
    }

    tab[27]=physicalEffort;

    //Professional Change
    if (professionalChange == 'no') {
        tab[28] = 0;
    } else if (professionalChange == 'yes') {
        tab[28] = 1;
    }

    console.log(tab);


    return tab;
}

//si résultat de la fonction >=0.5 c'est oui pour la question, sinon c'est non

export const  score_q1 = async (input) =>{
    var result="";
    if ((((((((((((((((((((((((((((((7.605141501183605) + ((input[0]) * (-0.027311268928878304))) + ((input[1]) * (0.027313297031027143))) + ((input[2]) * (0.0))) + ((input[3]) * (-0.48924283219115294))) + ((input[4]) * (-0.054590017159834234))) + ((input[5]) * (-0.026559495489351402))) + ((input[6]) * (-0.00015703216400611125))) + ((input[7]) * (0.10792564034943099))) + ((input[8]) * (-0.026617067434090418))) + ((input[9]) * (0.18768149307997625))) + ((input[10]) * (-0.29560510532725826))) + ((input[11]) * (0.0))) + ((input[12]) * (0.0))) + ((input[13]) * (0.0))) + ((input[14]) * (0.0))) + ((input[15]) * (0.0))) + ((input[16]) * (0.0))) + ((input[17]) * (-0.19043844505693314))) + ((input[18]) * (0.0))) + ((input[19]) * (0.0))) + ((input[20]) * (-0.08773774602850389))) + ((input[21]) * (0.0))) + ((input[22]) * (0.0))) + ((input[23]) * (0.08090586776533307))) + ((input[24]) * (0.27803809071277313))) + ((input[25]) * (-0.3555641321201674))) + ((input[26]) * (-0.0033777982557900267))) + ((input[27]) * (0.9979271558738524))) + ((input[28]) * (-0.35938510200569673))>=0.5){
        result = "It is recommended to have a screening test for cervical (uterin) cancer every 3 years with cervical cytology test ";
    }
    return result;
}

export const  score_q2 = async (input) =>{
    var result="";
    if ((((((((((((((((((((((((((((((-1.9339466278942858) + ((input[0]) * (-1.6832061788374366))) + ((input[1]) * (1.6828463265768296))) + ((input[2]) * (0.0))) + ((input[3]) * (0.10505322331419668))) + ((input[4]) * (-0.6656224714238195))) + ((input[5]) * (0.5520741387726432))) + ((input[6]) * (-0.12752435091123504))) + ((input[7]) * (-0.3645678445983233))) + ((input[8]) * (0.6052806759001272))) + ((input[9]) * (0.3125923329090499))) + ((input[10]) * (0.05161565942866516))) + ((input[11]) * (0.0))) + ((input[12]) * (0.0))) + ((input[13]) * (0.0))) + ((input[14]) * (0.0))) + ((input[15]) * (0.0))) + ((input[16]) * (0.0))) + ((input[17]) * (0.022806311415633176))) + ((input[18]) * (0.0))) + ((input[19]) * (0.0))) + ((input[20]) * (0.010091513400745175))) + ((input[21]) * (0.0))) + ((input[22]) * (0.0))) + ((input[23]) * (0.6783575722194172))) + ((input[24]) * (-0.6693000858727409))) + ((input[25]) * (-0.4116922635496351))) + ((input[26]) * (0.4022749249423508))) + ((input[27]) * (-0.6597101187321529))) + ((input[28]) * (-0.20625408842925932))>=0.5){

    
        result = "It is recommended to have a screening test every 3 years wit cervical cytology test alone ";
    }
    return result;
}

export const  score_q3 = async (input) =>{
    var result="";
    if ((((((((((((((((((((((((((((((-1.9339466278942858) + ((input[0]) * (-1.6832061788374366))) + ((input[1]) * (1.6828463265768296))) + ((input[2]) * (0.0))) + ((input[3]) * (0.10505322331419668))) + ((input[4]) * (-0.6656224714238195))) + ((input[5]) * (0.5520741387726432))) + ((input[6]) * (-0.12752435091123504))) + ((input[7]) * (-0.3645678445983233))) + ((input[8]) * (0.6052806759001272))) + ((input[9]) * (0.3125923329090499))) + ((input[10]) * (0.05161565942866516))) + ((input[11]) * (0.0))) + ((input[12]) * (0.0))) + ((input[13]) * (0.0))) + ((input[14]) * (0.0))) + ((input[15]) * (0.0))) + ((input[16]) * (0.0))) + ((input[17]) * (0.022806311415633176))) + ((input[18]) * (0.0))) + ((input[19]) * (0.0))) + ((input[20]) * (0.010091513400745175))) + ((input[21]) * (0.0))) + ((input[22]) * (0.0))) + ((input[23]) * (0.6783575722194172))) + ((input[24]) * (-0.6693000858727409))) + ((input[25]) * (-0.4116922635496351))) + ((input[26]) * (0.4022749249423508))) + ((input[27]) * (-0.6597101187321529))) + ((input[28]) * (-0.20625408842925932))>=0.5){
        result = "It is recommended to have a screening test every 5 years with high-risk human papilloma virus (PV) test alone ";
    }
    return result;
}

export const  score_q4 = async (input) =>{
    var result="";
    if ((((((((((((((((((((((((((((((-54.85697401484352) + ((input[0]) * (0.24614308704440394))) + ((input[1]) * (-0.24596268582392994))) + ((input[2]) * (0.0))) + ((input[3]) * (1.1255070819371855))) + ((input[4]) * (-0.0760937435547114))) + ((input[5]) * (0.08817372521975267))) + ((input[6]) * (-0.00008183717336459388))) + ((input[7]) * (-0.011764080884526169))) + ((input[8]) * (-0.00005366238667647568))) + ((input[9]) * (-0.07612982458218791))) + ((input[10]) * (0.08807430668718805))) + ((input[11]) * (0.0))) + ((input[12]) * (0.0))) + ((input[13]) * (0.0))) + ((input[14]) * (0.0))) + ((input[15]) * (0.0))) + ((input[16]) * (0.0))) + ((input[17]) * (0.001314963075050638))) + ((input[18]) * (0.0))) + ((input[19]) * (0.0))) + ((input[20]) * (0.08347392962646252))) + ((input[21]) * (0.0))) + ((input[22]) * (0.0))) + ((input[23]) * (-0.32340671405628985))) + ((input[24]) * (-0.01110330556946139))) + ((input[25]) * (0.3819148400795959))) + ((input[26]) * (-0.04722441923337096))) + ((input[27]) * (-0.1354852177102724))) + ((input[28]) * (-0.19366072608300222))>=0.5){
        result = "It is recommended to have a screening stool test every 2 years: the high senzitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT) ";
    }
    return result;
}

export const  score_q5 = async (input) =>{
    var result="";
    if ((((((((((((((((((((((((((((((-9.905529859469782) + ((input[0]) * (-0.38922827391669035))) + ((input[1]) * (0.3892923859619095))) + ((input[2]) * (0.0))) + ((input[3]) * (0.18396310116356898))) + ((input[4]) * (0.10448907727947936))) + ((input[5]) * (-0.09739633425202175))) + ((input[6]) * (-0.0037923364304241706))) + ((input[7]) * (-0.0015802281608093807))) + ((input[8]) * (-0.0016560663910046472))) + ((input[9]) * (0.10449406398396995))) + ((input[10]) * (-0.10284972377794123))) + ((input[11]) * (0.0))) + ((input[12]) * (0.0))) + ((input[13]) * (0.0))) + ((input[14]) * (0.0))) + ((input[15]) * (0.0))) + ((input[16]) * (0.0))) + ((input[17]) * (-0.17552019791861376))) + ((input[18]) * (0.0))) + ((input[19]) * (0.0))) + ((input[20]) * (0.18129009080937475))) + ((input[21]) * (0.0))) + ((input[22]) * (0.0))) + ((input[23]) * (-0.058220015968197765))) + ((input[24]) * (-0.28294651218205497))) + ((input[25]) * (0.5400897673823412))) + ((input[26]) * (-0.19885912718686918))) + ((input[27]) * (-0.7122058869740686))) + ((input[28]) * (0.3391020225261978))>=0.5){
        result = "It is recommended to have a mammography every 2 years ";
    }
    return result;
}