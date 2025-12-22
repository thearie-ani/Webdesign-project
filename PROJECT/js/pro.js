const redeemBtn = document.getElementById("code-pro");
if (redeemBtn){
    redeemBtn.addEventListener("click", function(){
        localStorage.setItem("promoCode", "newyear2026");
    });
}

const inputCode= document.getElementById("code");
if(inputCode){
    const saveCode = localStorage.getItem("promoCode");
    if (saveCode){
        inputCode.value = saveCode;
    }
}
localStorage.removeItem("promoCode");

const applyBtn = document.getElementById("applyBtn");
const totalP = document.getElementById("totalPrice");
const discountP= document.getElementById("disPrice");
const newPrice = document.getElementById("afterDis");
const messageC = document.getElementById("message");

if (applyBtn){
    applyBtn.addEventListener("click", function(){
        const promoCode = inputCode.value.trim();
        let total = parseFloat(totalP.textContent);
        
        messageC.textContent = "";
        messageC.classList.remove("text-red-500");
        if (promoCode=== "newyear2026"){
            const discount = total*0.25;
            const newTotal = total - discount;
            if (discount > 40) discount = 40;
            discountP.textContent = `-${discount}$`;
            newPrice.textContent = `${newTotal}$`;
            messageC.classList.add("text-blue-500");
            messageC.textContent = `Discount applie: 25%`;
            applyBtn.disabled= true;

        }else {
            messageC.textContent = "Inalid promo code";
            messageC.classList.add("text-red-500")
            
        }
    });
}

