<template>
  <div class="notification absolute h-28 w-64 left-1/2 -ml-32 mt-4 flex justify-center items-center bg-purple-600 text-white text-center rounded-xl shadow-lg z-10">
    <i class="las la-times absolute left-0 top-0 p-2"></i>
    <p>Just some notification text for position testing</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .notification {
    animation: slide-down 1s forwards;
  }

  @keyframes slide-down {
    0% {
      top: -7rem;
    }
    100% {
      top: 0;
    }
  }
</style>