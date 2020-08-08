/* Add any JavaScript you need to this file. */
window.onload = function () {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  toggleButton.addEventListener('touchstart', () => {
    navbarLinks.classList.toggle('active');
  });



  function show1() {
    document.getElementById('orderhidden').style.display = 'none';
  }
  function show2() {
    document.getElementById('orderhidden').style.display = 'block';
  }


  document.getElementById('question').addEventListener('click', show1);
  document.getElementById('comment').addEventListener('click', show1);

  document.getElementById('orderproblem').addEventListener('click', show2);


};



window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

function change_bgcolor() {
  var nav2 = document.getElementById("nav2");
  var colors = ["orange", "red", "goldenrod", "sandybrown", "chocolate", "peru", "burlywood"];
  var min = Math.ceil(0);
  var max = Math.floor(colors.length - 1);
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  nav2.style.backgroundColor = colors[pos];
}

window.setInterval(change_bgcolor, 1000); 
