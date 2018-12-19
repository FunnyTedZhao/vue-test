var ColorJs = require('color-js')

/**
 * @author FunnyTedZhao
 * @param color
 *    传入设置的color或hue值，如果没有传入原有的颜色
 * @param lightness
 *    传入设置的lightness值，默认值：0
 * @param saturation
 *    传入设置的saturation值，默认值：0
 * @return 颜色值
 */
export default function (color, lightness = 0, saturation = 0) {
  if (lightness === 0 && saturation === 0) { return color }

  let colorObj = ColorJs(color)
  const l = Math.round(colorObj.getLightness() * 100) / 100
  const s = Math.round(colorObj.getSaturation() * 100) / 100

  if (lightness > 0) {
    colorObj = colorObj.setLightness(((1 - l) * lightness / 100) + l)
  } else if (lightness < 0) {
    colorObj = colorObj.setLightness(l + (l * lightness / 100))
  }
  if (saturation > 0) {
    colorObj = colorObj.setSaturation(((1 - s) * saturation / 100) + s)
  } else if (saturation < 0) {
    colorObj = colorObj.setSaturation(s + (s * saturation / 100))
  }

  return colorObj.toCSS()
}
