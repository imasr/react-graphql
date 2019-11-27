 export default class Utils {
    
    static validateEmail(value) {
        //eslint-disable-next-line
        const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        return emailRegex.test(value)
    }

    static validatePassword(value) {
        const passwordObj = {
            minUppercaseCharCount: 1,
            minLowercaseCharCount: 1,
            minDigitsCount: 1,
            minSpecCharCount: 1,
            minLength: 6
        };
        const passwordPattern= RegExp(`^(?=.*?[A-Z]{${passwordObj.minUppercaseCharCount}})(?=.*?[a-z]{${passwordObj.minLowercaseCharCount}})(?=.*?[0-9]{${passwordObj.minDigitsCount}})(?=.*?[#?!@$%^&*-]{${passwordObj.minSpecCharCount}}).{${passwordObj.minLength},}$`)
        return passwordPattern.test(value)
    }

}