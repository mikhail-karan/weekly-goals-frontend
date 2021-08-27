<template>
  <section class="flex flex-col items-center">
    <warningMessage class="md:w-180" message="This is just a demo, your tasks won't be saved or synced. Please register or login." />
    <newGoal :activeDay='activeDay' class="md:w-180" />
    <journal :activeDay='activeDay' :daysOfTheWeek='daysOfTheWeek' class="md:w-180" />
  </section>
  

</template>

<script setup>
import {ref} from 'vue'
import newGoal from '../components/newGoal.vue'
import warningMessage from '../components/WarningMessage.vue'
import journal from '../components/Journal.vue'

const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const activeDay = ref(1)

</script>

<style>

</style>