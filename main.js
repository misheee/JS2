class ProductsList{
    constructor(container='.main'){
        this.container = container;
        this.goods = [];
        this._fetchproducts();
        this.render();
    }
    _fetchproducts(){
        this.goods = [
            {id: 1, img: '<img class="item_image" src="notebook.jpg">', title: 'Notebook', price: 2500},
            {id: 2, img: '<img class="item_image" src="notebook.jpg">', title: 'HDD', price: 300},
            {id: 3, img: '<img class="item_image" src="notebook.jpg">', title: 'Motherboard', price: 500},
            {id: 4, img: '<img class="item_image" src="notebook.jpg">', title: 'SSD', price: 1000},
            {id: 5, img: '<img class="item_image" src="notebook.jpg">', title: 'RAM memory', price: 400},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
    getSum() {
        let s = 0;
        this.goods.forEach(item=>{
            s += item.price;
        })
        console.log('общая сумма',s);

    }
}

class ProductItem{
    constructor(product){
        this.img = product.img;
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }
    render(){
        return `<div class="item_card">
            <div class="item_img">${this.img}</div>
            <h3 class="item_name">${this.title}</h3>
            <p class="item_price">${this.price}</p>
            <button class="item_button">Купить</button>
    </div>`
    }    
}

let list = new ProductsList('.main');
list.getSum();

class Card {
    addOnCard(){

    }
    removeFromCard(){

    }
    changeCount(){

    }

    render(){

    }
}

class cardItem {
    render(){

    }
}
/* const products = [
    {id: 1, img: '<img class="item_image" src="img/notebook.jpg">', title: 'Notebook', price: 2500},
    {id: 2, img: '<img class="item_image" src="img/notebook.jpg">', title: 'HDD', price: 300},
    {id: 3, img: '<img class="item_image" src="img/notebook.jpg">', title: 'Motherboard', price: 500},
    {id: 4, img: '<img class="item_image" src="img/notebook.jpg">', title: 'SSD', price: 1000},
    {id: 5, img: '<img class="item_image" src="img/notebook.jpg">', title: 'RAM memory', price: 400},
];
const renderProduct = (img, title, price) => {
    return `<div class="item_card">
        <div class="item_img">${img}</div>
        <h3 class="item_name">${title}</h3>
        <p class="item_price">${price}</p>
        <button class="item_button">Купить</button>
    </div>`;
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.img,item.title,item.price));
    console.log(productsList);
    document.querySelector('.main').innerHTML = productsList.join('');
};
renderPage(products); */