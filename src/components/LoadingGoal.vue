<template>
  <div
    class="card flex flex-col w-70 h-40 md:h-48 md:w-96 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
  >
    <div
      class="flex bg-primary w-full flex-row justify-between text-gray-300"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},

  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.card {
  @apply bg-primary;
  min-width: 17.5rem;
  background: linear-gradient(270deg, #2E3A48 , #7B78FF);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

.encourage:hover {
  @apply transition-shadow;
}

.own-goal {
  @apply border-secondaryColor border-2 shadow-xl;
}

.done-goal {
  @apply border-green-400 border-2;
}

.opening-goal {
  @apply w-140 h-96;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>