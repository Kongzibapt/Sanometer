export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";

export function setFirstname(firstname) {
    return {
        type: SET_FIRSTNAME,
        payload : {
            name : "firstname",
            value : firstname
        }
    }
}

export function setLastname(lastname) {
    return {
        type: SET_LASTNAME,
        payload : {
            name : "lastname",
            value : lastname
        }
    }
}