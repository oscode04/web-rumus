function hitungLuas() {
  let panjang = document.getElementById("panjang").value;
  let lebar = document.getElementById("lebar").value;
  let luas = panjang * lebar;
  document.getElementById("hasil").innerHTML = luas;
}

function hitungKeliling() {
  let panjang = document.getElementById("panjang2").value;
  let lebar = document.getElementById("lebar2").value;
  let keliling = 2 * panjang + 2 * lebar;
  document.getElementById("hasil2").innerHTML = keliling;
}
