<template>
  <div class="w-full">
    callback recieved
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import store from '../store'
export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    console.log( location.search, route.params.providerName )
    const url = store.getters.getUrl + 'auth/' + route.params.providerName + '/callback' + location.search
    console.log(url)
    axios.get(url)
    .then(res => {
      if (res.status !== 200){
        throw new Error(`Could't login to Strapi. Status:  + ${res.status}`)
      }
      const data = res.data
      store.dispatch("setToken", data.jwt)
      store.dispatch("setUser", data.user);
      router.push('/')
    })
  }
}
</script>

<style>

</style>