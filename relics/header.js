fetch("/Void-Archives-StarRail-Wiki/relics/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });