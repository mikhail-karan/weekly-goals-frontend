<template>
  <div class="flex flex-row flex-wrap container mx-auto xs:justify-center"> 
    <div class="flex flex-row flex-wrap" v-if="loadingDone">
      <WeeklyGoal v-for="goal in weeklyGoals" :key="goal.id" :goal="goal" />
    </div>
    <div class="flex flex-row flex-wrap" v-else>
      <loading-goal />
      <loading-goal />
      <loading-goal />
      <loading-goal />
      <loading-goal />
      <loading-goal />
    </div>
    <!-- <WeeklyGoal />
    <WeeklyGoal />
    <WeeklyGoal /> -->
  </div>
</template>

<script>
import axios from 'axios'
import WeeklyGoal from '../components/WeeklyGoal.vue'
import LoadingGoal from '../components/LoadingGoal.vue'
export default {
  data(){
    return {
      weeklyGoals: [],
      loadingDone: false
    }
  },
  components: {
    WeeklyGoal,
    LoadingGoal
  },
  created(){
    const baseUrl = this.$store.getters.getUrl
    axios.get(baseUrl + 'weekly-goals?Done_ne=true')
    .then(res => {
      setTimeout(()=> {
        this.loadingDone = true
      },300)
      
      console.log(res.data)
      this.weeklyGoals = res.data.reverse()
    })
  },
}
</script>

<style>
  
</style>