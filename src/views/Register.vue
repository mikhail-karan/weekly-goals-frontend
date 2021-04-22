<template>
  <div class="flex flex-row items-center w-full max-h-9/12 pt-4 pb-4 flex-wrap">
    <section class="flex flex-col items-center h-full md:flex-row w-full">
      <div class="container mx-auto h-full">
        <div class="flex justify-center px-2 py-6 h-full">
          <terms-of-service v-if="showPrivacy" @go-back="showPrivacy = false" />
          <div
          v-else
            class="flex w-full rounded-lg bg-cardColor xl:w-3/4 lg:w-11/12 lg:shadow-xl"
          >
            
            <div
              class="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-blue-1300 lg:block lg:w-6/12"
            >
              <div class="relative z-10 m-12 text-left">
                <h2
                  class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-purple-400 sm:text-3xl title-font"
                >
                  Create an account.
                </h2>
                <div
                  class="w-full mt-16 mb-8 text-base leading-relaxed text-white sm:md:w-3/3 lg:text-1xl"
                >
                  Join our community in keeping yourself and everyone else accountable to their weekly growth goals. Small improvments can lead to large gains as long as we can stick with them!
                </div>
              </div>
            </div>
            
            <div
              class="w-full px-8 py-24 xs:py-9 border-gray-100 rounded-lg bg-blue-1300 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s"
            >
              <div class="relative z-10 text-left">
                <div class="flex justify-enter lg:py-6">
                  <button
                    type="button"
                    class="inline-flex opacity-80 pointer-events-none w-full px-4 py-3 font-semibold text-secondary border border-gray-300 rounded-lg bg-blue-1300 hover:bg-blue-700 hover:text-white focus:bg-gray-100"
                  >
                    <div class="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="w-6 h-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          />
                        </defs>
                        <clipPath id="b">
                          <use xlink:href="#a" overflow="visible" />
                        </clipPath>
                        <path
                          clip-path="url(#b)"
                          fill="#FBBC05"
                          d="M0 37V11l17 13z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#4285F4"
                          d="M48 48L17 24l-4-3 35-10z"
                        />
                      </svg>
                      <span class="ml-4 text-white"> Log in with Google </span>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="inline-flex opacity-70 pointer-events-none px-4 py-3 ml-8 font-semibold text-white border border-gray-300 rounded-lg bg-blue-1300 hover:bg-blue-870 focus:bg-gray-100 hover:text-blue-500"
                  >
                    <div class="flex items-center justify-center">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <form class="mt-2" action="#" method="POST">
                  <div>
                    <label
                      class="block text-base font-medium leading-relaxed text-gray-400"
                      >User Name</label
                    >
                    <input
                      type="text"
                      v-model="name"
                      name=""
                      id=""
                      placeholder="Your User Name "
                      class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>
                  <div class="mt-4">
                    <label
                      class="block text-base font-medium leading-relaxed text-gray-400"
                      >Email Address</label
                    >
                    <input
                      type="email"
                      v-model="email"
                      name=""
                      id=""
                      placeholder="Your Email "
                      class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>
                  <div class="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                      <label
                        class="text-base font-medium leading-relaxed text-gray-400"
                        for="password"
                        minlength="6"
                      >
                        Password
                      </label>
                      <input
                        class="block w-full px-4 py-2 mt-2 text-base text-blue-400 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                        id="password"
                        v-model="password"
                        type="password"
                        placeholder="Your Password"
                      />
                      <!-- <p class="mt-1 text-xs italic text-purple-500">
                        Please fill out this field.
                      </p> -->
                    </div>
                    <div class="w-full px-3 md:w-1/2">
                      <label
                        class="text-base font-medium leading-relaxed text-gray-400"
                        for="confirm"
                      >
                        Confirm
                      </label>
                      <input
                        class="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                        id="confirm"
                        v-model="password2"
                        type="password"
                        placeholder="Confirm"
                      />
                    </div>
                    <div class="w-full flex px-3 items-center pt-4">
                      
                      <input
                        class="w-5 h-5"
                        id="newsletter"
                        type="checkbox"
                        name="newsletter"
                        v-model="newsletter"
                        value="newsletter"
                      >
                      <label
                        class="font-medium text-gray-400 ml-2 text-xs"
                        for="newsletter"
                      >
                        Yes, sign me up for the HTML All The Things newsletter
                      </label>
                    </div>

                  </div>
                  <p class="font-medium text-purple-500 ml-2 text-xs my-0">By creating an account, you agree with our <span @click="showPrivacy = true" class="underline text-purple-400 hover:text-purple-500 cursor-pointer">Terms of Service</span></p>
                  <button
                    @click.prevent="register"
                    type="submit"
                    class="block w-full px-4 py-3 mt-3 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-purple-700 hover:from-purple-500 to-purple-500 hover:to-purple-700 focus:shadow-outline focus:outline-none"
                  >
                    Register
                  </button>
                  <p v-if="error" class="mt-1 text-xs italic text-red-500">
                    {{error}}
                  </p>
                </form>
                <p class="mt-8 text-center text-white">
                  Already have an account?
                  <router-link
                    to="/login"
                    class="font-semibold text-purple-400 hover:text-purple-700"
                    >Sign In</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import TermsOfService from "../components/TermsOfService.vue"
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      error: "",
      newsletter: [],
      showPrivacy: false
    };
  },
  components: {
    TermsOfService
  },
  methods: {
    register() {
      if (!this.name){
        this.error = 'Please enter your username'
        return
      }
      if (!this.email){
        this.error = 'Please enter your email'
        return
      }
      if (!this.password){
        this.error = 'Please enter a password'
        return
      }
      if (this.password != this.password2){
        this.error = 'Password confirmation incorrect'
        return
      }
      const baseUrl = this.$store.getters.getUrl
      debugger
      axios
        .post(baseUrl + "auth/local/register", {
          username: this.name,
          email: this.email,
          password: this.password,
          Newsletter: this.newsletter.length ? true : false
        })
        .then((response) => {
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
          this.$store.dispatch('setUser', response.data.user)
          this.$store.dispatch('setToken', response.data.jwt)
          this.$router.push('/')
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error);
        });
    },
  },
};
</script>

<style scoped>
input[type=text]:focus-within ~ label,
input[type=text]:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}

input[type=text]:focus-within ~ label {
  @apply text-secondaryColor;
}
</style>