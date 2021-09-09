<template>
  <div class="flex items-center space-x-4">
    <input @click="toggleGoal(goal.id)" type="checkbox" class="checkbox">
    <div @focusout='finishEdit' ref="goalInput" :contenteditable="contentEditable" @click="edit" class="p-1 " :class="{'line-through': goal.status === 'done' }">{{goal.goal}} <span><i v-if="contentEditable" @click.stop.prevent="removeGoal(goal.id)" class="ml-2 cursor-pointer las la-times text-error"></i></span></div>
    
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
  // TODO: Persist edited weekly goal
  if (goalInput.value){
    console.log(goalInput.value.innerText)
  }
}

function toggleGoal(goalId){
    store.dispatch('toggleWeeklyGoal', goalId)
    
  }

</script>

<style>

</style>