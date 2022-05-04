// src/utils/mediaQuery.js
import startCase from "lodash/startCase"

const min = (width) => `only screen and (min-width: ${width}px)`
const max = (width) => `only screen and (max-width: ${width - 1}px)`

const mediaQuery = {
  screens: {
    // values are in pixels
    small: 576,
    medium: 768,
    large: 992,
  },
}

for (const key of Object.keys(mediaQuery.screens)) {
  const Key = startCase(key)
  for (const [func, name] of [
    [min, `min`],
    [max, `max`],
  ]) {
    // css query
    const query = func(mediaQuery.screens[key])
    mediaQuery[name + Key] = `@media ` + query
    // js query (see window.matchMedia)
    mediaQuery[name + Key + `Js`] = query
  }
}

export default mediaQuery
