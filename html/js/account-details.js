$(document).ready(function(){
  var userId = JSON.parse(localStorage.getItem("userId"));
   
   $.ajax({
       Type : "GET",
       url : `https://localhost:44358/api/user-management/users/${userId}/details`,
       dataType: "json",
       async : false,
       success : function(userDetails){
           console.log(userDetails);
        var container = $(".userdetails");
        container.html("");

        var html = `
        <h2>${userDetails.Name}'s Details</h2>
        <div class="row ">
        <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h3>Personal Info</h3>
                <p><b>First Name:</b> ${userDetails.Name}<br><b>Phone:</b> ${userDetails.Phone}<br><b>Address:</b> ${userDetails.Address}<br><b>Point:</b>${userDetails.Point}</p>
                <div class="mt-2 clearfix"><a href="#" class="link-icn js-show-form" data-form="#updateDetails"><i class="icon-pencil"></i>Edit</a></div>
            </div>
        </div>
    </div>
    </div>`; 
    container.append(html);      
}
   }).done(function(result){

   });
})