<template>
  <div>
      <div class="flex flex-col pr-10 space-y-5 overflow-auto text-sm text-gray-300 min-h-36 max-h-52 goal-text">
        <Goal v-for="goal in user.currentWeeklyGoals" :goal='goal' :key="goal.goal" />
        <div class="flex items-center w-3/4 p-2 space-x-4">
          <input type="text" @keyup.enter="addGoal"  v-model="newGoalText" placeholder="add goal" class="w-3/4 text-base input input-secondary input-bordered">
          <i
            @click="addGoal"
            class="text-3xl cursor-pointer las la-plus hover:text-purple-600 hover:scale-110"
          ></i>
        </div>
      </div>
    </div>
</template>

<script setup>
import Goal from './goal.vue'
import store from '../../store'
import {ref, computed} from 'vue'

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

</script>

<style>

</style>