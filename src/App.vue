<template>
  <div class="h-full App">
    <TopBar />
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component class="min-height" :is="Component" :key="refreshGoalsKey" />
      </transition>
    </router-view>
    <Footer />
    <cookie-law theme="dark-lime"></cookie-law>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TopBar from "./components/HattBar.vue";
import jwt_decode from "jwt-decode";
import {onMounted, computed} from 'vue'
import store from './store'
import router from './router'

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

</script>

<style>

html,
body,
#app {
  @apply bg-backgroundColor h-full font-body;
}

h1,
h2,
h3 {
  @apply font-headings;
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