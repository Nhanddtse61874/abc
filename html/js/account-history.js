$(document).ready(function(){
    var userId = JSON.parse(localStorage.getItem("userId"));

$.ajax({
    Type : "GET",
    url : `https://localhost:44358/api/order-management/users/${userId}/orders`,
    dataType : "json",
    async : false,
    
}).done(function(res){
    
    var container = $(".orders");
    container.html("");
    for(let i = 0; i < res.length; i++){
        var html = `<tr>
        <td>1</td>
        <td><b>${res[i].AddressShipping}</b></td>
        <td>${res[i].Date}</td>
        <td>${res[i].Status}</td>
        <td><span class="color">$ ${res[i].TotalPrice}</span></td>
        <td><a onclick="viewOrderDetails(${i})">View Order</></td>
    </tr>`;
    
    container.append(html);
    }   
})
    
})
function viewOrderDetails(data){
    $.ajax({
        Type : "GET",
        url : `https://localhost:44358/api/order-management/users/2/orders`,
        dataType : "json",
        async : false,
        
    }).done(function(res){
       sessionStorage.setItem("orders", JSON.stringify(res)) ;
       sessionStorage.setItem("position" , data );
       window.location.href="order-details.html";
    })

}