<template>
  <div class="home">
     <h1 id="title" >Alpha Trail</h1>
      <div class="hr"></div>
    <p>Imagine how your life would differ if one day your financial security changed. What would losing a job, having a death in the family, or earning a promotion mean? What if losing a day’s pay is the difference between having food or going hungry for a week? </p>
    <p>Life is a series of choices — some influenced by our decisions, and others determined by forces outside of our control.</p>
    <p> Enter the Alpha Trail and explore a world outside your own. Find out how financial instability will influence you and the choices you make to life’s changing circumstances. </p>

    <b-container id='maincol'>
      <b-row>
        <b-col class="align-self-center">The Federal Reserve board in 2017 conducted a study that found over 44% of Americans would not be able to cover an unexpected expense of $400. This simulation is meant to show the fragility of day to day life for those that are less fortunate.
        </b-col>
        <b-col md='8'> <img class='img-thumbnail' src='../assets/philadelphia2.jpg' /> </b-col>

      </b-row>
    </b-container>

    <p>Learn More. Get Involved. Make Changes: </p>
    <p>After completing this simulation you have gained additional insight into the real world scenarios that people of different socio-economic backgrounds may face.  We hope that this has opened your eyes and you’d like to contribute.  Here are some organizations doing great work to assist with situations similar to the simulation:
    </p>
    <p><a v-bind:href="'https://thelastmile.org'" target='_blank' rel = 'noopener'>The Last Mile</a></p>
    <p><a v-bind:href="'https://phsonline.org/programs'" target='_blank' rel = 'noopener'>Philadelphia Horticulture Society</a></p>
    <p><a v-bind:href="'https://www.bgcphila.org'" target='_blank' rel = 'noopener'>Boys and Girls Club</a></p>
    <p><a v-bind:href="'https://www.independencebigs.org'" target='_blank' rel = 'noopener'>Big Brother Big Sister</a></p>



    <img alt= 'oregeon dead end' src='../assets/oregon-deadend.jpg' />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home'
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss" scoped>

</style>
