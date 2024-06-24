let currentPageSms=sessionStorage.getItem("currentPageSms")?parseInt(sessionStorage.getItem("currentPageSms")):0,currentPageInvoice=sessionStorage.getItem("currentPageInvoice")?parseInt(sessionStorage.getItem("currentPageInvoice")):0;function isMobile(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<=760}function initializePagination(){var e=isMobile()?6:10,t=isMobile()?6:12;$("#smsHistory").pageMe({pagerSelector:"#smsPager",showPrevNext:!0,hidePageNumbers:!1,perPage:e,numbersPerPage:3,currentPage:currentPageSms}),$("#invoiceHistory").pageMe({pagerSelector:"#invoicePager",showPrevNext:!0,hidePageNumbers:!1,perPage:t,numbersPerPage:3,currentPage:currentPageInvoice})}function debounce(e,t){let n;return function(){const r=this,a=arguments;clearTimeout(n),n=setTimeout(()=>e.apply(r,a),t)}}function updateStates(e){const t=document.getElementById("billing-state");t.innerHTML="";const n=document.createElement("option");if(n.textContent="Please select a state/province",n.value="",n.selected=!0,n.disabled=!0,t.appendChild(n),"US"===e){[{abbreviation:"AL",name:"Alabama"},{abbreviation:"AK",name:"Alaska"},{abbreviation:"AZ",name:"Arizona"},{abbreviation:"AR",name:"Arkansas"},{abbreviation:"CA",name:"California"},{abbreviation:"CO",name:"Colorado"},{abbreviation:"CT",name:"Connecticut"},{abbreviation:"DE",name:"Delaware"},{abbreviation:"FL",name:"Florida"},{abbreviation:"GA",name:"Georgia"},{abbreviation:"HI",name:"Hawaii"},{abbreviation:"ID",name:"Idaho"},{abbreviation:"IL",name:"Illinois"},{abbreviation:"IN",name:"Indiana"},{abbreviation:"IA",name:"Iowa"},{abbreviation:"KS",name:"Kansas"},{abbreviation:"KY",name:"Kentucky"},{abbreviation:"LA",name:"Louisiana"},{abbreviation:"ME",name:"Maine"},{abbreviation:"MD",name:"Maryland"},{abbreviation:"MA",name:"Massachusetts"},{abbreviation:"MI",name:"Michigan"},{abbreviation:"MN",name:"Minnesota"},{abbreviation:"MS",name:"Mississippi"},{abbreviation:"MO",name:"Missouri"},{abbreviation:"MT",name:"Montana"},{abbreviation:"NE",name:"Nebraska"},{abbreviation:"NV",name:"Nevada"},{abbreviation:"NH",name:"New Hampshire"},{abbreviation:"NJ",name:"New Jersey"},{abbreviation:"NM",name:"New Mexico"},{abbreviation:"NY",name:"New York"},{abbreviation:"NC",name:"North Carolina"},{abbreviation:"ND",name:"North Dakota"},{abbreviation:"OH",name:"Ohio"},{abbreviation:"OK",name:"Oklahoma"},{abbreviation:"OR",name:"Oregon"},{abbreviation:"PA",name:"Pennsylvania"},{abbreviation:"RI",name:"Rhode Island"},{abbreviation:"SC",name:"South Carolina"},{abbreviation:"SD",name:"South Dakota"},{abbreviation:"TN",name:"Tennessee"},{abbreviation:"TX",name:"Texas"},{abbreviation:"UT",name:"Utah"},{abbreviation:"VT",name:"Vermont"},{abbreviation:"VA",name:"Virginia"},{abbreviation:"WA",name:"Washington"},{abbreviation:"WV",name:"West Virginia"},{abbreviation:"WI",name:"Wisconsin"},{abbreviation:"WY",name:"Wyoming"}].forEach(e=>{const n=document.createElement("option");n.value=e.abbreviation,n.text=e.name,t.appendChild(n)})}else if("CA"===e){[{abbreviation:"AB",name:"Alberta"},{abbreviation:"BC",name:"British Columbia"},{abbreviation:"MB",name:"Manitoba"},{abbreviation:"NB",name:"New Brunswick"},{abbreviation:"NL",name:"Newfoundland and Labrador"},{abbreviation:"NT",name:"Northwest Territories"},{abbreviation:"NS",name:"Nova Scotia"},{abbreviation:"NU",name:"Nunavut"},{abbreviation:"ON",name:"Ontario"},{abbreviation:"PE",name:"Prince Edward Island"},{abbreviation:"QC",name:"Quebec"},{abbreviation:"SK",name:"Saskatchewan"},{abbreviation:"YT",name:"Yukon"}].forEach(e=>{const n=document.createElement("option");n.value=e.abbreviation,n.text=e.name,t.appendChild(n)})}}function validateAssistantDetails(){const e=document.getElementById("assistant-error");e&&(e.style.display="none");let t=!0;const n=[],r=document.getElementById("assistant-name");r&&(r.value.length<2?(n.push("Assistant's Name must be at least 2 characters long."),r.style.borderColor="red",t=!1):r.style.borderColor="");const a=document.getElementById("assistant-origin");a&&(a.value.length<2?(n.push("Assistant's Origin must be at least 2 characters long."),a.style.borderColor="red",t=!1):a.style.borderColor="");return["assistant-gender","assistant-personality","assistant-response-style"].forEach(e=>{const r=document.getElementById(e);if(r){const e=r.closest(".form-group").querySelector(".long-label");0===r.selectedIndex?(n.push(`${e.innerText} is required.`),r.style.borderColor="red",t=!1):r.style.borderColor=""}}),n.length>0&&e?(e.innerHTML=`<div style="color: red; border: 1px solid red; padding: 10px;">\n                                    <p><strong>Please correct the following errors:</strong></p>\n                                    <ul>${n.map(e=>`<li>${e}</li>`).join("")}</ul>\n                                </div>`,e.style.display="block"):e&&(e.style.display="none"),t}function validatePersonalPreferences(){const e=document.getElementById("personal-error");e&&(e.style.display="none");let t=!0;const n=[],r=document.getElementById("user-name");r&&(r.value.length<2?(n.push("Your Preferred Name must be at least 2 characters long."),r.style.borderColor="red",t=!1):r.style.borderColor="");const a=document.getElementById("user-location");a&&(a.value.length<2?(n.push("Your Location must be at least 2 characters long."),a.style.borderColor="red",t=!1):a.style.borderColor="");const i=document.getElementById("user-mobile");if(i){const e=i.value.replace(/[^\d]/g,""),r=document.querySelector('input[name="subscriptionOption"]:checked'),a=document.getElementById("hidden-country"),o=r?r.getAttribute("data-country"):a?a.value:null;let s=!0;if(o){const e=(0,window.libphonenumber.parsePhoneNumberFromString)(i.value,o);s=!!e&&(e.isValid()&&e.country===o)}/^[2-9]\d{2}[2-9](?!11)\d{2}\d{4}$/.test(e)?!s&&o?(n.push("Your mobile number must match the selected subscription's country."),i.style.borderColor="red",t=!1):i.style.borderColor="":(n.push("Your mobile number must be a valid North American number from the selected subscription's country."),i.style.borderColor="red",t=!1)}[document.getElementById("user-language"),document.getElementById("user-title"),document.getElementById("user-measurement")].forEach(e=>{if(e){const r=e.closest(".form-group").querySelector(".long-label");0===e.selectedIndex?(n.push(`Your ${r.innerText} is required.`),e.style.borderColor="red",t=!1):e.style.borderColor=""}});const o=document.getElementById("user-description");return o&&(o.value.length<15?(n.push("Your Bio must be descriptive enough (at least 15 characters)."),o.style.borderColor="red",t=!1):o.style.borderColor=""),n.length>0&&e?(e.innerHTML=`<div style="color: red; border: 1px solid red; padding: 10px;">\n                                    <p><strong>Please correct the following errors:</strong></p>\n                                    <ul>${n.map(e=>`<li>${e}</li>`).join("")}</ul>\n                                </div>`,e.style.display="block"):e&&(e.style.display="none"),t}function validateSubscriptionOptions(){const e=document.getElementById("subscription-error");e&&(e.style.display="none",e.innerHTML="");const t=document.querySelectorAll('input[name="subscriptionOption"]');let n=!1;if(t.length>0)if(n=Array.from(t).some(e=>e.checked))e&&(e.style.display="none");else if(e){const t='<p class="alert alert-danger">You must select a valid subscription.</p>';e.innerHTML=t,e.style.display="block",e.innerHTML='<div style="color: red; border: 1px solid red; padding: 10px;">\n                                            <p><strong>Please correct the following errors:</strong></p>\n                                            <ul>You must select a valid subscription.</ul>\n                                            </div>',e.style.display="block"}return n}function validatePaymentDetails(){const e=document.getElementById("cc-error");e&&(e.style.display="none",e.innerHTML="");let t=!0;const n=[],r=document.getElementById("card-name");r&&r.value.length<2?(n.push("Card Holder Name must be at least 2 characters long."),r.style.borderColor="red",t=!1):r&&(r.style.borderColor="");const a=document.getElementById("billing-address");a&&a.value.length<5?(n.push("Billing Address must be at least 5 characters long."),a.style.borderColor="red",t=!1):a&&(a.style.borderColor="");const i=document.getElementById("billing-country"),o=document.getElementById("billing-state"),s=document.getElementById("billing-zip");let l;if(i&&(0===i.selectedIndex?(n.push("Billing Country is required."),n.push("Billing State/Province is required."),n.push("Billing Postal Code/ZIP is invalid."),i.style.borderColor="red",o.style.borderColor="red",s.style.borderColor="red",t=!1):(i.style.borderColor="",0===o.selectedIndex?(n.push("Billing State/Province is required."),o.style.borderColor="red",t=!1):o.style.borderColor="")),i&&i.selectedIndex>0){const e=i.value;"US"===e?l=/^\d{5}$/:"CA"===e&&(l=/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/),l&&s&&!l.test(s.value.replace(/\s/g,""))?(n.push("Billing Postal Code/ZIP is invalid for the selected country."),s.style.borderColor="red",t=!1):s&&(s.style.borderColor="")}function d(e,r){const a=document.querySelector(e);a.classList.contains("StripeElement--complete")?a.classList.remove("StripeElement--error"):(n.push(r),a.classList.add("StripeElement--error"),t=!1)}return d("#card-number-element","Card number is incomplete."),d("#card-expiry-element","Card expiry date is incomplete."),d("#card-cvc-element","Card CVC is incomplete."),n.length>0&&e?(e.innerHTML=`<div style="color: red; border: 1px solid red; padding: 10px;">\n                                    <p><strong>Please correct the following errors:</strong></p>\n                                    <ul>${n.map(e=>`<li>${e}</li>`).join("")}</ul>\n                                </div>`,e.style.display="block"):e&&(e.style.display="none"),t}function validateStripeDetails(e){var t=elements.getElement("cardNumber"),n=elements.getElement("cardExpiry"),r=elements.getElement("cardCvc");if(t._complete&&n._complete&&r._complete)stripe.createToken(t).then(function(t){if(t.error){const n=document.getElementById("cc-error");n.textContent=t.error.message,n.style.display="block",e(!1)}else{const n=document.getElementById("subscribe-form"),r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name","stripeToken"),r.setAttribute("value",t.token.id),n.appendChild(r),e(!0)}});else{const t=document.getElementById("cc-error");t.textContent="Please fill out all card details correctly.",t.style.display="block",e(!1)}}function processStripeDetails(e){var t=elements.getElement("cardNumber"),n=elements.getElement("cardExpiry"),r=elements.getElement("cardCvc");if(t._complete&&n._complete&&r._complete)stripe.createToken(t).then(function(t){const n=document.getElementById("cc-error");if(t.error){switch(t.error.code){case"invalid_number":n.textContent="The card number is not a valid credit card number.";break;case"incorrect_number":n.textContent="The card number is incorrect.";break;case"invalid_expiry_month":n.textContent="The card's expiration month is invalid.";break;case"invalid_expiry_year":n.textContent="The card's expiration year is invalid.";break;case"invalid_cvc":n.textContent="The card's security code is invalid.";break;case"expired_card":n.textContent="The card has expired.";break;case"incorrect_cvc":n.textContent="The card's security code is incorrect.";break;case"card_declined":n.textContent="The card was declined.";break;case"processing_error":n.textContent="An error occurred while processing the card.";break;default:n.textContent=t.error.message}n.style.display="block",e(!1)}else{const n=document.getElementById("payment-form"),r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name","stripeToken"),r.setAttribute("value",t.token.id),n.appendChild(r),e(!0)}});else{const t=document.getElementById("cc-error");t.textContent="Please fill out all card details correctly.",t.style.display="block",e(!1)}}function togglePaymentEdit(e){e&&e.preventDefault();const t=document.getElementById("card-number-element"),n=document.getElementById("card-expiry-element"),r=document.getElementById("card-cvc-element"),a=document.querySelectorAll("#payment-form .form-control"),i=document.getElementById("card-update");if("Edit"===i.textContent){a.forEach(e=>{"card-number-element"!==e.id&&"card-expiry-element"!==e.id&&"card-cvc-element"!==e.id&&(e.disabled=!1)});const e={base:{color:"#495057",backgroundColor:"#ffffff",cursor:"auto",opacity:"1"}};cardNumber.update({disabled:!1,style:e}),cardExpiry.update({disabled:!1,style:e}),cardCvc.update({disabled:!1,style:e}),t.removeAttribute("disabled"),n.removeAttribute("disabled"),r.removeAttribute("disabled"),i.textContent="Save"}else validatePaymentDetails()&&processStripeDetails(function(e){e&&(document.getElementById("sms-improbability-overlay").style.display="flex",document.getElementById("payment-form").submit())})}function toggleUserPreferencesEdit(e){e&&e.preventDefault();const t=document.querySelectorAll("#personal-form .form-control"),n=document.getElementById("user-update");"Edit"===n.textContent?(t.forEach(e=>{e.disabled=!1}),n.textContent="Save"):validatePersonalPreferences()&&(document.getElementById("sms-improbability-overlay").style.display="flex",document.getElementById("personal-form").submit())}function toggleAssistantPreferencesEdit(e){e&&e.preventDefault();const t=document.querySelectorAll("#assistant-preferences-form .form-control"),n=document.getElementById("assistant-update");"Edit"===n.textContent?(t.forEach(e=>{e.disabled=!1}),n.textContent="Save"):validateAssistantDetails()&&(document.getElementById("sms-improbability-overlay").style.display="flex",document.getElementById("assistant-preferences-form").submit())}$.fn.pageMe=function(e){var t=this,n=$.extend({perPage:7,showPrevNext:!0,numbersPerPage:3,hidePageNumbers:!1},e),r=t,a=n.perPage,i=r.children();if(void 0!==n.childSelector&&(i=r.find(n.childSelector)),void 0!==n.pagerSelector)var o=$(n.pagerSelector);else o=$('<ul class="pagination"></ul>').appendTo(r.parent());o.empty();var s=i.length,l=Math.ceil(s/a);o.data("curr",n.currentPage||0),n.showPrevNext&&$('<li><a href="#" class="prev_link">«</a></li>').appendTo(o);for(var d=0;d<l;d++)$('<li><a href="#" class="page_link">'+(d+1)+"</a></li>").appendTo(o);function c(e){var r=e*a,s=r+a;i.css("display","none").slice(r,s).show(),o.data("curr",e);var d=n.numbersPerPage,c=e+1,u=l;if(o.find(".page_link").hide(),l<=d)o.find(".page_link").slice(0,l).show();else if(c<=Math.ceil(d/2))o.find(".page_link").slice(0,d).show();else if(c>=u-Math.floor(d/2))o.find(".page_link").slice(u-d,u).show();else{var m=c-Math.floor(d/2)-1;u=c+Math.floor(d/2);o.find(".page_link").slice(m,u).show()}o.children().removeClass("active"),o.find(".page_link").removeClass("active"),o.children().eq(e+1).find("a").addClass("active"),0==e?o.find(".prev_link").hide():o.find(".prev_link").show(),e==l-1?o.find(".next_link").hide():o.find(".next_link").show(),"smsHistory"===t.attr("id")?sessionStorage.setItem("currentPageSms",e):"invoiceHistory"===t.attr("id")&&sessionStorage.setItem("currentPageInvoice",e)}n.showPrevNext&&$('<li><a href="#" class="next_link">»</a></li>').appendTo(o),o.find(".page_link:first").addClass("active"),o.find(".prev_link").hide(),l<=n.numbersPerPage&&o.find(".next_link").hide(),i.hide(),i.slice(0,a).show(),o.find("li .page_link").click(function(){return c($(this).html().valueOf()-1),!1}),o.find("li .prev_link").click(function(){return c(parseInt(o.data("curr"))-1),!1}),o.find("li .next_link").click(function(){return c(parseInt(o.data("curr"))+1),!1}),c(n.currentPage||0)},$(document).ready(function(){initializePagination(),$(window).resize(debounce(function(){currentPageSms=$("#smsPager").data("curr")||0,currentPageInvoice=$("#invoicePager").data("curr")||0,initializePagination()},250))}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("improbability-sms-contact-form");e&&e.addEventListener("submit",async function(t){t.preventDefault();var n=document.getElementById("improbability-contact-success-message"),r=document.getElementById("improbability-contact-error-message"),a=new FormData(t.target),i=[];n.style.display="none",r.style.display="none";var o=a.get("contact-method"),s=document.getElementById("user-mobile").value;if("mobile"===o)if(s){const e=s.replace(/[^\d]/g,"");/^[2-9]\d{2}[2-9](?!11)\d{2}\d{4}$/.test(e)||i.push("Your Mobile Number must be a valid North American number.")}else i.push("Mobile number is required when contact method is Mobile.");if(i.length>0)return r.innerHTML=`<div style="color: red; border: 1px solid red; padding: 10px;">\n                                        <p><strong>Please correct the following errors:</strong></p>\n                                        <ul>${i.map(e=>`<li>${e}</li>`).join("")}</ul>\n                                    </div>`,void(r.style.display="block");try{let i=await fetch(t.target.action,{method:e.method,body:a,headers:{Accept:"application/json"}});if(i.ok)n.innerHTML='<div style="color: green; border: 1px solid green; padding: 10px;">\n                                            <p>Your message has been sent successfully!</p>\n                                        </div>',n.style.display="block",e.reset();else{let e=await i.json();e.errors?r.innerHTML=`<div style="color: red; border: 1px solid red; padding: 10px;">\n                                                <p><strong>Please correct the following errors:</strong></p>\n                                                <ul>${e.errors.map(e=>`<li>${e.message}</li>`).join("")}</ul>\n                                            </div>`:r.innerHTML='<div style="color: red; border: 1px solid red; padding: 10px;">\n                                                <p>Oops! There was a problem submitting your form</p>\n                                            </div>',r.style.display="block"}}catch(e){r.innerHTML='<div style="color: red; border: 1px solid red; padding: 10px;">\n                                        <p>Oops! There was a problem submitting your form</p>\n                                    </div>',r.style.display="block"}})}),document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.querySelector(".faq-page-title");e&&(window.innerWidth>=768?e.textContent="Frequently Asked Questions":e.textContent="FAQ")}e(),document.querySelector(".faq-page-title")&&window.addEventListener("resize",e)}),document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.querySelector(".brand-text");e&&(window.innerWidth>1200?e.textContent="Improbability Labs - SMS AI Assistant":e.textContent="SMS AI Assistant")}e(),document.querySelector(".brand-text")&&window.addEventListener("resize",e)}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("billing-country"),t=document.getElementById("billing-zip");e&&t&&(e.addEventListener("change",function(){t.value=""}),t.addEventListener("input",function(t){const n=e.value;let r=t.target.value.toUpperCase(),a="";"US"===n?a=r.replace(/[^0-9]/g,"").substring(0,5):"CA"===n&&(r=r.replace(/[^A-Z0-9]/g,""),a=/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(r)?r.substring(0,3)+" "+r.substring(3,6):r.split("").filter((e,t)=>t<6&&(t%2==0&&/[A-Z]/.test(e)||t%2!=0&&/\d/.test(e))).join("")),t.target.value=a}));const n=document.getElementById("user-mobile");n&&(n.addEventListener("input",function(){let e=this.value.replace(/\D/g,"");e.length>10&&(e=e.slice(0,10)),e.length>=1&&("0"===e.slice(0,1)||"1"===e.slice(0,1))&&(e=e.slice(1)),10===e.length&&(e="("+e.slice(0,3)+") "+e.slice(3,6)+"-"+e.slice(6)),this.value=e}),n.dispatchEvent(new Event("input")));const r=document.getElementById("card-name");r&&r.addEventListener("input",function(e){var t=e.target.value.replace(/[^A-Za-z ]/g,"");e.target.value=t})}),document.addEventListener("DOMContentLoaded",function(){function e(e){const t=document.querySelector(".purchase-details-price"),n=document.querySelector(".purchase-details-price-title");if(e.checked){t.style.display="block",n.style.display="block",document.querySelector(".subscription-name").textContent=e.dataset.product;let r=parseFloat(e.dataset.cost);document.querySelector(".plan-final").textContent=`${r.toFixed(2)} ${e.dataset.currency} per ${e.dataset.interval}`}else t.style.display="none"}document.querySelectorAll('input[name="subscriptionOption"]').forEach(t=>{t.addEventListener("change",function(){e(this)}),t.checked&&e(t)})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("submit-sms-subscribe");e&&e.addEventListener("click",function(e){e.preventDefault();const t=validateAssistantDetails(),n=validatePersonalPreferences(),r=validateSubscriptionOptions(),a=validatePaymentDetails();t&&n&&r&&a&&validateStripeDetails(function(e){e&&(document.getElementById("sms-improbability-overlay").style.display="flex",document.getElementById("subscribe-form").submit())})})});