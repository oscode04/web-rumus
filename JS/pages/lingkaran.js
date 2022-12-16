function hitungLuas() {
  let rLuas = document.getElementById("rLuas").value;
  let phi1 = document.getElementById("flexRadioDefault1").checked;
  let phi2 = document.getElementById("flexRadioDefault2").checked;
  let hasilLuas = document.getElementById("hasilLuas");

  if (phi1 == true) {
    let hasil = 3.14 * rLuas ** 2;
    hasilLuas.innerHTML = hasil;
  }

  if (phi2 == true) {
    let hasil = (22 / 7) * rLuas ** 2;
    hasilLuas.innerHTML = hasil;
  }

  if (phi1 == false && phi2 == false) {
    alert("Pilih phi terlebih dahulu");
  }
}

function hitungKel() {
  let rKel = document.getElementById("rKel").value;
  let phi11 = document.getElementById("phiKel1").checked;
  let phi22 = document.getElementById("phiKel2").checked;
  let hasiKel = document.getElementById("hasilKel");

  if (phi11 == true) {
    let hasil = 3.14 * rKel * 2;
    hasiKel.innerHTML = hasil;
  }

  if (phi22 == true) {
    let hasil = (22 / 7) * rKel * 2;
    hasiKel.innerHTML = hasil;
  }

  if (phi11 == false && phi22 == false) {
    alert("Pilih phi terlebih dahulu");
  }
  //   console.log(rKel, phi11);
}
