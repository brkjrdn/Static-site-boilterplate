import buildWorld     from '../method/buildWorld.js';
import HelloComponent from '../component/hello.jsx';
import React          from 'react';
import ReactDOM       from 'react-dom';

ReactDOM.render(<HelloComponent/>, document.getElementById('hello'));

var WORLD = buildWorld({
  zoom:   87/Math.PI,
  canvas: document.querySelectorAll('p')[10],
});

var coords = {
  type: 'world',
  x:    10,
  y:    10,
};

var canvasCoords = WORLD.coords2canvas(coords);

console.log(coords);
console.log(WORLD.coords2canvas(coords));
console.log(WORLD.coords2world(canvasCoords));
