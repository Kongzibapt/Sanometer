
import AsyncStorage from "@react-native-async-storage/async-storage";

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
   
    var tab = [];

    //Sex  : neutral ?
    if (sex=="female") {
        tab[0]=1;
    } else {
        tab[0]=0
    }

    //Age
    var bod = new Date(birth_date);
    var age = calculateAge(bod);
    tab[1]=age;

    //Country of birth
    console.log(country);
    var country2 = country.toLowerCase();
    
    if (country2.charAt(0) == "f") {
        //Français
        tab[2]=0;
    } 
    else if (country2.substr(0,3) == "afr") {
        //African
        if (country2.charAt(3)=="i") {
            tab[2]=1
        } else if (country2.charAt(3)=="o") {
            //Afro-American
            tab[2]=2;
        }
    } else if (country2.charAt(0) == "c") {
        //Chinese
        tab[2]=3;
    }

    // Race
    if (race=="white") {
        tab[3]=0;
    } else if (race == "black") {
        tab[3]=1;
    } else if (race == "asian") {
        tab[3]=2;
    }  else if (race == "metis") {
        tab[3]=3;
    }

    //Place of living (area)
    if (area == "below") {
        tab[4]=0;
    } else if (area == "equal") {
        tab[4]=1;
    } else if (area == "above") {
        tab[4]=2;
    }

    //Geography
    if (geo == "plane") {
        tab[5] = 0;
    }else if (geo == "hill") {
        tab[5] = 1;
    }else if (geo == "mountain") {
        tab[5] = 2;
    }else if (geo == "sea") {
        tab[5] = 3;
    }

    //Education
    if (educ == "below") {
        tab[6] = 0;
    }else if (educ == "high_school") {
        tab[6] = 1;
    }else if (educ == "professional_school") {
        tab[6] = 2;
    }else if (educ == "bachelor") {
        tab[6] = 3;
    }else if (educ == "master_phd") {
        tab[6] = 4;
    }

    //Professional Change
    if (professionalChange == 'no') {
        tab[7] = 0;
    } else if (professionalChange == 'yes') {
        tab[7] = 1;
    }

    console.log(tab);


    return tab;
}

function score(input) {
    return (((((((((-2.503633564659126) + ((input[0]) * (0.5112769226253273))) + ((input[1]) * (-0.7865564318845352))) + ((input[2]) * (-0.055783208552543075))) + ((input[3]) * (-0.052974771580833566))) + ((input[4]) * (0.23990122693133234))) + ((input[5]) * (0.8967344835248521))) + ((input[6]) * (0.3416754147479145))) + ((input[7]) * (0.3501875329218538))) + ((input[8]) * (0.24988263350147902));
}
