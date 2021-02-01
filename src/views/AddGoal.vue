<template>
  <div class="flex flex-row h-3/4">
    <div class="flex w-4/6 items-center justify-center border-purple-400 border-r-2">
      <div class="card flex flex-col w-5/6 h-3/4 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl cursor-pointer">
        <div class="flex bg-primary w-full flex-row justify-between text-gray-300">
          <router-link to="/register" class="text-sm">Username</router-link>
          <div class="text-sm">4 Days</div>
        </div>
        <div class="flex w-full justify-center text-lg">This is a test weekly goal</div>
        <div class="flex w-full flex-row justify-end">
          <!-- <div v-show="editable" class="text-2xl flex items-center">
            <i class="las la-check mr-2"></i>
            <i class="lar la-trash-alt"></i>
          </div> -->
          <div class="text-2xl w-10 h-10 rounded-full shadow-md flex justify-center items-center bg-secondaryColor transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110">
            <i class="las la-hands-helping"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-2/6">
    
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>