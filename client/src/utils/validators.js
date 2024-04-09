import { isValidUsername } from "6pp";

export {isValidUsername} from "6pp";
export const usernameValidator=(username)=>{
    const isValidbool=isValidUsername(username);
    if(!isValidbool){
        return {isValid: isValidbool,errorMessage: "Invalid username"}
    }
    
}