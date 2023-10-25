validateForm = function () {
    return checkName();
    return checkEmail();
}

function checkName() {
    var x = document.myForm;
    var input = x.name.value;
    var errMsgHolder = document.getElementById('nameErrMsg');
    if (!(/^[a-zA-Z]+$/.test(input)))
    {
        errMsgHolder.innerHTML=
                'Only alphabets allowed'
    }
    else {
        errMsgHolder.innerHTML = '';
        return undefined;
    }       

}

function checkEmail() {
    var x = document.myForm;
    var input = x.email.value;
    var errMsgHolder = document.getElementById('emailErrMsg');

    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.match(input)))
    {
        errMsgHolder.innerHTML='invalid email'
    }

}