<template>
  <div class="flex flex-col justify-center py-6 space-y-2 sm:py-12">
  <div>{{getMonday(new Date())}} - {{getSunday(new Date())}}</div>
  <div class="relative flex flex-col p-6 space-y-5 card bordered bg-base-100 sm:max-w-xl sm:mx-auto rounded-2xl">
    <div class="flex justify-between text-xs text-gray-400">
      <div class="flex items-center space-x-2">
        <img src="https://eu.ui-avatars.com/api/?name=Mike" class="w-8 rounded-full" />
        <div class="">Mike</div>
      </div>
      <div class="flex items-center">{{daysLeft()}}</div>
    </div>
    <GoalCard />
    <div  class="flex justify-center space-x-3 status-bar">
      <div v-for="status in days" :key="status" :class="{'active-status': activeDay === status.dayNum}" @click="store.dispatch('changeDay', status.dayNum)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">{{status.day}}</div>
        <div :class="checkDayStatus(status.dayNum)" class="w-6 h-3 rounded-full pill"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
  import store from '../store'
  import {ref, computed} from 'vue'
  import GoalCard from './goal/GoalCard.vue'
  import {getMonday, getSunday, daysLeft} from '../utils/functions'

  const days = [
    {
      dayNum: 1,
      day: 'M'
    },
    {
      dayNum: 2,
      day: 'T'
    },
    {
      dayNum: 3,
      day: 'W'
    },
    {
      dayNum: 4,
      day: 'T'
    },
    {
      dayNum: 5,
      day: 'F'
    },
    {
      dayNum: 6,
      day: 'S'
    },
    {
      dayNum: 0,
      day: 'S'
    },
  ]


  const activeDay = computed(() => store.getters.getDay)


  const user = computed(() => store.getters.getUserNew)

  function checkDayStatus(day){
    // const _today = 4
    const _today = new Date().getDay()
    if (day > _today || (_today !== 0 && day === 0)){
      return 'bg-gray-300 disabled'
    }
    else if(user.value.currentJournal[day].journal.length > 0){
      return 'bg-purple-400'
    }
    else {
      return 'bg-red-400'
    }
  }
</script>

<style>
.goal-text::-webkit-scrollbar {
  width: 0.3em;
}

.goal-text::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.goal-text::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.active-status .pill {
  @apply border-2 shadow-xl w-7 border-secondary;
}
.active-status .day-ab {
  @apply font-bold;
}

</style>