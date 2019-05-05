<template>
  <!-- <div>
    <b-button variant="outline-primary">{{context}}</b-button>
  </div> -->
  <section>
    <div>
        <b-card
          :title= 'context'
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>

            <p>Price:{{ propB }}</p>
            <p>Distance:{{ propC }}</p>
            <p>Method:{{ propD }}</p>


          </b-card-text>
          <router-link :to="`/${propF}`" tag="b-button" >foo</router-link>
          <!-- <b-button href="#" variant="primary">{{ context }}</b-button> -->
        </b-card>
      </div>
    </section>
</template>
<!-- :context='number.name' :propA='number.type' :propB='number.cost' :propC='number.distance' :propD='number.method' :propE='number.choiceName' -->

<script>
export default {
  name: 'Choice',
  props: ['context', 'propB', 'propC', 'propD', 'propE', 'propF']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
