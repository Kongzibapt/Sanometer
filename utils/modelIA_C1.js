
import AsyncStorage from "@react-native-async-storage/async-storage";

const calculateAge = (birth_date) => {
    var month_diff = Date.now() - birth_date.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
}
export const score_chapter1 = async () => {

    var result="";
    const sex = await AsyncStorage.getItem('sex');
    const birth_date = await AsyncStorage.getItem('birthdate');
    var country = await AsyncStorage.getItem('country');
    const race = await AsyncStorage.getItem('selectedrace');
    const area = await AsyncStorage.getItem('selectedarea');
    const geo = await AsyncStorage.getItem('selectedgeo');
    const educ = await AsyncStorage.getItem('selectededuc');
    const professionalChange = await AsyncStorage.getItem('professionalChange');
    const physicalEffort = await AsyncStorage.getItem('physicalEffort');
   
    var tab = [];
    console.log("sex " + sex);
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
    country == null ? country = "Unknown" : null;
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

    if (sex==="female" && (((((((((((((((((((((((((((((15.837729468637262) + ((tab[0]) * (-0.9983810861442863))) + ((tab[1]) * (0.9983589007918215))) + ((tab[2]) * (0.0))) + ((tab[3]) * (-0.7266660515945634))) + ((tab[4]) * (0.5006032585561098))) + ((tab[5]) * (-0.6843677874617478))) + ((tab[6]) * (-0.00003689119008751017))) + ((tab[7]) * (0.12558398630212075))) + ((tab[8]) * (-0.0015705380358727638))) + ((tab[9]) * (-0.018261970289841143))) + ((tab[10]) * (-0.10729133336225474))) + ((tab[11]) * (0.0))) + ((tab[12]) * (0.0))) + ((tab[13]) * (0.0))) + ((tab[14]) * (-0.13267163653304417))) + ((tab[15]) * (-0.5563588045350782))) + ((tab[16]) * (0.0))) + ((tab[17]) * (-1.0798690965979136))) + ((tab[18]) * (0.0))) + ((tab[19]) * (0.0))) + ((tab[20]) * (0.12995334202232006))) + ((tab[21]) * (0.0))) + ((tab[22]) * (0.0))) + ((tab[23]) * (-0.34483726161027833))) + ((tab[24]) * (0.6356115399588034))) + ((tab[25]) * (-0.2891497592430282))) + ((tab[26]) * (-0.0016467044579600116))) + ((tab[27]) * (0.5478040364472176))) + ((tab[28]) * (-0.5475884909714532))>=0.5){
        result += "It is recommended to have a screening test for cervical (uterin) cancer every 3 years with cervical cytology test. ";
    }
    if (sex==="female" && (((((((((((((((((((((((((((((-7.107707395473616) + ((tab[0]) * (-2.580288171621335))) + ((tab[1]) * (2.5805278404960186))) + ((tab[2]) * (0.0))) + ((tab[3]) * (0.15811240624816825))) + ((tab[4]) * (-0.7168160963316643))) + ((tab[5]) * (0.7580318165405838))) + ((tab[6]) * (-0.05806304499773181))) + ((tab[7]) * (-0.3452611775995336))) + ((tab[8]) * (0.5930782925824167))) + ((tab[9]) * (0.4361057901463338))) + ((tab[10]) * (-0.07241646909546812))) + ((tab[11]) * (0.0))) + ((tab[12]) * (0.0))) + ((tab[13]) * (0.0))) + ((tab[14]) * (0.2812358860941618))) + ((tab[15]) * (0.6698627562583446))) + ((tab[16]) * (0.0))) + ((tab[17]) * (0.36101488532568465))) + ((tab[18]) * (0.0))) + ((tab[19]) * (0.0))) + ((tab[20]) * (-0.46158352014068993))) + ((tab[21]) * (0.0))) + ((tab[22]) * (0.0))) + ((tab[23]) * (0.06263596710830178))) + ((tab[24]) * (-0.4997134575053619))) + ((tab[25]) * (-0.36111338979094565))) + ((tab[26]) * (0.7984305490626893))) + ((tab[27]) * (-0.1701584394188577))) + ((tab[28]) * (-0.3721583496371003))>=0.5){

    
        result += "It is recommended to have a screening test every 3 years wit cervical cytology test alone. ";
    }
    if ((((((((((((((((((((((((((((((-7.107707395473616) + ((tab[0]) * (-2.580288171621335))) + ((tab[1]) * (2.5805278404960186))) + ((tab[2]) * (0.0))) + ((tab[3]) * (0.15811240624816825))) + ((tab[4]) * (-0.7168160963316643))) + ((tab[5]) * (0.7580318165405838))) + ((tab[6]) * (-0.05806304499773181))) + ((tab[7]) * (-0.3452611775995336))) + ((tab[8]) * (0.5930782925824167))) + ((tab[9]) * (0.4361057901463338))) + ((tab[10]) * (-0.07241646909546812))) + ((tab[11]) * (0.0))) + ((tab[12]) * (0.0))) + ((tab[13]) * (0.0))) + ((tab[14]) * (0.2812358860941618))) + ((tab[15]) * (0.6698627562583446))) + ((tab[16]) * (0.0))) + ((tab[17]) * (0.36101488532568465))) + ((tab[18]) * (0.0))) + ((tab[19]) * (0.0))) + ((tab[20]) * (-0.46158352014068993))) + ((tab[21]) * (0.0))) + ((tab[22]) * (0.0))) + ((tab[23]) * (0.06263596710830178))) + ((tab[24]) * (-0.4997134575053619))) + ((tab[25]) * (-0.36111338979094565))) + ((tab[26]) * (0.7984305490626893))) + ((tab[27]) * (-0.1701584394188577))) + ((tab[28]) * (-0.3721583496371003))>=0.5){
        result += "It is recommended to have a screening test every 5 years with high-risk human papilloma virus (PV) test alone. ";
    }
    if ((((((((((((((((((((((((((((((-65.016278062999) + ((tab[0]) * (0.2319679842081265))) + ((tab[1]) * (-0.23178740640068066))) + ((tab[2]) * (0.0))) + ((tab[3]) * (1.3465749814998))) + ((tab[4]) * (0.010436996271309715))) + ((tab[5]) * (0.008662052365322916))) + ((tab[6]) * (0.000003764800427927406))) + ((tab[7]) * (-0.01416521369339964))) + ((tab[8]) * (0.000038119784643356635))) + ((tab[9]) * (0.010487856738691074))) + ((tab[10]) * (0.00864466168389695))) + ((tab[11]) * (0.0))) + ((tab[12]) * (0.0))) + ((tab[13]) * (0.0))) + ((tab[14]) * (-0.06946136181590369))) + ((tab[15]) * (-0.4347594093287135))) + ((tab[16]) * (0.0))) + ((tab[17]) * (0.1237135535748781))) + ((tab[18]) * (0.0))) + ((tab[19]) * (0.0))) + ((tab[20]) * (-0.01948726914966701))) + ((tab[21]) * (0.0))) + ((tab[22]) * (0.0))) + ((tab[23]) * (-0.44276348361683304))) + ((tab[24]) * (-0.018799243883638753))) + ((tab[25]) * (0.5096871451331458))) + ((tab[26]) * (-0.04794383982523103))) + ((tab[27]) * (-0.14065162676241674))) + ((tab[28]) * (-0.19373046362054563))>=0.5){
        result += "It is recommended to have a screening stool test every 2 years: the high senzitivity guaiac fecal occult blood test (gFOBT) or fecal immunochemical test (FIT). ";
    }
    if ( sex=="female" && (((((((((((((((((((((((((((((-10.615789309779618) + ((tab[0]) * (-0.8654561780746072))) + ((tab[1]) * (0.8653241043402232))) + ((tab[2]) * (0.0))) + ((tab[3]) * (0.19568709289495761))) + ((tab[4]) * (0.26266896324134653))) + ((tab[5]) * (-0.22287394208815656))) + ((tab[6]) * (-0.004168600787424852))) + ((tab[7]) * (-0.002319809685018623))) + ((tab[8]) * (-0.0048483265214293745))) + ((tab[9]) * (0.2712663895830797))) + ((tab[10]) * (-0.2683730723411358))) + ((tab[11]) * (0.0))) + ((tab[12]) * (0.0))) + ((tab[13]) * (0.0))) + ((tab[14]) * (-0.43566385460051643))) + ((tab[15]) * (-0.3081376633095639))) + ((tab[16]) * (0.0))) + ((tab[17]) * (0.1601527703859476))) + ((tab[18]) * (0.0))) + ((tab[19]) * (0.0))) + ((tab[20]) * (-0.05388818651796197))) + ((tab[21]) * (0.0))) + ((tab[22]) * (0.0))) + ((tab[23]) * (-0.16576561736831677))) + ((tab[24]) * (-0.5264181744310943))) + ((tab[25]) * (0.9344737899443507))) + ((tab[26]) * (-0.2424220718793243))) + ((tab[27]) * (-0.624418425010103))) + ((tab[28]) * (0.5964286449784503))>=0.5){
        result += "It is recommended to have a mammography every 2 years. ";
    }

    return result;
}

