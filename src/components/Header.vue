<template>
  <div class="flex flex-row container mx-auto text-white h-1/6 xs:h-1/5 xs:mb-6">
    <div
      class="flex flex-row items-center justify-between w-full mt-11 mx-9 xs:flex-col"
    >
      <router-link to="/" class="flex items-center h-full">
        <img class="h-full" src="../assets/logo.png" alt="">
        <h1 class="text-5xl xs:text-4xl cursor-pointer select-none" >Weekly Growth Goals</h1>
      </router-link>

      <h2 v-if="auth" class="text-2xl flex flex-row">
        <!-- <span class="mr-2">{{user.username}}</span> -->
        <span
        @click="$router.push('/addgoal')"
          ><i
            class="las la-plus pr-2 transition duration-300 ease-in-out cursor-pointer hover:text-purple-600 transform hover:scale-110"
          ></i></span
        ><a class="group cursor-pointer"><span class="hover:underline hover:text-purple-600">{{user.username}} </span>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <div class="hidden group-hover:flex absolute z-10 p-3 bg-cardColor shadow-md justify-cente rounded-md text-lg">
              <ul class="list-none">
                <li class="hover:underline hover:text-purple-600"><router-link to="/mygoals">my goals</router-link></li>
                <li class="hover:underline hover:text-purple-600" @click="logout">logout</li>
              </ul>
            </div>
          </transition>
        </a>
        
      </h2>
      <div v-else  class="flex flex-row items-end">
        <h2 class="text-2xl text-purple-400 flex flex-row mr-3"><span @click="$router.push('/register')" class="hover:underline cursor-pointer hover:text-purple-600">register</span> </h2>
        <h3 class="text-lg flex flex-row"><span @click="$router.push('/login')" class="hover:underline cursor-pointer hover:text-purple-600">login</span></h3>
      </div>
      
      <!-- <p class="w-1/2 mt-4 xs:hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae, excepturi enim nostrum officiis recusandae blanditiis quae adipisci ullam provident rem tempore quasi ea suscipit aperiam neque dolores aliquid incidunt!</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      dropdown: false
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed:{
    auth: function(){
      return this.$store.getters.getToken
    },
    user: function(){
      return this.$store.getters.getUser
    }
  }
};
</script>
  
<style>
</style>