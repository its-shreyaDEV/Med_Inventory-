let medicines = [
  {
    name: 'Omeprazole',
    desc: 'Reduces stomach acid production for gastric conditions',
    stock: '760 units',
    expiry: 'Apr 2024',
    image: '  '
  },
  {
    name: 'Paracetamol',
    desc: 'Pain reliever and fever reducer for mild to moderate pain',
    stock: '1,250 units',
    expiry: 'Dec 2023',
    image: '  '
  },
  {
    name: 'Amoxicillin',
    desc: 'Antibiotic used to treat bacterial infections',
    stock: '850 units',
    expiry: 'Mar 2024',
    image: '  '
  }
];

let currentIndex = 0;

function displayCard() {
  const container = document.getElementById('card-container');
  const med = medicines[currentIndex];
  container.innerHTML = `
    <img src="${med.image}" alt="${med.name}">
    <h3>${med.name}</h3>
    <p>${med.desc}</p>`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % medicines.length;
  displayCard();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + medicines.length) % medicines.length;
  displayCard();
}

function addMedicine() {
  const fileInput = document.getElementById('imgInput');
  const name = document.getElementById('medName').value;
  const desc = document.getElementById('medDesc').value;
 

  const reader = new FileReader();
  reader.onload = function(e) {
    medicines.push({
      name,
      desc,
      image: e.target.result
    });
    currentIndex = medicines.length - 1;
    displayCard();
  };
  if (fileInput.files[0]) reader.readAsDataURL(fileInput.files[0]);
}

setInterval(nextSlide, 5000);
window.onload = displayCard;