<template>
  <div
    class="container flex flex-row mx-auto text-white h-1/6 xs:h-1/5 xs:mb-6"
  >
    <div
      class="flex flex-row items-center justify-between w-full mt-11 mx-9 xs:flex-col"
    >
      <router-link to="/" class="flex items-center h-full">
        <img class="h-full" src="../assets/logo.png" alt="" />
        <h1 class="text-5xl cursor-pointer select-none xs:text-4xl">
          Weekly Growth Goals
        </h1>
      </router-link>

      <h2 v-if="auth" class="flex flex-row text-2xl">
        <!-- <span class="mr-2">{{user.username}}</span> -->
        <span @click="$router.push('/addgoal')"
          ><i
            class="pr-2 transition duration-300 ease-in-out transform cursor-pointer las la-plus hover:text-purple-600 hover:scale-110"
          ></i></span
        ><a class="cursor-pointer group"
          ><span class="select-none hover:underline hover:text-purple-600"
            >{{ user.username }}
          </span>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              class="absolute z-10 hidden p-3 text-lg rounded-md shadow-md group-hover:flex bg-cardColor justify-cente"
            >
              <ul class="list-none">
                <li class="select-none hover:underline hover:text-purple-600">
                  <router-link to="/mygoals">my goals</router-link>
                </li>
                <li
                  class="select-none hover:underline hover:text-purple-600"
                  @click="logout"
                >
                  logout
                </li>
                <li
                  class="text-red-500 select-none hover:underline hover:text-red-600"
                  @click="alertPopupStatus = !alertPopupStatus"
                >
                  delete account
                </li>
              </ul>
            </div>
          </transition>
        </a>
      </h2>
      <div v-else class="flex flex-row items-end">
        <h2 class="flex flex-row mr-3 text-2xl text-purple-400">
          <span
            @click="$router.push('/register')"
            class="cursor-pointer hover:underline hover:text-purple-600"
            >register</span
          >
        </h2>
        <h3 class="flex flex-row text-lg">
          <span
            @click="$router.push('/login')"
            class="cursor-pointer hover:underline hover:text-purple-600"
            >login</span
          >
        </h3>
      </div>

      <!-- <p class="w-1/2 mt-4 xs:hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae, excepturi enim nostrum officiis recusandae blanditiis quae adipisci ullam provident rem tempore quasi ea suscipit aperiam neque dolores aliquid incidunt!</p> -->
    </div>
  </div>
  <Teleport to="#app">
    <alert-popup
      @close-alert="alertPopupStatus = false"
      v-if="alertPopupStatus"
    />
  </Teleport>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      dropdown: false,
      alertPopupStatus: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    auth: function () {
      return this.$store.getters.getToken;
    },
    user: function () {
      return this.$store.getters.getUser;
    },
  },
};
</script>
  
