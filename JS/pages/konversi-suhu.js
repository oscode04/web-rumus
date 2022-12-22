function hitungSuhu() {
  let celcius1 = document.getElementById("celcius1").checked;
  let kelvin1 = document.getElementById("kelvin1").checked;
  let fahrenheit1 = document.getElementById("fahrenheit1").checked;

  let celcius2 = document.getElementById("celcius2").checked;
  let kelvin2 = document.getElementById("kelvin2").checked;
  let fahrenheit2 = document.getElementById("fahrenheit2").checked;

  let nilaiSuhu = document.getElementById("nilaiSuhu").value;
  let tampil = document.getElementById("hasilSuhu");

  if (celcius1 == true) {
    if (celcius2 == true) {
      tampil.innerHTML = nilaiSuhu;
    } else if (kelvin2 == true) {
      let hasilAkhir = Number(nilaiSuhu) + 273.15;
      tampil.innerHTML = hasilAkhir;
    } else {
      let hasilAkhir = (9 / 5) * Number(nilaiSuhu) + 32;
      tampil.innerHTML = hasilAkhir;
    }
  }

  if (kelvin1 == true) {
    if (celcius2 == true) {
      let hasilAkhir = Number(nilaiSuhu) - 273.15;
      tampil.innerHTML = hasilAkhir;
    } else if (kelvin2 == true) {
      tampil.innerHTML = nilaiSuhu;
    } else {
      let hasilAkhir = (9 / 5) * (Number(nilaiSuhu) - 273.15) + 32;
      tampil.innerHTML = hasilAkhir;
    }
  }

  if (fahrenheit1) {
    if (celcius2) {
      let hasilAkhir = (5 / 9) * (Number(nilaiSuhu) - 32);
      tampil.innerHTML = hasilAkhir;
    } else if (kelvin2 == true) {
      let hasilAkhir = (5 / 9) * (Number(nilaiSuhu) - 32) + 273.15;
      tampil.innerHTML = hasilAkhir;
    } else {
      tampil.innerHTML = nilaiSuhu;
    }
  }

  // console.log(celcius1, kelvin1, reamur1, celcius2, kelvin2, reamur2);
}
