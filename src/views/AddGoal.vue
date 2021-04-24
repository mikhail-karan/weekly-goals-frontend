<template>
  <div class="flex flex-col items-center h-3/4">
    <div
      class="flex w-1/2 h-3/4 xs:h=1/2 items-center justify-center border-purple-600 border-b-2 xs:w-full sm:w-3/4"
    >
      <div
        class="card flex flex-col w-5/6 h-3/4 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4"
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
          id=""
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
    <div class="cards flex w-4/6 flex-col h-full overflow-auto flex-wrap xs:w-full">
      <h2 class="text-white text-2xl mt-3 h-7 md:ml-4 xs:text-center">{{user.username}}'s Goals</h2>
      <div class="flex flex-row xs:flex-col xs:justify-start xs:items-center xs:w-full">
        <weekly-goal v-for="goal in reversedUserGoals" :key="goal.id" :goal="goal" />
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WeeklyGoal from '../components/WeeklyGoal.vue'
export default {
  name: "AddGoal",
  data(){
    return {
      goal: '',
      usersGoals: [],
      user: {},
      maxCharCount: 240
    }
  },
  components: {
    WeeklyGoal
  },
  methods: {
    addGoal(){
      let payload = {
        User: this.$store.getters.getUser,
        weeklyGoal: this.goal,
        Done: false,
        encouragedUsers: [
          this.$store.getters.getUser
        ]
      }
      axios.post(this.baseUrl + 'weekly-goals', payload)   
      .then(res => {
        console.log(res.data)
        axios.get(this.baseUrl + 'weekly-goals?User.id='+ this.user.id)
        .then(res => {
          console.log(res.data)
          this.usersGoals = res.data
          this.goal = ''
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.$refs.goalInput.focus();
    this.user = this.$store.getters.getUser
    axios.get(this.baseUrl + 'weekly-goals?User.id='+ this.user.id)
    .then(res => {
      console.log(res.data)
      this.usersGoals = res.data
    })

  },
  computed: {
    currentUser(){
      return this.$store.getters.getUser
    },
    reversedUserGoals(){
      return this.usersGoals.reverse()
    },
    baseUrl: function(){
      return this.$store.getters.getUrl
    },
    currentCharCount: function(){
      return this.goal.length
    }
  }
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