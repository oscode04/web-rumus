function hitungVolume() {
  let sisi = document.getElementById("sisiVolume").value;
  let hasil = document.getElementById("hasilVolume");

  let hitung = sisi ** 3;

  hasil.innerHTML = hitung;
  console.log(sisi, hitung);
}

function hitungLuas() {
  let sisi = document.getElementById("nilaiLuas").value;
  let hasil = document.getElementById("hasilLuas");

  let hitung = 6 * sisi ** 2;

  hasil.innerHTML = hitung;
  console.log(sisi, hitung);
}
