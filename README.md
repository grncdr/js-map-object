# map-object

[![browser support](https://ci.testling.com/grncdr/js-map-object.png)](https://ci.testling.com/grncdr/js-map-object)

Map over the key-value pairs of an object.

## Synopsis

```javascript
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
```

## API

### module.exports

```ocaml
(Object, Iterator, context: Any) => Array<Any>

Iterator: (value:Any, key:String, Object) => Any
```

Map a callback over the properties of an object, returning an array of results.

The callback will be called with 3 arguments: the properties value, the
properties key, and the object being mapped over. The context (`this`) for the
callback will be set to the value of the `context` argument, or `undefined` if
no context is provided.

This is also exported as `module.exports.vk` for consistency, where the `.vk`
represents the order of the first two callback arguments: `(value, key)`

### module.exports.kv

```ocaml
(Object, Iterator, context: Any) => Array<Any>

Iterator: (key:String, value:Any, Object) => Any
```

Like the main exported function, but the callback is called with the key as the
first argument and the value as the second.

### module.exports.kv

Like [module.exports.vk][], but the order of the `key` and `value` arguments to
`callback` is swapped.

### module.exports.vko

Like the main exported function, but the result will be an object instead of an
array, whose keys correspond to those of the object being mapped over, and
values correspond to callback return values.

### module.exports.vko

Like [module.exports.vko][], but the order of the `key` and `value` arguments
to `callback` is swapped.

## License

MIT


[module.exports.vko]: #moduleexportvko
[module.exports.vk]: #moduleexportvk
