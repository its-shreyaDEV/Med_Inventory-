const medicineDB = {
  "Paracetamol": {
    disease: "Fever, headache",
    quantity: 120,
    price: "₹25.00",
    mrpDate: "10-04-2025",
    expiryDate: "10-04-2027"
  },
  "Cetirizine": {
    disease: "Cold, allergy",
    quantity: 75,
    price: "₹15.00",
    mrpDate: "12-05-2025",
    expiryDate: "12-05-2026"
  },
  "Amoxicillin": {
    disease: "Infection",
    quantity: 60,
    price: "₹40.00",
    mrpDate: "01-03-2025",
    expiryDate: "01-03-2026"
  }
};

window.onload = () => {
  const select = document.getElementById("brandSelect");
  for (let brand in medicineDB) {
    const option = document.createElement("option");
    option.value = brand;
    option.text = brand;
    select.appendChild(option);
  }
};

function populateForm() {
  const brand = document.getElementById("brandSelect").value;
  const med = medicineDB[brand];

  if (!med) return;

  document.getElementById("disease").value = med.disease;
  document.getElementById("quantity").value = `${med.quantity} units`;
  document.getElementById("quantityNum").value = med.quantity;
  document.getElementById("price").value = med.price;
  document.getElementById("mrpDate").value = med.mrpDate;
  document.getElementById("expiryDate").value = med.expiryDate;
}

function subtractQuantity() {
  const brand = document.getElementById("brandSelect").value;

  if (!brand || !medicineDB[brand]) {
    alert("Please select a brand.");
    return;
  }

  let amount = parseInt(prompt("Enter units to subtract:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid number.");
    return;
  }

  if (amount > medicineDB[brand].quantity) {
    alert("Not enough stock.");
    return;
  }

  medicineDB[brand].quantity -= amount;
  alert(`${amount} units removed from ${brand}.`);
  populateForm();
}

function increaseQty() {
  const brand = document.getElementById("brandSelect").value;

  if (!brand || !medicineDB[brand]) {
    alert("Please select a brand.");
    return;
  }

  let amount = parseInt(prompt("Enter units to add:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid number.");
    return;
  }

  medicineDB[brand].quantity += amount;
  alert(`${amount} units added to ${brand}.`);
  populateForm();
}






// // update_med.js

// // This variable will store the list of medicines fetched from the backend
// let medicineData = [];

// // This function runs automatically when the page loads
// window.onload = () => {
//   // Fetch the list of medicines from the backend API
//   fetchMedicines();
// };

// // Function to fetch medicine data from the server
// function fetchMedicines() {
//   fetch("http://localhost:8090/med/getall")  // API endpoint to get all medicines
//     .then(response => {
//       // Check if the response is successful (status 200)
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       // Parse the response as JSON (convert from string to JavaScript object)
//       return response.json();
//     })
//     .then(data => {
//       // Store the fetched data in global variable for later use
//       medicineData = data;

//       // Call function to fill the dropdown menu with medicine names
//       populateBrandSelect(medicineData);
//     })
//     .catch(error => {
//       // Show an alert if there's an error fetching data
//       alert("Failed to load medicines: " + error.message);
//     });
// }

// // Function to populate the "Med Name" dropdown with fetched medicines
// function populateBrandSelect(medicines) {
//   const select = document.getElementById("brandSelect");

//   // Clear existing options and add default prompt option
//   select.innerHTML = '<option selected disabled>Select Brand</option>';

//   // Loop over each medicine and create an option element for the dropdown
//   medicines.forEach(med => {
//     const option = document.createElement("option");
//     option.value = med.name; // Assign the medicine name as the option value
//     option.text = med.name;  // Show medicine name to user
//     select.appendChild(option); // Add the option to the dropdown
//   });
// }

// // This function fills the form fields when a medicine is selected from dropdown
// function populateForm() {
//   const brand = document.getElementById("brandSelect").value;
//   if (!brand) return;  // If nothing selected, do nothing

//   // Find the medicine object from the stored data by matching name
//   const med = medicineData.find(m => m.name === brand);
//   if (!med) return; // If medicine not found, do nothing

//   // Fill each form field with the medicine's details
//   document.getElementById("disease").value = med.disease;
//   document.getElementById("quantity").value = `${med.quantity} units`;
//   document.getElementById("price").value = `₹${med.price}`;
//   document.getElementById("mrpDate").value = med.mrpDate;
//   document.getElementById("expiryDate").value = med.expiryDate;
// }

// // This function is called when user clicks the "-" button to subtract quantity
// function subtractQuantity() {
//   const brand = document.getElementById("brandSelect").value;
//   if (!brand) {
//     alert("Please select a brand.");
//     return;
//   }

//   // Ask user how many units to subtract
//   let amount = prompt("Enter units to subtract:");
//   amount = parseInt(amount); // Convert input string to a number

//   // Validate user input
//   if (isNaN(amount) || amount <= 0) {
//     alert("Enter a valid positive number.");
//     return;
//   }

//   // Find the selected medicine object
//   const med = medicineData.find(m => m.name === brand);
//   if (!med) return;

//   // Check if enough quantity is available
//   if (amount > med.quantity) {
//     alert("Not enough stock.");
//     return;
//   }

//   // Make a POST request to backend to update quantity after subtraction
//   fetch("http://localhost:8090/med/updateQuantity", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: brand,
//       subtract: amount
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to update quantity");
//     }
//     return response.json();
//   })
//   .then(updatedMed => {
//     // Show success message to user
//     alert(`${amount} units removed from ${brand}.`);

//     // Refresh the medicine list and form to show updated data
//     fetchMedicines();
//   })
//   .catch(error => {
//     alert("Error: " + error.message);
//   });
// }