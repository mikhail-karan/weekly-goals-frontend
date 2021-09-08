<template>
  <section class="flex flex-col items-center">
    <warningMessage class="md:w-180" message="This is just a demo, your tasks won't be saved or synced. Please register or login." />
    <newGoal class="md:w-180" />
    <journal :daysOfTheWeek='daysOfTheWeek' class="md:w-180" />
  </section>
  

</template>

<script setup>
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

</script>

<style>

</style>