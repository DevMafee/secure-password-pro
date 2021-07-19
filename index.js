function generatePassword(length=8, number=false, symbol=false) {
    let returnPassword = '';
    
    if(number && symbol){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`! @#$%^&*()_-+={[}]|\:;"<,>.?/';
    }

    if(!number && symbol){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`! @#$%^&*()_-+={[}]|\:;"<,>.?/';
    }

    if(number && !symbol){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }

    if(!number && !symbol){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    length = length<8?8:length
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        returnPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return returnPassword;
}

module.exports = { generatePassword };
