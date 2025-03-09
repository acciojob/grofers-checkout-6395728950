const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
const newrow = document.createElement("tr");
const table = document.querySelector("table");
 newrow.appendChild(getSumBtn);
 
// document.body.appendChild(getSumBtn);

const getSum = () => {
 let sum =0;
	 document.querySelectorAll(".price").forEach((val)=>{
	  sum+=parseFloat(val.textContent) || 0;
 });
	const totalsum =document.createElement("td");
	totalsum.textContent = sum;
	 
	// document.body.appendChild(totalsum);
	newrow.appendChild(totalsum);
  
};

getSumBtn.addEventListener("click", getSum);
table.appendChild(newrow);
