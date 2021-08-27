<template>
  <div class="card lg:card-side bordered">
  <div @click.prevent.stop="deactivateWrite" class="card-body">
    <h2 class="card-title">Journal for {{daysOfTheWeek[activeDay]}}</h2> 
    <p>Fill out your journal daily to complete your streak</p> 
    <div @click.prevent.stop="activateWrite" v-if="!writeActive" class="card-actions">
      <input type="text" placeholder="Write your first entry" class="w-3/4 input input-secondary input-bordered">
      <button class="btn btn-secondary">Write</button> 
    </div>
    <div @click.prevent.stop="activateWrite" v-else class="card-actions">
      <textarea class="w-full h-24 textarea textarea-bordered textarea-secondary" placeholder="Write your first entry"></textarea>
      <button class="btn btn-secondary">Post</button> 
    </div>
  </div>
</div>
</template>

<script setup>
  import store from '../store'
  import {ref, computed} from 'vue'

  const activeDay = computed(() => store.getters.getDay)

  const props = defineProps({
    daysOfTheWeek: Array
  })

  const writeActive = ref(false)

  function activateWrite(){
    writeActive.value = true;
  }

  function deactivateWrite(){
    writeActive.value = false
  }
</script>

<style>

</style>