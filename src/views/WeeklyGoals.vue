<template>
  <div class="flex flex-row flex-wrap pt-8"> 
    <WeeklyGoal v-for="goal in weeklyGoals" :key="goal.id" :goal="goal" />
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
  created(){
    axios.get('http://localhost:1337/weekly-goals')
    .then(res => {
      console.log(res.data)
      this.weeklyGoals = res.data
    })
  }
}
</script>

<style>

</style>