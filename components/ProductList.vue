<i18n>
  {
  "en": {
  "category": "Category",
  "sort" : "SORT",
  "sortPriceAsc" : "Price Low to High",
  "sortPriceDesc" : "Price High to Low",
  "sortDiscDesc" : "Highest Discount",
  "sortSkuCode" : "SKU Code Order",
  "sortRateDesc" : "Highest Rate",
  "sortNewest" : "Newest Product",
  "filter" : "FILTER",
  "brand" : "Brand",
  "size" : "Size",
  "discount" : "Discount",
  "price" : "Price",
  "discMax" : "max",
  "filterSubmit" : "Apply",
  "sold" : "SOLD",
  "sortlabel" : "SORT AND FILTER",
  "sortlabelbutton" : "Sort and Filter",
  "editView" : "Edit View"


  },
  "id": {
  "category": "Kategori",
  "sort" : "URUTKAN",
  "sortPriceAsc" : "Harga Rendah ke Tinggi",
  "sortPriceDesc" : "Harga Tinggi ke Rendah",
  "sortDiscDesc" : "Diskon Tertinggi",
  "sortSkuCode" : "Urutan Kode SKU",
  "sortRateDesc" : "Rating Tertinggi",
  "sortNewest" : "Produk Terbaru",
  "filter" : "SARING",
  "brand" : "Merek",
  "size" : "Ukuran",
  "discount" : "Diskon",
  "price" : "Harga",
  "discMax" : "maks",
  "filterSubmit" : "Terapkan",
  "sold" : "HABIS",
  "sortlabel" : "URUT DAN SARING",
  "sortlabelbutton" : "Urutkan dan Saring",
  "editView" : "Change View"
  }
  }
</i18n>
<template>
  <div>
    <div class="container bd-lead">
      <nav class="breadcrumb is-small" aria-label="breadcrumbs">
        <!-- css display none sama kang rio -->
        <!-- <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">{{$t('category')}}</a></li>
          <li class="is-active"><a href="#" aria-current="page">Blus</a></li>
        </ul> -->
      </nav>

      <div class="columns is-multiline is-mobile">
        <div class="column is-3-widescreen is-3-tablet is-12-mobile">

        </div>
        <div class="column is-9-widescreen is-9-tablet is-12-mobile">
          <div
            class="columns is-multiline is-mobile m-b-20 sortFIlterChangeView"
          >
           
          </div>
          <div class="is-clearfix"></div>

          <!-- <Pager /> -->
          <h1 class="primary-color has-text-centered is-size-5 m-b-40">
            {{ title }}
          </h1>
          <div
            v-if="productsLoad && showCatalog == 'thumb'"
            class="columns is-multiline is-mobile"
          >
            <client-only>
              <div
                class="column is-4-widescreen is-6-tablet is-6-mobile product-list wrappProd"
                :class="item.qty <= 0 ? 'wrappProdSold' : ''"
                v-for="item in products"
                v-bind:key="item.id"
              >
                <nuxt-link v-bind:to="item.slug">
                  <div class="wrappProdSold-overlay"></div>
                  <div
                    class="wrapperProductLabel"
                    v-if="item.price != item.finalPrice"
                  >
                    <p
                      span=""
                      class="product-label label-discount has-text-bold"
                    >
                      {{
                        Number(
                          (
                            ((item.price - item.finalPrice) / item.price) *
                            100
                          ).toFixed(2)
                        )
                      }}% off
                    </p>
                  </div>
                  <div class="wrapperProductLabel-left" v-if="item.newItem">
                    <img
                      class="product-label label-new"
                      src="../static/img/icon/Label-New.png"
                    />
                  </div>
                  <img v-bind:src="item.displayListImage.src" /><br />
                  <div class="wrappProdSold-details fadeIn-bottom">
                    <p class="wrappProdSold-text">
                      <span class="sold-item is-size-5 has-text-weight-bold">{{
                        $t("sold")
                      }}</span>
                    </p>
                  </div>
                  <div class="wrappProd-details fadeIn-bottom"></div>
                  <div class="columns m-t-5 is-mobile" style="margin-bottom: 0">
                    <div
                      class="column is-8-mobile is-8-widescreen has-text-black"
                    >
                      <span class="productName">
                        <nuxt-link v-bind:to="item.slug">{{
                          item.name
                        }}</nuxt-link>
                      </span>
                      <div class="is-clearfix"></div>
                      {{ item.localSku }}
                    </div>
                    <div
                      class="column is-4-mobile is-4-widescreen has-text-right"
                    >
                      <!-- <a href="#">
                        <font-awesome-icon :icon="['fas', 'heart']" class="m-r-5" /> </a>
                      <a href="#">
                        <font-awesome-icon :icon="['fas', 'shopping-cart']" class="m-r-5" /> </a> -->
                    </div>
                  </div>
                  <div class="columns is-mobile">
                    <div
                      class="column is-8-mobile is-8-widescreen"
                      v-if="item.price == item.finalPrice"
                    >
                      <span class="has-text-weight-bold primary-color"
                        >Rp {{ $priceFormatter(item.price) }}</span
                      >
                    </div>
                    <div class="column is-8-mobile is-8-widescreen" v-else>
                      <span class="normal-price has-text-weight-bold m-r-10"
                        >Rp {{ $priceFormatter(item.price) }}</span
                      >
                      <span
                        class="discount-price has-text-weight-bold has-text-danger"
                        >Rp {{ $priceFormatter(item.finalPrice) }}</span
                      >
                    </div>
                    <div
                      class="column is-4-mobile is-4-widescreen has-text-right"
                    >
                      <a href="#">
                        <font-awesome-icon
                          :icon="['fas', 'star']"
                          class="m-r-5"
                        />
                        {{ item.avgRating }}</a
                      >
                    </div>
                    <div class="wrappProd-overlay"></div>
                  </div>
                  <br />
                  <div class="wrappProd-overlay"></div>
                </nuxt-link>
              </div>
            </client-only>
          </div>
          <div
            v-else-if="productsLoad && showCatalog == 'thumbLarge'"
            class="columns is-multiline is-mobile"
          >
            <!-- tampilan yang lain -->
            <div
              class="column is-12-mobile product-list wrappProd"
              :class="item.qty <= 0 ? 'wrappProdSold' : ''"
              v-for="item in products"
              v-bind:key="item.id"
            >
              <nuxt-link v-bind:to="item.slug">
                <div class="wrappProdSold-overlay"></div>
                <div
                  class="wrapperProductLabel"
                  v-if="item.price != item.finalPrice"
                >
                  <p span="" class="product-label label-discount has-text-bold">
                    {{
                      Number(
                        (
                          ((item.price - item.finalPrice) / item.price) *
                          100
                        ).toFixed(2)
                      )
                    }}% off
                  </p>
                </div>
                <div class="wrapperProductLabel-left" v-if="item.newItem">
                  <img
                    class="product-label label-new"
                    src="../static/img/icon/Label-New.png"
                  />
                </div>
                <img v-bind:src="item.displayListImage.src" /><br />
                <div class="wrappProdSold-details fadeIn-bottom">
                  <p class="wrappProdSold-text">
                    <span class="sold-item is-size-5 has-text-weight-bold">{{
                      $t("sold")
                    }}</span>
                  </p>
                </div>
                <div class="wrappProd-details fadeIn-bottom"></div>
                <div class="columns m-t-5 is-mobile" style="margin-bottom: 0">
                  <div
                    class="column is-8-mobile is-8-widescreen has-text-black"
                  >
                    <span class="productName">
                      <nuxt-link v-bind:to="item.slug">{{
                        item.name
                      }}</nuxt-link>
                    </span>
                    <div class="is-clearfix"></div>
                    {{ item.localSku }}
                  </div>
                  <div
                    class="column is-4-mobile is-4-widescreen has-text-right"
                  >
                    <a href="#">
                      <font-awesome-icon
                        :icon="['fas', 'heart']"
                        class="m-r-5"
                      />
                    </a>
                    <a href="#">
                      <font-awesome-icon
                        :icon="['fas', 'shopping-cart']"
                        class="m-r-5"
                      />
                    </a>
                  </div>
                </div>
                <div class="columns is-mobile">
                  <div
                    class="column is-8-mobile is-8-widescreen"
                    v-if="item.price == item.finalPrice"
                  >
                    <span class="has-text-weight-bold primary-color"
                      >Rp {{ $priceFormatter(item.price) }}</span
                    >
                  </div>
                  <div class="column is-8-mobile is-8-widescreen" v-else>
                    <span class="normal-price has-text-weight-bold m-r-10"
                      >Rp {{ $priceFormatter(item.price) }}</span
                    >
                    <span
                      class="discount-price has-text-weight-bold has-text-danger"
                      >Rp {{ $priceFormatter(item.finalPrice) }}</span
                    >
                  </div>
                  <div
                    class="column is-4-mobile is-4-widescreen has-text-right"
                  >
                    <a href="#">
                      <font-awesome-icon
                        :icon="['fas', 'star']"
                        class="m-r-5"
                      />
                    </a>
                    {{ item.avgRating }}
                  </div>
                  <div class="wrappProd-overlay"></div>
                </div>
                <br />
                <div class="wrappProd-overlay"></div>
              </nuxt-link>
            </div>
          </div>
          <div
            v-else-if="productsLoad && showCatalog == 'list'"
            class="columns is-multiline is-mobile"
          >
            <div
              class="column is-12-mobile"
              v-for="item in products"
              v-bind:key="item.id"
            >
              <nuxt-link v-bind:to="item.slug">
                <div class="columns is-mobile">
                  <div
                    class="column is-6-mobile product-list wrappProd"
                    :class="item.qty <= 0 ? 'wrappProdSold' : ''"
                  >
                    <div class="wrappProdSold-overlay"></div>
                    <div
                      class="wrapperProductLabel"
                      v-if="item.price != item.finalPrice"
                    >
                      <p
                        span=""
                        class="product-label label-discount has-text-bold"
                      >
                        {{
                          Number(
                            (
                              ((item.price - item.finalPrice) / item.price) *
                              100
                            ).toFixed(2)
                          )
                        }}% off
                      </p>
                    </div>
                    <div class="wrapperProductLabel-left" v-if="item.newItem">
                      <img
                        class="product-label label-new"
                        src="../static/img/icon/Label-New.png"
                      />
                    </div>
                    <img v-bind:src="item.displayListImage.src" /><br />
                    <div class="wrappProdSold-details fadeIn-bottom">
                      <p class="wrappProdSold-text">
                        <span
                          class="sold-item is-size-5 has-text-weight-bold"
                          >{{ $t("sold") }}</span
                        >
                      </p>
                    </div>
                    <div class="wrappProd-details fadeIn-bottom"></div>
                    <div class="wrappProd-overlay"></div>
                    <br />
                    <div class="wrappProd-overlay"></div>
                  </div>
                  <div class="column is-6-mobile">
                    <span class="productName primary-color m-b-10">
                      <nuxt-link v-bind:to="item.slug">{{
                        item.name
                      }}</nuxt-link>
                    </span>
                    <div class="is-clearfix"></div>
                    {{ item.localSku }}

                    <div v-if="item.price == item.finalPrice" class="m-t-20">
                      <span class="has-text-weight-bold primary-color"
                        >Rp {{ $priceFormatter(item.price) }}</span
                      >
                    </div>
                    <div class="m-t-20" v-else>
                      <span class="normal-price has-text-weight-bold m-r-10"
                        >Rp {{ $priceFormatter(item.price) }}</span
                      >
                      <span
                        class="discount-price has-text-weight-bold has-text-danger"
                        >Rp {{ $priceFormatter(item.finalPrice) }}</span
                      >
                    </div>
                    <div class="columns is-mobile m-t-10">
                      <div class="column">
                        <a href="#">
                          <font-awesome-icon
                            :icon="['fas', 'star']"
                            class="m-r-10 fa-16"
                          />
                        </a>
                        <span class="is-size-6">{{ item.avgRating }}</span>
                      </div>
                      <div class="column has-text-right">
                        <a href="#">
                          <font-awesome-icon
                            :icon="['fas', 'heart']"
                            class="m-r-10 fa-16"
                          />
                        </a>
                        <a href="#">
                          <font-awesome-icon
                            :icon="['fas', 'shopping-cart']"
                            class="m-r-5 fa-16"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div v-else>
            <!-- <div align="center">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div> -->
            <div class="columns is-mobile" v-for="item in 7" :key="item">
              <div
                class="column is-6-mobile product-list wrappProd"
                v-for="item in 3"
                :key="item"
              >
                <div class="timeline-wrapper">
                  <div class="timeline-item">
                    <div class="animated-background">
                      <div class="background-masker content-top"></div>
                      <div class="background-masker content-first-end"></div>
                      <div class="background-masker content-second-line"></div>
                      <div class="background-masker content-second-end"></div>
                      <div class="background-masker content-third-line"></div>
                      <div class="background-masker content-third-end"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="is-clearfix"></div>
          <div class="pager"></div>
          <Pager />
          <div class="gap2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Pager from "./Pager";
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsLoad: {
      get: function () {
        return this.$store.state.productsLoad;
        // stuck for test preloader
        // return null;
      },
    },
  },
  created: function () {
    // console.log('document ready');
  },
  methods: {
    isPC() {
      return true;
    },
    ...mapActions({
      loadProductDetail: "loadProductDetail",
    }),
    ShowModalFilter: function () {
      $("#ModalFilter").removeClass("modal-close");
      $("#ModalFilter").addClass("is-active");
    },
    HideModalFilter: function () {
      $("#ModalFilter").removeClass("is-active");
      $("#ModalFilter").addClass("modal-close");
    },
    selectSort: function () {},
  },
  data() {
    return {
      selectedSort: "SORT_SKU_CODE",
      filterShow: false,
      title: "",
      showCatalog: "thumb",
    };
  },
  watch: {
  },
  mounted() {
    let menu = document.querySelector(".dropdown-menu");
    let menuTrigger = document.querySelector(".dropdown-trigger");

    try {
      this.title = this.$route.params.slug;
    } catch (e) {
      console.log(e);
    }
  },
  components: {
    Pager,
    BulmaAccordion,
    BulmaAccordionItem,
    // VueSlider
  },
};
</script>
<style lang="scss">
@import "../assets/scss/sliderStyle.scss";
</style>