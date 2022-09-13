
// tab setting in render section
document.getElementById('defaultOpen').click();

function openTab(evt, tabName) {

    var tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// modal
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var btn = document.getElementById('signin-button');
var menuBtn = document.getElementById('menu-button');

var close = document.getElementsByClassName('close')[0];
var close2 = document.getElementsByClassName('close')[1];

var signInSpan = document.getElementById('signIn');
var createAccountSpan = document.getElementById('createAccount');
var signInButton = document.getElementById('signInInModal');
var forgotA = document.getElementById('forgotA');


btn.onclick = () => {
    modal.style.display = "block";
}

menuBtn.onclick = () => {
    modal2.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

close2.onclick = function() {
    modal2.style.display = "none";
}

signInSpan.onmouseup = function() {
    signInSpan.style.borderTop = "1px solid #000";
    createAccountSpan.style.borderTop = "1px solid #efefef";
    createAccountSpan.style.color = "#999";
    signInSpan.style.color = "#000";
    
    forgotA.innerText = "Forgot password";
    signInButton.value = "Sign In";
}

createAccountSpan.onmouseup = () => {
    createAccountSpan.style.borderTop = "1px solid #000";
    signInSpan.style.borderTop = "1px solid #efefef";
    signInSpan.style.color = "#999";
    createAccountSpan.style.color = "#000";
    signInButton.value = "Create an account";
    forgotA.innerText = "Got an account? Sign in";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var span1 = document.getElementById('signIn');
var span2 = document.getElementById('createAccount');
span1.onclick = () => {
    span1.style.borderTop = "1px solid #000;";
    span2.style.borderTop = "1px solid #efefef;";
}

span2.onclick = () => {
    span2.style.borderTop = "1px solid #000;";
    span1.style.borderTop = "1px solid #efefef;";
}

//  footer accordion menu in mobile view
var acc = document.getElementsByClassName('accordion');
var accPanel = document.getElementsByClassName('accordionPanel');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }); 
}