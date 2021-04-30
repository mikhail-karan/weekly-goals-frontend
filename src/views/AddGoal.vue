<template>
  <div class="flex flex-col items-center">
    <div
      class="flex container xs:h=1/2 items-center justify-center border-purple-600 border-b-2 xs:w-full"
    >
      <div
        class="card flex flex-col w-180 h-48 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4"
      >
        <div
          class="flex bg-primary w-full flex-row justify-between text-gray-300 text-lg xs:text-sm"
        >
          <router-link to="/register">{{user.username}}</router-link>
          <div class="">7 days</div>
        </div>
        <!-- <div class="flex w-full justify-center text-lg">This is a test weekly goal</div> -->
        <textarea
          rows="3"
          ref="goalInput"
          name="goal"
          v-model="goal"
          :maxlength="maxCharCount"
          class="w-3/4 xs:w-5/6 m-auto bg-primary border-primary text-white p-2 outline-none focus:border-purple-500 border-2 resize-none"
          placeholder="Enter weekly goal"
          id="goalInput"
        />
        <div class="flex w-full flex-row justify-between">
          <div class="text-lg flex items-center text-gray-300">
            <div>{{currentCharCount}}/</div>
            <div>{{maxCharCount}} max</div>
          </div>
          <div
            @click="addGoal"
            class="text-2xl w-10 h-10 xs:w-9 xs:h-9 rounded-full shadow-md flex justify-center items-center bg-purple-500 transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-plus"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="cards flex container flex-col flex-wrap xs:w-full">
      <h2 class="text-white text-2xl mt-3 h-7 md:ml-4 xs:text-center">{{user.username}}'s Goals</h2>
      <div class="flex flex-row flex-wrap xs:flex-col xs:justify-start xs:items-center xs:w-full">
        <weekly-goal v-for="goal in reversedUserGoals" :key="goal.id" :goal="goal" />
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WeeklyGoal from '../components/WeeklyGoal.vue'
import store from '../store'
import {ref, computed, onMounted} from 'vue'

export default {
  setup(){
    let goal = ref('')
    let usersGoals = ref([])
    const user = store.getters.getUser
    const maxCharCount = 240
    const goalInput = ref(null)

    const baseUrl = store.getters.getUrl

    let reversedUserGoals = computed(()=>usersGoals.value.slice(0).reverse())
    let currentCharCount = computed(()=>goal.value.length)

    function init(){
      goalInput.value.focus();
      axios.get(baseUrl + 'weekly-goals?User.id='+ user.id)
      .then(res => {
        console.log(res.data)
        usersGoals.value = res.data
      })
    }

    function addGoal(){
      let payload = {
        User: store.getters.getUser,
        weeklyGoal: goal.value,
        Done: false,
        encouragedUsers: [
          store.getters.getUser
        ]
      }
      axios.post(baseUrl + 'weekly-goals', payload)   
      .then(res => {
        console.log(res.data)
        axios.get(baseUrl + 'weekly-goals?User.id='+ user.id)
        .then(res => {
          console.log(res.data)
          usersGoals.value = res.data
          goal.value = ''
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

    onMounted(init);

    return {
      goal,
      usersGoals,
      user,
      maxCharCount,
      addGoal,
      reversedUserGoals,
      currentCharCount,
      goalInput,
      WeeklyGoal
    }


  },
};
</script>

<style>
   .cards::-webkit-scrollbar {
  width: 0.3em;
  }
  
  .cards::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  
  .cards::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
</style>