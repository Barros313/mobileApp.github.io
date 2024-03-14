let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Botão 'Enviar' pressionado");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Sem conteúdo, por favor tente novamente.";
        console.log("Falha. Input em branco");
    } else {
        console.log("Sucesso");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
            <span class="options"> 
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
    </div>
    `;
    input.value = "";
}

let deletePost = (e) => {
    console.log("Elemento removido");
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    console.log("Botão 'Editar' pressionado");
    input.value = e.parentElement.previousElementSibling.innerHTML;
    deletePost(e);
}