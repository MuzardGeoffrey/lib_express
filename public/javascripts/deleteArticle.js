function putFromArticle(id) {
    const deleteMethod = {
        method: 'DELETE'
       };
    fetch(`/dashboard/article/${id}`, deleteMethod)
       .then(response => {
           if(response.statusText === "OK") {
                window.location.href = "/dashboard";
           }
        }); 
}