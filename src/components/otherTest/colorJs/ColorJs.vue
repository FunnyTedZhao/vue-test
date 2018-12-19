<template>
  <div class="wrap">
    <div class="top">
      color: <input type="text" v-model="text"/>
      <br/>
      lightness: <input type="range" v-model="ltxt" max="100" min="-100" step="1"/> {{ ltxt }}
      <br/>
      saturation: <input type="range" v-model="stxt" max="100" min="-100" step="1"/> {{ stxt }}
      <br/>

      <button @click="showColor(text, ltxt, stxt)">获取颜色</button>
      <p>{{ color }}</p>
    </div>
  </div>
</template>

<script>
import Color from './ColorJs.js'
export default {
  name: 'ColorJs',
  data () {
    return {
      text: '',
      ltxt: 0,
      stxt: 0,
      color: '#000000'
    }
  },
  methods: {
    showColor (color, l, s) {
      this.color = Color(color, l, s)
    }
  }
}
</script>
