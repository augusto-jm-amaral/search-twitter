import Home from './spa/home/Home.vue'

export default [
  { 
    path: '/', 
    component: Home,
    children: [] 
  }
    // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    // { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn } // custom logic for mapping between route and props
]