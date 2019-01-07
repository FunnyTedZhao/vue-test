<template>
  <div class="wrap">
    <div class="test-box">
      <div class="test-item">
        <span class="name">color: </span>
        <div class="tool">
          <input type="text" v-model="text"/>
        </div>
      </div>

      <div class="test-item">
        <span class="name">lightness: </span>
        <div class="tool">
          <input type="range" v-model="ltxt" max="100" min="-100" step="1"/>
          {{ ltxt }}
        </div>
      </div>

      <div class="test-item">
        <span class="name">saturation: </span>
        <div class="tool">
          <input type="range" v-model="stxt" max="100" min="-100" step="1"/>
          {{ stxt }}
        </div>
      </div>

      <div class="test-item">
        <span class="name">invert lightness: </span>
        <div class="tool">
          <input type="radio" name="invert" :value="true" v-model="iflag"/>是
          <input type="radio" name="invert" :value="false" v-model="iflag"/>否
        </div>
      </div>

      <div class="test-item">
        <span class="name">gamma: </span>
        <div class="tool">
          <input type="range" v-model="gatxt" max="10.00" min="0.00" step="0.01"/>
          {{ gatxt }}
        </div>
      </div>

      <button @click="showColor(text, ltxt, stxt, iflag, gatxt)">获取颜色</button>
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
      iflag: false,
      gatxt: 1.00,
      color: '#000000'
    }
  },
  mounted () {},
  methods: {
    showColor (color, l, s, f, g) {
      this.color = Color(color, l, s, f, g)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  height: 400px;

  .test-box {
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0;

    .test-item {
      overflow: hidden;
      margin: 8px 0;

      .name, .tool {
        float: left;
      }

      .name {
        width: 120px;
        text-align: right;
        margin-right: 8px;
      }

      .tool {
        width: 200px;
        text-align: left;
      }
    }
  }
}
</style>
