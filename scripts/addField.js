document.querySelector("#add_time").addEventListener('click', cloneField); //Procura o botão #add_time

function cloneField() {
    const newFieldContainer = document.querySelector(".schedule_item").cloneNode(true); //Duplica os campos

    const fields = newFieldContainer.querySelectorAll("input"); //Limpa os campos
    fields.forEach(function(field) {
        field.value = "";
    })
    
    document.querySelector("#schedule_items").appendChild(newFieldContainer); //Adiciona na página
}