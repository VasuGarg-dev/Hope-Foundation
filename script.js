// JavaScript is used ONLY for the feedback form.
const form = document.getElementById("feedbackForm");
const errorBox = document.getElementById("fbError");
const result = document.getElementById("fbResult");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  const name = document.getElementById("fbName").value.trim();
  const email = document.getElementById("fbEmail").value.trim();
  const ratingSelect = document.getElementById("fbRating");
  const rating = ratingSelect.value;
  const message = document.getElementById("fbMessage").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  errorBox.textContent = "";

  if (name === "" || email === "" || rating === "" || message === "") {
    errorBox.textContent = "Please fill in all fields.";
  } else if (!emailPattern.test(email)) {
    errorBox.textContent = "Please enter a valid email address.";
  } else {
    // Show the user's response back to them
    document.getElementById("rName").textContent = name;
    document.getElementById("rEmail").textContent = email;
    document.getElementById("rRating").textContent =
      "★".repeat(+rating) + "☆".repeat(5 - rating) + "  " + ratingSelect.options[ratingSelect.selectedIndex].text;
    document.getElementById("rMessage").textContent = message;

    form.reset();
    form.hidden = true;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// "Submit another response" brings the form back
document.getElementById("fbAgain").addEventListener("click", function () {
  result.hidden = true;
  form.hidden = false;
});