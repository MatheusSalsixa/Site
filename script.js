const products = [
    {
        id: 'airjordan',
        name: 'Air Jordan 1',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 899.99,
    },

];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        const item = document.createElement('li');
        item.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
        cart.appendChild(item);

        let total = parseFloat(totalElement.textContent);
        total += product.price;
        totalElement.textContent = total.toFixed(2);
    }
}
