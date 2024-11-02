// Task 2 Fetch Products from the API Using Fetch and Promises
const apiURL = `https://www.course-api.com/javascript-store-products`;

fetch(apiURL)
.then(response =>{
    if(!response.ok) {
        throw new Error(`Network response was not ok`);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    displayProducts(data);
})
//Task 4 Handle Errors Gracefully// This was already done with task 2.
.catch(error =>{
    document.getElementById(`Error Message`).innerText =`Failed to Load`;
    console.error(`Fetch error`, error);
})

// Task 3 Display Product Details Dynamically
function displayProducts(data) {
    const productcontainer = document.getElementById(`Container`);
    data.forEach(product => {
        const productDiv = document.createElement(`div`);
        productDiv.classList.add(`product`);
        const { fields } = product;
        if (!fields) {
            console.error('Fields not found:', product);
            return;
        }
        const productImage = document.createElement('img');
        productImage.src = fields.image[0].url; 
        productImage.alt = fields.name;

        const productName = document.createElement('h2');
        productName.textContent = product.fields.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.fields.price / 100}`;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice); 
        productcontainer.appendChild(productDiv);
    });
}