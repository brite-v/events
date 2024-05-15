// Load expenses from JSON
function loadExpenses() {
  fetch('expenses.json')
    .then(response => response.json())
    .then(data => {
      familyExpenses = data;
      alert("Expenses loaded successfully!");
    })
    .catch(error => {
      console.error('Error loading expenses:', error);
      alert("Failed to load expenses. Please try again later.");
    });
}

// Save expenses to JSON
function saveExpenses() {
  const jsonData = JSON.stringify(familyExpenses);
  download(jsonData, 'expenses.json', 'application/json');
}

// Sample family expenses data (per family)
let familyExpenses = [];

// Sample event data
let events = [];

// Load families from JSON
function loadFamilies() {
  fetch('families.json')
    .then(response => response.json())
    .then(data => {
      familyExpenses = data;
      alert("Families loaded successfully!");
    })
    .catch(error => {
      console.error('Error loading families:', error);
      alert("Failed to load families. Please try again later.");
    });
}

// Load events from JSON
function loadEvents() {
  fetch('events.json')
    .then(response => response.json())
    .then(data => {
      events = data;
      alert("Events loaded successfully!");
    })
    .catch(error => {
      console.error('Error loading events:', error);
      alert("Failed to load events. Please try again later.");
    });
}

// Save families to JSON
function saveFamilies() {
  const jsonData = JSON.stringify(familyExpenses);
  download(jsonData, 'families.json', 'application
