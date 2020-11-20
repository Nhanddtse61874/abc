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

$(document).ready(function () {
  var id = getParameterByName("id");

  if (id !== null) {
    $.ajax({
      type: "GET",
      url: "https://localhost:44358/api/product-management/" + id,
      dataType: "json",
      async:false,
      success: function (res) {
        let html = "";
        $.each(res, function (i, data) {
          var url =  data.ImageStorages[0].ImageUrl;
          var alt = data.ImageStorages[0].Alt;
          html += `
          <div class="prd prd-has-loader prd-new prd-popular ">
                    <div class="prd-inside">
                         <div class="prd-img-area"><a onclick="onclickProduct(${data.Id})" class="prd-img"><img src='${url}' data-srcset= '${url}' alt='${alt}' class="js-prd-img lazyload"></a>
                            <div class="label-new">NEW</div><a href="#" class="label-wishlist icon-heart js-label-wishlist"></a>
                            <ul class="list-options color-swatch prd-hidemobile">
                                <li data-image="images/products/product-01.jpg"><a href="#" class="js-color-toggle"><img src="images/products/product-placeholder.png" data-srcset="images/products/xsmall/product-01.jpg" class="lazyload" alt="Color Name"></a></li>
                                <li data-image="images/products/product-01-2.jpg"><a href="#" class="js-color-toggle"><img src="images/products/product-placeholder.png" data-srcset="images/products/xsmall/product-01-2.jpg" class="lazyload" alt="Color Name"></a></li>
                            </ul>
                            <div class="gdw-loader"></div>
                        </div>
                        <div class="prd-info">
                            <h2 class="prd-title"><a onclick="onclickProduct(${data.Id})">${data.Name}</a></h2>
                            <div class="prd-rating prd-hidemobile"><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star"></i></div>
                            <div class="prd-price">
                                <div class="price-new">${data.Price} $</div>
                            </div>
                            <div class="prd-action"> 
                                    <button class="btn"  onclick="addToCart(new Item(${data.Id}, '${data.Name}', '${url}', ${data.Price}, 0), 1)"><i class="icon icon-handbag"></i><span>Add To Cart</span></button>
                                    <div class="prd-links"><a href="#" class="icon-eye prd-qview-link js-qview-link"></a></div>
                                </div>
                        </div>
                    </div>
                </div>
                        `;
        });

        // set html vao category menu
        $("#listproduct").html(html);
      },
    }).done(function () {
      $(this).addClass("done");
    });
  } 
});

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function onclickProduct(data){
// sessionStorage.removeItem("productId");
sessionStorage.setItem("productId", JSON.stringify(data));
window.location.href="product.html";

}
