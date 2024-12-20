// let submit = document.getElementById('calculateButton')
let forms = document.querySelector('.forms')

let custName = document.querySelector(".cust-name")
let phoneNo = document.querySelector(".phone-no")
let emailId = document.querySelector(".email-id")
let itemName = document.querySelector(".name")
let quantity = document.querySelector(".quant")
let price = document.querySelector(".price")
let gst = document.querySelector(".gst")


forms.addEventListener('submit',(e)=>{
    e.preventDefault()
let name = custName.value
let phone = phoneNo.value
let email = emailId.value
let item = itemName.value
let quant = quantity.value
let pricerate = price.value
let gstrate = gst.value

console.log(name)
let totalPrice = quant * pricerate;
console.log(totalPrice)

let gstAmount = (gstrate / 100) * totalPrice;
console.log(gstAmount)

let finalAmount = totalPrice + gstAmount;

if (!name) {
        alert("Please fill out your name");
        custName.focus();
             return;
}
if(!phone){
    alert("Please enter phone number");
    phoneNo.focus();
    return;
}
if(!email){
    alert("Please enter email address");
    emailId.focus();
    return;
}
if (!item) {
    alert("Please fill out item name");
    itemName.focus();
         return;
}
if(!quant){
    alert("Please enter quantity");
    quantity.focus();
    return;
}
if(!pricerate){
    alert("Please enter price Rate");
    price.focus();
    return;
}
if(!gstrate){
    alert("Please enter GST Rate");
    gst.focus();
    return;
}

    let result = `
        <h3>Bill Summary</h3>
        <p>Name: ${name}</p>
        <p>Phone No: ${phone}</p>
        <p>Email Id: ${email}</p>
        <p>Quantity: ${quant}</p>
        <p>Price: ${pricerate}</p>
        <p>GST: ${gstrate}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>GST Amount: ${gstAmount}</p>
        <p>Total Bill Amount: ${finalAmount}</p>
    `;
    
    finalAmount = document.getElementById('result')
    finalAmount.innerHTML = result;
    
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const item = name1.value;
//     const quant = quantity.value;
//     const price1 = price.value;
//     const gst1 = gst.value;


//     if (!custName || !emailId || !phoneNo) {
//         alert("Please fill out your name, email, and phone number.");
//         return;
//     }

//     let result = quant * price1;
//     let final = result + (result * (gst1 / 100))

   

//     without1.innerHTML = result;
//     with1.innerHTML = final
// });