<template>
  <div class="container mx-auto" > 
    <div class="flex flex-row flex-wrap xs:justify-center" v-if="loadingDone">
      <WeeklyGoal v-for="goal in weeklyGoals" :key="goal.id" :goal="goal" />
    </div>
    <div class="flex flex-row flex-wrap xs:justify-center" v-else>
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
  mounted(){
    const baseUrl = this.$store.getters.getUrl
    axios.get(baseUrl + 'active-goals')
    // axios.get(baseUrl + 'weekly-goals?Done_ne=true&_sort=Created:asc')
    .then(res => {
      setTimeout(()=> {
        this.loadingDone = true
      },300)
      
      console.log(res.data)
      this.weeklyGoals = res.data
    })
  },
  computed: {
    refreshGoalsKey(){
      return this.$store.getters.getGoalsKey
    }
  }
}
</script>
