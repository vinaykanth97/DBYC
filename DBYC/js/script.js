let galleryTile = document.querySelectorAll(".outer");

// Slider
var swiper = new Swiper(".infos .swiper-container", {
  flipEffect: {
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});

// Autoplay
var autoSwiper = new Swiper(".right-date .swiper-container", {
  direction: "horizontal",
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  freeMode: false,
  speed: 4000,
  autoHeight: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// Tabs
let activeTabPos =
  document.querySelector(".overall-tabs li.active").offsetTop + 18;
document.querySelector(".arrow").style.top = `${activeTabPos}px`;
let tabs = document.querySelectorAll(".tabs-sec li");
let tabContent = document.querySelectorAll(".tab-content");
let btn = document.querySelector(".btn");
function selectItem(e, index) {
  RemoveActive();
  let getData = e.target.getAttribute("data-id");
  let currElement = document.querySelector(
    `.overall-tabs li[data-id="${getData}"]`
  );
  currElement.classList.add("active");
  let activeTabPos =
    document.querySelector(".overall-tabs li.active").offsetTop + 18;
  document.querySelector(".arrow").style.top = `${activeTabPos}px`;
  document
    .querySelector(`.tab-content[data-id="${getData}"]`)
    .classList.add("active");
  btn.innerText = getData;
}

function RemoveActive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabContent.forEach((content) => {
    content.classList.remove("active");
  });
}
tabs.forEach((tab, index) =>
  tab.addEventListener("click", (e) => {
    selectItem(e, index);
  })
);

// Gallery Passage

galleryTile.forEach((tile) => {
  tile.addEventListener("click", function (e) {
    let getData = this.getAttribute("data-id");
    let outerGallery = document.querySelector(`.outer[data-id="${getData}"]`);
    outerGallery.parentElement.style.display = "none";
    document.querySelector(
      `.inner-gallery .inner-pics[data-id="${getData}"]`
    ).style.display = "block";
  });
});
let backBtn = document.querySelectorAll(".back");
backBtn.forEach((back, index) => {
  back.addEventListener("click", function (e) {
    let getData = this.getAttribute("data-id");
    let outerGallery = document.querySelector(`.outer[data-id="${getData}"]`);
    outerGallery.parentElement.style.display = "flex";
    outerGallery.parentElement.classList.add("show-anim");
    document.querySelector(
      `.inner-gallery .inner-pics[data-id="${getData}"]`
    ).style.display = "none";
  });
});

// Gallery Popup
let popup = document.querySelector(".popup");
let innerPics = document.querySelectorAll(".inner-pics .sec-gallery img");
innerPics.forEach((pics) => {
  pics.addEventListener("click", function (e) {
    $(".overlay").fadeIn();
    $(".popup-container").fadeIn();
    popup.innerHTML = `<img src =${this.src}> `;
    document.body.style.overflow = "hidden";
  });
});

$(".close").click(function () {
  $(".popup-container").fadeOut();
  $(".overlay").fadeOut();
  document.body.style.overflow = "";
});
