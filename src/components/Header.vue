<template>
  <div class="flex flex-row text-white h-1/6">
    <div
      class="flex flex-row items-center w-full justify-between w-1/2 mt-11 mx-9"
    >
      <h1 class="text-5xl" @click="$router.push('/')">Weekly Growth Goals</h1>
      <h2 v-if="authenticated" class="text-2xl flex flex-row">
        <span
          ><i
            class="las la-plus pr-2 transition duration-300 ease-in-out cursor-pointer hover:text-purple-600 transform hover:scale-110"
          ></i></span
        ><span class="hover:underline cursor-pointer hover:text-purple-600">my goals</span>
      </h2>
      <h2 v-else class="text-2xl flex flex-row"><span @click="$router.push('/register')" class="hover:underline cursor-pointer hover:text-purple-600">Login/Register</span>
      </h2>
      <!-- <p class="w-1/2 mt-4 xs:hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae, excepturi enim nostrum officiis recusandae blanditiis quae adipisci ullam provident rem tempore quasi ea suscipit aperiam neque dolores aliquid incidunt!</p> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>