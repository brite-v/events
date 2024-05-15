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
  download(jsonData, 'families.json', 'application/json');
}

// Save events to JSON
function saveEvents() {
  const jsonData = JSON.stringify(events);
  download(jsonData, 'events.json', 'application/json');
}

// Download JSON file
function download(data, filename, type) {
  const file = new Blob([data], { type: type });
  const a = document.createElement('a');
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}

// User authentication
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hardcoded credentials
  const adminUsername = "admin";
  const adminPassword = "admin";
  const familyUsername = "family";
  const familyPassword = "family";

  // Validate username and password
  if (username === adminUsername && password === adminPassword) {
    showAdminPanel();
  } else if (username === familyUsername && password === familyPassword) {
    showFamilyPanel();
  } else {
    alert("Invalid username or password");
  }
}

// Show admin panel
function showAdminPanel() {
  document.getElementById('loginForm').style.display = "none";
  document.getElementById('adminPanel').style.display = "block";
}

// Show family panel
function showFamilyPanel() {
  document.getElementById('loginForm').style.display = "none";
  document.getElementById('familyPanel').style.display = "block";
}

// Logout
function logout() {
  location.reload(); // Refresh page to log out
}

// Add family
function addFamily() {
  const familyName = prompt("Enter family name:");
  if (familyName) {
    familyExpenses.push({
      name: familyName,
      totalExpenses: 0,
      infants: 0,
      children: 0,
      adults: 0
    });
    saveFamilies();
    alert("Family added successfully!");
  }
}

// Add event
function addEvent() {
  document.getElementById('eventForm').style.display = "block";
}

// Submit event
function submitEvent() {
  const eventName = document.getElementById('eventName').value;
  const eventVenue = document.getElementById('eventVenue').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventStartTime = document.getElementById('eventStartTime').value;
  const eventDuration = document.getElementById('eventDuration').value;
  const eventFor = document.getElementById('eventFor').value;

  // Add event to events array
  events.push({
    name: eventName,
    venue: eventVenue,
    date: eventDate,
    startTime: eventStartTime,
    duration: eventDuration,
    for: eventFor
  });

  saveEvents();
  alert("Event added successfully!");
  document.getElementById('eventForm').reset();
  document.getElementById('eventForm').style.display = "none";
}

// Add family event
function addFamilyEvent() {
  const eventName = document.getElementById('event_name').value;
  const eventDate = document.getElementById('event_date').value;
  const eventDescription = document.getElementById('event_description').value;

  // Add family event to events array
  events.push({
    name: eventName,
    date: eventDate,
    description: eventDescription
  });

  saveEvents();
  alert("Family event added successfully!");
  document.getElementById('event_name').value = "";
  document.getElementById('event_date').value = "";
  document.getElementById('event_description').value = "";
}

// Add expense
function addExpense() {
  const expenseName = document.getElementById('expense_name').value;
  const expenseAmount = parseFloat(document.getElementById('expense_amount').value);
  const expenseDescription = document.getElementById('expense_description').value;

  // Add expense to familyExpenses
  const familyIndex = 0; // You need to get the correct family index here
  familyExpenses[familyIndex].totalExpenses += expenseAmount;

  // Update expenses details based on member types
