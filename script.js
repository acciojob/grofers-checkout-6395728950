const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
const newrow = document.createElement("tr");
const table = document.querySelector("table");
 newrow.appendChild(getSumBtn);
 
// document.body.appendChild(getSumBtn);

const getSum = () => {
   let sum = 0;

    // Select all elements with class "prices" and sum up their values
    document.querySelectorAll(".price").forEach((price) => {
        sum += parseFloat(price.innerText) || 0;
    });

    // Create a new row
    const newRow = document.createElement("tr");

    // Create a single cell for total price
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across 2 columns
    totalCell.innerText = ` ${sum}`;

    // Append cell to row and row to table
    newRow.appendChild(totalCell);
    document.querySelector("table").appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);
table.appendChild(newrow);
