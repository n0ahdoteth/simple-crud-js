let form = document.getElementById("form");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");
   formValidation();
});

let formValidation = (e) => {
    if (input.value === ""){
        console.log('failure');
    } else {
        console.log('success');
        createPost();
    }
}

let data = {};

let acceptData = () => {
   data['text'] = input.value;
}; 

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${input.value}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}