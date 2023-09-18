console.log("hello world");


function isStrongPassword(pasword){
    let hasNum = 0;
    let i = 0;
    while(i < pasword.length ){
        i++;
        if(pasword.charCodeAt(i) > 47 && pasword.charCodeAt(i) < 58){
            hasNum = 1;
        }
    }

    if(pasword.length < 8){
        console.log("false - Too short");
        return false;
    }else if(pasword.indexOf("password") !== -1){
        console.log("false - Contains 'password' ")
        return false;

    }else if(hasNum == 0){
        console.log("false - No uppercase numbers");
        return false;
    }else{
        console.log("true");
        return true;
    }


}
isStrongPassword("qwerty1");
isStrongPassword("qwertypassword1");
isStrongPassword("qwertyABC");
isStrongPassword("qwerty123");
