<template>
  <section class="flex w-full justify-center text-white mt-2">
    <a class="underline border-r px-4" href="/privacy.html">Privacy Policy</a>
    <span class="px-4">Copyright {{currentYear}}</span>
  </section>
</template>

<script>
export default {
  computed: {
    currentYear: function(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>