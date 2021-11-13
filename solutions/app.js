
import checkMac from "./mac";
import checkIP from "./ip";
import checkVisa from "./visa";

const checker = {
    rules: {"visa": checkVisa, "mac": checkMac, "ip": checkIP},
    validate(str, rule){
        return this.rules[rule](str);
    }
}

export default checker;