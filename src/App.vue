<template>
  <div class="App h-full">
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
export default {
  data() {
    return {
    };
  },
  created(){
    console.log('created')
  },
  components: {
    Header
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