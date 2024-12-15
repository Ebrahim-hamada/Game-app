"use strict";
export class Ui {
  displayGamesData(data) {
    let games = ``;
    for (let i = 0; i < data.length; i++) {
      games += `
          <div class="col">
          <div data-id="${data[i].id}"class="card h-100 bg-transparent" role="button" ">
             <div  class="card-body">
                <figure class="position-relative">
                   <img class="card-img-top object-fit-cover h-100" src="${ data[i].thumbnail}" />                
                </figure>
                <caption>    
                   <div class="hstack justify-content-between">
                      <h3 class="h6 small">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                   </div>    
                   <p class="card-text small text-center opacity-50">
                      ${data[i].short_description.split(" ", 15)}
                   </p>    
                <caption>
             </div>
             <footer class="card-footer small hstack justify-content-between">    
                <span class="badge details-text-bg">${data[i].genre}</span>
                <span class="badge details-text-bg">${data[i].platform}</span>    
            </footer>
          </div>
       </div>
          `;
    }
    document.getElementById("gameData").innerHTML = games;
  }

  displayDetails(data) {
    let screenshots = ``;
    const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      `;
    for (let i = 0; i < data.screenshots.length; i++) {
      screenshots += `<div class="py-4 px-2"><img class="w-100 img-fluid object-fit-cover" src="${data.screenshots[i].image}" alt=""></div>`;
    }
    document.getElementById("detailsContent").innerHTML = content;
    document.getElementById("detailsPhoto").innerHTML = screenshots;
  }
}