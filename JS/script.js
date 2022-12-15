// function search
function searchFormula() {
  let searchFormula = document.getElementById("searchFormula");
  let filterFormula = searchFormula.value.toLowerCase();
  let formulaBox = document.getElementsByClassName("col-lg-3");

  for (let i = 0; i < formulaBox.length; i++) {
    let ahref = document.getElementsByClassName("formula-name")[i];
    if (ahref.innerHTML.toLowerCase().indexOf(filterFormula) > -1) {
      formulaBox[i].style.display = "";
    } else {
      formulaBox[i].style.display = "none";
    }
  }
}
