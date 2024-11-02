// Task 2 Fetch Products from the API Using Fetch and Promises
const aPIURL = `https://www.course-api.com/javascript-store-products`;

fetch(aPIURL)
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

