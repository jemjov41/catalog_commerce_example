<i18n>
  {
  "en": {
  "first": "First",
  "last" : "Last",
  "previous": "Prev",
  "next": "next",
  "showPage": "Show Page",
  "from": "from",
  "notFound": "Product Not Found",
  "backToHome": "Back To Home"
  },
  "id": {
  "first": "Pertama",
  "last": "Terakhir",
  "previous": "Sebelumnya",
  "next": "Selanjutnya",
  "showPage": "Menampilkan Halaman",
  "from": "dari",
  "notFound": "Produk Tidak Ditemukan",
  "backToHome": "Kembali ke Halaman Utama"
  }
  }
</i18n>
<template>
  <div v-if="pageInfo.totalPages > 0">
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <!-- <a class="pagination-previous"></a>
  <a class="pagination-next">Next page</a> -->
      <ul class="pagination-list">
        <li
          class="pagination-link"
          v-if="pager.length > 0 && pager[0].page != 0"
        >
          <nuxt-link v-bind:to="{ query: { page: 0 } }"> First </nuxt-link>
        </li>
        <li
          class="pagination-link"
          v-if="pager.length > 0 && pager[0].page != pageInfo.currentPage"
        >
          <nuxt-link v-bind:to="{ query: { page: pageInfo.currentPage - 1 } }">
            Prev
          </nuxt-link>
        </li>
        <li
          class="pagination-link"
          v-for="item in pager"
          v-bind:key="item.page"
        >
          <nuxt-link
            v-if="pageInfo.currentPage != item.page"
            :event="!item.enable ? '' : 'click'"
            v-bind:to="{ query: { page: item.page } }"
          >
            {{ item.label }}
          </nuxt-link>
          <span v-else class="active">
            {{ item.label }}
          </span>
        </li>
        <li
          class="pagination-link"
          v-if="
            pager.length > 0 &&
            pager[pager.length - 1].page != pageInfo.currentPage
          "
        >
          <nuxt-link v-bind:to="{ query: { page: pageInfo.currentPage + 1 } }">
            Next
          </nuxt-link>
        </li>
        <li
          class="pagination-link"
          v-if="
            pager.length > 0 &&
            pager[pager.length - 1].page != pageInfo.totalPages - 1
          "
        >
          <nuxt-link v-bind:to="{ query: { page: pageInfo.totalPages - 1 } }">
            Last
          </nuxt-link>
        </li>
      </ul>
      <!-- <ul>
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
    </ul> -->
      <div class="is-clearfix"></div>
    </nav>
    <br />
    <!-- <div class="has-text-centered"> Menampilkan halaman {{pageInfo.currentPage + 1 }} dari {{ pageInfo.totalPages }}</div> -->
  </div>
  <div v-else>
    <div v-if="productsError.timeout">TIME OUT</div>
    <div v-else>
      <div class="has-text-centered not-found-icon m-b-20 m-t-20">
        <img src="../static/img/icon/not-found-icon.png" />
      </div>
      <div class="has-text-centered is-size-5">{{ $t("notFound") }}</div>
      <div class="has-text-centered">
        <a class="button is-primary m-t-30" @click="goToHome()">{{
          $t("backToHome")
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    pageInfo() {
      if (this.$route.path.includes("profile")) {
        return this.$store.state.orderHistory.pageInfo;
      } else {
        return this.$store.state.pageInfo;
      }
    },
    currentLocale() {
      return this.$i18n.locale;
    },
    pager() {
      var SPREAD = 2;
      var tmp = this.pageInfo;
      var currPage = tmp.currentPage + 1;

      var start = currPage - SPREAD;
      if (start < 1) {
        SPREAD = SPREAD - start + 1;
        start = 1;
      }
      var end = currPage + SPREAD;
      if (end > tmp.totalPages) {
        SPREAD = SPREAD + (end - tmp.totalPages);
        end = tmp.totalPages;
        start = currPage - SPREAD < 1 ? 1 : currPage - SPREAD;
      }

      var pager = [];
      for (var i = start; i <= end; i++) {
        pager.push({
          enable: i != currPage,
          page: i - 1,
          label: i,
        });
      }
      return pager;
    },
    productsError() {
      return this.$store.state.productsError;
    },
  },
  methods: {
    goToHome: function () {
      this.$router.push("/" + this.currentLocale + "/");
    },
    ...mapActions({
      loadProductDetail: "loadProductDetail",
    }),
  },
};
</script>
