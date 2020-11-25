$(document).ready(function(){


    var orders =JSON.parse(sessionStorage.getItem("orders"));
    var position = sessionStorage.getItem("position");
    console.log(position);
    var orderdetails = orders[position].Orderdetails;
    console.log(orderdetails);
    var container = $(".orderdetails");
    container.html("");
    for(let i = 0; i < orderdetails.length;i++){
        $.ajax({
            Type : "GET",
            url  : `https://localhost:44358/api/product-management/productId?productId=${orderdetails[i].ProductId}`,
            dataType: "json",
            async : false,
        }).done(function(product){
            var html = `<tr>
            <td>${i + 1}</td>
            <td><b>${product.Name}</b></td>
            <td> $${product.Price}</td>
            <td>${orderdetails[i].Quantity}</td>
            <td><span class="color">$${orderdetails[i].TotalLine}</span></td>
            `;
            container.append(html);
        })
    
    }
})