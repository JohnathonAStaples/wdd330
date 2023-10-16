const productData = {

};

function addToCart(productId) {

}

function renderProductDetails(productId) {
    
}

export default function productDetails(productId) {
    if (!productId) {
        console.error("Product ID not found in the URL.");
        return;
    }

    addToCart(productId);
    renderProductDetails(productId);
}