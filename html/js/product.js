
$(document).ready(function(){
    var productId  =JSON.parse(sessionStorage.getItem("productId")) ;
    $.ajax({
        Type : "GET",
        url : `https://localhost:44358/api/product-management/productId?productId=${productId}`,
        dataType: "json",
        async : false,
        success: function (product) {
            var container = $(".product");
            container.html("");
        
            var url = product.ImageStorages[0].ImageUrl; 
            var alt = product.ImageStorages[0].Alt;
            var html = `<div class="col-md-6 col-xl-5">
            <div class="prd-block_info js-prd-m-holder mb-2 mb-md-0"></div>
            
            <div class="prd-block_main-image main-image--slide js-main-image--slide">
                <div class="prd-block_main-image-holder js-main-image-zoom" data-zoomtype="inner">
                    <div class="prd-block_main-image-video js-main-image-video"><video loop muted preload="metadata" controls="controls">
                            <source src="#"></video>
                        <div class="gdw-loader"></div>
                    </div>
                    <div class="prd-has-loader">
                        <div class="gdw-loader"></div><img src=${url} class="zoom" alt=${alt} data-zoom-image=${url}/>
                    </div>
                    <div class="prd-block_main-image-next slick-next js-main-image-next">NEXT</div>
                    <div class="prd-block_main-image-prev slick-prev js-main-image-prev">PREV</div>
                </div>
                <div class="prd-block_main-image-links"><a data-fancybox data-width="900" href="https://www.youtube.com/watch?v=Zk3kr7J_v3Q" class="prd-block_video-link"><i class="icon icon-play"></i></a>
                    <a href="images/products/large/product-01.jpg" class="prd-block_zoom-link"><i class="icon icon-zoomin"></i></a>
                </div>
            </div>
            <div class="product-previews-wrapper">
                <div class="product-previews-carousel" id="previewsGallery100">
                    <a href="#" data-value="Silver" data-image=${url} data-zoom-image=${url}><img src=${url} alt=${alt}></a>
                    <a href="#" data-value="Silver" data-image=${url} data-zoom-image=${url}><img src=${url} alt=${alt}></a>
                    <a href="#" data-value="Silver" data-image=${url} data-zoom-image=${url}><img src=${url} alt=${alt}></a>
                    
                </div>
            </div>
            
        </div>
        <div class="col-md">
            <div class="prd-block_info">
                <div class="js-prd-d-holder prd-holder">
                    <div class="prd-block_title-wrap">
                        <h1 class="prd-block_title">${product.Name}</h1>
                        <div class="prd-block__labels"><span class="prd-label--new">NEW</span></div>
                    </div>
                    <div class="prd-block_info-top">
                        <div class="prd-rating"><a href="#" class="prd-review-link"><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star"></i> <span>1 reviews</span></a></div>
                        <div class="prd-availability">Availability: <span>${product.Quantity}</span></div>
                    </div>
                    <div class="prd-block_description topline">
                        <p>${product.Description}.</p>
                    </div>
                </div>
                <div class="prd-block_options topline">
                    <div class="prd-color swatches"><span class="option-label">Color:</span> <select id="optionsSelect01">
                            <option value="Silver" selected="selected">Silver</option>
                            <option value="Gold">Gold</option>
                            <option value="Dark Silver">Dark Silver</option>
                        </select>
                        <ul class="color-list color-list--sm" data-select-id="optionsSelect01">
                            <li class="active"><a href="#" data-toggle="tooltip" data-placement="top" title="Silver" data-value="Silver" data-image="images/products/small/product-01.jpg"><span class="value"><img src="images/products/small/product-01.jpg" alt=""></span></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Gold" data-value="Gold" data-image="images/products/small/product-01-5.jpg"><span class="value"><img src="images/products/small/product-01-5.jpg" alt=""></span></a></li>
                            <li class="absent-option"><a href="#" data-toggle="tooltip" data-placement="top" title="Dark Silver" data-value="Dark Silver" data-image="images/products/small/product-01-9.jpg"><span class="value"><img src="images/products/small/product-01-9.jpg" alt=""></span></a></li>
                        </ul>
                    </div>
                    <div class="prd-size swatches"><span class="option-label">Size:</span> <select id="optionsSelect02">
                            <option value="36">36</option>
                            <option value="38" selected="selected">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                        </select>
                        <ul class="size-list js-size-list" data-select-id="optionsSelect02">
                            <li class="absent-option"><a href="#" data-value="36"><span class="value">36</span></a></li>
                            <li class="active"><a href="#" data-value="38"><span class="value">38</span></a></li>
                            <li><a href="#" data-value="40"><span class="value">40</span></a></li>
                            <li><a href="#" data-value="42"><span class="value">42</span></a></li>
                        </ul>
                    </div>
                    <div class="prd-size swatches"><span class="option-label">Material:</span> <select id="optionsSelect03">
                            <option value="silk">silk</option>
                            <option value="synthetics" selected="selected">synthetics</option>
                        </select>
                        <ul class="size-list size-list--wide js-size-list" data-select-id="optionsSelect03">
                            <li class="absent-option"><a href="#" data-value="silk"><span class="value">silk</span></a></li>
                            <li><a href="#" data-value="synthetics"><span class="value">synthetics</span></a></li>
                        </ul>
                    </div>
                    <div class="prd-block_qty"><span class="option-label">Qty:</span>
                        <div class="qty qty-changer">
                            <fieldset><input type="button" value="&#8210;" class="decrease"> <input type="text" class="qty-input" value="2" data-min="0" data-max="10"> <input type="button" value="+" class="increase"></fieldset>
                        </div><span class="option-label">max <span class="qty-max">10</span> item(s)</span>
                    </div>
                </div>
                <div class="prd-block_actions topline">
                    <div class="prd-block_price"><span class="prd-block_price--actual">$ ${product.CurrentPrice}</span> <span class="prd-block_price--old">$ ${product.Price}</span></div>
                    <div class="btn-wrap"><button class="btn btn--add-to-cart" onclick="addToCart(new Item(${product.Id}, '${product.Name}', '${url}', ${product.CurrentPrice}, 0), 1)"><i class="icon icon-handbag"></i><span>Add to cart</span></button></div>
                    <div class="prd-block_link">
                        <a href="#" class="icon-heart-1"></a>
                        <a href="#" class="icon-share"></a>
                    </div>
                </div>
                <div class="prd-safecheckout topline">
                    <h3 class="h2-style">guaranteed safe checkout</h3><img src="images/payment/safecheckout.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-xl-3 mt-3 mt-xl-0 sidebar-product">
            <div class="shop-features-style4">
                <a href="#" class="shop-feature">
                    <div class="shop-feature-icon"><i class="icon-box3"></i></div>
                    <div class="shop-feature-text">
                        <div class="text1">Free worlwide delivery</div>
                        <div class="text2">Lorem ipsum dolor sit amet conset</div>
                    </div>
                </a>
                <a href="#" class="shop-feature">
                    <div class="shop-feature-icon"><i class="icon-arrow-left-circle"></i></div>
                    <div class="shop-feature-text">
                        <div class="text1">100% money back guarantee</div>
                        <div class="text2">Lorem ipsum dolor sit amet conset</div>
                    </div>
                </a>
                <a href="#" class="shop-feature">
                    <div class="shop-feature-icon"><i class="icon-call"></i></div>
                    <div class="shop-feature-text">
                        <div class="text1">24/7 customer support</div>
                        <div class="text2">Lorem ipsum dolor sit amet conset</div>
                    </div>
                </a>
            </div>
            <div class="js-countdown-wrap">
                <div class="promo-text">
                    <div><span class="text2">DISCOUNT</span> <span class="text1">32% OFF</span></div>
                    <div class="text3">Have time to buy!</div>
                </div>
            </div>
        </div>
        <div class="prd-block-prevnext"><a href="#" class="prd-block-prevnext-arrow js-prd-block-next"><i class="icon-angle-right"></i></a>
            <div class="prd-next">
                <div class="prd-next-img"><img src="images/products/xsmall/product-02.jpg" alt=""></div>
                <div class="prd-next-info">
                    <div class="prd-next-tag"><a href="#">canverse</a></div>
                    <h2 class="prd-next-title"><a href="#">Long top with print</a></h2>
                    <div class="prd-prevnext-price">
                        <div class="price-new">$ 20.00</div>
                    </div>
                </div>
            </div><a href="#" class="prd-block-prevnext-arrow js-prd-block-prev"><i class="icon-angle-left"></i></a>
            <div class="prd-prev">
                <div class="prd-next-img"><img src="images/products/xsmall/product-03.jpg" alt=""></div>
                <div class="prd-next-info">
                    <div class="prd-next-tag"><a href="#">colvin klein</a></div>
                    <h2 class="prd-next-title"><a href="#">Tie with texture</a></h2>
                    <div class="prd-prevnext-price">
                        <div class="price-new">$ 34.00</div>
                    </div>
                </div>
            </div>
        </div>`;
             container.append(html);

    $.ajax({
                Type : "GET",
                url : `https://localhost:44358/api/product-management/null/null/${product.Tags[0].Id}/null?pageIndex=1&pageSize=10`,
                dataType: "json",
                async : false,
                success: function (products) {
        var container = $(".products");
        container.html("");
        for(let i = 0;i <  products.length; i++ ){
        
        var url = products[i].ImageStorages[0].ImageUrl;
        
        var alt = products[i].ImageStorages[0].ImageUrl;
        var html = `<div class="prd prd-has-loader prd-new prd-popular">
        <div class="prd-inside">
            <div class="prd-img-area">
                <a onclick="clickProduct(new newProduct(${products[i].Id}))" class="prd-img"><img src=${url} data-srcset=${url} alt=${alt} class="js-prd-img lazyload"></a>
                <div class="label-new">NEW</div>
                <a href="#" class="label-wishlist icon-heart js-label-wishlist"></a>
                <ul class="list-options color-swatch prd-hidemobile">
                    <li data-image="images/products/product-01.jpg">
                        <a href="#" class="js-color-toggle"><img src=${url} data-srcset=${url} class="lazyload" alt="Color Name"></a>
                    </li>
                    <li data-image="images/products/product-01-2.jpg">
                        <a href="#" class="js-color-toggle"><img src=${url} data-srcset=${url} class="lazyload" alt="Color Name"></a>
                    </li>
                </ul>
                <div class="gdw-loader"></div>
            </div>
            <div class="prd-info">
                <div class="prd-tag prd-hidemobile"><a href="#">${products[i].Description}</a></div>
                <h2 class="prd-title"><a  onclick="clickProduct(new newProduct(${products[i].Id}))">${products[i].Name}</a></h2>
                <div class="prd-rating prd-hidemobile"><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star fill"></i><i class="icon-star"></i></div>
                <div class="prd-price">
                    <div class="price-new">$ ${products[i].CurrentPrice}</div>
                </div>
                <div class="prd-hover">
                    <div class="prd-action">
                        <form action="#"><input type="hidden"> <button class="btn" data-fancybox data-src="#modalCheckOut"><i class="icon icon-handbag"></i><span>Add To Cart</span></button></form>
                        <div class="prd-links">
                            <a href="#" class="icon-eye prd-qview-link js-qview-link" data-fancybox data-src="#modalQuickView"></a>
                        </div>
                    </div>
                    <div class="prd-options prd-hidemobile"><span class="label-options">Sizes:</span>
                        <ul class="list-options size-swatch">
                            <li class="active"><span>xs</span></li>
                            <li><span>s</span></li>
                            <li><span>m</span></li>
                            <li><span>l</span></li>
                            <li><span>xl</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
        container.append(html);
        }}
        }).done(function (abc){
        
            });
        },
        
    }).done(function (product){
    
    });
});




function newProduct(Id){
this.Id = Id;
}


function clickProduct(pId){

sessionStorage.clear();

if(pId.Id){
sessionStorage.removeItem("productId");
sessionStorage.setItem("productId", JSON.stringify(pId.Id));
window.location.reload();
}
}