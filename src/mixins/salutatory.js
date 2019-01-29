export default {
  data () {
    return {
      salutatory: null
    }
  },
  methods: {
    saySalutatory (txt) {
      this.salutatory = txt
    }
  },
  mounted () {
    this.saySalutatory('Hello!')
  }
}
