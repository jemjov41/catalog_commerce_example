export const state = () => ({
    pageType: '',
    slugs: {},
    products: [],
    pageInfo: {},
    productsError:{timeout : false},
    pageSize: 18,
    product: {},
    pageType: '',
    productReview: [],
    productReviewPage: {},
    productReviewLoad: false
})

export const mutations = {
    setPageType(state, pageType, isLoading) {
        state.pageType = pageType;
        state.productsLoad = isLoading;
      },
      addSlugs(state, slugMap) {
        state.slugs = {
          ...state.slugs,
          ...slugMap
        };
      },
      setPageInfo(state, pageInfo) {
        state.pageInfo = {
          totalElements: pageInfo.totalElements,
          totalPages: pageInfo.totalPages,
          last: pageInfo.last,
          size: pageInfo.size,
          numberOfElements: pageInfo.numberOfElements,
          first: pageInfo.first,
          currentPage: pageInfo.currentPage,
          number: pageInfo.number
        }
      },
      setCatalog(state, products) {
        //state.products = products;
        // state.pageType = 'PRODUCT_LIST';
    
        var slugMap = {};
        state.products = [];
        if (products.length) {
          state.products = products.map(product => {
            slugMap[product.slug] = {
              type: 'PRODUCT',
              id: product.id
            }
            if (product.imageId != null) {
              var image = product.displayImages.find(item => item.id == product.imageId);
              if (image != null) {
                product.displayListImage = image.styles.small;
              } else {
                product.displayListImage = {
                  src: null,
                  width: null,
                  height: null,
                  alt: product.localSku,
                  title: product.localSku
                }
              }
            } else {
              product.displayListImage = {
                src: null,
                width: null,
                height: null,
                alt: product.localSku,
                title: product.localSku
              }
            }
    
            return product;
          })
    
    
    
          state.slugs = {
            ...state.slugs,
            ...slugMap
          };
        } else {
          state.productsError = products;
        }
        state.productsLoad = true;
      },
      setProduct(state, product) {
        if (product.additionalProperties == null) {
          product.additionalProperties = [];
        }
        state.product = product;
        state.pageType = 'PRODUCT_DETAIL';
    
      },
}

export const actions = {
      addSlugs({
        commit
      },
        slugMap
      ) {
        commit('addSlugs',
          slugMap
        );
      },
      async loadCatalog({commit, state}, {
          page
      }) {
        commit('setPageType', "PRODUCT_LIST", false);
        try {
            let res = await this.$axios.get("https://5fec2f8d573752001730b30f.mockapi.io/catalog");
      
            commit('setPageInfo', {
              ...{
                currentPage: page
              },
              ...res.data
            });
            commit('setCatalog',  res.data.content)
          } catch (e) {
            console.log(e);
          }
      },
      async loadProductDetail({
        commit,
        dispatch
      }, productId) {
        try {
          let res = await this.$axios.get('https://5fec2f8d573752001730b30f.mockapi.io/detail');
          commit('setProduct', res.data);
          
        } catch (e) {
          console.log(e);
        }
      },
      

}