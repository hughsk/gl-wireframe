# gl-wireframe [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Convert a mesh index for drawing wireframes. A useful alternative to
[shader-based](http://codeflow.org/entries/2012/aug/02/easy-wireframe-display-with-barycentric-coordinates/)
wireframe rendering for certain cases.

[![gl-wireframe](http://imgur.com/5ImqLv4.png)](http://hughsk.io/gl-wireframe)

## Usage

[![NPM](https://nodei.co/npm/gl-wireframe.png)](https://nodei.co/npm/gl-wireframe/)

### cells = wireframe(cells)

Takes the `cells` of a simplicial complex (in other words, a mesh's faces) and
returns a copy suitable for drawing wireframes. Now when it comes to drawing the
mesh, simply use `gl.LINES` in place of `gl.TRIANGLES`.

See [example.js](example.js) for a full example.

### See Also

* [simplicial-complex](http://github.com/mikolalysenko/simplicial-complex)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/gl-wireframe/blob/master/LICENSE.md) for details.
