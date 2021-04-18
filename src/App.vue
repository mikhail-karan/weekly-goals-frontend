<template>
  <div class="App h-full">
    <top-bar />
    <Header />
      <router-view v-slot="{ Component }">
        <transition 
          name="fade"
          mode="out-in"
        >
          <component :is="Component"/>
        </transition>
      </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TopBar from './components/HattBar.vue'
import jwt_decode from "jwt-decode"
export default {
  data() {
    return {
    };
  },
  created(){
    const token = this.$store.getters.getToken
    if (token){
      this.$store.dispatch('setToken', token) //Set axios headers
      const decoded = jwt_decode(token)
      let currentTime = new Date().getTime() /1000
      if (currentTime > decoded.exp){ //Check to see if auth token is expired
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
    
  },
  components: {
    Header,
    TopBar
  }
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Francois+One|Josefin+Sans&display=swap');
  
  html, body, #app {
    /* background-color: #2E3A48; */
    @apply bg-backgroundColor h-full;
    font-family: 'Josefin Sans', sans-serif;
        
  }

  h1, h2, h3 {
    font-family: 'Francois One', sans-serif;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.1s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  

  
</style>