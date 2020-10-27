<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  created: function () {
    this.updateWidth();
  }, 
  methods: {
    updateWidth: function () {
      window.addEventListener( 'resize', () => {
        this.$store.commit('setWindowWidth')
      }, false)
    }
  },
}

</script>

<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "GGX88 W01 Light";
  src: url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.eot'); /* IE9*/
  src: url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.eot?#iefix') format("embedded-opentype"), /* IE6-IE8 */
  url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.woff2') format("woff2"), /* chrome、firefox */
  url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.woff') format("woff"), /* chrome、firefox */
  url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.ttf') format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.svg#GGX88 W01 Light') format("svg"); /* iOS 4.1- */
}


</style>
