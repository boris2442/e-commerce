<script scoped>
import $cookies from "vue-cookies";
// import { ref } from "vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
  },
  // data: () => {
  data() {
    return {
      products: products,
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    filteredList() {
      return this.products.filter((product) =>
        product.description.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    },
  },
  methods: {
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get("like"));
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          $cookies.set("like", JSON.stringify(this.liked), "1d");
        }, 300);
      });
    },
    addToCart(product) {
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
    },
  },
  // mounted: () => {
  //   this.getLikeCookie();
  // },
  mounted() {
    this.getLikeCookie();
  },
};

const products = [
  {
    id: 1,
    description: "Quarz Luxe",
    price: 12,
    img: "assets/img/quarz-luxe.JPG",
  },
  {
    id: 2,
    description: "Curren Business",
    price: 20,
    img: "assets/img/curren-business.JPG",
  },
  {
    id: 3,
    description: "Curren Sport",
    price: 5,
    img: "assets/img/curren-sport.JPG",
  },
  {
    id: 4,
    description: "Jaragar Racing",
    price: 8,
    img: "assets/img/jaragar-racing.JPG",
  },
  {
    id: 5,
    description: "Liges Hommes",
    price: 3,
    img: "assets/img/liges-hommes.JPG",
  },
  {
    id: 6,
    description: "Maserati Mechanical",
    price: 65,
    img: "assets/img/maserati-mechanical.JPG",
  },
  {
    id: 7,
    description: "Montre Mecanique",
    price: 25,
    img: "assets/img/montre-mecanique.JPG",
  },
  {
    id: 8,
    description: "Brand Designer",
    price: 28,
    img: "assets/img/brand-designer.JPG",
  },
  {
    id: 9,
    description: "Relogio Masculino",
    price: 4,
    img: "assets/img/relogio-masculino.JPG",
  },
  {
    id: 10,
    description: "Tissot Multifunction",
    price: 29,
    img: "assets/img/tissot-multifunction.JPG",
  },
  {
    id: 11,
    description: "Hip Hop Gold",
    price: 87,
    img: "assets/img/hiphop-gold.JPG",
  },
  {
    id: 12,
    description: "Mesh Genova",
    price: 6,
    img: "assets/img/mesh-genova.JPG",
  },
];
</script>
<template>
  <div class="home-container">
    <Navigation />
    <h1>Articles</h1>
    <!-- search display -->

    <!-- <div class="search-container"> -->
    <input
      type="search"
      v-model="searchKey"
      placeholder="Rechercher..."
      autocomplete="off"
      id="search"
    />
    <span v-if="searchKey && filteredList.length >= 1">
      {{ filteredList.length }} résultat pour "{{ searchKey }}"
    </span>
    <span v-else-if="searchKey && filteredList.length === 0">
      Aucun résultat pour "{{ searchKey }}"
    </span>
    <!-- <i class="fas fa-search"></i> -->
    <!-- </div> -->
    <!-- card-display -->
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" class="card" :key="product.id">
          <div class="img-container">
            <img :src="product.img" :alt="product.description" />
          </div>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }} €</span>
          </div>
          <div class="card-icons">
            <div class="like-container">
              <input
                type="checkbox"
                name="checkbox"
                :value="product.id"
                v-bind:id="product.id"
                v-model="liked"
                @click="setLikeCookie()"
              />
              <label v-bind:for="product.id">
                <i class="fas fa-heart"></i>
              </label>
            </div>
            <div class="add-to-cart">
              <button @click="addToCart(product)">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- no products found -->
        <div v-if="filteredList.length === 0" class="no-products">
          <h3>Desole</h3>
          <p>Aucun produit trouvé</p>
        </div>
      </div>
      <!-- cart display -->
      <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
        <h2>Panier</h2>
        <div class="item-group">
          <div v-for="product in cart" class="item" :key="product.id">
            <div class="img-container">
              <img v-bind:src="product.img" :alt="product.description" />
            </div>
            <div class="item-description">
              <h4>{{ product.description }}</h4>
              <p>{{ product.price }} €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
