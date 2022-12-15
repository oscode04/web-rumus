// rumus sisi miring
function hitungSisiC() {
  let a = document.getElementById("nilai-a").value;
  let b = document.getElementById("nilai-b").value;
  let hasil = document.getElementById("hasilC");

  let hitung = Math.sqrt(a * a + b * b).toFixed(2);

  hasil.innerHTML = hitung;
  //   console.log(a, b);
}

// rumus sisi B
function hitungSisiB() {
  let x = document.getElementById("nilai-x").value;
  let y = document.getElementById("nilai-y").value;
  let hasilSisiB = document.getElementById("hasilB");

  let hitungSisiB = Math.sqrt(y * y - x * x).toFixed(2);

  hasilSisiB.innerHTML = hitungSisiB;
  //   console.log(y, x, hitungSisiB);
}

// rumus sisi A
function hitungSisiA() {
  let m = document.getElementById("nilai-m").value;
  let n = document.getElementById("nilai-n").value;
  let hasilSisiA = document.getElementById("hasilA");

  let hitungSisiA = Math.sqrt(n * n - m * m).toFixed(2);

  hasilSisiA.innerHTML = hitungSisiA;
}
