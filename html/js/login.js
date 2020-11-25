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
            localStorage.setItem("userId", JSON.stringify(response.Id));

            $.ajax({
                "url": `https://localhost:44358/api/knearestneibor-management/users/${response.Id}`,
                "method": "GET",
            }).done(function () {
                var id = JSON.parse(localStorage.getItem("userId"));
                    $.ajax({
                        method: "POST",
                        url: `https://localhost:44309/api/RecommenceByBoth?Id=${id}`
                        ,
                        dataType: "json",
                    }).done(function(recommended) {
                        console.log(recommended.name);
                        sessionStorage.setItem("recommencename", recommended.name);
                        if(recommended){
                            $.ajax({
                                "url": `https://localhost:44358/api/knearestneibor-management/users`,
                                "method": "POST",
                                "data" : recommended
                                
                            }).done(function(products){
                                sessionStorage.setItem("productsIndex", JSON.stringify(products))
                                window.location.href = "index.html";
                            })
                    
                        }
                    });
                
            })
        }
        else
            alert('failed')
    });
})