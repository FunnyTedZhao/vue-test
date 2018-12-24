var ColorJs = require('color-js')

/**
 * @author FunnyTedZhao
 * @param color
 *    颜色，对应color或hue字段，如果没有传入原有的颜色
 * @param lightness
 *    亮度，默认值：0
 * @param saturation
 *    饱和度，默认值：0
 * @param invertLightness
 *    是否反色，默认值：false
 * @param gamma
 *    gamma校正值，默认值：1.00
 * @return 颜色值
 */
export default function (color, lightness, saturation, invertLightness, gamma) {
  lightness = lightness || '0'
  saturation = saturation || '0'
  invertLightness = invertLightness || false
  gamma = gamma || '1.00'

  let colorObj = ColorJs(color)
  const l = invertLightness ? (1 - Math.round(colorObj.getLightness() * 100) / 100) : Math.round(colorObj.getLightness() * 100) / 100
  const s = Math.round(colorObj.getSaturation() * 100) / 100

  if (lightness > 0) {
    colorObj = colorObj.setLightness((((1 - l) * lightness / 100) + l) ** (1 / gamma))
  } else {
    colorObj = colorObj.setLightness((l + (l * lightness / 100)) ** (1 / gamma))
  }
  if (saturation > 0) {
    colorObj = colorObj.setSaturation(((1 - s) * saturation / 100) + s)
  } else {
    colorObj = colorObj.setSaturation(s + (s * saturation / 100))
  }

  return colorObj.toCSS()

  /* return JSON.stringify({
    color: colorObj.toCSS(),
    hue: colorObj.getHue(),
    lightness: colorObj.getLightness(),
    saturation: colorObj.getSaturation()
  }) */
}
