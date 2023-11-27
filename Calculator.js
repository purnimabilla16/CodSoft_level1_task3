let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string.replace(/%/g, '/100'));
        document.querySelector('input').value = string;
      }
      catch (err) {
        string = "Error";
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = ""
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'x') {
      string = string + '*';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == "\u00f7") {
      string = string + '/';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})