<template>
  <div class="flex flex-col items-center">
    <div
      class="flex w-1/2 xs:h=1/2 items-center border-purple-600 border-b-2 justify-center xs:w-full sm:w-3/4"
    >
      <div
        class="flex flex-col justify-around h-48 pt-2 pb-2 pl-4 pr-4 m-5 text-white shadow-lg card w-180 rounded-3xl"
        :class="{ 'done-goal': weeklyGoal.Done }"
      >
        <div
          class="flex flex-row justify-between w-full text-gray-300 bg-primary"
        >
          <div class="text-sm">{{
            user.username
          }}</div>
          <div v-if="weeklyGoal.Done" class="text-sm">done</div>
          <div v-else-if="daysRemaining > 0" class="text-sm">
            {{ daysRemaining }} days remaining
          </div>
          <div v-else class="text-sm">expired</div>
        </div>
        <!-- <div class="flex justify-center w-full text-lg">This is a test weekly goal</div> -->
        <textarea
          v-if="editClicked"
          @blur="editGoal(weeklyGoal)"
          rows="3"
          ref="goalInput"
          name="goal"
          :maxlength="maxCharCount"
          v-model="goal"
          class="w-3/4 p-2 m-auto text-white border-2 outline-none xs:w-5/6 bg-primary border-primary focus:border-purple-500"
          placeholder="Enter weekly goal"
          id=""
        />
        <div
          @click="makeEditable"
          v-else
          class="w-3/4 p-2 m-auto overflow-auto text-white border-2 outline-none xs:w-5/6 bg-primary border-primary focus:border-purple-500"
        >
          {{ weeklyGoal.weeklyGoal }}
        </div>
        <div
          class="flex flex-row justify-end w-full"
          :class="{ 'justify-between': editable }"
        >
          <div v-if="editClicked" class="flex items-center text-lg text-gray-300">
            <div>{{currentCharCount}}/</div>
            <div>{{maxCharCount}} max</div>
          </div>
          <div
            v-show="editable && !editClicked"
            class="flex items-center text-2xl"
          >
            <i
              @click="markAsDone(weeklyGoal)"
              class="mr-2 text-green-500 las la-check"
              :class="{ inactive: weeklyGoal.Done }"
            ></i>
            <i
              @click="deleteGoal(weeklyGoal)"
              class="text-red-500 lar la-trash-alt"
            ></i>
          </div>
          <div
            @click="editGoal(weeklyGoal)"
            v-if="editClicked"
            class="flex items-center justify-center w-10 h-10 text-2xl transition duration-300 ease-in-out transform bg-purple-500 rounded-full shadow-md xs:w-9 xs:h-9 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-plus"></i>
          </div>
          <div
            v-else
            class="flex items-center justify-center w-10 h-10 text-2xl transition duration-300 ease-in-out transform bg-purple-500 rounded-full shadow-md xs:w-9 xs:h-9 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-hands-helping"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex flex-col flex-wrap h-1/2 xs:w-full">
      <h2 class="text-2xl text-white md:ml-4 xs:text-center">{{user.username}}'s Goals</h2>
      <div class="flex flex-row flex-wrap cards xs:flex-col xs:justify-start xs:items-center xs:w-full">
        <weekly-goal v-for="goal in reversedUserGoals" :key="goal.id" :goal="goal" />
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WeeklyGoal from "../components/WeeklyGoal.vue";
import { nextTick } from "vue";
export default {
  name: "Goal",
  data() {
    return {
      weeklyGoal: {},
      usersGoals: [],
      user: {},
      daysRemaining: 0,
      editable: false,
      editClicked: false,
      maxCharCount: 240,
      goal: "",
    };
  },
  props: {
    goalId: String,
  },
  components: {
    WeeklyGoal,
  },
  methods: {
    weekCalculation(createdAt) {
      const createdAtStr = Date.parse(createdAt);
      const oneDay = 24 * 60 * 60 * 1000;
      const today = Date.now();
      const daysSinceCreated = (today - createdAtStr) / oneDay;
      const daysRemaining = Math.round(7 - daysSinceCreated);
      return daysRemaining;
    },
    makeEditable() {
      if (this.currentUser.id == this.user.id){
        this.editClicked = true;
        console.log(this.$refs);
        nextTick(() => {
          this.$refs.goalInput.focus();
        });
      }
      
    },
    markAsDone(goal) {
      let doneGoal = goal;
      doneGoal.Done = true;
      axios
        .put(this.baseUrl + "weekly-goals/" + doneGoal.id, doneGoal)
        .then((res) => {
          console.log(res);
        });
    },
    deleteGoal(goal) {
      axios
        .delete(this.baseUrl + "weekly-goals/" + goal.id)
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        });
    },
    editGoal(goal) {
      let editedGoal = goal;
      editedGoal.weeklyGoal = this.goal;
      axios
        .put(this.baseUrl + "weekly-goals/" + editedGoal.id, editedGoal)
        .then((res) => {
          console.log(res);
          this.editClicked = false;
        });
    },
    getGoal() {
      axios
        .get(this.baseUrl + "weekly-goals/" + this.$route.params.id)
        .then((res) => {
          console.log(res.data);
          this.weeklyGoal = res.data;
          this.goal = res.data.weeklyGoal;
          if (!this.goal.Created){
            this.daysRemaining = this.weekCalculation(this.weeklyGoal.created_at)
          }
          else {
            this.daysRemaining = this.weekCalculation(this.weeklyGoal.Created)
          }
          
          this.user = res.data.User;
          if (this.user.username == this.currentUser.username) {
            this.editable = true;
          }
          axios
            .get(
              this.baseUrl + "weekly-goals?User.id=" + res.data.User.id
            )
            .then((res) => {
              console.log(res.data);
              this.usersGoals = res.data;
            });
        });
    },
  },
  watch: {
    $route(to, from) {
      console.log("route change");
      this.getGoal();
    },
  },
  mounted() {
    this.getGoal();
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
    reversedUserGoals() {
      return this.usersGoals.slice(0).reverse();
    },
    baseUrl: function(){
      return this.$store.getters.getUrl
    },
    currentCharCount: function(){
      return this.goal.length
    }
  },
};
</script>

<style>
.cards::-webkit-scrollbar {
  width: 0.3em;
}

.cards::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.cards::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.inactive {
  @apply opacity-50 pointer-events-none;
}

.done-goal {
  @apply border-green-400 border-2;
}
</style>