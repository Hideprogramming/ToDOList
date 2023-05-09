//Selectores
let input = document.querySelector("input");
let add = document.getElementById("btn-add");
let ul =  document.querySelector("ul");
let empty = document.getElementById("empty");

//Eventos
add.addEventListener("click", (e) => {
    e.preventDefault(); //Con esto la pagina no se recarga

    let text = input.value;

    //Condicional Para No Agregar Tareas Vacias
    if (text !== "") {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = text;

        //Una vez cumplida la condicional
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";

    }
});

//Funcion de cosas importantes
function addDeleteBtn() {
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";


    deleteBtn.addEventListener("click", (e) => {
        let item = e.target.parentElement;
        ul.removeChild(item);

        let items = document.querySelectorAll("li");

        //Condicional II
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}