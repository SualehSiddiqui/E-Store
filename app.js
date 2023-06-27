// fetch('https://fakestoreapi.com/products/category/jewelery')
//     .then(res => res.json())
//     .then(json => console.log(json))

const categories1 = document.getElementById("categories1");
const categories2 = document.getElementById("categories2");
const dotSpinner = document.getElementById("dot-spinner");
const loader1 = document.getElementById("loader1");
const loader2 = document.getElementById("loader2");
const loader3 = document.getElementById("loader3");
const allCards = document.getElementById("all-cards");
fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(res => {
        loader1.style.display = "none";
        loader2.style.display = "none";
        for (var i = 0; i < res.length; i++) {
            let nameOfCategory;
            if (res[i] == "men's clothing") {
                nameOfCategory = "men"
            } else if (res[i] == "women's clothing") {
                nameOfCategory = "women"
            } else {
                nameOfCategory = res[i]
            }
            categories1.innerHTML += `
                <button class="categories-btn mt-2 me-2" onclick='getCategoryProducts("${nameOfCategory}")'>${res[i]}</button>
            `
            categories2.innerHTML += `
                <button class="categories-btn mt-2 me-2" onclick='getCategoryProducts("${nameOfCategory}")'>${res[i]}</button>
            `
        }
    })
    .catch(err => console.log(err))


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(res => {
        loader3.style.display = "none";
        for (var i = 0; i < res.length; i++) {
            let { image, title, price, rating } = res[i]
            console.log(res[i]);
            let fakePrice = ((price / 10) * 3) + price;
            fakePrice = fakePrice.toFixed(1);
            price = price.toFixed(1);
            allCards.innerHTML = `
                <div class="cards me-3 mb-3">
                    <div class="item-img-div">
                        <img src="${image}" alt="" class="item-img" >
                        <div class="rating-star-div" id="for-rating${i}">
                        </div>
                    </div>
                    <div class="item-data">
                        <h5 class="item-title">${title.slice(0, 30)} ...</h5>
                        <h5>Price: <span class="item-price item-price-fake">$${fakePrice}</span>
                            <span class="item-price item-price-real">$${price}</span>
                            <span class="item-price off-percent">30% off</span>
                        </h5>
                    </div>
                </div>
            ` + allCards.innerHTML;
            var forRating = document.getElementById(`for-rating${i}`)
            var ratingForStars = Math.round(rating.rate);
            console.log(forRating, ratingForStars)
            // for(var j = 1 ;  j <= ratingForStars; i++){
            //    forRating.innerHTML += '<i class="fa-solid fa-star rating-star"></i>';
            // }
        }
    })
    .catch(err => console.log(err))


function getCategoryProducts(categoryName) {
    loader3.style.display = "flex";
    allCards.innerHTML = "";
    console.log(categoryName)
    if (categoryName == "men") {
        fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
            .then(response => response.json())
            .then(res => {
                console.log("if")
                loader3.style.display = "none";
                for (var i = 0; i < res.length; i++) {
                    let { image, title, price, rating } = res[i]
                    let fakePrice = ((price / 10) * 3) + price;
                    fakePrice = fakePrice.toFixed(1);
                    price = price.toFixed(1);
                    allCards.innerHTML = `
                    <div class="cards me-3 mb-3">
                        <div class="item-img-div">
                            <img src="${image}" alt="" class="item-img" >
                            <div class="rating-star-div" id="for-rating${i}"></div>
                        </div>
                        <div class="item-data">
                            <h5 class="item-title">${title.slice(0, 30)} ...</h5>
                            <h5>Price: <span class="item-price item-price-fake">$${fakePrice}</span>
                                <span class="item-price item-price-real">$${price}</span>
                                <span class="item-price off-percent">30% off</span>
                            </h5>
                            <p class="time">2 days ago</p>
                        </div>
                    </div>
                ` + allCards.innerHTML;
                    var forRating = document.getElementById(`for-rating${i}`)
                    let ratingForStars = Math.round(rating.rate);
                    // for(var j = 1 ;  j <= ratingForStars; i++){

                    //    forRating.innerHTML += '<i class="fa-solid fa-star rating-star"></i>';
                    // }

                }
            })
            .catch(err => console.log(err))
    } else if (categoryName == "women") {
        fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .then(response => response.json())
            .then(res => {
                console.log("else if")
                allCards.innerHTML = "";
                loader3.style.display = "none";
                for (var i = 0; i < res.length; i++) {
                    let { image, title, price, rating } = res[i]
                    let fakePrice = ((price / 10) * 3) + price;
                    fakePrice = fakePrice.toFixed(1);
                    price = price.toFixed(1);
                    allCards.innerHTML = `
                    <div class="cards me-3 mb-3">
                        <div class="item-img-div">
                            <img src="${image}" alt="" class="item-img" >
                            <div class="rating-star-div" id="for-rating${i}"></div>
                        </div>
                        <div class="item-data">
                            <h5 class="item-title">${title.slice(0, 30)} ...</h5>
                            <h5>Price: <span class="item-price item-price-fake">$${fakePrice}</span>
                                <span class="item-price item-price-real">$${price}</span>
                                <span class="item-price off-percent">30% off</span>
                            </h5>
                            <p class="time">2 days ago</p>
                        </div>
                    </div>
                ` + allCards.innerHTML;
                    var forRating = document.getElementById(`for-rating${i}`)
                    let ratingForStars = Math.round(rating.rate);
                    // for(var j = 1 ;  j <= ratingForStars; i++){

                    //    forRating.innerHTML += '<i class="fa-solid fa-star rating-star"></i>';
                    // }

                }
            })
            .catch(err => console.log(err))
    } else {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(response => response.json())
            .then(res => {
                console.log("else")
                allCards.innerHTML = "";
                loader3.style.display = "none";
                for (var i = 0; i < res.length; i++) {
                    let { image, title, price, rating } = res[i]
                    let fakePrice = ((price / 10) * 3) + price;
                    fakePrice = fakePrice.toFixed(1);
                    price = price.toFixed(1);
                    allCards.innerHTML = `
                    <div class="cards me-3 mb-3">
                        <div class="item-img-div">
                            <img src="${image}" alt="" class="item-img" >
                            <div class="rating-star-div" id="for-rating${i}"></div>
                        </div>
                        <div class="item-data">
                            <h5 class="item-title">${title.slice(0, 30)} ...</h5>
                            <h5>Price: <span class="item-price item-price-fake">$${fakePrice}</span>
                                <span class="item-price item-price-real">$${price}</span>
                                <span class="item-price off-percent">30% off</span>
                            </h5>
                            <p class="time">2 days ago</p>
                        </div>
                    </div>
                ` + allCards.innerHTML;
                    var forRating = document.getElementById(`for-rating${i}`)
                    let ratingForStars = Math.round(rating.rate);
                    // for(var j = 1 ;  j <= ratingForStars; i++){

                    //    forRating.innerHTML += '<i class="fa-solid fa-star rating-star"></i>';
                    // }
                }
            })
            .catch(err => console.log(err))
    }
}