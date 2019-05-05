import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Simulation from './views/Simulation.vue'
import Project from './views/ProjectDocs.vue'
import Construction1 from './views/Construction1.vue'
import ConstructionA from './views/ConstructionA.vue'
import ConstructionA1 from './views/ConstructionA1.vue'
import ConstructionB from './views/ConstructionB.vue'
import ConstructionB1 from './views/ConstructionB1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simulation',
      name: 'simulation',
      component: Simulation
    },
    {
      path: '/projectdocs',
      name: 'projectdocs',
      component: Project
    },
    {
      path: '/construction1',
      name: 'construction1',
      component: Construction1
    },
    {
      path: '/constructionA',
      name: 'constructionA',
      component: ConstructionA
    },
    {
      path: '/constructionA1',
      name: 'constructionA1',
      component: ConstructionA1
    },
    {
      path: '/constructionB',
      name: 'ConstructionB',
      component: ConstructionB
    },
    {
      path: '/constructionB1',
      name: 'ConstructionB1',
      component: ConstructionB1
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
