function calculateExpenses() {
  // Get expense values from the form
  const infantExpense = parseFloat(document.getElementById('infantExpense').value);
  const childExpense = parseFloat(document.getElementById('childExpense').value);
  const adultExpense = parseFloat(document.getElementById('adultExpense').value);

  // Fetch family attendance details from JSON file (assuming you have it loaded)

  // Calculate total expenses
  const totalInfantExpenses = infantExpense * totalInfants;
  const totalChildExpenses = childExpense * totalChildren;
  const totalAdultExpenses = adultExpense * totalAdults;

  const totalExpenses = totalInfantExpenses + totalChildExpenses + totalAdultExpenses;

  // Display calculated expenses
  const expenseResultElement = document.getElementById('expenseResult');
  expenseResultElement.innerHTML = `
    <h2>Calculated Expenses</h2>
    <p>Total Infant Expenses: $${totalInfantExpenses}</p>
    <p>Total Child Expenses: $${totalChildExpenses}</p>
    <p>Total Adult Expenses: $${totalAdultExpenses}</p>
    <h3>Total Expenses: $${totalExpenses}</h3>
  `;
}
