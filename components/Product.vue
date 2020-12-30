<i18n>
  {
  "en": {
  "review" : "Review",
  "selectSize": "Select Size",
  "sizeGuide" : "Size Guide",
  "addToCart" : "Add to Cart",
  "addToBook" : "Add to Book",
  "buyNow": "Buy Now",
  "soldItem": "The Product Out of Stock?",
  "share" : "Share",
  "description" : "Description",
  "attribute" : "Attribute",
  "fastResponse":"Fast Response",
  "warrantyReturn" : "Warranty and Return",
  "review": "Review",
  "writeReview": "Write Review",
  "askQuality": "How is Overall Quality of This Product?",
  "qty" : "Quantity",
  "veryLess": "Very Less",
  "less": "Less",
  "enough": "Enough",
  "good": "Good",
  "veryGood": "Very Good",
  "giveReview": "Please Give a Review for This Product",
  "sharePhoto": "Share a Photo from Product You get",
  "shareFacebook": "Share to Facebook",
  "cancel": "Cancel",
  "send": "Send",
  "from": "from",
  "loadMore": "Load More",
  "reviewTwice" : "Sorry Can't Review Twice in same Product"
  },
  "id": {
  "review" : "Ulasan",
  "selectSize": "Pilih Ukuran",
  "sizeGuide" : "Panduan Ukuran",
  "addToCart" : "Masukkan Ke Keranjang",
  "addToBook" : "Masukkan ke Pesanan",
  "buyNow": "Beli Sekarang",
  "soldItem": "Produk yang Anda cari Habis?",
  "share" : "Bagikan",
  "description" : "Dekripsi",
  "attribute" : "Atribut",
  "fastResponse":"Hubungi Cepat",
  "warrantyReturn" : "Garansi dan Return",
  "review": "Ulasan",
  "writeReview": "Tulis Ulasan",
  "askQuality": "Bagaimana kualitas produk ini secara keseluruhan?",
  "qty" : "Jumlah",
  "veryLess": "Sangat Kurang",
  "less": "Kurang",
  "enough": "Cukup",
  "good": "Bagus",
  "veryGood": "Sangat Bagus",
  "giveReview": "Berikan Ulasan untuk Produk Ini",
  "sharePhoto": " Bagikan foto dari Produk yang Anda Terima",
  "shareFacebook": "Bagikan ke Facebook",
  "cancel": "Batal",
  "send": "Kirim",
  "from": "oleh",
  "loadMore": "Lainnya",
  "reviewTwice" : "Maaf, anda tidak bisa memberikan review di product yang sama"
  }
  }
</i18n>
<template>
  <div class="container bd-lead">
    <div class="columns">
      <div class="column is-12">
        <div class="columns">
          <div class="column is-1 more-view-product is-12-mobile desktop-view">
            <ul>
              <client-only>
              <li v-for="(image, index) in product.displayImages" :key="index"
                v-on:click="changeImage(image.styles.large.src)">
                <img v-bind:src="image.styles.thumbnail.src">
              </li>
              </client-only>
            </ul>
          </div>
          <div class="column is-7 is-12-mobile">
            <a v-on:click="ShowModalImage()" class="wrapp-img-primary">
              <client-only>
                <ImageItem v-if="imageShow" :source="imageShow" />
              </client-only>
            </a>
            <client-only>
            <client-only>
               </client-only>
              <div id="ModalImage" class="modal">
                <div class="modal-background" v-on:click="HideModalImage()"></div>
                <div class="modal-content desktop-view">
                  <div class="image single-item" data-sizes="50vw">
                    <slick-slide ref="slick" :options="slickOptions">
                        <ImageItem v-for="(imageModal, indexModal) in product.displayImages" :key="indexModal"
                          :source="imageModal.styles.large.src" />
                      </slick-slide>
                  </div>
                </div>
                <div class="modal-content mobile-view">
                  <div class="image single-item" data-sizes="50vw">
                    <slick-slide ref="slick" :options="slickOptions">
                        <ImageItem v-for="(imageModal, indexModal) in product.displayImages" :key="indexModal"
                          :source="imageModal.styles.large.src" />
                      </slick-slide>
                  </div>
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="HideModalImage()"></button>
              </div>
            </client-only>
          </div>
          <div class="column is-1 more-view-product is-12-mobile mobile-view">
            <ul>
              <li v-for="(image, index) in product.displayImages" :key="index"
                v-on:click="changeImage(image.styles.large.src)">
                <img v-bind:src="image.styles.thumbnail.src">
              </li>
            </ul>
          </div>

          <div class="column is-4 is-12-mobile">
            <p class="is-size-4 primary-color has-text-weight-semibold" v-text="product.name"></p>
            <p class="m-t-10 has-text-grey-light is-size-6 has-text-weight-semibold" v-text="product.localSku"></p>
            <p class="m-t-10" v-if="product.price==product.finalPrice">
              <span class="is-size-5 has-text-weight-semibold m-r-10  primary-color">Rp.
                {{$priceFormatter(product.price)}} </span>
            </p>
            <p class="m-t-10" v-else>
              <span class="is-size-5 has-text-weight-semibold m-r-10 is-line-through primary-color">Rp.
                {{$priceFormatter(product.price)}} </span> <span
                class="is-size-5 has-text-danger has-text-weight-semibold">Rp.
                {{ $priceFormatter(product.finalPrice) }}</span>
              <span
                class="is-size-5 has-text-danger has-text-weight-semibold">(-{{Number((((product.price - product.finalPrice)/product.price)*100).toFixed(2))}}%)</span>
            </p>
            <p class="m-t-10">
              <span class="m-r-10 primary-color">
                <!-- rating -->
                <ul class="list-rate">
                  <li v-for="star in 5" :key="star">
                    <div v-if="star<=avgRating">
                      <font-awesome-icon :icon="['fas', 'star']" class="m-r-5" />
                    </div>
                    <div v-else>
                      <div v-if="star-avgRating<1">
                        <font-awesome-icon :icon="['fas', 'star-half-alt']" class="m-r-5" />
                      </div>
                      <div v-else>
                        <font-awesome-icon :icon="['far', 'star']" class="m-r-5" />
                      </div>
                    </div>
                  </li>
                </ul>
              </span>
              <div id="ModalReview" class="modal">
                <div class="modal-background" v-on:click="HideModalReview()"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title is-size-6 has-text-centered">ULASAN</p>
                    <button class="delete" aria-label="close" v-on:click="HideModalReview()"></button>
                  </header>
                  <section class="modal-card-body review-detail-img has-text-centered">
                    <img src="../static/img/Promo-Saat-Ini-Coba-Baju.jpg" class="" />
                    <p class="has-text-justified m-t-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ultricies diam, in aliquet lacus. Sed ac nulla quis ipsum hendrerit fermentum. Sed in tortor risus. In hac habitasse platea dictumst. Suspendisse ut purus ac magna molestie mollis. Nullam eget magna quam. Donec quis efficitur dui. Ut augue leo, pretium ac ornare posuere, semper sollicitudin ligula. Pellentesque orci risus, lobortis iaculis orci nec, pellentesque euismod mi. Nam dignissim, nulla ut semper aliquam, eros justo lacinia tellus, in egestas sapien velit sit amet tortor. Sed eu diam sapien.
                    </p>
                  </section>
                  <footer class="modal-card-foot has-text-centered">
                    <button class="button is-primary " v-on:click="HideModalReview()">Tutup</button>
                  </footer>
                </div>
              </div>
              <div class=" has-text-weight-semibold primary-color m-b-10 m-t-30">{{$t('qty')}} </div>
              <div class="is-clearfix"></div>
              <span class="input-number-decrement" v-on:click="decQty">–</span>
              <input class="input-number" v-model="wantedQty" type="text" value="1" min="0" max="10"
                @change="checkStock()">
              <span class="input-number-increment" v-on:click="incQty">+</span>
              <span class="is-success m-l-10"
                :class="inStock ? 'has-text-success' : 'has-text-danger'" >{{inStock ? 'In Stock': 'Out of Stock'}}</span>
              <a class="button is-primary is-block m-t-40" :class="{'is-loading': isSubmitCart}">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" class="m-r-5" /> {{$t('addToCart')}}</a>
              
              <a class="button is-block m-t-10" :class="{'is-loading': isSubmitCartCheckout}">
                <font-awesome-icon :icon="['fas', 'check']" class="m-r-5" /> {{$t('buyNow')}}</a>
              <!-- <a class="m-t-20 button is-default is-block m-t-10">
                    <font-awesome-icon :icon="['fas', 'heart']" class="m-r-5" /> Tambah ke Wishlist</a> -->
              <!-- <a class="m-t-20 primary-color has-text-center is-block has-text-centered"
                v-on:click="ShowModalWaitingList()">{{$t('soldItem')}}</a> -->

              <div id="ModalWaitingList" class="modal">
                <div class="modal-background" v-on:click="HideModalWaitingList()"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title is-size-6 has-text-centered ">KABARI SAYA JIKA PRODUK TELAH
                      TERSEDIA
                    </p>
                    <button class="delete" aria-label="close" v-on:click="HideModalWaitingList()"></button>
                  </header>
                  <section class="modal-card-body  has-text-centered">
                    <span class=" has-text-weight-semibold primary-color has-text-centered"> Kabari via Email
                    </span>
                    <div class="is-clearfix"></div>
                    <input class="input m-t-10 m-b-20" style="width:300px;" type="password" placeholder="E-mail">
                    <!-- <p class="m-b-20">
                      <a href="">Ganti alamat E-mail</a>
                    </p> -->
                    <button class="button is-primary " v-on:click="HideModalWaitingList()">Kirim</button>
                  </section>
                </div>
              </div>
              <p class="m-t-40 m-b-20 share-socmed">
                <span class="has-text-weight-semibold primary-color"> {{$t('share')}} </span>
                <ul class="m-t-10 ">
                  <li><a target="_blank" href="#">
                      <font-awesome-icon :icon="['fab', 'facebook']" class="m-r-5 fa-2x" /> </a> </li>
                  <li><a target="_blank" href="#">
                      <font-awesome-icon :icon="['fab', 'instagram']" class="m-r-5 fa-2x" /> </a> </li>
                  <li><a target="_blank" href="#">
                      <font-awesome-icon :icon="['fab', 'twitter']" class="m-r-5 fa-2x" /> </a> </li>
                </ul>
              </p>

              <div class="is-clearfix"></div>
              <p class="m-t-20 wrapp-accordion">
                <client-only>
                  <BulmaAccordion :dropdown="false" :icon="'custom'">
                    <BulmaAccordionItem>
                      <p class="primary-color" slot="title">
                        <font-awesome-icon :icon="['fas', 'file-alt']" class="m-r-5" /> {{$t('description')}} </p>
                      <!-- <i slot="icon" class="material-icons">more_vert</i> -->
                      <font-awesome-icon slot="icon-closed" :icon="['fas', 'angle-down']" class="m-r-5" />
                      <font-awesome-icon slot="icon-open" :icon="['fas', 'angle-up']" class="m-r-5" />
                      <div class="high" slot="content">
                        <p v-text="product.description"></p>
                      </div>
                    </BulmaAccordionItem>
                    <BulmaAccordionItem>
                      <p class="primary-color" slot="title">
                        <font-awesome-icon :icon="['fas', 'list-ul']" class="m-r-5" /> {{$t('attribute')}}</p>
                      <!-- <i slot="icon" class="material-icons">v</i> -->
                      <font-awesome-icon slot="icon-closed" :icon="['fas', 'angle-down']" class="m-r-5" />
                      <font-awesome-icon slot="icon-open" :icon="['fas', 'angle-up']" class="m-r-5" />
                      <div class="high" slot="content">
                        <table class="is-fullwidth productAttributes table table-striped table-condensed">
                          <tbody>
                            <tr>
                              <td>Color</td>
                              <td>
                                <ul class="product-attribute-values">
                                  <li><span class="img-circle "
                                      style="width: 20px; display: inline-block; border: 1px solid #ccc;"
                                      :style="{backgroundColor:atribColor.values[0] ? atribColor.values[0].displayValue : ''}">&nbsp;</span>
                                    {{atribColor.values[0] ? atribColor.values[0].displayValue : ''}}</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>Size Guide</td>
                              <td>
                                <ul class="product-attribute-values">
                                  <li>{{atribSize.values[0] ? atribSize.values[0].displayValue : ''}}</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>Fabric</td>
                              <td>
                                <ul class="product-attribute-values">
                                  <li>{{atribFabric.values[0] ? atribFabric.values[0].displayValue : ''}}</li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BulmaAccordionItem>
                    <BulmaAccordionItem>
                      <p class="primary-color" slot="title">
                        <font-awesome-icon :icon="['fas', 'sync-alt']" class="m-r-5" /> {{$t('warrantyReturn')}}
                      </p>
                      <!-- <i slot="icon" class="material-icons">v</i> -->
                      <font-awesome-icon slot="icon-closed" :icon="['fas', 'angle-down']" class="m-r-5" />
                      <font-awesome-icon slot="icon-open" :icon="['fas', 'angle-up']" class="m-r-5" />
                      <div class="high" slot="content">
                        <div class="high" slot="content">
                          <div class="high" slot="content">
                            <p class="primary-color has-text-justified">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ultricies diam, in aliquet lacus. Sed ac nulla quis ipsum hendrerit fermentum. Sed in tortor risus. In hac habitasse platea dictumst. Suspendisse ut purus ac magna molestie mollis. Nullam eget magna quam. Donec quis efficitur dui. Ut augue leo, pretium ac ornare posuere, semper sollicitudin ligula. Pellentesque orci risus, lobortis iaculis orci nec, pellentesque euismod mi. Nam dignissim, nulla ut semper aliquam, eros justo lacinia tellus, in egestas sapien velit sit amet tortor. Sed eu diam sapien.
                            </p>
                          </div>
                        </div>
                      </div>
                    </BulmaAccordionItem>
                  </BulmaAccordion>
                </client-only>
              </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12 ">
            <div class="review-product m-t-40 m-b-20">

              <!-- judl dan button tulis ulasan -->
              <h4 class="is-size-5 primary-color has-text-weight-semibold m-t-20">{{$t('review')}}</h4>
              <a class="button is-primary m-t-10" :class="{'is-loading' : checkReviewLoad}"
                :style="{'display' : showReviewForm ? 'none' : 'table'}"  @click="showReview()">
                <font-awesome-icon :icon="['fas', 'pencil-alt']" class="m-r-5"/> {{$t('writeReview')}}</a>

              <!-- tab tulis ulasan -->
              <section class="hero is-light is-border-purple input-review m-t-20"
                :style="{'display' : showReviewForm ? 'block' : 'none'}">
                <div class="hero-body">
                  <div class="container">
                    <b class="primary-color">{{$t('askQuality')}}</b>
                    <div class="columns m-t-10">
                      <div class="column is-3">
                        <div class="m-r-10 primary-color m-b-10 rate">
                          <a class="fa-2x" v-for="rate in ratingSelected" :key="rate+'_solid'">
                            <font-awesome-icon :icon="['fas', 'star']" class="m-r-5" /> </a>
                          <a class="fa-2x" v-for="rate in ratingTotal-ratingSelected" :key="rate+'_reg'">
                            <font-awesome-icon :icon="['far', 'star']" class="m-r-5" /> </a>
                        </div>
                      </div>
                      <div class="column is-9">
                        {{ratingText}}
                      </div>
                    </div>
                    <hr>
                    <b class="primary-color m-t-10">{{$t('giveReview')}}</b>
                    <input class="input m-t-10" type="text" placeholder="Judul Ulasan (Opsional)" v-model="reviewTitle">
                    <textarea class="textarea input m-t-10" placeholder="Isi Ulasan" v-model="reviewContent"></textarea>
                    <div class="columns m-t-10">
                      <div class="column is-6">
                      </div>
                    </div>
                    <div class="columns m-t-10">
                      <div class="column is-6">

                      </div>
                      <div class="column is-6 is-pulled-right has-text-right">
                        <a class="button is-default m-t-10" @click="cancelReview()">
                          {{$t('cancel')}}</a>
                        <a class="button is-primary m-t-10" :class="{'is-loading':sendReviewLoad}">
                          {{$t('send')}}</a>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <!-- ulasan card -->
              <div class="card m-t-20" v-for="(review, index) in productReview" :key="'r'+index">
                <div class="card-content">
                  <div class="columns">
                    <div class="column is-2">
                      <div class="m-r-10 primary-color m-b-10 rate">
                        <div class="m-r-10 primary-color m-b-10 rate">
                          <font-awesome-icon v-for="rate in Number((review.summaryRating/2).toFixed())"
                            :key="rate+'_solid'" :icon="['fas', 'star']" class="m-r-5" />
                          <font-awesome-icon v-for="rate in 5-Number((review.summaryRating/2).toFixed())"
                            :key="rate+'_reg'" :icon="['far', 'star']" class="m-r-5" />
                        </div>
                      </div>

                      <b class="primary-color">{{$t('from')}} {{review.reviewer.name}}</b>
                      <br>
                      <small>{{$dateToStringCust(review.creationTime, "DD MMMM YYYY")}}</small>
                    </div>
                    <div class="column is-10">
                      <b class="primary-color"> {{review.title}}</b>
                      <p class="primary-color has-text-justified">{{review.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a class="button is-primary m-t-20" :class="{'is-loading' : productReviewLoad}"
                v-if="productReview.length>0 && productReviewPage.currentPage+1<productReviewPage.totalPages">{{$t('loadMore')}}</a>

            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="is-clearfix"></div>
  </div>
</template>
<script>
// import {
//   mapActions,
//   mapGetters
// } from 'vuex
import ImageItem from "./global-component/ImageItem";
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";

import "../node_modules/bulma-switch/dist/css/bulma-switch.min.css";
const Cookie = process.client ? require("js-cookie") : undefined;

//var bulmaAccordion = require("bulma-accordion")

export default {
  data() {
    return {
      wantedQty: 1,
      imageShow: "",
      avgRating: 3.8,
      starReview: 0,
      atribColor: "",
      atribFabric: "",
      isSubmitCart: false,
      isSubmitBook: false,
      isSubmitCartCheckout: false,
      CUSTOMER_TYPE: "",
      RETAILER_TYPE: "",
      inStock: true,
      ratingSelected: 1,
      ratingTotal: 5,
      ratingText: "",
      reviewTitle: "",
      reviewContent: "",
      checkReviewLoad: false,
      sendReviewLoad: false,
      showReviewForm: false,
      slickOptions: {
        autoplay: true,
      },
      analytic: false,
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    product() {
      var imageId = this.$store.state.product.imageId;
      if (
        this.$store.state.product.displayImages.find((val) => imageId == val.id)
      ) {
        this.imageShow = this.$store.state.product.displayImages.find(
          (val) => imageId == val.id
        ).styles.large.src;
      }
      this.avgRating = this.$store.state.product.avgRating / 2;
      if (this.$store.state.product.additionalProperties) {
        this.atribColor = this.$store.state.product.additionalProperties.find(
          (val) => val.id == "color"
        );
        this.atribSize = this.$store.state.product.additionalProperties.find(
          (val) => val.id == "sizeGuide"
        );
        this.atribFabric = this.$store.state.product.additionalProperties.find(
          (val) => val.id == "fabric"
        );
      }

      if (!this.atribColor) {
        this.atribColor = {
          values: [
            {
              displayValue: "",
            },
          ],
        };
      }

      if (!this.atribSize) {
        this.atribSize = {
          values: [
            {
              displayValue: "",
            },
          ],
        };
      }

      if (!this.atribFabric) {
        this.atribFabric = {
          values: [
            {
              displayValue: "",
            },
          ],
        };
      }
      return this.$store.state.product;
    },
    productReview() {
      return this.$store.state.productReview;
    },
    productReviewPage() {
      return this.$store.state.productReviewPage;
    },
    productReviewLoad() {
      return this.$store.state.productReviewLoad;
    },
    allOptionSelected() {
      return this.$store.state.cart.allOptionSelected;
    },
    jwt() {
      return this.$store.state.jwt;
    },
    customerType() {
      return this.$store.state.jwtDecoded == null
        ? "Retail"
        : this.$store.state.jwtDecoded.role == null ||
          this.$store.state.jwtDecoded.role == "member" ||
          this.$store.state.jwtDecoded.role == "common" ||
          this.$store.state.jwtDecoded.role == "null"
        ? "Retail"
        : "Reseller";
    },
  },
  methods: {
    ShowModalWaitingList: function () {
      $("#ModalWaitingList").removeClass("modal-close");
      $("#ModalWaitingList").addClass("is-active");
    },
    HideModalWaitingList: function () {
      $("#ModalWaitingList").removeClass("is-active");
      $("#ModalWaitingList").addClass("modal-close");
    },

    ShowModalReview: function () {
      $("#ModalReview").removeClass("modal-close");
      $("#ModalReview").addClass("is-active");
    },
    HideModalReview: function () {
      $("#ModalReview").removeClass("is-active");
      $("#ModalReview").addClass("modal-close");
    },
    ShowModalImage: function () {
      $("#ModalImage").removeClass("modal-close");
      $("#ModalImage").addClass("is-active");
    },
    HideModalImage: function () {
      $("#ModalImage").removeClass("is-active");
      $("#ModalImage").addClass("modal-close");
    },
    changeImage: function (imageUrl) {
      this.imageShow = imageUrl;
    },
    updateStar: function (star) {
      console.log("change start rating to : " + star);
      this.starReview = star;
    },
    incQty: function () {
      this.wantedQty = parseInt(this.wantedQty) + 1;
      this.checkStock();
    },
    decQty: function () {
      if (this.wantedQty > 1) {
        this.wantedQty = parseInt(this.wantedQty) - 1;
        this.checkStock();
      }
    },
    checkStock: function () {
      let selectedVariant = this.product;

      if (this.wantedQty <= selectedVariant.qty) {
        this.inStock = true;
      } else {
        this.inStock = false;
      }
    },
    showReview: function(){
      this.showReviewForm = true;
    },
    cancelReview: function () {
      this.showReviewForm = false;
    },
  },
  async mounted() {

  },
  updated() {},
  components: {
    BulmaAccordion,
    BulmaAccordionItem,
    ImageItem,
  },
};
</script>
<style lang="scss">
.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
  display: inline;
  border: none;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0);
  background-color: #00000000;
}

.list li {
  display: block;
}

.list div {
  display: inline;
}

.atribColor {
  width: 20px;
}
</style>