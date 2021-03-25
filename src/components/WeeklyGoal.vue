<template>
  <div
    class="card flex flex-col w-70 h-40 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl cursor-pointer"
  >
    <div class="flex bg-primary w-full flex-row justify-between text-gray-300">
      <router-link to="/register" class="text-sm">{{
        goal.User.username
      }}</router-link>
      <div v-if="daysRemaining > 0" class="text-sm">{{ daysRemaining }} days remaining</div>
      <div v-else class="text-sm">expired</div>
    </div>
    <div class="flex w-full justify-center text-lg">{{ goal.weeklyGoal }}</div>
    <div class="flex w-full flex-row justify-end">
      <!-- <div v-show="editable" class="text-2xl flex items-center">
        <i class="las la-check mr-2"></i>
        <i class="lar la-trash-alt"></i>
      </div> -->
      <div
        class="text-2xl w-10 h-10 rounded-full shadow-md flex justify-center items-center bg-secondaryColor transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
      >
        <i class="las la-hands-helping"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editable: true,
      daysRemaining: 0
    };
  },
  props: {
    goal: Object,
  },
  mounted(){
    this.daysRemaining = this.weekCalculation()
  },
  methods: {
    weekCalculation() {
      const createdAtStr = Date.parse(this.goal.createdAt);
      const oneDay = 24 * 60 * 60 * 1000;
      const today = Date.now();
      const daysSinceCreated = (today - createdAtStr)/oneDay
      const daysRemaining = Math.round(7 - daysSinceCreated)
      return daysRemaining;
    },
  },
};
</script>

<style>
.card {
  @apply bg-primary;
}

.encourage:hover {
  @apply transition-shadow;
}
</style>