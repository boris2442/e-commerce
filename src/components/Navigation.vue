<template>
  <nav>
    <div class="nav-container">
      <div id="logo">
        <RouterLink to="/">
          <img src="/assets/img/wish-logo-800.png" alt="logo" />
        </RouterLink>
      </div>

      <ul id="icons">
        <li>
          <RouterLink to="/user-settings">
            <i class="fas fa-user"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/wish-list">
            <i class="fas fa-heart"></i>
            <span id="nav-not"></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/shopping-cart">
            <i class="fas fa-shopping-cart"></i>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
};
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName("input");
  let notif = document.getElementById("nav-not");

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  };

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()) {
      // console.log('true');
      notif.style.visibility = "visible";
      notif.style.opacity = "1";
    } else {
      // console.log('false');
      notif.style.visibility = "hidden";
      notif.style.opacity = "0";
    }
  };

  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener("click", setNotif);
});
</script>
<style></style>
