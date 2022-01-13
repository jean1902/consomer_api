let formulaire = document.querySelector(".formulaire");
let btn_search = document.querySelector(".btn_search");
let input_search = document.querySelector(".inpu_search");
let api_key = "3cfc3b82d5mshf5c1f17e17c77e1p145e32jsn31efcadf502d";
let dico = document.querySelector(".dico");

//cacher le formulaire au click

fetch(
  `https://dicolink.p.rapidapi.com/mot/cheval/definitions?rapidapi-key=${api_key}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].definition);

          dico.innerHTML += `
          <div class="resutat_search">
          <div class="head_result">
          ${data[i].mot}
      </div>
      <div class="content_definition">
          ${data[i].definition}
      </div>
      <span> source: ${data[i].source}</span>
      <span> nature: ${data[i].nature}</span>
          </div>
          `;
    }

    // dico.innerHTML +=
    // `
    // <div class="resutat_search">
    //   <div class="head_result">
    //   <a href="">retour</a>
    //   </div>
    //   <div class="content_definition">
    //       <p class="text_resultat">
    //          <h2 class="head_resultat"> ${data.mot}</h3>
    //       <p class="text_result">
    //       ${data.definition}
    //       </p>
    //       <span> source: ${data.source}</span>
    //       <p> nature: ${data.nature}</span>
    //       </p>
    //   </div>
    //  </div>
    // `
  });
//     formulaire.innerHTML += `
//     <div class="resutat_search">
//  <div class="head_result">
//  <a href="">retour</a>
//  </div>
//  <div class="content_definition">
//      <p class="text_resultat">
//         <h2 class="head_resultat"> ${item.mot}</h3>
//      <p class="text_result">
//      ${item.definition}
//      </p>
//      <span> source: ${item.source}</span>
//      <p> nature: ${item.nature}</span>
//      </p>
//  </div>
// </div>`
