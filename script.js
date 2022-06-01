let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click",finder);

function finder(){
    let user_name = document.getElementById("user_name").value;
    let url = "https://api.github.com/users/" + user_name;
    console.log(url);
    fetch(url).then(function(response){
        return response.json();
    // }).catch(function(error){
    //     console.log("not found");
    }).then(function(data){
        let user_avatar = data.avatar_url;
        let user = data.html_url;
        document.getElementById("username").innerHTML = "user found : click on image to see github"
        document.getElementById("user_image").src = user_avatar;
        document.getElementById("link").href = user;
    })
}


