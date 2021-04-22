<template>
  <div
    @click="openGoal()" 
    class="card flex flex-col w-70 h-40 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-2  hover:shadow-xl cursor-pointer"
    :class="{'own-goal': currentUser.id == goal.User.id, 'done-goal': goal.Done, 'opening-goal': enlarge}"
  >
    <div class="flex bg-primary w-full flex-row justify-between text-gray-300">
      <div class="text-sm">{{
        goal.User.username
      }}</div>
      <div v-if="goal.Done" class="text-sm">done</div>
      <div v-else-if="daysRemaining > 0" class="text-sm">{{ daysRemaining }} days remaining</div>
      <div v-else class="text-sm">expired</div>
    </div>
    <div class="flex w-full justify-center text-lg">{{ goal.weeklyGoal }}</div>
    <div class="flex w-full flex-row items-center justify-end">
      <!-- <div v-show="editable" class="text-2xl flex items-center">
        <i class="las la-check mr-2"></i>
        <i class="lar la-trash-alt"></i>
      </div> -->
      <span class="mr-2 text-sm text-gray-300">{{encouraged}}</span>
      <div
        @click.prevent.stop="encourage"
        class="text-2xl w-10 h-10 rounded-full shadow-md flex justify-center items-center bg-secondaryColor transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
      >
        <i class="las la-hands-helping"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      editable: true,
      daysRemaining: 0,
      enlarge: false
    };
  },
  props: {
    goal: Object,
  },
  
  mounted(){
    this.daysRemaining = this.weekCalculation()
  },
  methods: {
    weekCalculation() {
      const createdAtStr = Date.parse(this.goal.created_at);
      const oneDay = 24 * 60 * 60 * 1000;
      const today = Date.now();
      console.log('today: ' + today, 'created: ' + createdAtStr)
      const daysSinceCreated = (today - createdAtStr)/oneDay
      const daysRemaining = Math.round(7 - daysSinceCreated)
      return daysRemaining;
    },
    encourage() {
      let goal = this.goal
      const userEncouraged = goal.encouragedUsers.findIndex(encourgement => encourgement.id === this.currentUser.id)
      if (userEncouraged < 0 && currentUser.id){
        goal.encouragedUsers.push(this.currentUser)
        axios.put(this.baseUrl + 'weekly-goals/'+ goal.id, goal)
        .then(res => {
          console.log(res)
        })
      }
    },
    openGoal(){
      this.$router.push({name: 'goal', params: {id: this.goal.id}})
    }
  },
  computed: {
    currentUser: function(){
      return this.$store.getters.getUser
    },
    baseUrl: function(){
      return this.$store.getters.getUrl
    },
    encouraged: function(){
      return this.goal.encouragedUsers.length
    },
    goalId: function(){
      return this.goal.id
    }
  }
};
</script>

<style>
.card {
  @apply bg-primary;
  min-width: 17.5rem;
}

.encourage:hover {
  @apply transition-shadow;
}

.own-goal {
  @apply border-secondaryColor border-2 shadow-xl
}

.done-goal {
  @apply border-green-400 border-2
}

.opening-goal {
    @apply w-140 h-96
  }

</style>