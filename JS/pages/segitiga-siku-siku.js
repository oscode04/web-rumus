function hitungLuas() {
  let alas = document.getElementById("alasLuas").value;
  let tinggi = document.getElementById("tinggiLuas").value;
  let hasilLuas = document.getElementById("hasilLuas");

  let hasil = (1 / 2) * alas * tinggi;

  hasilLuas.innerHTML = hasil;
}

function hitungKel() {
  let nilaia = document.getElementById("nilaiA").value;
  let nilaib = document.getElementById("nilaiB").value;
  let hasilKel = document.getElementById("hasilKel");

  let hasil = Number(nilaia) + Number(nilaia) + Number(nilaib);
  hasilKel.innerHTML = hasil;
}
