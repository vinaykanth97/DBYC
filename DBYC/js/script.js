// Slider
var swiper = new Swiper(".swiper-container", {
  flipEffect: {
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Tabs
let activeTabPos =
  document.querySelector(".overall-tabs li.active").offsetTop + 18;
document.querySelector(".arrow").style.top = `${activeTabPos}px`;
let tabs = document.querySelectorAll(".tabs-sec li");
let tabContent = document.querySelectorAll(".tab-content");
function selectItem(e, index) {
  RemoveActive();
  let getData = e.target.getAttribute("data-id");
  document
    .querySelector(`.overall-tabs li[data-id="${getData}"]`)
    .classList.add("active");
  let activeTabPos =
    document.querySelector(".overall-tabs li.active").offsetTop + 18;
  document.querySelector(".arrow").style.top = `${activeTabPos}px`;
  document
    .querySelector(`.tab-content[data-id="${getData}"]`)
    .classList.add("active");
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
