let title = undefined;
let content = undefined;
let idArticle = [];

window.onload = () => {
    title = document.getElementById('title');
    content = document.getElementById('content');
    idArticle = document.location.href.split("/");
};



function putArticle() {
    let id = idArticle[idArticle.length - 1];
    let article = {"title" : title.value, "content" : content.value, "id": id};
    let body = JSON.stringify(article);
    const putMethod = {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: body
       };
    fetch('/dashboard/article/', putMethod)
       .then(response => {
           if(response.statusText == "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}

function deleteArticle(idArticle){
    const deleteMethod = {
        method: 'DELETE',
       };
    fetch('/dashboard/article/'+idArticle, deleteMethod)
       .then(response => {
           if(response.statusText == "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}