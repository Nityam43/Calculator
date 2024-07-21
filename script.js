let text = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      text = eval(text);
      document.querySelector("input").value = text;
    } else if (e.target.innerHTML == "AC") {
      text = "";
      document.querySelector("input").value = text;
    } else if (e.target.innerHTML == "X") {
      text += "*";
      document.querySelector("input").value = text.replace(/\*/g, "X");
    } else if (e.target.innerHTML == "÷") {
      text += "/";
      document.querySelector("input").value = text.replace(/\//g, "÷");
    } else if (e.target.innerHTML == "±") {
      if (text.includes("-")) {
        text = text.replace("-", "");
        document.querySelector("input").value = text.replace(/\-/g, "").replace(/\*/g, 'X').replace(/\//g, '÷');
      } else {
        text = "-" + text;
        document.querySelector("input").value = text.replace(/\-/g, "-").replace(/\*/g, 'X').replace(/\//g, '÷');
      }
    }
    else if(button.innerHTML.includes('<i class="fa-solid fa-delete-left"></i>')){
        text = text.slice(0, -1);
        document.querySelector("input").value = text.replace(/\*/g, 'X').replace(/\//g, '÷');
    }
    else {
      console.log(e.target);
      text += e.target.innerHTML;
      // document.querySelector("input").value = text;
      document.querySelector("input").value = text.replace(/\//g, "÷").replace(/\*/g, "X");
      // Here both '/' & '*' are written in one line.
    }
  });
});