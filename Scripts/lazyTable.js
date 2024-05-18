const TABLE = document.getElementById("timeTable");
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let textnode;

function main() {
  setUpTable();
  addTableRows();
}

function setUpTable() {
  const tr = document.createElement("tr");

  const spacer = document.createElement("th");
  tr.appendChild(spacer);

  for (let i = 0; i < 24; i++) {
    const th = document.createElement("th");
    if (i < 12) {
      textnode = document.createTextNode(i + 1 + "AM");
    } else if (i > 11) {
      textnode = document.createTextNode(i - 11 + "PM");
    }
    th.appendChild(textnode);

    tr.appendChild(th);
  }

  const lastHeader = document.createElement("th");
  textnode = document.createTextNode("Can't Play This Day");
  lastHeader.appendChild(textnode);
  tr.appendChild(lastHeader);

  TABLE.appendChild(tr);
}

function addTableRows() {
  for (let i = 0; i < daysOfWeek.length; i++) {
    const tr = document.createElement("tr");

    const day = document.createElement("th");
    textnode = document.createTextNode(daysOfWeek[i]);
    day.appendChild(textnode);
    tr.appendChild(day);

    for (let a = 0; a < 25; a++) {
      const td = document.createElement("td");

      const input = document.createElement("input");
      input.id = `${daysOfWeek[i]}_${a}`;
      input.setAttribute("type", "checkbox");
      input.classList.add("input");
      input.classList.add("check");
      td.appendChild(input);

      tr.appendChild(td);
    }

    TABLE.appendChild(tr);
  }
}

main();