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
  "operatedBy": "This Web Operated By ",
  "providedBy": "Provided By ",
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
  "operatedBy": "Web ini dioperasikan oleh ",
  "providedBy": "Disediakan oleh ",
  "cart": "Keranjang Belanja",
  "signup":"Daftar"
  }
  }
</i18n>
<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="columns">
              <div class="column">
                <div class="columns is-mobile">
                  <div class="column">
                    <div class="footer-menu">
                      <p>{{$t('aboutUs')}}</p>
                      <ul class="menu-list">
                        <li v-for="cs in aboutPages" :key="cs.name">
                          <a :href="getHref(cs.slug)" v-if="getHref(cs.slug)">{{cs.name}}</a>
                          <nuxt-link v-else v-bind:to="'/' + currentLocale + '/' + cs.slug">{{cs.name}}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="column">
                    <div class="footer-menu">
                      <p>{{$t('customerService')}}</p>
                      <ul class="menu-list">
                        <li v-for="cs in csPages" :key="cs.name">
                          <a :href="getHref(cs.slug)" v-if="getHref(cs.slug)">{{cs.name}}</a>
                          <nuxt-link v-else v-bind:to="'/' + currentLocale + '/' + cs.slug">{{cs.name}}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div class="column">
                <div class="columns is-mobile">
                  <div class="column">
                    <div class="footer-menu">
                      <p>{{$t('partnership')}}</p>
                      <ul class="menu-list">
                        <li v-for="cs in partnerPages" :key="cs.name">
                          <a :href="getHref(cs.slug)" v-if="getHref(cs.slug)">{{cs.name}}</a>
                          <nuxt-link v-else v-bind:to="'/' + currentLocale + '/' + cs.slug">{{cs.name}}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="column">
                    <div class="footer-menu">
                      <p>{{$t('needHelp')}}</p>
                      <ul class="menu-list">
                        <li v-for="(contact, index) in contactInfo" :key="index">
                          <a href="#" v-if="contact.type == 'home'">
                            <font-awesome-icon :icon="['fas', 'home']" class="m-r-5" />
                            {{contact.value}}
                          </a>
                          <a href="#" v-if="contact.type == 'phone'">
                            <font-awesome-icon :icon="['fas', 'phone']" class="m-r-5" />
                            {{contact.value}}
                          </a>
                          <a href="#" v-if="contact.type == 'mail'">
                            <font-awesome-icon :icon="['fas', 'envelope']" class="m-r-5" />
                            {{contact.value}}
                          </a>
                          <a href="#" v-if="contact.type == 'wa'">
                            <font-awesome-icon :icon="['fab', 'whatsapp']" class="m-r-5" />
                            {{contact.value}}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>

        </div>

        <div class="is-clearfix m-t-30"></div>
        <div class="columns ">
          <div class="column is-three-quarters-widescreen">
            <div class="columns is-mobile">
              <div class="column">
                {{$t('operatedBy')}} {{operatedBy}}
                <a class="has-text-white" href="#">example</a>
              </div>
              <div class="column">
                {{$t('providedBy')}}
                <a class="has-text-white" href="#">example</a>

              </div>
            </div>
          </div>
          <div class="column">
            <client-only>
              <div class="buttons has-addons">
                <nuxt-link :to="switchLocalePath('en')"><button
                    :class="currentLocale == 'en'? 'is-selected':'is-transparent' " id="langEng"
                    class="button is-radius-left"><img src="../../static/img/icon/us.png" class="m-r-10" />
                    English</button></nuxt-link>
                <nuxt-link :to="switchLocalePath('id')"><button
                    :class="currentLocale == 'id'? 'is-selected':'is-transparent' " id="langId"
                    class="button is-radius-right"><img src="../../static/img/icon/ina.png" class="m-r-10" />
                    Indonesia</button></nuxt-link>
              </div>
            </client-only>
            <ul class=" is-inline">
            </ul>
          </div>

        </div>

      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    computed: {
      currentLocale() {
        return this.$i18n.locale
      },
      aboutPages() {
        return this.$store.state.pagesAbout;
      },
      csPages() {
        return this.$store.state.pagesCS;
      },
      partnerPages() {
        return this.$store.state.pagesPartner;
      },
      findUs() {
        return this.$store.state.findUs;
      },
      contactInfo() {
        return this.$store.state.contactInfo;
      },
      showFeature(){
        return this.$store.state.showFeature;
      },
      operatedBy(){
        return this.$store.state.operatedBy;
      }
    },
    methods: {
      changeLang: function (lang) {
        if (this.currentLocale == 'en') {
          $("#langEng").addClass("is-selected");
          $("#langEng").removeClass("is-transparent");
          $("#langId").removeClass("is-selected");
          $("#langId").addClass("is-transparent");
        } else if (this.currentLocale == 'id') {
          $("#langId").addClass("is-selected");
          $("#langId").removeClass("is-transparent");
          $("#langEng").removeClass("is-selected");
          $("#langEng").addClass("is-transparent");
        }
      },
      getHref(slug) {
        return ''
      },
    }
  }
</script>