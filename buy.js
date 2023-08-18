const addData = [

  {
    name: "MUNNA BHAIYA",

    mobile: "9424410124",
    address: "front of rana house VTP road vivekanand colony MP, India",
    pincode: "473551",
    city: "shivpuri",
    value: "two",
    state: "up",
    country: "india",
  },
  {
    name: "GUDDU PANDIT",
    mobile: "722995792",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel tempore ad voluptate? ",
    pincode: "123456",
    value: "three",
    city: "mirzapur",
    state: "up",
    country: "india",
  },
  {
    name: "BABLU PANDIT",
    mobile: "9873442921",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel tempore ad voluptate? ",
    pincode: "123456",
    city: "mirzapur",
    state: "up",
    value: "three",
    country: "india",
  },
];

function getAdd() {
  let addresss = ``;
  addData.forEach(function (adre) {
    addresss += `
        <div class="feed-div">
    

        <input class="input" name="adress" type="radio" value="${adre.value}" />
        <div class="left">
          <label for="${adre.value}"
            >${adre.name}, ${adre.address}, ${adre.city}, ${adre.state} ${adre.country}, ${adre.pincode}, Phone number: ${adre.mobile}
            </label>

        </div>
      </div>
      `;
  });
  return addresss;
}

function render() {
  document.getElementById("feed").innerHTML = getAdd();
}
render();

let addNewAdd = document.getElementById("add");

addNewAdd.addEventListener("click", function (e) {
  let show = gsap.timeline();
  e.preventDefault();
  show.to(".new", {
    opacity: 1,
    duration: 0.5,
    y: "-30px",
    zIndex: 99,
  });

  backbtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    show.reverse();
  });
  savebtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    show.reverse();
  });
});

let backbtn = document.getElementById("back");

backbtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  show.reverse();
});
let savebtn = document.getElementById("save");
savebtn.addEventListener("click", function (e) {
  getNewAdress();
});

function getNewAdress() {
  let countryin = document.getElementById("country");
  let namein = document.getElementById("names");
  let mobilein = document.getElementById("mobile");
  let pincodein = document.getElementById("pincode");
  let addressbarin = document.getElementById("addressbar");
  let cityin = document.getElementById("city");
  let statein = document.getElementById("state");

  addData.unshift({
    country: countryin.value,
    name: namein.value,
    mobile: mobilein.value,
    pincode: pincodein.value,
    address: addressbarin.value,
    value: "four",
    city: cityin.value,
    state: statein.value,
  });
  render();
  countryin.value = "";
  namein.value = "";
  mobilein.value = "";
  pincodein.value = "";
  addressbarin.value = "";
  cityin.value = "";
  statein.value = "";
}

let useaddbtn = document.getElementById("useaddbtn");
let addiv = document.getElementById("addiv");

useaddbtn.addEventListener("click", function () {
  useaddbtn.style.zIndex = -5;
  usepayment.style.zIndex = 9;
  gsap.to("#addiv", {
    height:"70px",
    duration:0.6
  })

});

const paymentdata = [
  {
    value: "first method",
    upi1: "phonepe",
    upi2: "google pay",
    upi3: "paytm",
    upi4: "amazon pay",
  },
];

let usepayment = document.getElementById("usepayment");

usepayment.addEventListener("click", function () {
  usepayment.textContent='ORDER'
  gsap.to("#paye", {
    height:"68px",
    duration:0.6
  })
  usepayment.addEventListener("click", function(){
    gsap.to("#feed3",{
      height:"210px",
      duration:0.6
    })
    usepayment.textContent='THANKYOU FOR BUYING'
  })
});

function getpayment() {
  let payment = ``;
  paymentdata.forEach(function (pay) {
    payment += `
        <div class="feed2-div">
        <input class="input" name="payment" type="radio" value="${pay.value}" />
        <div class="left">
          <label for="${pay.value}"
            >${pay.upi1}
        </div>
        <input class="input" name="payment" type="radio" value="${pay.value}" />
        <div class="left">
          <label for="${pay.value}"
            >${pay.upi2}
        </div>
        <input class="input" name="payment" type="radio" value="${pay.value}" />
        <div class="left">
          <label for="${pay.value}"
            >${pay.upi3}
        </div>
        <input class="input" name="payment" type="radio" value="${pay.value}" />
        <div class="left">
          <label for="${pay.value}"
            >${pay.upi4}
        </div>
      </div>
      `;
  });
  return payment;
}

function render2() {
  document.getElementById("feed2").innerHTML = getpayment();
}
render2();
