
// --------------- DATA FUNCTIONS --------------- //
const sortData = ([...data], category = "confirmed", order = "asc") => {
  if (order === "des") return data.sort((a, b) => b[1].All[category] - a[1].All[category]);
  return data.sort((a, b) => a[1].All[category] - b[1].All[category]);
};

const getTop5 = (data, category) => {
  const sortedData = sortData(data, category);
  return sortedData.slice(-5);
};

// --------------- API --------------- //
const url = "https://covid-api.mmediagroup.fr/v1/cases";

const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
  const data = JSON.parse(xhttp.responseText);
  const dataArray = [...Object.entries(data)].filter(d => d[1].All["population"] !== undefined);;
  const globalData = dataArray.pop();
  console.log(globalData);
  console.log(getTop5(dataArray, "confirmed"));
  console.log(getTop5(dataArray, "deaths"));
  console.log(getTop5(dataArray, "population"));
}

xhttp.open("GET", url);
xhttp.send();
