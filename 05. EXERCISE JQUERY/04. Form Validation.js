function validate() {

    $('#company').on('change', showHideCompany);

    $('#submit').on('click', function () {

        let usernameValidation = /^([a-zA-Z0-9]{3,20})$/g;
        let passwordValidation = /^([a-zA-Z0-9_]{5,15})$/g;
        let emailValidation = /@.*\./g;
        let companyValidation = /^[1-9]{1}[0-9]{3}$/;

        let allFieldsValid = true;

        let username = $('#username').val();
        if (!username.match(usernameValidation)){
            $('#username').css('border-color', 'red');
            allFieldsValid = false;
        }else {
            $('#username').css('border', 'none');
        }

        let password = $('#password').val();
        if (!password.match(passwordValidation)){
            $('#password').css('border-color', 'red');
            allFieldsValid = false;
        }else {
            $('#password').css('border', 'none');
        }

        let confirmPass = $('#confirm-password').val();
        if(confirmPass.match(passwordValidation) && confirmPass.localeCompare(password) === 0){
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border-color', 'red');
            allFieldsValid = false;
        }

        let email = $('#email').val();
        if (!email.match(emailValidation)){
            $('#email').css('border-color', 'red');
            allFieldsValid = false;
        }else {
            $('#email').css('border', 'none');
        }

        if($('#company').is(':checked')){
            let company = $('#companyNumber').val();
            if(!company.match(companyValidation)){
                $('#companyNumber').css('border-color', 'red');
                allFieldsValid = false;
            } else {
                $('#companyNumber').css('border', 'none');
            }
        }

        if (allFieldsValid){
          $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    });

    function showHideCompany() {
        if($(this).is(':checked')){
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}