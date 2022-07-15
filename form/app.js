//Chec the submit info
//function check if the input is empty
let saveFile = () => {
    //validation the empyt input
    var firstN = document.forms["Form"]["firstName"].value;
    var lastN = document.forms["Form"]["lastName"].value;
    var nickN = document.forms["Form"]["nickName"].value;
    var mail = document.forms["Form"]["email"].value;
    var numPhone = document.forms["Form"]["numPhone"].value;
    var birth = document.forms["Form"]["birthDay"].value;
    var coutr = document.forms["Form"]["country"].value;
    var passw = document.forms["Form"]["password"].value;

    if (!firstN || !lastN || !nickN || !mail || !numPhone || !birth || !coutr || !passw) {
      alert("Please Fill All Required Fields");
      return false;
    }
    //end the checking the emepy inputs

    //Validate the first name and last name
    validateName();
    //Validation for email validation
    emailValidation ();
    //validation for phone number
    phoneCheck();
    //validation for the passwords
    passRegConfirCheck();
    //end the validation of the first name and last name

    // Get the data from each element on the form.
    const firstName = document.getElementById("firstName");
    const secondName = document.getElementById("lastName");
    const nickName = document.getElementById("nickName");

    const email = document.getElementById("email");
    const number = document.getElementById("numPhone");

    const age = document.getElementById("birthDay");
    const country = document.getElementById("country");

    const pass = document.getElementById("passFirst");
    const rePass = document.getElementById("rePass");
    
    // This variable stores all the data.
    let data = "\r First Name: " + firstName.value + 
    " \r\n " + "Second Name: " + secondName.value +
    " \r\n " + "Nick Name: " + nickName.value + 

    " \r\n " + "Email: " + email.value + 
    " \r\n " + "Number: " + number.value +

    " \r\n " + "Age: " + age.value + 
    " \r\n " + "Country: " + country.value + 

    " \r\n " + "Password: " + pass.value + 
    " \r\n " + "Repeat Password: " + rePass.value;
    

    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};

//function for show password
function showPassword() {
    var pass = document.getElementById("passFirst");
    var rePass = document.getElementById("rePass");
    if (pass.type === "password" || rePass.type === "password") {
      pass.type = "text";
      rePass.type = "text";
    } else {
      pass.type = "password";
      rePass.type = "password";
    }
  }


//validate the firstname
function validateName(){
    //Variables
    var regName = /^[A-Z][a-z]{2,30}$/;
    var firname = document.getElementById('firstName').value;
    var lasname = document.getElementById('lastName').value;

    //last name validation
    if(!regName.test(firname)){
        //alert the error
        alert('Please enter your full first name (Barimb).');
        //change the color of the fild
        document.getElementById("firstName").style.borderColor = "#ff0000";
        //focus on the input
        document.getElementById('firstName').focus();
        //stop the execution
        let check = false;
        if(check == false){
          process.exit(0);
        }
    }else if(!regName.test(lasname)){
      //change the color of the fild
      document.getElementById("lastName").style.borderColor = "#ff0000";
      //alert the error
      alert('Please enter your full last name (Eusebiu).');
      //focus on te input
      document.getElementById('lastName').focus();
      //stop the program
      let check = false;
      if(check == false){
        process.exit(0);
      }
    }else{
        console.log('--> Valid first name and last name given.');
        document.getElementById("firstName").style.borderColor = "#000";
        document.getElementById("lastName").style.borderColor = "#000";
        return true;
    }
}


//email validation with regex
function emailValidation (){
  //crearea variabilelor de lucru
  var regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var getMail = document.getElementById('email').value;
  //verificarea datelor introduse
  if(!regMail.test(getMail)){
    //alert the error
    alert('Please provide valid email');
    //change the color of the fild
    document.getElementById("email").style.borderColor = "#ff0000";
    //focus on the input
    document.getElementById('email').focus();
    let check = false;
    if(check == false){
      proces.exit(0);
    }
  }else{
    console.log('--> Provided mail is valid');
    document.getElementById("email").style.borderColor = "#000";
  }
  
}

//validation for phone validator
function phoneCheck(){
  //var regPhone = /^[a+]{1}[0-9]{2,6}[0-9]{7,12}$/;
  var regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  var getPhone = document.getElementById('numPhone').value;
  
  // console.log(getPhone);

  if(!regPhone.test(getPhone)){
    //alert the erro
    alert('Please provide valid phone number');
    //focus on the input
    document.getElementById('numPhone').focus();
    //change the color of the fild
    document.getElementById("numPhone").style.borderColor = "#ff0000";
    //stop the program
    let check = false;
    if(check == false){
      proces.exit(0);
    }
  }else{
    console.log('--> Provided phone number is valid');
    document.getElementById("numPhone").style.borderColor = "#000";
  }
}

//password validation regex and confirmation check
function passRegConfirCheck(){
  //get the value of the variable from the document
  var  getFirPassw = document.getElementById('passFirst').value;
  var getSecPassw = document.getElementById('rePass').value;
  //insert the regex check
  var passRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
  //verification the data input
  console.log("Main password: " + getFirPassw);
  console.log("Valid password: " + getSecPassw);
  //check if the password are the same
  if(getFirPassw == getSecPassw){
    console.log('the passwords are validate');
  }else{
    alert("Confirmation password is incorect!");
     //stop the execution of the program
     let check = false;
     if(check == false){
       proces.exit(0);
     }
  }

  //check the regex validation
  if(!passRegex.test(getFirPassw) ){
    //error information
    alert('Please provide valid strong security password');
    //change the color of the fild
    document.getElementById("passFirst").style.borderColor = "#ff0000";
    //focus on the input
    document.getElementById('passFirst').focus();
    //stop the execution of the program
    let check = false;
    if(check == false){
      proces.exit(0);
    }
  } else if(!passRegex.test(getSecPassw) ){
    //error information
    alert('Please provide corect security confirmation password');
    //focus on the specific input
    document.getElementById('rePass').focus();
    //error change color input
    document.getElementById("rePass").style.borderColor = "#ff0000";
    //Stop the execution of the program
    let check = false;
    if(check == false){
      proces.exit(0);
    }
  }else{
    console.log('--> Privede emails are valid');
    document.getElementById("passFirst").style.borderColor = "#000";
    document.getElementById("rePass").style.borderColor = "#000";
  }

}