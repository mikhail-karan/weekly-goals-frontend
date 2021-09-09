<template>
  <div class="py-6 card sm:py-12 bg-base-100">
    <i v-if="contentEditable" @mousedown="removeJournal(journal.id)" class="absolute right-0 ml-2 cursor-pointer las la-times text-error"></i>
    <div class="flex flex-row justify-end pr-6 text-xs text-gray-400">{{journal.date}}</div>
    <p @focusout='finishEdit' ref="journalInput" :contenteditable="contentEditable" @click="edit" class="p-6">{{journal.entry}}</p>
    <hr>
  </div>
</template>

<script setup>
import {ref, nextTick, computed} from 'vue'
import store from '../../store'
const props = defineProps({
  journal: Object
})

const activeDay = computed(() => store.getters.getDay)

const journalInput = ref(null)

let contentEditable = ref(false)

function removeJournal(journalId){
  store.dispatch('deleteJournal', {
    id: journalId,
    day: activeDay.value
  })
}

function edit(){
  contentEditable.value = true
  nextTick(()=> {
    journalInput.value.focus()
  })
}

function finishEdit(){
  contentEditable.value = false
  // TODO: Persist edited journal entry
  if (journalInput.value){
    console.log(journalInput.value.innerText)
  }
  
}


</script>

<style>

</style>