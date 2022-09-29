console.log("AMITH");

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3/all");
request.send(null);

request.onload = function () {
  const response = JSON.parse(request.responseText);
  console.log(response);

  for (var country of response) {
    const { flag } = country;
    console.log(flag);
  }
};
