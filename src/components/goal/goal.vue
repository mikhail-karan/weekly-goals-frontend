<template>
  <div class="flex items-center space-x-4">
    <input @click="toggleGoal(goal.id)" type="checkbox" class="checkbox">
    <div @focusout='finishEdit' ref="goalInput" :contenteditable="contentEditable" @click="edit" :class="{'line-through': goal.status === 'done' }">{{goal.goal}}</div>
    <i v-if="contentEditable" @click="removeGoal(goal.id)" class="cursor-pointer las la-times text-error"></i>
  </div>
</template>

<script setup>
import {ref, nextTick} from 'vue'
import store from '../../store'
const props = defineProps({
  goal: Object
})

const goalInput = ref(null)

let contentEditable = ref(false)
function removeGoal(goalId){
  store.dispatch('deleteWeeklyGoal', goalId)
}

function edit(){
  contentEditable.value = true
  nextTick(()=> {
    goalInput.value.focus()
  })
}

function finishEdit(){
  contentEditable.value = false
  console.log(goalInput.value.innerText)
}

function toggleGoal(goalId){
    store.dispatch('toggleWeeklyGoal', goalId)
    
  }

</script>

<style>

</style>