<template>
  <div class="flex flex-col w-4/5 mx-auto pt-8 xs:justify-center"> 
    <section class="flex flex-row justify-evenly">
      <div class="flex flex-col">
        <h2 class="text-white">Completed Goals</h2>
        <div class="text-white">{{done.length}}</div>
      </div>
      <div class="flex flex-col">
        <h2 class="text-white">Active Goals</h2>
        <div class="text-white">{{active.length}}</div>
      </div>
    </section>
    <section>
      <h2 class="text-white">Your Active Goals</h2>
      <div class="flex flex-row overflow-auto w-full">
        <WeeklyGoal @click="$router.push({name: 'goal', params: {id: goal.id}})" v-for="goal in active" :key="goal.id" :goal="goal" />
      </div>
    </section>
    <section>
      <h2 class="text-white">Your Finished Goals</h2>
      <div class="flex flex-row">
        <WeeklyGoal @click="$router.push({name: 'goal', params: {id: goal.id}})" v-for="goal in done" :key="goal.id" :goal="goal" />
      </div>
    </section>
    <section>
      <h2 class="text-white">Your Expired Goals</h2>
      <div class="flex flex-row">
        <WeeklyGoal @click="$router.push({name: 'goal', params: {id: goal.id}})" v-for="goal in expired" :key="goal.id" :goal="goal" />
      </div>
    </section>
    <!-- <WeeklyGoal />
    <WeeklyGoal />
    <WeeklyGoal /> -->
  </div>
</template>

<script>
import axios from 'axios'
import WeeklyGoal from '../components/WeeklyGoal.vue'
export default {
  data(){
    return {
      weeklyGoals: []
    }
  },
  components: {
    WeeklyGoal
  },
  methods: {
    weekCalculation(goal) {
      const createdAtStr = Date.parse(goal.createdAt);
      const oneDay = 24 * 60 * 60 * 1000;
      const today = Date.now();
      const daysSinceCreated = (today - createdAtStr)/oneDay
      const daysRemaining = Math.round(7 - daysSinceCreated)
      return daysRemaining;
    },
  },
  created(){
    const currentUser = this.$store.getters.getUser
    axios.get('http://localhost:1337/weekly-goals?User.id='+ currentUser.id)
    .then(res => {
      console.log(res.data)
      this.weeklyGoals = res.data.reverse()
    })
  },
  computed: {
    active: function(){
      return this.weeklyGoals.filter(goal => {
        return !goal.Done && this.weekCalculation(goal) > 0
      });
    },
    done: function(){
      return this.weeklyGoals.filter(goal => {
        return goal.Done
      });
    },
    expired: function(){
      return this.weeklyGoals.filter(goal => {
        return !goal.Done && this.weekCalculation(goal) <= 0
      });
    }
  }
}
</script>

<style>

</style>