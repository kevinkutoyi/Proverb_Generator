const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayProverb(
    document.getElementById("noun").value,
    document.getElementById("adjective").value
  );
});

function displayProverb(noun, adjective) {
  //  var myNoun = document.getElementById('noun').value;
  //  var myAdjective = document.getElementById('adjective').value;

  if (!noun) {
    noun = "rod";
  }
  if (!adjective) {
    adjective = "hot";
  }

  document.getElementById("demo").innerHTML =
    "Strike the hammer while the " + noun + " is " + adjective + " !";
}
