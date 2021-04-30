<template>
  <div class="App h-full">
    <top-bar />
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component class="min-height" :is="Component" :key="refreshGoalsKey" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TopBar from "./components/HattBar.vue";
import jwt_decode from "jwt-decode";
import {onMounted, computed} from 'vue'
import store from './store'
import router from './router'
export default {
  setup(props){

    function init(){
      const token = store.getters.getToken
      if (token) {
        store.dispatch("setToken", token); //Set axios headers
        const decoded = jwt_decode(token);
        let currentTime = new Date().getTime() / 1000;
        if (currentTime > decoded.exp) {
          //Check to see if auth token is expired
          store.dispatch("logout");
          router.push("/");
        }
      }
    }

    const refreshGoalsKey = computed(() => store.getters.getGoalsKey)

    onMounted(init)

    return {
      refreshGoalsKey
    }
  },
  components: {
    Header,
    TopBar,
    Footer,
  }

};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Francois+One|Josefin+Sans&display=swap"); */
@import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Open+Sans&display=swap');

html,
body,
#app {
  @apply bg-backgroundColor h-full;
  font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h3 {
  font-family: "Francois One", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.min-height {
  min-height: 75%;
}
</style>