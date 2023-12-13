let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".button");
let string = "";

//? For Loop
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // jika diklik tombol =
    if (e.target.innerHTML === "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerHTML === "AC") {
      // jika diklik tombol AC maka hapus string
      string = "";
      screen.value = string;
    } else if (e.target.innerHTML === "DEL") {
      // jika diklik tombol DEL maka hapus karakter terakhir
      string = string.substring(0, string.length - 1);
      screen.value = string;
    } else {
      // jika tombol lain
      string += e.target.innerHTML;
      screen.value = string;
    }
  });
});
