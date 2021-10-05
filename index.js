const plusBtn = document.getElementById("plus-btn")
plusBtn.addEventListener("click",function(){
    
    increase("iphoneQuantity")

})

const minusBtn = document.getElementById("minus-btn")
minusBtn.addEventListener("click",function(){
   
    decrease("iphoneQuantity") 
   
})

const plusBtnCase = document.getElementById("plus-btn-case")
plusBtnCase.addEventListener("click",function(){
    
    increaseCase("iphoneCaseQuantity")

})

const minusBtnCase = document.getElementById("minus-btn-case")
minusBtnCase.addEventListener("click",function(){
   
    decreaseCase("iphoneCaseQuantity") 
   
})




    
function decrease(id){

    const iphoneQuantity = document.getElementById(id).value;
    const iphoneQuantityNumber = parseInt(iphoneQuantity);

    const iphoneQuantityNumberDecrease = iphoneQuantityNumber - 1 ;
    document.getElementById(id).value = iphoneQuantityNumberDecrease
    const totalIphonePrice = document.getElementById("iphone-price").innerText = 1219  * iphoneQuantityNumberDecrease
    subtotal(totalIphonePrice)
}

function increase(id){
   
    const iphoneQuantity = document.getElementById(id).value;
    const iphoneQuantityNumber = parseInt(iphoneQuantity);

    const iphoneQuantityNumberIncrease = iphoneQuantityNumber + 1 ;
    document.getElementById(id).value = iphoneQuantityNumberIncrease
    const totalIphonePrice = document.getElementById("iphone-price").innerText = 1219  * iphoneQuantityNumberIncrease
    subtotal(totalIphonePrice)
}

function decreaseCase(id){

    const iphoneCaseQuantity = document.getElementById(id).value;
    const iphoneCaseQuantityNumber = parseInt(iphoneCaseQuantity);

    const iphoneCaseQuantityNumberDecrease = iphoneCaseQuantityNumber - 1 ;
    document.getElementById(id).value = iphoneCaseQuantityNumberDecrease
    const totalCasePrice = document.getElementById("casePrice").innerText = 59  * iphoneCaseQuantityNumberDecrease
    subtotal(totalCasePrice)
}
function increaseCase(id){
   
    const iphoneCaseQuantity = document.getElementById(id).value;
    const iphoneCaseQuantityNumber = parseInt(iphoneCaseQuantity);

    const iphoneCaseQuantityNumberIncrease = iphoneCaseQuantityNumber + 1 ;
    document.getElementById(id).value = iphoneCaseQuantityNumberIncrease
   const totalCasePrice = document.getElementById("casePrice").innerText = 59  * iphoneCaseQuantityNumberIncrease
   subtotal(totalCasePrice)
}

function subtotal(price){
    const iphone = document.getElementById("iphone-price").innerText;
    const iphoneTotalNumber = parseInt(iphone);

    const iphoneCase = document.getElementById("casePrice").innerText;
    const iphoneCaseTotalNumber = parseInt(iphoneCase);

const total = document.getElementById("subTotal").innerText = iphoneTotalNumber + iphoneCaseTotalNumber 
    
const tax =  document.getElementById("tax").innerText = parseFloat((total/15).toFixed(2)) ;  

const grandTotal = document.getElementById("grandtotal").innerText = (total+tax)


}
