/*
  Array utils
*/
export const concat = (...arrays) => [].concat(...arrays)

/*
  Object utils
*/
export const merge = (() => {
    const extend = Object.assign ? Object.assign : (target, ...sources) => {
        sources.forEach((source) =>
            Object.keys(source).forEach((prop) => target[prop] = source[prop])
        )
        return target
    }
    return (...objects) => extend({}, ...objects)
})()
