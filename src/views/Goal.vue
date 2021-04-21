<template>
  <div class="flex flex-col items-center h-3/4">
    <div
      class="flex w-1/2 h-3/4 xs:h=1/2 items-center justify-center xs:w-full sm:w-3/4"
    >
      <div
        class="card flex flex-col w-5/6 h-3/4 shadow-lg rounded-3xl justify-around text-white m-5 pt-2 pb-2 pl-4 pr-4"
        :class="{ 'done-goal': weeklyGoal.Done }"
      >
        <div
          class="flex bg-primary w-full flex-row justify-between text-gray-300"
        >
          <router-link to="/register" class="text-sm">{{
            user.username
          }}</router-link>
          <div v-if="weeklyGoal.Done" class="text-sm">done</div>
          <div v-else-if="daysRemaining > 0" class="text-sm">
            {{ daysRemaining }} days remaining
          </div>
          <div v-else class="text-sm">expired</div>
        </div>
        <!-- <div class="flex w-full justify-center text-lg">This is a test weekly goal</div> -->
        <textarea
          v-if="editClicked"
          @blur="editGoal(weeklyGoal)"
          rows="2"
          ref="goalInput"
          name="goal"
          v-model="goal"
          class="w-3/4 xs:w-5/6 m-auto bg-primary border-primary text-white p-2 outline-none focus:border-purple-500 border-2"
          placeholder="Enter weekly goal"
          id=""
        />
        <div
          @click="makeEditable"
          v-else
          class="w-3/4 xs:w-5/6 m-auto bg-primary border-primary text-white p-2 outline-none focus:border-purple-500 border-2"
        >
          {{ weeklyGoal.weeklyGoal }}
        </div>
        <div
          class="flex w-full flex-row justify-end"
          :class="{ 'justify-between': editable && !editClicked }"
        >
          <div
            v-show="editable && !editClicked"
            class="text-2xl flex items-center"
          >
            <i
              @click="markAsDone(weeklyGoal)"
              class="las la-check mr-2 text-green-500"
              :class="{ inactive: weeklyGoal.Done }"
            ></i>
            <i
              @click="deleteGoal(weeklyGoal)"
              class="lar la-trash-alt text-red-500"
            ></i>
          </div>
          <div
            @click="editGoal(weeklyGoal)"
            v-if="editClicked"
            class="text-2xl w-10 h-10 xs:w-9 xs:h-9 rounded-full shadow-md flex justify-center items-center bg-purple-500 transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-plus"></i>
          </div>
          <div
            v-else
            class="text-2xl w-10 h-10 xs:w-9 xs:h-9 rounded-full shadow-md flex justify-center items-center bg-purple-500 transition duration-300 ease-in-out hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="las la-hands-helping"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cards flex w-4/6 flex-row justify-start h-full overflow-auto flex-wrap border-purple-600 border-t-2 xs:w-full"
    >
      <weekly-goal
        v-for="goal in reversedUserGoals"
        :key="goal.id"
        :goal="goal"
      />
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
      this.editClicked = true;
      console.log(this.$refs);
      nextTick(() => {
        this.$refs.goalInput.focus();
      });
    },
    markAsDone(goal) {
      let doneGoal = goal;
      doneGoal.Done = true;
      axios
        .put("http://localhost:1337/weekly-goals/" + doneGoal.id, doneGoal)
        .then((res) => {
          console.log(res);
        });
    },
    deleteGoal(goal) {
      axios
        .delete("http://localhost:1337/weekly-goals/" + goal.id)
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        });
    },
    editGoal(goal) {
      let editedGoal = goal;
      editedGoal.weeklyGoal = this.goal;
      axios
        .put("http://localhost:1337/weekly-goals/" + editedGoal.id, editedGoal)
        .then((res) => {
          console.log(res);
          this.editClicked = false;
        });
    },
    getGoal() {
      axios
        .get("http://localhost:1337/weekly-goals/" + this.$route.params.id)
        .then((res) => {
          console.log(res.data);
          this.weeklyGoal = res.data;
          this.goal = res.data.weeklyGoal;
          this.daysRemaining = this.weekCalculation(this.weeklyGoal.createdAt);
          this.user = res.data.User;
          if (this.user.username == this.currentUser.username) {
            this.editable = true;
          }
          axios
            .get(
              "http://localhost:1337/weekly-goals?User.id=" + res.data.User.id
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
    // this.user = this.$store.getters.getUser
    // axios.get('http://localhost:1337/weekly-goals?User.id='+ this.user.id)
    // .then(res => {
    //   console.log(res.data)
    //   this.usersGoals = res.data
    // })
    this.getGoal();
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
    reversedUserGoals() {
      return this.usersGoals.reverse();
    },
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