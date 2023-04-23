fetch("/Void-Archives-StarRail-Wiki/lightcones/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });