import Vue from 'vue'
import Router from 'vue-router'
import mySkills from './components/Skills.vue'
import aboutVue from './components/aboutVue.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: mySkills
        },
        {
            path: '/aboutVue/:name',
            name: 'aboutVue',
            component: aboutVue
        }
    ]
})