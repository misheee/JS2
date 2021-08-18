const products = [
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
renderPage(products);