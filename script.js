let formulaire = document.querySelector(".formulaire");
let btn_search = document.querySelector(".btn_search");
let input_search = document.querySelector(".inpu_search");
let api_key = "3cfc3b82d5mshf5c1f17e17c77e1p145e32jsn31efcadf502d";


//cacher le formulaire au click

fetch(`https://dicolink.p.rapidapi.com/mot/cheval/definitions?rapidapi-key=${api_key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

//to retrieve Api Data

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input_search.value);
  if (input_search.value) {
    fetch(
      `https://dicolink.p.rapidapi.com/mot/cheval/definitions?rapidapi-key=${api_key}&query=${input_search.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        displayDefinition(data);
      });
  }
});

formulaire.addEventListener("keyup", (e) => {
    e.preventDefault();
    console.log(input_search.value);
    if (input_search.value) {
      fetch(
        `https://dicolink.p.rapidapi.com/mot/cheval/definitions?rapidapi-key=${api_key}&query=${input_search.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          displayDefinition(data);
        });
    } else{
        alert('entrer une recherche valide')
    }
  });
  

function displayDefinition(data) {
  data.forEach((item) => {
    formulaire.innerHTML = `
            <div class="resutat_search">
         <div class="head_result">
         <a href="">retour</a>
         </div>
         <div class="content_definition">
             <p class="text_resultat">
                <h2 class="head_resultat"> ${item.mot}</h3>
             <p class="text_result">
             ${item.definition}
             </p>
             <span> source: ${item.source}</span>
             <p> nature: ${item.nature}</span>
             </p>
         </div>
       </div>`;
  });
}
