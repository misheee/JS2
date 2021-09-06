const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [],
        imgCart: 'notebook.jpg',
        products: [],
        imgProduct: 'notebook.jpg'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                       let find = this.cartItems.find(el => el.id_product === item.id_product);
                       if(find){
                           find.quantity++;
                       } else {
                           const prod = Object.assign({quantity: 1}, item);
                           this.cartItems.push(prod)
                       }
                    }
                })
        },
        remove(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered =  this.filtered.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents){
                    this.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let item of data){
                    this.products.push(item);
                    this.filtered.push(item);
                }
            })
    }

});

/* class ProductsList{
    constructor(container='.main'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
/*      this._fetchproducts();
        this.render(); */
    /* } */
/*     _fetchproducts(){
        this.goods = [
            {id: 1, img: '<img class="item_image" src="notebook.jpg">', title: 'Notebook', price: 2500},
            {id: 2, img: '<img class="item_image" src="notebook.jpg">', title: 'HDD', price: 300},
            {id: 3, img: '<img class="item_image" src="notebook.jpg">', title: 'Motherboard', price: 500},
            {id: 4, img: '<img class="item_image" src="notebook.jpg">', title: 'SSD', price: 1000},
            {id: 5, img: '<img class="item_image" src="notebook.jpg">', title: 'RAM memory', price: 400},
        ];
    } */

   /*  _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    } */
/*     getSum() {
        let s = 0;
        this.goods.forEach(item=>{
            s += item.price;
        })
        console.log('общая сумма',s);
    } */
/* }

class ProductItem{
    constructor(product, img = '<img class="item_image" src="notebook.jpg">'){
        this.img = img;
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
    }
    render(){
        return `<div class="item_card" data-id="$(this.id)">
                <div class="item_img">${this.img}</div>
                    <h3 class="item_name">${this.title}</h3>
                    <p class="item_price">${this.price}</p>
                    <button class="item_button">Купить</button>
                </div>`
    }
}

let list = new ProductsList(); */
/* list.getSum(); */

/* class Cart{
    constructor(container='.active-cart'){
        this.container = container;
        this.goods = [];
        this._clickCart();
        this._getCardProductItem()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
        }

        _getCardProductItem(){
            return fetch(`${API}/getBasket.json`)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        }
    
        render(){
            const block = document.querySelector(this.container);
            for(let product of this.goods){
                const item = new CartProductItem(product);
                block.insertAdjacentHTML("beforeend",item.render(product));
            }
        }

        _clickCart(){
            document.querySelector(".cart_link").addEventListener('click', () => {
                document.querySelector(this.container).classList.toggle('invisible');
            })
        }
    }
class CartProductItem{
    constructor(product, img = 'class="active-cart-img" src="notebook.jpg"'){
        this.img = img;
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.quantity = product.quantity;
        } 
    render(_product){
        return `<div class="active-cart__cart-item" data-id="${this.id}">
                    <div class="active-cart__item-body">
                        <img ${this.img}>
                        <div class="item-body__text">
                            <h3 class="active-cart__cart-title">${this.title}</h3>
                            <p class="active-cart__cart-price">${this.price}</p>
                        </div>
                    </div>
                    <p class="product-quantity>${this.quantity}</p>
                    <div class="delete-button">
                        <button class="delete">&#128465;</button>
                    </div>`
        }
    }

    new Cart(); */ 
/* const products = [
    {id: 1, img: '<img class="item_image" src="img/notebook.jpg">', title: 'Notebook', price: 2500},
    {id: 2, img: '<img class="item_image" src="img/notebook.jpg">', title: 'HDD', price: 300},
    {id: 3, img: '<img class="item_image" src="img/notebook.jpg">', title: 'Motherboard', price: 500},
@@ -18,4 +93,4 @@ const renderPage = list => {
    console.log(productsList);
    document.querySelector('.main').innerHTML = productsList.join('');
}; 
renderPage(products);*/