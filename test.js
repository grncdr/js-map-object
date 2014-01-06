var test = require('tape')
var mapObject = require('./')

test('mapObject', function (t) {
  var object = {
    a: 1,
    b: 2
  }
  t.equal(mapObject, mapObject.vk, ".vk is default")

  t.deepEqual(mapObject.vk(object,
                           function (v, k, o) {
                             return [k, v, o]
                           }),
              [ ['a', 1, object],
                ['b', 2, object] ],
              ".vk passes (value, key, object)")

  t.deepEqual(mapObject.kv(object,
                           function (k, v, o) {
                             return [k, v, o]
                           }),
              [ ['a', 1, object],
                ['b', 2, object] ],
              ".kv passes (key, value, object)")

  t.deepEqual(mapObject.kvo(object,
                            function (k, v) {
                              return v * 2
                            }),
              { a: 2, b: 4 },
              ".kvo returns an object")

  t.deepEqual(mapObject.vko(object,
                            function (v, k) {
                              return v * 2
                            }),
              { a: 2, b: 4 },
              ".vko returns an object")
  t.end()
})
