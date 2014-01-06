# map-object

Map over the key-value pairs of an object.

## API

`module.exports = function mapObject (object, callback, context=object) -> Array`

Callback should have a signature of `(value, key, object) -> anything` it will be called with it's context (`this`) set to the value of `context` if provided, or `object` if no context is provided.

## License

MIT
