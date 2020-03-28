
  tinymce.init({
    selector: 'textarea',
    language: 'sv',
    language_url: '/js/sv.js',
    plugins: 'tinydrive'
  });

/*
  javascript
  tinymce.init({
    selector: '#content',
    editor_encoding: 'raw'
  });

  var strconfirm = confirm("Are you sure you want to delete?");
    if (strconfirm == true) {
        return true;
    }

    unction putArticle() {
      const data = {
          title: document.getElementById('title').value,
          content: tinyMCE.activeEditor.getContent(),
          id: document.getElementById('id').value
      }
  
      const putMethod = {
          method: 'PUT', // Method itself
          headers: {
           'Content-type': 'application/json; charset=UTF-8' // Indicates the content
          },
          body: JSON.stringify(data), // We send data in JSON format
      }
  
      fetch(`/dashboard/article/${id}`, putMethod)
           .then(response => window.location.href="http://localhost:3000/dashboard" )
           .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
           .catch(err => console.log(err)) // Do something with the error
  }

  export const formatArticle = article => {
    const { id, title, content, id_user, date } = article;
    return { id, title: unescape(title), content: unescape(content), author: id_user, date };
  };
  
  function sanitizedText(str) {
    const patt = /\<.*?\>/g;
  
    const result = str.replace(patt, ' ');
    return result;
  }
  export const formatFrontArticle = article => {
    const { id, title, content, id_user, date } = article;
  
    return {
      id,
      title: unescape(title),
      content: sanitizedText(unescape(content)).substring(0, 200),
      author: id_user,
      date
    };
  };



  static filtrer(txt, traiterHtml) {
    if(txt){
        if(traiterHtml){
            const texte =  txt.replace(/'/g, "’", txt);
            return String(texte).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        } else {
            return string.replace(/'/g, "’", txt);
        }
    }
}



pm.test("login response should have a token", function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("token");
  const token = pm.response.json().token
  const cookieJar = pm.cookies.jar(); // create a cookie jar
  cookieJar.set(pm.environment.get('SERVER'), { name: 'token',token , httpOnly: true },(err,cookie) => {
      console.log(err,cookie)
  });
});

pm.test(login response should have a token ${pm.environment.get('SERVER')}, function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("token");
  const token = pm.response.json().token
  pm.environment.set('token',pm.response.json().token)
});pm.test(login response should have a token ${pm.environment.get('SERVER')}, function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("token");
  const token = pm.response.json().token
  pm.environment.set('token',pm.response.json().token)
});
pm.test(login response should have a token ${pm.environment.get('SERVER')}, function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("token");
  const token = pm.response.json().token
  pm.environment.set('token',pm.response.json().token)
});
pm.test("login response should have a token", function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("token");
  const token = pm.response.json().token
  pm.environment.set('token',pm.response.json().token)
});*/