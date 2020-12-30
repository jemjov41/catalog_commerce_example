<template>
  <div>

    <div class="container">
      <div  class="single-item" data-sizes="50vw ">
        <a href="catalog">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//700/godox_godox-120c-led-video-lighting_full02.jpg"
            title="catalog"
          />
        </a>
         <a href="catalog">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-7554092/wansen_wansen_w160_lampu_led_video_lighting_studio_ball_head_full06_p5r6pgft.jpg"
            title="catalog"
          />
        </a>
         <a href="catalog">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-9700083/godox_godox_led_video_light_led170ii-led170_ii_full01_ol4en2wj.jpg"
            title="catalog"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  async asyncData({
    route,
    router,
    params,
    env,
    store,
    $axios,
    error,
    query,
    app,
    req,
    res,
    redirect,
  }) {
  
  },
  name: "index",
  computed: {
    title() {
      return this.$store.state.title;
    },
    pageHtml() {
      return this.$store.state.contentHome;
    },
  },

  head() {
    return {
      title: this.title,
    };
  },

  mounted() {
    /** 
			$(".lazy").slick({
			    lazyLoad: 'ondemand', // ondemand progressive anticipated
			    infinite: true,
			    dots: true
      });**/

    // tiktok analytics
    var ta = document.createElement("script");
    ta.type = "text/javascript";
    ta.async = true;
    ta.src =
      "https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BULM4JB8QOHHO3L85PV0";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ta, s);

    this.$store.commit("setIsIndex", true);
    this.$store.dispatch("initAnalytics");

    $(".single-item").slick({
      dots: true,
      speed: 500,
      arrows: true,
    });

    $(".center").slick({
      centerMode: true,
      centerPadding: "20px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },

        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".multiple-items").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  },
};
</script>