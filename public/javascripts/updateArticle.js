let title = undefined;
let content = undefined;
let idArticle = undefined;

window.onload = () => {
    title = document.getElementById('title');
    content = document.getElementById('content');
    idArticle = document.getElementById('id');
};



function putFromArticle() {
    const id = idArticle.value;
    let article = {"title" : title.value, "content" : content.value};
    let body = JSON.stringify(article);
    const putMethod = {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: body
       };
    fetch(`/dashboard/article/${id}`, putMethod)
       .then(response => {
           if(response.statusText === "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}

