var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.

    function renderPersonCard(person){

        let wrapper = document.getElementById('wrapper');
    
        let mainContainer = document.createElement("div")
        mainContainer.id ='mainContainer';
    
        let infoPerson = document.createElement('div')
        infoPerson.style.width='100%'
        infoPerson.style.height='400px'
    
        let fullname = document.createElement('h3')
        fullname.innerText = person.firstname +' '+ person.lastname;
    
        let personAge = document.createElement('p')
        personAge.innerHTML = person.age
    
        let buttonAdd = document.createElement('BUTTON')
        buttonAdd.addEventListener('click', addperson)
        buttonAdd.innerText = 'Add'
    
        let buttonDel = document.createElement('BUTTON')
        buttonDel.addEventListener('click', Delperson)
        buttonDel.innerText = 'Delete'
    
        infoPerson.appendChild(fullname)
        infoPerson.appendChild(personAge)
    
        infoPerson.appendChild(buttonAdd)
        infoPerson.appendChild(buttonDel)
    
        mainContainer.appendChild(infoPerson)
        wrapper.appendChild(mainContainer)
    }


}



