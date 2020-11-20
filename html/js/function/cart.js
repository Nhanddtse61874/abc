function addToCart(data, count, _delete = false) {
  let storeCookie = getCookie("cart");

  let store;
  try {
    store = storeCookie !={} ? []: JSON.parse(storeCookie) ;
    
  } catch {
    store = [];
  }
  let flag = false;

  for (let i = 0; i < store.length; i++) {
    let item = store[i];
    if (item === null) continue;
    if (item.Id === data.Id) {
      flag = true;
      item.Count += count;
      if (item.Count < 1 || _delete) {
        delete store[i];
      }
      break;
    }
  }

  if (!flag) {
    store.push(new Item(data.Id, data.Name, data.Img, data.Price, count));
  }

  setCookie("cart", JSON.stringify(store), 1);
  setTemplate();
}

function clearCart() {
  setCookie("cart", JSON.stringify({}), 1);
}

function setTemplate() {
  let storeCookie = getCookie("cart");
  let store;
  try {
    store = JSON.parse(storeCookie);
  } catch {
    store = [];
  }
  let total = 0;
  let count = 0;
  let html = "";
  let htmlCheckout = `
  <div class="cart-table-prd cart-table-prd-headings d-none d-lg-table">
  <div class="cart-table-prd-image"></div>
  <div class="cart-table-prd-name"><b>ITEM</b></div>
  <div class="cart-table-prd-qty"><b>QTY</b></div>
  <div class="cart-table-prd-price"><b>PRICE</b></div>
</div>`;
  for (let i = 0; i < store.length; i++) {
    let item = store[i];
    if (item === null) continue;
    total += item.Count * item.Price;
    count += item.Count;
    html += `
   <div class="minicart-prd">
       <div class="minicart-prd-image"><a href="#"><img src="images/products/product-placeholder.png" data-srcset="images/products/xsmall/product-05.jpg" class=" lazyloaded" alt="" srcset="${item.Img}"></a></div>
       <div class="minicart-prd-name">
           <h2><a href="#">${item.Name}</a></h2>
       </div>
       <div class="minicart-prd-qty"><span>qty:</span> <b>${item.Count}</b></div>
       <div class="minicart-prd-price"><span>price:</span> <b>$ ${addCommas(item.Price)}</b></div>
       <div class="minicart-prd-action"><a href="#" class="icon-cross js-product-remove" onclick="addToCart(new Item(${item.Id},'', '', 0, 0), 0, true)"></a></div>
   </div>
    `;

    htmlCheckout += `
    <div class="cart-table-prd" id="listCheckout">
                                    <div class="cart-table-prd-image"><a href="#"><img src="${item.Img}" alt=""></a></div>
                                    <div class="cart-table-prd-name">
                                        <h2><a href="#">${item.Name}</a></h2>
                                    </div>
                                    <div class="cart-table-prd-qty"><b>${item.Count}</b></div>
                                    <div class="cart-table-prd-price"><b>$ ${addCommas(item.Price)}</b></div>
                                </div>
    `;
  }

  let cartTable = $(".cart-table");
  let cartTotalPrice = $(".card-total-price");
  if (cartTable.length > 0) {
      cartTable.html(html);
  }
  if (cartTotalPrice.length > 0) {
    cartTotalPrice.text(addCommas(total));
}

  if (html !== "") {
      html += `<a class="btn btn--full btn--lg" role="button" href="/cart.html">Buy Now</a>`;
  }
  $(".minicart-total").text(addCommas(total));
  $(".card-total-price").text(addCommas(total));
  $(".minicart-qty").text(count);
  $(".minicart-drop-content").html(html);
  $("#listCheckout").html(htmlCheckout);
  
}

function clickBuy() {
  let name = $("#customerName").val();
  let address = $("#customerAddress").val();
  let phone = $("#customerPhone").val();

  buy(name, address, phone, 1)
}

function buy(name, address, phone, userid) {

  let storeCookie = getCookie("cart");
  let store;
  let data = {
    "UserId": userid,
    "TotolPrice": 0,
    "AddressShipping": address,
    "Date": "2020-11-18T05:12:15.675Z",
    "Status": true,
    "OrderDetails": []
  }

  try {
    store = JSON.parse(storeCookie);
  } catch {
    store = [];
  }
  let total = 0;
  for (let i = 0; i < store.length; i++) {
    let item = store[i];
    if (item === null) continue;
    total += item.Count * item.Price;
    data.OrderDetails.push( {
      "ProductId": item.Id,
      "CurrentPrice": item.Price,
      "Quantity": item.Count,
      "TotalPrice": item.Price*item.Count
    })
  }

  data.TotalPrice = total;

  
  $.ajax({
    type: "POST",
    url: "https://localhost:44358/api/order-management/users/orders",
    dataType: "json",
    data: data
  }).always(function() {
    alert("Dat hang thanh cong");
    clearCart();
    location.reload();
  });
  // .then(function() {
  //   console.log("a");
  //   alert("Dat hang thanh cong");
  //   clearCart();
  // });
}

function Item(id, name, img, price, count) {
  this.Id = id;
  this.Name = name;
  this.Img = img;
  this.Price = price;
  this.Count = count;
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

setTemplate();

