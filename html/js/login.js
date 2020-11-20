$("#loginForm").submit(function(event)
{
    event.preventDefault();
    
    var userName =  $('#username').val();
    var password = $('#password').val();
    var loginModel = {
        UserName: userName,
        Password: password
    }
    $.ajax({
        "url": "https://localhost:44358/api/login-management",
        "method": "POST",
        "data": {
            "UserName": $('#username').val(),
            "Password": $('#password').val()
        }
    }).done(function (response) {
        if (response){
            sessionStorage.setItem("userId", response.Id);

            $.ajax({
                "url": `https://localhost:44358/api/knearestneibor-management/users/${response.Id}`,
                "method": "GET",
            }).done(function (bigdata) {
                if (bigdata) {
                    $.ajax({
                        "url": "https://localhost:44309/api/RecommenceByBoth",
                        "method": "POST",
                        "data": { data: bigdata }
                    }).done(function(recommended) {
                        sessionStorage.setItem("Recommence", recommended.name)
                        if(recommended){
                            $.ajax({
                                "url": `https://localhost:44358/api/knearestneibor-management/users`,
                                "method": "POST",
                                "data" : recommended
                            }).done(function(products){
                                console.log(products);
                                console.log(sessionStorage.getItem("Recommence"));
                                sessionStorage.setItem("productsIndex", JSON.stringify(products))
                                window.location.href = "index.html";
                            })
                    
                        }
                    });
                } else {
                        alert('failed');
                }
            })
        }
        else
            alert('failed')
    });
})