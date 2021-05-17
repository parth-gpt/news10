// Initialize the news api parameters

let apiK = "9f419d0ac507b21879721bfedec7a278";
let language = "en"
let country = "in"
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?&token=9f419d0ac507b21879721bfedec7a278&lang=${language}&country=${country}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="my-4 mx-4 card" id="heading${index}" style="width: 18rem;">
<img src="${element["image"]}" class="card-img-top ima" alt="...">
<div class="card-body">
  <h5 class="card-title"></b> ${element["title"]}</h5>
  <p class="card-text">${element["description"]}.</p>
  <a href="${element['url']}" class="btn btn-primary read" target="_blank" id="read" >Read more here...</a>
</div>
</div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

