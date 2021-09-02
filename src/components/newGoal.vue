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
    <div>
      <div class="flex flex-col pr-10 space-y-5 overflow-auto text-sm text-gray-300 h-36 goal-text">
        <Goal v-for="goal in user.currentWeeklyGoals" :goal='goal' :key="goal.goal" />
        <div class="flex items-center w-3/4 p-2 space-x-4">
          <input type="text" @keyup.enter="addGoal"  v-model="newGoalText" placeholder="add goal" class="w-3/4 input">
          <i
            @click="addGoal"
            class="text-3xl cursor-pointer las la-plus hover:text-purple-600 hover:scale-110"
          ></i>
        </div>
      </div>
    </div>
    <div  class="flex justify-center space-x-3 status-bar">
      <div :class="{'active-status': activeDay === 1}" @click="store.dispatch('changeDay', 1)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">M</div>
        <div :class="checkDayStatus(1)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 2}" @click="store.dispatch('changeDay', 2)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">T</div>
        <div :class="checkDayStatus(2)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 3}" @click="store.dispatch('changeDay', 3)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">W</div>
        <div :class="checkDayStatus(3)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 4}" @click="store.dispatch('changeDay', 4)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">T</div>
        <div :class="checkDayStatus(4)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 5}" @click="store.dispatch('changeDay', 5)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">F</div>
        <div :class="checkDayStatus(5)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 6}" @click="store.dispatch('changeDay', 6)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">S</div>
        <div :class="checkDayStatus(6)" class="w-6 h-3 rounded-full pill"></div>
      </div>
      <div :class="{'active-status': activeDay === 0}" @click="store.dispatch('changeDay', 0)" class="flex flex-col items-center space-y-1 text-xs text-gray-400 cursor-pointer">
        <div class="day-ab">S</div>
        <div :class="checkDayStatus(0)" class="w-6 h-3 rounded-full pill"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
  import store from '../store'
  import {ref, computed} from 'vue'
  import Goal from './goal/goal.vue'
  import {getMonday, getSunday, daysLeft} from '../utils/functions'


  const activeDay = computed(() => store.getters.getDay)

  const newGoalText = ref('')

  const user = computed(() => store.getters.getUserNew)

  function addGoal(){
    if (newGoalText.value){
      store.dispatch('addWeeklyGoal', {
        id: Math.ceil(Math.random() * 10000),
        goal: newGoalText.value,
        status: 'created',
      })
      newGoalText.value = ''
    }
  }

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