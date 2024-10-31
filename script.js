let productCount = []
let cost = 0
document.querySelectorAll(".cart-btn").forEach(element => {
    element.addEventListener('click',(event)=>{
        let totalProduct = document.getElementById("total-product")
        let totalCost = document.getElementById("total-cost")
        
    
        let cartItem = event.target.closest('.card-item')
        let productName = cartItem.querySelector(".product-name").textContent
        productCount.push(productName)

        let productPrice = parseFloat(cartItem.querySelector("#product-price").textContent)
        console.log(productPrice)
        cost+=productPrice


        totalProduct.textContent = productCount.length
        totalCost.textContent = `$${cost}`
    })
});



const clearCart = document.getElementById("emptyCart").addEventListener("click",()=>{
    productCount = []
    cost = 0
    let totalProduct = document.getElementById("total-product")
    let totalCost = document.getElementById("total-cost")
    totalProduct.textContent = 0
    totalCost.textContent = 0
})
