<i18n>
  {
  "en": {
  "language": "Language",
  "login": "Login",
  "register": "Register",
  "checkOrder" : "Check Order",
  "myAccount": "My Account",
  "logout": "Log Out",
  "product": "Product",
  "shopByRelease": "Shop By Release",
  "newProduct": "New Products",
  "category": "Category",
  "specialPrice": "Special Price",
  "aboutUs": "ABOUT US",
  "customerService": "CUSTOMER SERVICE",
  "partnership": "PARTNERSHIP",
  "needHelp": "NEED HELP?",
  "getInTouch": "GET IN TOUCH",
  "weAccept": "WE ACCEPT",
  "operatedBy": "This Web Operated By PT. Bina Fajar Estetika",
  "providedBy": "Provided By Bippo Indonesia",
  "cart": "Cart",
  "signup":"Register"
  },
  "id": {
  "language": "Bahasa",
  "login": "Masuk",
  "register": "Daftar",
  "checkOrder" : "Cek Pesanan",
  "myAccount": "Akun Saya",
  "logout": "Keluar",
  "product": "Produk",
  "shopByRelease": "Release",
  "newProduct": "Produk Baru",
  "category": "Kategori",
  "specialPrice": "Harga Spesial",
  "aboutUs": "TENTANG KAMI",
  "customerService": "PELAYANAN PELANGGAN",
  "partnership": "KEMITRAAN",
  "needHelp": "BUTUH BANTUAN?",
  "getInTouch": "TEMUKAN KAMI DI",
  "weAccept": "KAMI MENERIMA",
  "operatedBy": "Web ini dioperasikan oleh PT. Bina Fajar Estetika",
  "providedBy": "Disediakan oleh Bippo Indonesia",
  "cart": "Keranjang Belanja",
  "signup":"Daftar"
  }
  }
</i18n>

<template>

  <div class="">
    <Header />
    <FrontBanner />
    <!-- <NewsletterModal/> -->
    <section class="content-wrapp">
      <nuxt class="slider" />
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  import FrontBanner from '../components/FrontBanner'
  import Footer from '../components/layout/Footer'
  import Header from '../components/layout/Header'

  export default {
    components: {
      FrontBanner,
      Header,
      Footer
    },
    data() {
      return {
        searchText: 'abc',
        productParent: '',
        releaseTab: '',
        newTab: '',
        allProductTab: '',
        specialPriceTab: '',
        showProdNav: false,
        showMenu: 'none',
        showProdRelease: false,
        showProdCategory: false,
        styleImported: 'poeva',
        productCode: ''
      }
    },
    computed: {
      getArrowReleaseStyle: function () {
        return `width: ${this.releaseTab.offsetWidth}px; height: ${this.releaseTab.offsetHeight}px; left:${this.releaseTab.offsetLeft}px;`
      },
      getArrowNewStyle: function () {
        return `width: ${this.newTab.offsetWidth}px; height: ${this.newTab.offsetHeight}px; left:${this.newTab.offsetLeft}px;`
      },
      getArrowAllStyle: function () {
        return `width: ${this.allProductTab.offsetWidth}px; height: ${this.allProductTab.offsetHeight}px; left:${this.allProductTab.offsetLeft}px;`
      },
      getSpecialPriceStyle: function () {
        return `width: ${this.specialPriceTab.offsetWidth}px; height: ${this.specialPriceTab.offsetHeight}px; left:${this.specialPriceTab.offsetLeft}px;`
      },
      getArrowProductStyle: function () {
        return `width: ${this.productParent.offsetWidth}px; height: ${this.productParent.offsetHeight}px; left:${this.productParent.offsetLeft}px; top:1px`
      },
      language() {
        return this.$t("language");
      },
      currentLocale() {
        return this.$i18n.locale
      },
      carts() {
        return this.$store.state.cart.carts;
      }
    },

    methods: {
      getFavicon() {

          return require(`../static/img/favicon.png`);
        
      },

    },
    //middleware: ['language']
    created() {
      // console.info("hallo");
    },
    head() {
      return {
        link: [{
          rel: 'icon',
          type: 'image/x-icon',
          href: this.getFavicon()
        }]
      }
    },
    mounted: function () {
      const menu = document.querySelectorAll(".navbar-menu");
      const links = document.querySelectorAll(".navbar-item");
      const dropdown = document.querySelector('.navbar-dropdown');
      this.productParent = document.getElementById('productParent');

      links.forEach(link => {
        link.addEventListener("click", function () {
          // console.log("dropdown click");
          // $(".navbar-item").toggleClass('is-active').siblings().removeClass("is-active");
          // menu.classList.remove('is-active');
        });
      });
    }
  }

</script>
<style lang="scss">
  @import '../assets/scss/variable.scss';
</style>
