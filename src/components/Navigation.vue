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
</script>
<style >
    
</style>