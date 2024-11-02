// Task 2 Fetch Products from the API Using Fetch and Promises
const apiURL = `https://www.course-api.com/javascript-store-products`;

fetch(apiURL)
.then(response =>{
    if(response.ok) {
        throw new Error(`Network response was not ok`);
    }
    return response.json();
})
.then(data =>{
    displayProducts(data);
})
.catch(error =>{
    document.getElementById(`Error`).innerText =`Failed to Load`;
    console.error(`Fetch error`, error);
})

// Task 3 Display Product Details Dynamically
function displayProducts(data) {
    const productcontainer = document.getElementById(`Container`);
    data.forEach(product => {
        const productDiv = document.createElement(`div`);
        productDiv.clasdslist.add(`product`);
productcontainer.appendChild(productDiv);
    });
}