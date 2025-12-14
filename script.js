let people = [];

function addPerson() {
  const name = document.getElementById("name").value;
  const income = parseFloat(document.getElementById("income").value);

  if (!name || !income) return alert("Please enter valid details");

  people.push({ name, income });

  document.getElementById("name").value = "";
  document.getElementById("income").value = "";
}

function calculate() {
  const totalExpense = parseFloat(document.getElementById("expense").value);
  const totalIncome = people.reduce((sum, p) => sum + p.income, 0);

  const tbody = document.getElementById("result");
  tbody.innerHTML = "";

  people.forEach(p => {
    const share = ((p.income / totalIncome) * totalExpense).toFixed(2);
    tbody.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>₹${p.income}</td>
        <td>₹${share}</td>
      </tr>`;
  });
}
