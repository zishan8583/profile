const authForm = async(name,number,email) =>{

    console.log('====================================');
    console.log(number, "number");
    console.log('====================================');
    
        if (number.length !== 10)
            return 0;
        if (name.length === 0) {
            return 0;
        }    
        if (email.length === 0) {
            return 0;
        }

        return 1;
};


export default authForm;