// fetch('https://fakestoreapi.com/products/category/jewelery')
//     .then(res => res.json())
//     .then(json => console.log(json))

const categories = document.getElementById("categories");
const dotSpinner = document.getElementById("dot-spinner");
const loader = document.getElementById("loader");
const allCards = document.getElementById("all-cards");
fetch('https://api.storerestapi.com/categories')
    .then(response => response.json())
    .then(res => {
        loader.style.display = "none";
        for (var i = 0; i < res.data.length; i++) {
            categories.innerHTML += `
                <button class="categories-btn mt-2 me-2">${res.data[i].name}</button>
            `
        }
        // for
    })
    .catch(err => console.log(err))


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(res => {
        loader.style.display = "none";
        // console.log(res);
        // console.log(image);
        // console.log(title);
        // console.log(price);
        // console.log(rating.rate);
        for (var i = 0; i < res.length; i++) {
            let {image, title, price, rating} = res[i]
            let fakePrice = ((price/10)*3) + price;
            allCards.innerHTML = `
                <div class="cards me-3 mb-3">
                    <div class="item-img-div" id="for-rating${i}">
                        <img src="${image}" alt="" class="item-img" >
                    </div>
                    <div class="item-data">
                        <h5 class="item-title">${title}</h5>
                        <h5>Price: <span class="item-price item-price-fake">$${fakePrice}</span>
                            <span class="item-price item-price-real">${price}</span>
                            <span class="item-price off-percent">30% off</span>
                        </h5>
                    </div>
                </div>
            ` + allCards.innerHTML;
            let forRating = document.getElementById(`for-rating${i}`)
            for(var j = 1 ;  j <= Math.round(rating.rate); i++){
                forRating.innerHTML += '<i class="fa-solid fa-star rating-star"></i>' 
            }
            
        }
    })
    .catch(err => console.log(err))