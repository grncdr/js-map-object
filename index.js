var forEach = require('object-keys/foreach')

module.exports = mapObject

function mapObject (object, fn, ctx) {
  var ctx = arguments.length > 2 ? arguments[2] : object;
  var result = []
  forEach(object, function (value, key) {
    result.push(fn.call(ctx, value, key, object))
  })
  return result
}

mapObject.vk = mapObject

mapObject.kv = function (object, fn, ctx) {
  var ctx = arguments.length > 2 ? arguments[2] : object;
  var result = []
  forEach(object, function (value, key) {
    result.push(fn.call(ctx, key, value, object))
  })
  return result
}

mapObject.vko = function (object, fn, ctx) {
  var ctx = arguments.length > 2 ? arguments[2] : object;
  var result = {}
  forEach(object, function (value, key) {
    result[key] = fn.call(ctx, value, key, object)
  })
  return result
}

mapObject.kvo = function (object, fn, ctx) {
  var ctx = arguments.length > 2 ? arguments[2] : object;
  var result = {}
  forEach(object, function (value, key) {
    result[key] = fn.call(ctx, key, value, object)
  })
  return result
}
