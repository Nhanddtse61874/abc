$("#createform").submit(function(event){
  event.preventDefault();
  var userName = $('#username').val();
  var passWord = $('#password').val();
  var name  = $('#name').val();
  var phone = parseInt($('#phone').val());
  var address = $('#address').val();

  data = {
    "UserName" : userName,
    "PassWord" : passWord,
    "RankId"   : 1,
    "RoleId"   : 2,
    "Name"    : name,
    "Phone"    : phone,
    "Address"  : address,
    "Gender"   : true,
    "Point"    : 0
  }
  $.ajax({
      method: "POST",
      url: `https://localhost:44358/api/user-management/users`,
      dataType : "json",
      data: data,
      success : function(){
        alert('success');
        window.location.href ="login.html";
      },
      error: function() {
        alert('success');
        window.location.href ="login.html";
      }
     
  
  })
})
