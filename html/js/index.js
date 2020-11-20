$(document).ready(function () {
//   var user = localStorage.getItem("user");
  var products = sessionStorage.getItem("products");
  var parseObject = JSON.parse(products);
  var container = $(".recomend");
  container.html("");
    for (let i = 0; i < parseObject.length; i++) {
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
      
   
});

function clickProduct(productId){
sessionStorage.removeItem("product");
sessionStorage.setItem("productId",productId );
window.location.href = "product.html";

}
function newProduct(id){
    this.Id = id;
}


