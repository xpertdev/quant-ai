var elements=stripe.elements(),style={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},cardNumber=elements.create("cardNumber",{style:style}),cardExpiry=elements.create("cardExpiry",{style:style}),cardCvc=elements.create("cardCvc",{style:style});cardNumber.mount("#card-number-element"),cardExpiry.mount("#card-expiry-element"),cardCvc.mount("#card-cvc-element");