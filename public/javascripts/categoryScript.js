let tag = undefined;
let idCategory = [];

window.onload = () => {
    tag = document.getElementById('tag');
    idCategory = document.location.href.split("/");
};



function putCategory() {
    console.log(tag);
    let id = idCategory[idCategory.length - 1];
    let category = {"tag" : tag.value, "id": id};
    let body = JSON.stringify(category);
    const putMethod = {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: body
       };
    fetch('/dashboard/category/', putMethod)
       .then(response => {
           if(response.statusText == "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}

function deleteCategory(idCategory){
    const deleteMethod = {
        method: 'DELETE',
       };
    fetch('/dashboard/category/'+idCategory, deleteMethod)
       .then(response => {
           if(response.statusText == "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}