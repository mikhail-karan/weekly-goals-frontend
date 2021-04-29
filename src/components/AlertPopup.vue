<template>
  <div class="absolute z-10 w-56 h-28 left-1/2 -ml-28 mt-6 pt-2 bg-purple-600 text-white flex flex-col items-center rounded-xl shadow-lg">
    <p class="text-center mb-2">Are you sure you want to delete your account?</p>
    <div class="flex justify-around w-full">
      <button @click="confirm" class="button">Yes</button>
      <button @click="$emit('close-alert')" class="button">No</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import store from '../store'
export default {
  setup(props, { emit }){
    const confirm = async () =>{
      const currentUser = store.getters.getUser
      const baseUrl = store.getters.getUrl
      let userGoals = await axios.get(baseUrl + 'weekly-goals?User.id='+ currentUser.id)
      userGoals.data.forEach(goal => {
        axios.delete(baseUrl + "weekly-goals/" + goal.id)
      });
      axios.delete(baseUrl + "users/" + currentUser.id)
      store.dispatch('logout')
      store.dispatch('incrementGoalKey')
      emit('close-alert')
    }
    return {
      confirm
    }
  }
}


</script>

<style scoped>
  .button { @apply px-4 py-1 text-center flex justify-center items-center bg-purple-400 shadow-md }
</style>