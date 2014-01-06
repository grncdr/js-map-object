module.exports = function mapObject (o, f, ctx) {
  var res = {}
  Object.keys(o).map(function (k) {
    return res[k] = f.call(this, o[k], k, o)
  }, ctx || o);
  return res;
}
