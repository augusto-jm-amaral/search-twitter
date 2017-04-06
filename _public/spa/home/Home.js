  export default {
    data () {
      name: ''
    },
    methods : {
      onSubmit: function ($event) {
        this.$store.commit('SET_NAME', this.name);
      }
    }
  }