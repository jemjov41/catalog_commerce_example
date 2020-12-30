<template>
  <div>
    <ProductList v-if="pageType == 'PRODUCT_LIST'" />
    <Product v-if="pageType == 'PRODUCT_DETAIL'" />
  </div>
</template>
<script>
import ProductList from "../components/ProductList";
import Product from "../components/Product";

import { mapActions } from "vuex";

export default {
  async asyncData({
    route,
    params,
    env,
    store,
    $axios,
    error,
    app,
    query,
    req,
  }) {
    var host = process.server ? req.headers.host : "";
    var page = parseInt(query.page || 0);
    var termSearch = "";
    // TODO: cek jenis slug
    var slugInfo = store.state.slugs[route.params.slug];
    var resHtmlBody = "";
    var slugMap = {};
    if (
      route.params.slug == "catalog"
    ) {
       slugMap[route.params.slug] = {
        type: "LIST_CATALOG",
        id: route.params.slug,
      };
      store.dispatch("addSlugs", slugMap, {
        root: true,
      });
      slugInfo = store.state.slugs[route.params.slug];
    }else if (
      route.params.slug == "detail"
    ) {
       slugMap[route.params.slug] = {
        type: "PRODUCT",
        id: route.params.slug,
      };
      store.dispatch("addSlugs", slugMap, {
        root: true,
      });
      slugInfo = store.state.slugs[route.params.slug];
    }


    if (slugInfo == undefined) {
      // return "404"
      console.log("slug info empty");
    } else {
      console.log("slug info not empty ", store.state.slugs[route.params.slug].type);
      if (store.state.slugs[route.params.slug].type === "LIST_CATALOG") {
        // Server-side
        if (process.server) {
          await store.dispatch("loadCatalog", {
            page: page,
          });
        }

        // Client-side
        if (process.client) {
          store.dispatch("loadCatalog", {
            page: page,
          });
        }
      } else if (store.state.slugs[route.params.slug].type === "PRODUCT") {
        await store.dispatch(
          "loadProductDetail",
          store.state.slugs[route.params.slug].id
        );
      }
    }

    return null;
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    title() {
      return this.$store.state.title;
    },
    pageType() {
      return this.$store.state.pageType;
    },
    pages() {
      return this.$store.state.pagesAbout;
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
  methods: {
    ...mapActions({
      loadByCategory: "loadByCategory",
      loadByRelease: "loadByRelease",
    }),
  },
  watchQuery: ["page"],
  components: {
    ProductList,
    Product
  },
};
</script>