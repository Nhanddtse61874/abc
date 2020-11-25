$(document).ready(function () {
//   var user = localStorage.getItem("user");

if(localStorage.getItem("userId")){



  var products = sessionStorage.getItem("productsIndex");
  
  if(products !== null)
  {
    var parseObject = JSON.parse(products);
    
  }else{
    $.ajax({
      Type : "GET",
      url  : `https://localhost:44358/api/knearestneibor-management/users`,
      dataType : "json",
      async : false,
      success : function(res){
        console.log(res);
        parseObject = res;
      }
      
    });
  }
    var container = $(".recomend");
    container.html("");
      for (let i = 0; i < parseObject.length; i++) {
          if (parseObject[i]){
            var url = parseObject[i].ImageStorages[0].ImageUrl;
          var alt = parseObject[i].ImageStorages[0].Alt;
        
              var html = `
              <div class="prd prd-has-loader prd-new prd-popular ">
                      <div class="prd-inside">
                           <div class="prd-img-area"><a onclick="clickProduct(new newproduct(${parseObject[i].Id}))" class="prd-img"><img src='${url}' data-srcset= '${url}' alt='${alt}' class="js-prd-img lazyload"></a>
                              <div class="label-new">NEW</div><a href="#" class="label-wishlist icon-heart js-label-wishlist"></a>
                              <ul class="list-options color-swatch prd-hidemobile">
                                  <li data-image="images/products/product-01.jpg"><a href="#" class="js-color-toggle"><img src="images/products/product-placeholder.png" data-srcset="images/products/xsmall/product-01.jpg" class="lazyload" alt="Color Name"></a></li>
                                  <li data-image="images/products/product-01-2.jpg"><a href="#" class="js-color-toggle"><img src="images/products/product-placeholder.png" data-srcset="images/products/xsmall/product-01-2.jpg" class="lazyload" alt="Color Name"></a></li>
                              </ul>
                              <div class="gdw-loader"></div>
                          </div>
                          <div class="prd-info">
                              <h2 class="prd-title"><a href="product.html">${parseObject[i].Name}</a></h2>
                              <div class="prd-rating prd-hidemobile"><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star"></i></div>
                              <div class="prd-price">
                                  <div class="price-new">${parseObject[i].Price} $</div>
                              </div>
                              <div class="prd-action"> 
                                      <button class="btn"  onclick="addToCart(new Item(${parseObject[i].Id}, '${parseObject[i].Name}', '${url}', ${parseObject[i].Price}, 0), 1)"><i class="icon icon-handbag"></i><span>Add To Cart</span></button>
                                      <div class="prd-links"><a href="#" class="icon-eye prd-qview-link js-qview-link"></a></div>
                                  </div>
                          </div>
                      </div>
                  </div>`;
  
  container.append(html);
 
          }
           
        }
        
      }
   
});

function clickProduct(productId){
sessionStorage.removeItem("product");
sessionStorage.setItem("productId",productId );
window.location.href = "product.html";

}
function newProduct(id){
    this.Id = id;
}



$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:44358/api/category-management",
      dataType: "json",
      async:false,
      success: function (res) {
        let html = "";
        $.each(res, function (i, data) {
          html += `
                  <div class="mmenu-col">
                  <h3 class="submenu-title"><a href="category.html?id=${
                    data.Id
                  }">${data.Name}</a></h3>
                  <ul class="submenu-list">
                      ${data.SubCategories.map((sub) => {
                        return `<li><a href="category.html?id=${sub.Id}">${sub.Name}</a></li>`;
                      }).join(" ")}
                  </ul>
                  <div class="submenu-img">
                      <a href="category.html"><img src="images/placeholder.png" data-src="images/menu/category-img-02.jpg" class="lazyload" alt=""></a>
                  </div>
              </div>
                  `;
        });
  
        // set html vao category menu
        $("#categorymenu").html(html);
      },
    });
  });



  