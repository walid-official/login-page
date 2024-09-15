let loginButton = document.getElementById("log-in");
let textInput = document.getElementById('text-input');
let passwordInput = document.getElementById('password-input');

loginButton.addEventListener('click', function(){
    if(textInput.value.length !== 11 || passwordInput.value.length !== 4){
        alert("Write minimum 11 digits");
    }else{
          // remove login page
        let mainContainer = document.getElementById('main-container');
        mainContainer.removeChild(document.getElementById("removeLogin"))
        // adding text of completion login
        let createh2 = document.createElement("h2");
        createh2.innerText = "Your Login is successfully completed";
        mainContainer.appendChild(createh2);
    }
})

// document.getElementById('text-input').addEventListener('keyup', function(event){
//     if(event.target.value.length !== 11){
//         loginButton.setAttribute("disabled", true)
//     }else{
//         loginButton.removeAttribute("disabled");
//     }
// });

// document.getElementById('password-input').addEventListener('keyup', function(event){
//     if(event.target.value.length !== 4){
//         loginButton.setAttribute('disabled', true);
//         alert("write minimum 4 words")
//     }else{
//         loginButton.removeAttribute("disabled");
//     }
// });
// ami chaitasi je jodi text-input ar value 11 hoi and password-input jodi 4 hoi tokhoni shudhu removeAttribute hobe..