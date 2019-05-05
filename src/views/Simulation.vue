<template>
  <div class="simulation">
    <!-- <h1>Simulation</h1>
    <h2>The live DEMO with go here.</h2>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input @click="toggleTodoDone(index)" type="checkbox" :checked="todo.done">
        <span :class="{ done: todo.done }">{{todo.title}}</span>
      </li>
    </ul> -->
    <Situation :context='job[0].Situation' ></Situation>
    <br>
    <br>
    <br>
    <b-container >
      <b-row class="mb-3">
        <!-- <b-col md="4"> -->
          <Choice v-for="(number, index) in job" :key="index" :context='number.name' :propA='number.type' :propB='number.cost' :propC='number.distance' :propD='number.method' :propE='number.choiceName' :propF='number.link'></Choice>
        <!-- </b-col> -->
      </b-row>
   </b-container>
   <!-- <p v-for='(number, index) in job' :key="index">{{number.name}}</p> -->
   <!-- Format job[0].choice[0].choice -->
    <!-- <ul> -->
    <!-- <p>{{ tracker }}</p> -->

      <!-- <li v-for="(job, index) in job" :key="index"> -->
        <!-- <input @click="toggleTodoDone(index)" type="checkbox" :checked="todo.done"> -->
        <!-- <p v-for="(number, index) in job" :key="index">{{number.name}}</p> -->
      <!-- </li> -->
    <!-- </ul> -->






  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 85%;
  height: auto;
  padding-top: 1.5rem;
}
a{
  color: #52ae8c;
  text-decoration: underline;
}
a:hover {
  color: #ffffff;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
iframe {
  width: 75%;
  height: 50rem;
}
</style>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Choice from '@/components/Choice.vue';
import Situation from '@/components/Situation.vue';

export default {
  name: 'simulation',
  components: {
    Choice,
    Situation
  },
  // data: function () {
  //   return {
  //     job2:
  //   }},
  computed: {
    // test() {
    //   return this.$store.state.job
    //   return this.$store.state.job

    // },
    newTodo: {
      // get() {
      //   // return this.$store.state.job
      //   return this.job2 = this.job
      //
      //          // this.$store.state.tracker;
      // }
      // set(value) {
      //   this.$store.commit('setNewTodo', value);
      // }
    },
    ...mapState(['job', 'tracker'])
  },
  methods: {
    ...mapMutations(['allDone', 'getData']),
    ...mapActions(['updateTracker', 'returnUpdatedData' ])
  }
}</script>
