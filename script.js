gsap.registerPlugin(ScrollTrigger);
gsap.from(".logo", {
  opacity: 0,
  duration: 4,
});
gsap.to("#head", {
  opacity: 1,
  y: "-200px",
  duration: 3,
  force3D: true,
});
gsap.to("#head1", {
  y: "200px",
  duration: 3,
  force3D: true,
});
gsap.to("#head2", {
  opacity: 1,
  y: "200px",
  duration: 3,
  force3D: true,
});
gsap.to("#headphone2", {
  top: "-15%",
  duration: 2,
  force3D: true,
});
let tl = gsap.timeline();

tl.fromTo(
  "#headphone",
  {
    top: "1%",
  },
  {
    x: "400px",
    y: "680px",
    rotate: "25",
    scrollTrigger: {
      trigger: "#detail",
      scroller: "body",
      start: "top 80%",
      // markers:true,
      end: "top 40%",
      scrub: 2,
    },
  }
);

tl.fromTo(
  "#headphone",
  {
    x: "400px",
    y: "680px",
    rotate: "25",
  },

  {
    scrollTrigger: {
      trigger: ".ss",
      scroller: "body",
      start: "top 80%",
      // markers:true,
      end: "top 40%",
      scrub: 2,
    },
    x: "-400px",
    y: "1370px",
    rotate: "-30",
    immediateRender: false,
  }
);

gsap.to("#head1", {
  top: "40%",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
  },
  duration: 4,
});
gsap.to("#head2", {
  top: "20%",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
  },
  duration: 4,
});
gsap.to("#head2, #head1", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#left-head",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from("#left-head, #detail, #btn", {
  x: "-680px",
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#left-head",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  duration: 3,
});

let looptl = gsap.timeline({
  scrollTrigger: {
    trigger: "#btn",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

looptl.fromTo(
  "#loop",
  { opacity: 0, x: "1000px", duration: 3 },
  { opacity: 1, x: "0px", duration: 3, delay: 2 }
);

gsap.to(".img", {
  scrollTrigger: {
    trigger: ".img",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
  height: "200px",
  width: "200px",
  opacity: 1,
  delay: 1,
  stagger: 0.3,
  duration: 7,
  force3D: true,
});

gsap.from(".label, .ss, .butt, .r-animate ", {
  y: "50px",
  opacity: 0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".label",
    scroller: "body",
    // markers:true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
  duration: 5,
});

//star rating_----------------
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");

one.addEventListener("click", function () {
  one.classList.toggle("fa-solid");
});
two.addEventListener("click", function () {
  one.classList.toggle("fa-solid");
  two.classList.toggle("fa-solid");
});
three.addEventListener("click", function () {
  one.classList.toggle("fa-solid");
  two.classList.toggle("fa-solid");
  three.classList.toggle("fa-solid");
});
four.addEventListener("click", function () {
  one.classList.toggle("fa-solid");
  two.classList.toggle("fa-solid");
  three.classList.toggle("fa-solid");
  four.classList.toggle("fa-solid");
});
five.addEventListener("click", function () {
  one.classList.toggle("fa-solid");
  two.classList.toggle("fa-solid");
  three.classList.toggle("fa-solid");
  four.classList.toggle("fa-solid");
  five.classList.toggle("fa-solid");
});

var csr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x - 100 + "px";
  csr.style.top = dets.y - 100 + "px";
  gsap.to("#cursor", {
    duration: 10,
  });
});

let plus = document.getElementById("plus");
let num = document.getElementById("num");
num.textContent = "0";

let min = document.getElementById("min");

plus.addEventListener("click", function () {
  num.textContent++;
  added.textContent = "ADD TO CART";
});
min.addEventListener("click", function () {
  num.textContent--;
});

let cart = document.getElementById("cart");
let addToCart = document.getElementById("two-btn");
let added = document.getElementById("added");
added.textContent = "ADD TO CART";

addToCart.addEventListener("click", function () {
  added.textContent = "Proceed to payment";
  cart.style.opacity = 1;
  num.textContent = 0;
});

let reviewDiv = document.getElementById("reviews");
let reviewBtn = document.getElementById("review-btn");
reviewBtn.addEventListener("click", function (e) {
  let reviewtl = gsap.timeline();
  e.preventDefault();
  reviewtl.to("#reviews", {
    opacity: 1,
    duration: 0.5,
    y: "-30px",
    zIndex: 99,
  });
  let closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    reviewtl.reverse();
  });
});
let closeBtn = document.getElementById("close");
const submitBtn = document.getElementById("submit-btn");
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  reviewtl.reverse();
});

// reviews data-----------------------

const reviewsData = [
  {
    profilePic:
      "https://assets.entrepreneur.com/content/3x2/2000/20180704142151-20180511063849-flipkart-logo-detail-icon.jpeg",
    handle: "@flipkart",
    review:
      "merse kya dushmani hai bhai meri wesite pr bhi bech lete gareed ka ghar chata hua dekha nhai ja raha naa tumko",
  },
  {
    profilePic:
      "https://st1.bollywoodlife.com/wp-content/uploads/2023/06/puneet-1.png?impolicy=Medium_Widthonly&w=1280&h=900",
    handle: "@Puneet Superstar",
    review:
      "bekaarrrr hai bhaiyaaaa mera toh toot gyaaaaa......aaj kal ke naale chapri berozgar ladke aaj kal essi animated websites baane lagte hai ke ladkioyo ko lage ke ye saal koi kothi bangle wale ladke hai dhanywaad  ",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    handle: "@Hacker bhaiya",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, perferendis! Ducimus harum qui consequuntur rerum aspernatur omnis mollitia, distinctio amet dolorum aperiam ratione aut architecto eius vero! Itaque, quas ab!",
  },
];

function handleBtnClick() {
  let inputvalue = document.getElementById("textarea");

  if (inputvalue.value) {
    reviewsData.unshift({
      profilePic:
        "https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?pid=ImgDet&rs=1",
      handle: "@aryannn.07",
      review: inputvalue.value,
    });
  }
  render();
  inputvalue.value = "";
}

submitBtn.addEventListener("click", function () {
  handleBtnClick();
  submitBtn.classList.add("submitafter");
  submitBtn.classList.remove("submit-btn");
  submitBtn.textContent = "Submitted";
});

function getFeed() {
  let feed = ``;
  reviewsData.forEach(function (review) {
    feed += `
    <div class="feed-reviews">
     <div class="user">
       <img class="profile-pic" src="${review.profilePic}" alt="">
       <p class="username">${review.handle}</p>
     </div> 
      <div class="content">
        <p>${review.review}</p>
      </div>
  </div>
    `;
  });

  return feed;
}

function render() {
  document.getElementById("feed").innerHTML = getFeed();
}
render();
