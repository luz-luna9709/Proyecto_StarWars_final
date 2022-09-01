
let characters= JSON.parse(file).results
let input_character_name = document.getElementById("input_character_name");
let container = document.getElementById("container");

function search_character_button_click(){
  let character_details = search_character(input_character_name.value)
    container.innerHTML =`
    <p>
   
   <span>Nombre personaje: ${character_details.name}</span> </br>
   <span>Año de Nacimiento: ${character_details.birth_year}</span> </br>
   <span>Genero: ${character_details.gender}</span> </br>
   <span>Altura: ${character_details.height}</span> </br>
   <span>Color de Ojos: ${character_details.eye_color}</span> </br>
   <span>Color de Cabello: ${character_details.hair_color}</span> </br>
   
   </p>
    `
    
}

function search_character(character_name) {
    for( let i = 0; i<characters.length;i++){

        if(characters[i].name== character_name){
            return characters[i]
        }
    }

  
  }

  function limpiarFormulario() {
    document.getElementById("input_character_name").value="";
  }
