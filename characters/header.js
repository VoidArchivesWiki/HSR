fetch("/Void-Archives-StarRail-Wiki/characters/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });