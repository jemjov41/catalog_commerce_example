<i18n>
  {
  "en": {
  "language": "Language",
  "login": "Login",
  "register": "Register",
  "quickOrder": "Quick Order",
  "checkOrder" : "Check Order",
  "myAccount": "My Account",
  "logout": "Log Out",
  "product": "Product",
  "shopByRelease": "Shop By Release",
  "newProduct": "New Products",
  "category": "Category",
  "specialPrice": "Special Price",
  "customerService": "CUSTOMER SERVICE",
  "partnership": "PARTNERSHIP",
  "needHelp": "NEED HELP?",
  "getInTouch": "GET IN TOUCH",
  "weAccept": "WE ACCEPT",
  "operatedBy": "This Web Operated By PT. Bina Fajar Estetika",
  "providedBy": "Provided By Bippo Indonesia",
  "cart": "Cart",
  "signup":"Register",
  "expireCart": "expired",
  "before" : "a go"
  },
  "id": {
  "language": "Bahasa",
  "login": "Masuk",
  "register": "Daftar",
  "quickOrder": "Order Cepat",
  "checkOrder" : "Cek Pesanan",
  "myAccount": "Akun Saya",
  "logout": "Keluar",
  "product": "Produk",
  "shopByRelease": "Release",
  "newProduct": "Produk Baru",
  "category": "Kategori",
  "specialPrice": "Harga Spesial",
  "customerService": "PELAYANAN PELANGGAN",
  "partnership": "KEMITRAAN",
  "needHelp": "BUTUH BANTUAN?",
  "getInTouch": "TEMUKAN KAMI DI",
  "weAccept": "KAMI MENERIMA",
  "operatedBy": "Web ini dioperasikan oleh PT. Bina Fajar Estetika",
  "providedBy": "Disediakan oleh Bippo Indonesia",
  "cart": "Keranjang Belanja",
  "signup":"Daftar",
  "expireCart": "expired",
  "before": "yang lalu"
  }
  }
</i18n>
<template>
  <div>
    <nav
      class="navbar nav-dekstop"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <client-only>
            <nuxt-link
              class="navbar-item"
              v-bind:to="'/' + currentLocale + '/'"
            >
              <img
                :src="logoImage"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </nuxt-link>
          </client-only>
          <div
            role="button"
            class="navbar-burger burger"
            v-on:click="toggleMenu()"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link
              class="navbar-item"
              v-bind:to="'/' + currentLocale + '/'"
            >
              <span class="m-r-5 iconMobilemenu">
                <font-awesome-icon :icon="['fas', 'home']" /></span
              >Home</nuxt-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  data() {
    return {
      imageLogo: "",
      productParent: "",
      releaseTab: "",
      newTab: "",
      allProductTab: "",
      specialPriceTab: "",
      showProdNav: false,
      showMenu: "none",
      showProdRelease: false,
      showProdDaily: false,
      showProdCategory: false,
      showUserSection: false,
      styleImported: "poeva",
      findProduct: "",
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    logoImage() {

        return require(`../../static/img/white.jpg`);
      
    },
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase();
    },
  },
  methods: {

  },
  mounted: function () {},
  watch: {},
};
</script>