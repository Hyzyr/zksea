var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 30) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

// Tab
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = document.querySelector(currentBtn.getAttribute("data-tab"));
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector(".dropdown__content");
  const dropdownButton = dropdown.querySelector(".dropdown__button");
  dropdownGet(dropdown);
  dropdown.onclick = () => {
    if (dropdownContent.classList.contains("active")) {
      dropdownContent.classList.remove("active");
      dropdownButton.classList.remove("active");
    } else {
      dropdownContent.classList.add("active");
      dropdownButton.classList.add("active");
    }
  };
});


const signIn = document.querySelector(".signIn");
const signInClose = document.querySelector(".signIn__inner-header-close");
signInClose.onclick = () => {
  signIn.classList.remove("active");
};

window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};
