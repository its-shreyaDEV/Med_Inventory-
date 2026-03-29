let medicines = []; // Will hold fetched medicine objects

// Fetch medicines on page load and populate dropdown
function fetchMedicines() {
  fetch("http://localhost:8090/med/getall")
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch medicines (status: ${res.status})`);
      return res.json();
    })
    .then(data => {
      medicines = data;
      const select = document.getElementById("medicineSelect");
      select.innerHTML = '<option selected disabled>Select name</option>'; // Reset options

      data.forEach(med => {
        const option = document.createElement("option");
        option.value = med.medName;   // Use medName as unique identifier
        option.textContent = med.medName;
        select.appendChild(option);
      });
    })
    .catch(err => alert("Error: " + err.message));
}

// When a medicine is selected from dropdown, show its details
document.getElementById("medicineSelect").addEventListener("change", function () {
  const selectedId = this.value;
  const selectedMed = medicines.find(med => med.medName === selectedId);

  if (selectedMed) {
    document.getElementById("diseases").value = selectedMed.disease || "";
    document.getElementById("quantity").value = selectedMed.quantity != null ? selectedMed.quantity + " units" : "";
    document.getElementById("price").value = selectedMed.price != null ? "₹" + selectedMed.price : "";
    document.getElementById("mrpDate").value = selectedMed.mrpDate || "";
    document.getElementById("expDate").value = selectedMed.expDate || "";
  } else {
    // Clear fields if no medicine selected
    ["diseases", "quantity", "price", "mrpDate", "expDate"].forEach(id => {
      document.getElementById(id).value = "";
    });
  }
});

// Delete medicine API call
document.getElementById("deleteBtn").addEventListener("click", function () {
  const selectedId = document.getElementById("medicineSelect").value;
  if (!selectedId) {
    alert("Please select a medicine to delete.");
    return;
  }

  if (!confirm(`Are you sure you want to delete "${selectedId}"?`)) {
    return; // User canceled delete
  }

  fetch(`http://localhost:8090/med/delete?medName=${encodeURIComponent(selectedId)}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (!res.ok) throw new Error("Failed to delete medicine");
    alert("Medicine deleted successfully");
    fetchMedicines(); // Refresh the dropdown and clear fields
    document.getElementById("medicineSelect").value = "";
    ["diseases", "quantity", "price", "mrpDate", "expDate"].forEach(id => {
      document.getElementById(id).value = "";
    });
  })
  .catch(err => alert("Error: " + err.message));
});

// Dummy function for subtract quantity button to avoid error (implement as needed)
function subtractQuantity() {
  alert("Subtract quantity feature not implemented yet.");
}

// Initialize medicines dropdown on page load
window.onload = fetchMedicines;