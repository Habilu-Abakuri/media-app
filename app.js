//get all the id attributes from HTML
let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("msg");
let post = document.getElementById("post");

//prevent default loading
form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        message.innerHTML = "no blank post";
    }
    else{
        acceptData();
    }
};

//getting the enter data
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    createPost();
};

let createPost = () => {
    post.innerHTML += 
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>;

    input.value = "";
};

