  //tab menu
  window.addEventListener("load", function() {
    var tabListItems = document.querySelectorAll(".tab_list li");
    var tabContents = document.querySelectorAll(".tab_cont");
    var idx = 0;
    const loginBtn = document.querySelector(".login-field__action > p");
    loginBtn.addEventListener("click", function() {
      window.location.href = "index2.html";
    });

  tabListItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      idx = index;
      tabListItems.forEach(function (item) {
        item.classList.remove("active");
      });
      tabListItems[idx].classList.add("active");

      if (tabListItems[0].classList.contains("active")) {
        tabContents.forEach(function (item) {
          item.classList.remove("account2");
          item.classList.add("account1");
        });
      } else {
        tabContents.forEach(function (item) {
          item.classList.remove("account1");
          item.classList.add("account2");
        });
      }
    });
  });
})