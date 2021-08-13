const coupons = [
    {
        name: '#202187960',
        discount: 20
    },
    {
        name: '#202187877',
        discount: 30
    },
    {
        name: '#202187549',
        discount: 40
    },
    {
        error: 'Coupon not found'
    }
]

function discount(originalPrice, discount) {
    return originalPrice * (100 - discount)/100
}

function calcDiscountCoupon() {
    const originalPrice = parseFloat(document.getElementById('precio').value)
    const coupon = document.getElementById('coupon').value
    const resultDiscount = document.getElementById('result')
    
    coupons.find(newCoupon => {
        if((!coupon)||(!originalPrice)){
            resultDiscount.innerText= newCoupon.error
            
        }else if(newCoupon.name === coupon){
            const newDiscount = (newCoupon.discount)
            const totalDiscount = discount(originalPrice, newDiscount) 
            resultDiscount.innerText= `Total a pagar $${totalDiscount} / descuento del ${newCoupon.discount}%`
        }
    })
}



