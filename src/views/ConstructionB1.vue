<!-- Death in family for the two other branches -->

<template>
  <div class="constructionB1">
    <Situation :context='job[1].choice[1].choice[1].Situation' ></Situation>
    <br>
    <br>
    <br>
    <b-container >
      <b-row class="mb-3">
        <!-- <b-col md="4"> -->
          <Choice :key="index" v-for="(number, index) in job[1].choice[1].choice[1].choice" :context='number.name'  :propB='number.cost' :propC='number.distance'  :propE='number.choiceName' :propF='number.link'></Choice>
          <!-- v-for="(number, index) in job[1].choice[0].choice[0].choice" :key="index" :context='number.name'  :propB='number.cost' :propC='number.distance'  :propE='number.choiceName' -->
          <!-- propA='' propD='' -->
          <!-- key: 1, name: 'Construction', cost: "20/hr", distance: 20, method: 'Drive', choiceName: 'You need transportation', Situation:'Now You need a transportation mean! Which one would you want ?', -->
        <!-- </b-col> -->
      </b-row>
   </b-container>
   <!-- <p v-for='(number, index) in job[1].choice[0].choice[0].choice' :key="index">{{number}}</p> -->
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
// @ is an alias to /src
import { mapState, mapMutations, mapActions } from 'vuex';
 import Choice from '@/components/Choice.vue';
import Situation from '@/components/Situation.vue';

export default {
  name: 'constructionB1',
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
}
</script>
