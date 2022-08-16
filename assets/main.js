
// tab setting in render section
document.getElementById('defaultOpen').click();

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;
    
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
var btn = document.getElementById('signin-button');
var close = document.getElementsByClassName('close')[0];

btn.onclick = () => {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
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