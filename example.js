var canvas = document.body.appendChild(document.createElement('canvas'))
var gl     = require('gl-context')(canvas, render)
var camera = require('canvas-orbit-camera')(canvas)
var Geom   = require('gl-geometry')
var clear  = require('gl-clear')({ color: [1,1,1,1] })
var mat4   = require('gl-mat4')
var Shader = require('glslify')
var bunny  = require('bunny')
var wire   = require('./')

bunny.cells = wire(bunny.cells)
bunny = Geom(gl)
  .attr('position', bunny.positions)
  .faces(bunny.cells)

window.addEventListener('resize'
  , require('canvas-fit')(canvas)
  , false
)

var proj  = mat4.create()
var view  = mat4.create()
var model = mat4.create()

var shader = Shader({
    vert: './wire.vert'
  , frag: './wire.frag'
})(gl)

function render() {
  var width  = canvas.width
  var height = canvas.height

  gl.viewport(0, 0, width, height)
  clear(gl)

  camera.view(view)
  camera.tick()
  mat4.perspective(proj
    , Math.PI / 4
    , width / height
    , 1000
    , 0.01
  )

  bunny.bind(shader)
  shader.uniforms.proj  = proj
  shader.uniforms.view  = view
  shader.uniforms.model = model
  bunny.draw(gl.LINES)
}
