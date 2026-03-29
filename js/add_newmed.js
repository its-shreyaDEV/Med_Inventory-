// Handle form submission
document.getElementById("addMedForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Collect form data
  const formData = new FormData(this);

  // You can send the formData to a server here using fetch()

  // Show confirmation
  document.getElementById("responseMessage").textContent = "Medicine added successfully!";
});

// Handle quantity increase
function increaseQty() {
  const qtyInput = document.getElementById("quantity");
  let current = parseInt(qtyInput.value);
  if (!isNaN(current)) {
    qtyInput.value = current + 1;
  }
}