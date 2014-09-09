module.exports = wireframe

function wireframe(cells) {
  var newcells = []

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i]
    var a = cell[0]
    var b = cell[1]
    var c = cell[2]
    if (a !== null && b !== null) newcells.push(a, b)
    if (b !== null && c !== null) newcells.push(b, c)
    if (a !== null && c !== null) newcells.push(c, a)
  }

  return newcells
}
