<template>
  <div class="flex flex-col space-y-4">
    
    <div class="flex flex-col card lg:card-side bordered ">
      
      <div @click.prevent.stop="deactivateWrite" class="card-body">
        <h2 class="card-title">Journal for {{daysOfTheWeek[activeDay]}}</h2>
        <div class="space-y-4" v-if="user.currentJournal[activeDay].journal.length > 0">
          <div v-for="journal in user.currentJournal[activeDay].journal" :key="journal.id" class="py-6 card sm:py-12">
            <div class="flex flex-row justify-end pr-6 text-xs text-gray-400">{{journal.date}}</div>
            <p class="p-6">{{journal.entry}}</p>
            <hr>
          </div>
          
        </div>
        
        <h3>Fill out your journal daily to complete your streak</h3>
        <div @click.prevent.stop="activateWrite" v-if="!writeActive" class="card-actions">
          <input type="text" :placeholder="returnPlaceholder()" class="w-3/4 input input-secondary input-bordered">
          <button class="btn btn-secondary">Write</button>
        </div>
        <div @click.prevent.stop="activateWrite" v-else class="card-actions">
          <textarea @keyup.enter="addJournalEntry" v-model="journalEntry" ref="journalInput" class="w-full h-24 textarea textarea-bordered textarea-secondary focus" :placeholder="returnPlaceholder()"></textarea>
          <button @click="addJournalEntry" class="btn btn-secondary">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import store from '../store'
  import {ref, computed, nextTick} from 'vue'
  const journalInput = ref(null)

  const user = computed(()=>store.getters.getUserNew)
  const journalEntry = ref('')

  const activeDay = computed(() => store.getters.getDay)

  const props = defineProps({
    daysOfTheWeek: Array
  })

  const writeActive = ref(false)

  function activateWrite(){
    writeActive.value = true;
    nextTick(()=>{
       journalInput.value.focus()
    })
   
  }

  function deactivateWrite(){
    writeActive.value = false
  }

  function addJournalEntry(){
    if (journalEntry.value){
      store.dispatch('addJournalEntry', {
        day: activeDay.value,
        entry: journalEntry.value
      })
      journalEntry.value = ''
    }
  }

  function returnPlaceholder(){
    return user.value.currentJournal[activeDay.value].journal.length > 0 ? 'Write another entry' : 'Write your first entry'
  }

</script>

<style>

</style>