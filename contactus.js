function showForm() {
    document.getElementById("form-content").style.display = "flex";
    document.getElementById("form-button").style.backgroundColor = "rgb(62, 165, 255)";
    document.getElementById("location-button").style.backgroundColor = "#e1a74ad7";
    document.getElementById("location-content").style.display = "none";
}

function showMap() {
    document.getElementById("location-content").style.display = "block";
    document.getElementById("location-button").style.backgroundColor = "rgb(62, 165, 255)";
    document.getElementById("form-button").style.backgroundColor = "#e1a74ad7";
    document.getElementById("form-content").style.display = "none";
}

let form = document.getElementById("ctform");

function submitForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
  
    if (name.value == "" || email.value == ""|| message.value =="") {
        alert("Ensure you input a value in required fields!");
    } else {
      alert("This form has been successfully submitted!");
      console.log(
        `Name: ${name.value} \nEmail: ${email.value} \nSubject: ${subject.value} \nMessage: ${message.value}`
      );
  
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    }
}