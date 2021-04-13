<template>
  <div class="flex flex-row text-white h-1/6 xs:h-1/5">
    <div
      class="flex flex-row items-center w-full justify-between w-1/2 mt-11 mx-9"
    >
      <h1 class="text-5xl xs:text-4xl cursor-pointer" @click="$router.push('/')">Weekly Growth Goals</h1>
      <h2 v-if="auth" class="text-2xl flex flex-row">
        <!-- <span class="mr-2">{{user.username}}</span> -->
        <span
        @click="$router.push('/addgoal')"
          ><i
            class="las la-plus pr-2 transition duration-300 ease-in-out cursor-pointer hover:text-purple-600 transform hover:scale-110"
          ></i></span
        ><span @click="logout" class="hover:underline cursor-pointer hover:text-purple-600">{{user.username}}</span>
      </h2>
      <div v-else  class="flex flex-row items-end xs:flex-col">
        <h2 class="text-2xl text-purple-400 flex flex-row mr-3 xs:mr-0"><span @click="$router.push('/register')" class="hover:underline cursor-pointer hover:text-purple-600">register</span> </h2>
        <h3 class="text-lg flex flex-row"><span @click="$router.push('/login')" class="hover:underline cursor-pointer hover:text-purple-600">login</span></h3>
      </div>
      
      <!-- <p class="w-1/2 mt-4 xs:hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae, excepturi enim nostrum officiis recusandae blanditiis quae adipisci ullam provident rem tempore quasi ea suscipit aperiam neque dolores aliquid incidunt!</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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