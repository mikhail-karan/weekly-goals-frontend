<template>
  <div class="flex flex-col items-center h-3/4">
    <div
      class="flex w-1/2 h-2/6 items-center justify-center border-purple-600 border-b-2 xs:w-5/6 sm:w-3/4"
    >
      <div
        class="card flex flex-col w-5/6 h-3/4 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4"
      >
        <div
          class="flex bg-primary w-full flex-row justify-between text-gray-300"
        >
          <router-link to="/register" class="text-sm">Username</router-link>
          <div class="text-sm">4 Days</div>
        </div>
        <!-- <div class="flex w-full justify-center text-lg">This is a test weekly goal</div> -->
        <textarea
          rows="2"
          ref="goalInput"
          name="goal"
          class="w-3/4 xs:w-5/6 m-auto bg-primary border-primary text-white p-2 outline-none focus:border-purple-500 border-2"
          placeholder="Enter weekly goal"
          id=""
        />
        <div class="flex w-full flex-row justify-end">
          <!-- <div v-show="editable" class="text-2xl flex items-center">
            <i class="las la-check mr-2"></i>
            <i class="lar la-trash-alt"></i>
          </div> -->
          <div
            class="text-2xl w-10 h-10 xs:w-9 xs:h-9 rounded-full shadow-md flex justify-center items-center bg-purple-500 transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-plus"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-2/6"></div>
  </div>
</template>

<script>
export default {
  name: "AddGoal",
  mounted() {
    this.$refs.goalInput.focus();
  },
};
</script>

<style>
</style>