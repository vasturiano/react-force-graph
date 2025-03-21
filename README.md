react-force-graph
=================

**2D**:
[![NPM package][npm-2d-img]][npm-2d-url]
[![Build Size][build-size-2d-img]][build-size-2d-url]
[![NPM Downloads][npm-downloads-2d-img]][npm-downloads-2d-url]

**3D**:
[![NPM package][npm-3d-img]][npm-3d-url]
[![Build Size][build-size-3d-img]][build-size-3d-url]
[![NPM Downloads][npm-downloads-3d-img]][npm-downloads-3d-url]

**VR**:
[![NPM package][npm-vr-img]][npm-vr-url]
[![Build Size][build-size-vr-img]][build-size-vr-url]
[![NPM Downloads][npm-downloads-vr-img]][npm-downloads-vr-url]

**AR**:
[![NPM package][npm-ar-img]][npm-ar-url]
[![Build Size][build-size-ar-img]][build-size-ar-url]
[![NPM Downloads][npm-downloads-ar-img]][npm-downloads-ar-url]

React bindings for the **force-graph** [suite](https://vasturiano.github.io/react-force-graph/example/forcegraph-dependencies) of components: [force-graph](https://github.com/vasturiano/force-graph) (2D HTML Canvas), [3d-force-graph](https://github.com/vasturiano/3d-force-graph) (ThreeJS/WebGL), [3d-force-graph-vr](https://github.com/vasturiano/3d-force-graph-vr) (A-Frame) and [3d-force-graph-ar](https://github.com/vasturiano/3d-force-graph-ar) (AR.js).

<p align="center">
  <a href="https://vasturiano.github.io/react-force-graph/example/large-graph/"><img width="80%" src="https://vasturiano.github.io/react-force-graph/example/preview.png"></a>
</p>

This module exports 4 stand-alone React component packages with identical interfaces: `react-force-graph-2d`, `react-force-graph-3d`, `react-force-graph-vr` and `react-force-graph-ar`.
Each can be used to represent a graph data structure in a 2 or 3-dimensional space using a force-directed iterative layout.

Uses canvas/WebGL for rendering and [d3-force-3d](https://github.com/vasturiano/d3-force-3d) for the underlying physics engine. 
Supports zooming/panning, node dragging and node/link hover/click interactions.

See also the [react-three-fiber component](https://github.com/vasturiano/r3f-forcegraph).

## Examples

* [Basic](https://vasturiano.github.io/react-force-graph/example/basic/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/basic/index.html))
* [Directional arrows](https://vasturiano.github.io/react-force-graph/example/directional-links-arrows/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/directional-links-arrows/index.html))
* [Directional moving particles](https://vasturiano.github.io/react-force-graph/example/directional-links-particles/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/directional-links-particles/index.html))
* [Auto-colored nodes/links](https://vasturiano.github.io/react-force-graph/example/auto-colored/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/auto-colored/index.html))
* [AR graph](https://vasturiano.github.io/react-force-graph/example/ar-graph/index.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/ar-graph/index.html))
* [2D Text nodes](https://vasturiano.github.io/react-force-graph/example/text-nodes/index-2d.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/text-nodes/index-2d.html))
* [3D Text nodes](https://vasturiano.github.io/react-force-graph/example/text-nodes/index-3d.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/text-nodes/index-3d.html))
* [Image nodes](https://vasturiano.github.io/react-force-graph/example/img-nodes/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/img-nodes/index.html))
* [HTML in nodes](https://vasturiano.github.io/react-force-graph/example/html-nodes/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/html-nodes/index.html))
* [Custom 2D node shapes](https://vasturiano.github.io/react-force-graph/example/custom-node-shape/index-canvas.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/custom-node-shape/index-canvas.html))
* [Custom 3D/VR node geometries](https://vasturiano.github.io/react-force-graph/example/custom-node-shape/index-three.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/custom-node-shape/index-three.html))
* [Curved lines and self links](https://vasturiano.github.io/react-force-graph/example/curved-links/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/curved-links/index.html))
* [Text in links](https://vasturiano.github.io/react-force-graph/example/text-links/index-3d.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/text-links/index-3d.html))
* [Highlight nodes/links](https://vasturiano.github.io/react-force-graph/example/highlight/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/highlight/index.html))
* [Multiple Node Selection](https://vasturiano.github.io/react-force-graph/example/multi-selection/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/multi-selection/index.html))
* [Larger graph](https://vasturiano.github.io/react-force-graph/example/large-graph/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/large-graph/index.html))
* [Dynamic data changes](https://vasturiano.github.io/react-force-graph/example/dynamic/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/dynamic/index.html))
* [Click to focus on node](https://vasturiano.github.io/react-force-graph/example/click-to-focus/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/click-to-focus/index.html))
* [Click to expand/collapse nodes](https://vasturiano.github.io/react-force-graph/example/expandable-nodes/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/expandable-nodes/index.html))
* [Fix nodes after dragging](https://vasturiano.github.io/react-force-graph/example/fix-dragged-nodes/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/fix-dragged-nodes/index.html))
* [Fit graph to canvas](https://vasturiano.github.io/react-force-graph/example/fit-to-canvas/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/fit-to-canvas/index.html))
* [Camera automatic orbitting](https://vasturiano.github.io/react-force-graph/example/camera-auto-orbit/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/camera-auto-orbit/index.html))
* [Node collision detection](https://vasturiano.github.io/react-force-graph/example/collision-detection/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/collision-detection/index.html))
* [Emit link particles on demand](https://vasturiano.github.io/react-force-graph/example/emit-particles/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/emit-particles/index.html))
* [Force-directed tree (DAG mode)](https://vasturiano.github.io/react-force-graph/example/tree/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html))
* [Bloom Post-Processing Effect](https://vasturiano.github.io/react-force-graph/example/bloom-effect/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/bloom-effect/index.html))

## Quick start

```js
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import ForceGraphVR from 'react-force-graph-vr';
import ForceGraphAR from 'react-force-graph-ar';
```

or using a *script* tag

```html
<script src="//cdn.jsdelivr.net/npm/react-force-graph-2d"></script>
<script src="//cdn.jsdelivr.net/npm/react-force-graph-3d"></script>
<script src="//cdn.jsdelivr.net/npm/react-force-graph-vr"></script>
<script src="//cdn.jsdelivr.net/npm/react-force-graph-ar"></script>
```

then

```jsx
<ForceGraph3D
  graphData={myData}
/>
```

## API reference

Note that not all props listed below apply to all 4 components. The last 4 columns in these tables indicate the specific component availability of each prop/method.

### Data input

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>graphData</b> | <i>object</i> | `{ nodes: [], links: [] }` | Graph data structure (see below for syntax details). Can also be used to apply incremental updates. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeId</b> | <i>string</i> | `id` | Node object accessor attribute for unique node id (used in link objects source/target). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkSource</b> | <i>string</i> | `source` | Link object accessor attribute referring to id of source node. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkTarget</b> | <i>string</i> | `target` | Link object accessor attribute referring to id of target node. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Container layout

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>width</b> | <i>number</i> | *&lt;window width&gt;* | Canvas width, in px. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>height</b> | <i>number</i> | *&lt;window height&gt;* | Canvas height, in px. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>backgroundColor</b> | <i>string</i> | (2D - <i>light</i> / 3D - <i>dark</i>)| Chart background color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | |
| <b>showNavInfo</b> | <i>bool</i> | `true` | Whether to show the navigation controls footer info. | | :heavy_check_mark: | :heavy_check_mark: | |
| <b>yOffset</b> | <i>number</i> | 1.5 | In AR mode, defines the offset distance above the marker where to place the center coordinates `<0,0,0>` of the force directed graph. Measured in terms of marker width units. | | | | :heavy_check_mark: |
| <b>glScale</b> | <i>number</i> | 200 | In AR mode, defines the translation scale between real world distances and WebGL units, determining the overall size of the graph. Defined in terms of how many GL units fit in a full marker width. | | | | :heavy_check_mark: |
| <b>markerAttrs</b> | <i>object</i> | `{ preset: 'hiro' }` | Set of attributes that define the marker where the AR force directed graph is mounted, according to the [a-marker specification](https://ar-js-org.github.io/AR.js-Docs/marker-based/). This prop only has an effect on component mount. | | | | :heavy_check_mark: |

### Node styling

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>nodeRelSize</b> | <i>number</i> | 4 | Ratio of node circle area (square px) [2D] or sphere volume (cubic px) [3D] per value unit. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeVal</b> | <i>number</i>, <i>string</i> or <i>func</i> | `val` | Node object accessor function, attribute or a numeric constant for the node numeric value (affects node size). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeLabel</b> | <i>string</i> or <i>func</i> | `name` | Node object accessor function or attribute for name (shown in label). Supports plain text or HTML content (except in VR). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | |
| <b>nodeDesc</b> | <i>string</i> or <i>func</i> | `desc` | For VR only. Node object accessor function or attribute for description (shown under label). | | | :heavy_check_mark: | |
| <b>nodeVisibility</b>| <i>bool</i>, <i>string</i> or <i>func</i> | `true` | Node object accessor function, attribute or a boolean constant for whether to display the node. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeColor</b> | <i>string</i> or <i>func</i> | `color` | Node object accessor function or attribute for node color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeAutoColorBy</b> | <i>string</i> or <i>func</i> | | Node object accessor function or attribute to automatically group colors by. Only affects nodes without a color attribute. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeOpacity</b> | <i>number</i> | 0.75 | Nodes sphere opacity, between [0,1]. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeResolution</b> | <i>number</i> | 8 | Geometric resolution of each node's sphere, expressed in how many slice segments to divide the circumference. Higher values yield smoother spheres. Only applicable to 3D modes. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeCanvasObject</b> | <i>func</i> | *default 2D node object is a circle, sized according to `val` and styled according to `color`.* | Callback function for painting a custom 2D canvas object to represent graph nodes. Should use the provided canvas context attribute to perform drawing operations for each node. The callback function will be called for each node at every frame, and has the signature: `nodeCanvasObject(<node>, <canvas context>, <current global scale>)`. | :heavy_check_mark: | | | |
| <b>nodeCanvasObjectMode</b> | <i>string</i> or <i>func</i> | `() => 'replace'` | Node object accessor function or attribute for the custom drawing mode. Use in combination with `nodeCanvasObject` to specify how to customize nodes painting. Possible values are: <ul><li>`replace`: the node is rendered using just `nodeCanvasObject`.</li><li>`before`: the node is rendered by invoking `nodeCanvasObject` and then proceeding with the default node painting.</li><li>`after`: `nodeCanvasObject` is applied after the default node painting takes place.</li></ul>Any other value will be ignored and the default drawing will be applied. | :heavy_check_mark: | | | |
| <b>nodeThreeObject</b> | <i>Object3d</i>, <i>string</i> or <i>func</i> | *default 3D node object is a sphere, sized according to `val` and styled according to `color`.* | Node object accessor function or attribute for generating a custom 3d object to render as graph nodes. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). If a <i>falsy</i> value is returned, the default 3d object type will be used instead for that node. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeThreeObjectExtend</b> | <i>bool</i>, <i>string</i> or <i>func</i> | `false` | Node object accessor function, attribute or a boolean value for whether to replace the default node when using a custom `nodeThreeObject` (`false`) or to extend it (`true`). | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Link styling

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>linkLabel</b> | <i>string</i> or <i>func</i> | `name` | Link object accessor function or attribute for name (shown in label). Supports plain text or HTML content (except in VR). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | |
| <b>linkDesc</b> | <i>string</i> or <i>func</i> | `desc` | For VR only. Link object accessor function or attribute for description (shown under label). | | | :heavy_check_mark: | |
| <b>linkVisibility</b>| <i>bool</i>, <i>string</i> or <i>func</i> | `true` | Link object accessor function, attribute or a boolean constant for whether to display the link line. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkColor</b>| <i>string</i> or <i>func</i> | `color` | Link object accessor function or attribute for line color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkAutoColorBy</b> | <i>string</i> or <i>func</i> | | Link object accessor function or attribute to automatically group colors by. Only affects links without a color attribute. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkOpacity</b> | <i>number</i> | 0.2 | Line opacity of links, between [0,1]. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkLineDash</b> | <i>number[]</i>, <i>string</i> or <i>func</i>] | | Link object accessor function, attribute or number array (e.g. `[5, 15]`) to determine if a line dash should be applied to this rendered link. Refer to the [HTML canvas setLineDash API](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for example values. Either a falsy value or an empty array will disable dashing. | :heavy_check_mark: | | | |
| <b>linkWidth</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Link object accessor function, attribute or a numeric constant for the link line width. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkResolution</b> | <i>number</i> | 6 | Geometric resolution of each link 3D line, expressed in how many radial segments to divide the cylinder. Higher values yield smoother cylinders. Applicable only to links with positive width. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkCurvature</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Link object accessor function, attribute or a numeric constant for the curvature radius of the link line. A value of `0` renders a straight line. `1` indicates a radius equal to half of the line length, causing the curve to approximate a semi-circle. For self-referencing links (`source` equal to `target`) the curve is represented as a loop around the node, with length proportional to the curvature value. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkCurveRotation</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Link object accessor function, attribute or a numeric constant for the rotation along the line axis to apply to the curve. Has no effect on straight lines. At `0` rotation, the curve is oriented in the direction of the intersection with the `XY` plane. The rotation angle (in radians) will rotate the curved line clockwise around the "start-to-end" axis from this reference orientation. |  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkMaterial</b> | <i>Material</i>, <i>string</i> or <i>func</i> | *default link material is [MeshLambertMaterial](https://threejs.org/docs/#api/materials/MeshLambertMaterial) styled according to `color` and `opacity`.* | Link object accessor function or attribute for specifying a custom material to style the graph links with. Should return an instance of [ThreeJS Material](https://threejs.org/docs/#api/materials/Material). If a <i>falsy</i> value is returned, the default material will be used instead for that link. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkCanvasObject</b> | <i>func</i> | *default 2D link object is a line, styled according to `width` and `color`.* | Callback function for painting a custom canvas object to represent graph links. Should use the provided canvas context attribute to perform drawing operations for each link. The callback function will be called for each link at every frame, and has the signature: `.linkCanvasObject(<link>, <canvas context>, <current global scale>)`. | :heavy_check_mark: | | | |
| <b>linkCanvasObjectMode</b> | <i>string</i> or <i>func</i> | `() => 'replace'` | Link object accessor function or attribute for the custom drawing mode. Use in combination with `linkCanvasObject` to specify how to customize links painting. Possible values are: <ul><li>`replace`: the link is rendered using just `linkCanvasObject`.</li><li>`before`: the link is rendered by invoking `linkCanvasObject` and then proceeding with the default link painting.</li><li>`after`: `linkCanvasObject` is applied after the default link painting takes place.</li></ul>Any other value will be ignored and the default drawing will be applied. | :heavy_check_mark: | | | |
| <b>linkThreeObject</b> | <i>Object3d</i>, <i>string</i> or <i>func</i> | *default 3D link object is a line or cylinder, sized according to `width` and styled according to `material`.* | Link object accessor function or attribute for generating a custom 3d object to render as graph links. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). If a <i>falsy</i> value is returned, the default 3d object type will be used instead for that link. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkThreeObjectExtend</b> | <i>bool</i>, <i>string</i> or <i>func</i> | `false` | Link object accessor function, attribute or a boolean value for whether to replace the default link when using a custom `linkThreeObject` (`false`) or to extend it (`true`). | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkPositionUpdate</b> | <i>func(linkObject, { start, end }, link)</i> | | Custom function to call for updating the position of links at every render iteration. It receives the respective link `ThreeJS Object3d`, the `start` and `end` coordinates of the link (`{x,y,z}` each), and the link's `data`. If the function returns a truthy value, the regular position update function will not run for that link. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalArrowLength</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Link object accessor function, attribute or a numeric constant for the length of the arrow head indicating the link directionality. The arrow is displayed directly over the link line, and points in the direction of `source` > `target`. A value of `0` hides the arrow. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalArrowColor</b> | <i>string</i> or <i>func</i> | `color` | Link object accessor function or attribute for the color of the arrow head. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalArrowRelPos</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.5 | Link object accessor function, attribute or a numeric constant for the longitudinal position of the arrow head along the link line, expressed as a ratio between `0` and `1`, where `0` indicates immediately next to the `source` node, `1` next to the `target` node, and `0.5` right in the middle. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalArrowResolution</b> | <i>number</i> | 8 | Geometric resolution of the arrow head, expressed in how many slice segments to divide the cone base circumference. Higher values yield smoother arrows. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticles</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Link object accessor function, attribute or a numeric constant for the number of particles (small spheres) to display over the link line. The particles are distributed equi-spaced along the line, travel in the direction `source` > `target`, and can be used to indicate link directionality. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleSpeed</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.01 | Link object accessor function, attribute or a numeric constant for the directional particles speed, expressed as the ratio of the link length to travel per frame. Values above `0.5` are discouraged. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleWidth</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.5 | Link object accessor function, attribute or a numeric constant for the directional particles width. Values are rounded to the nearest decimal for indexing purposes. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleColor</b> | <i>string</i> or <i>func</i> | `color` | Link object accessor function or attribute for the directional particles color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleResolution</b> | <i>number</i> | 4 | Geometric resolution of each 3D directional particle, expressed in how many slice segments to divide the circumference. Higher values yield smoother particles. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

| Method | Arguments | Description | 2D | 3D | VR | AR |
| --- | :--: | --- | :--: | :--: | :--: | :--: |
| <b>emitParticle</b> | (<i>link</i>) | An alternative mechanism for generating particles, this method emits a non-cyclical single particle within a specific link. The emitted particle shares the styling (speed, width, color) of the regular particle props. A valid `link` object that is included in `graphData` should be passed as a single parameter. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Render control

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>rendererConfig</b> | <i>object</i> | `{ antialias: true, alpha: true }` | Configuration parameters to pass to the [ThreeJS WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) constructor. This prop only has an effect on component mount. | | :heavy_check_mark: | | |
| <b>extraRenderers</b> | <i>array</i> | `[]` | If you wish to include custom objects that require a dedicated renderer besides `WebGL`, such as [CSS3DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer), include in this array those extra renderer instances. | | :heavy_check_mark: | | |
| <b>autoPauseRedraw</b> | <i>bool</i> | `true` | Enable performance optimization to automatically pause redrawing the 2D canvas at every frame whenever the simulation engine is halted. If you have custom dynamic objects that rely on a constant redraw of the canvas, it's recommended to switch this option off. | :heavy_check_mark: | | | |
| <b>minZoom</b> | <i>number</i> | 0.01 | Lowest zoom out level permitted on the 2D canvas. | :heavy_check_mark: | | | |
| <b>maxZoom</b> | <i>number</i> | 1000 | Highest zoom in level permitted on the 2D canvas. | :heavy_check_mark: | | | |
| <b>onRenderFramePre</b> | <i>func</i> | *-* | Callback function to invoke at every frame, immediately before any node/link is rendered to the canvas. This can be used to draw additional external items on the canvas. The canvas context and the current global scale are included as parameters: `.onRenderFramePre(<canvas context>, <global scale>)`. | :heavy_check_mark: | | | |
| <b>onRenderFramePost</b> | <i>func</i> | *-* | Callback function to invoke at every frame, immediately after the last node/link is rendered to the canvas. This can be used to draw additional external items on the canvas. The canvas context and the current global scale are included as parameters: `.onRenderFramePost(<canvas context>, <global scale>)`. | :heavy_check_mark: | | | |

| Method | Arguments | Description | 2D | 3D | VR | AR |
| --- | :--: | --- | :--: | :--: | :--: | :--: |
| <b>pauseAnimation</b> | *-* | Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>resumeAnimation</b> | *-* | Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>centerAt</b> | ([<i>x</i>], [<i>y</i>], [<i>ms</i>]) | Set the coordinates of the center of the viewport. This method can be used to perform panning on the 2D canvas programmatically. Each of the `x, y` coordinates is optional, allowing for motion in just one dimension. An optional 3rd argument defines the duration of the transition (in ms) to animate the canvas motion. | :heavy_check_mark: | | |
| <b>zoom</b> | ([<i>number</i>], [<i>ms</i>]) | Set the 2D canvas zoom amount. The zoom is defined in terms of the scale transform of each px. A value of `1` indicates unity, larger values zoom in and smaller values zoom out. An optional 2nd argument defines the duration of the transition (in ms) to animate the canvas motion. By default the zoom is set to a value inversely proportional to the amount of nodes in the system. | :heavy_check_mark: | | |
| <b>zoomToFit</b> | ([<i>ms</i>], [<i>px</i>], [<i>nodeFilterFn</i>]) | Automatically zooms/pans the canvas so that all of the nodes fit inside it. If no nodes are found no action is taken. It accepts two optional arguments: the first defines the duration of the transition (in ms) to animate the canvas motion (default: 0ms). The second argument is the amount of padding (in px) between the edge of the canvas and the outermost node (default: 10px). The third argument specifies a custom node filter: `node => <boolean>`, which should return a truthy value if the node is to be included. This can be useful for focusing on a portion of the graph. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>cameraPosition</b> | ([<i>{x,y,z}</i>],[<i>lookAt</i>], [<i>ms</i>]) | Re-position the camera, in terms of `x`, `y`, `z` coordinates. Each of the coordinates is optional, allowing for motion in just some dimensions. The optional second argument can be used to define the direction that the camera should aim at, in terms of an `{x,y,z}` point in the 3D space. The 3rd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. By default the camera will face the center of the graph at a `z` distance proportional to the amount of nodes in the system. | | :heavy_check_mark: | | |
| <b>lights</b> | ([<i>array</i>]) | Getter/setter for the list of lights to use in the scene. Each item should be an instance of [Light](https://threejs.org/docs/#api/en/lights/Light). | | :heavy_check_mark: | | |
| <b>scene</b> | *-* | Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). | | :heavy_check_mark: | | |
| <b>camera</b> | *-* | Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). | | :heavy_check_mark: | | |
| <b>renderer</b> | *-* | Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). | | :heavy_check_mark: | | |
| <b>postProcessingComposer</b> | *-* | Access the [post-processing composer](https://threejs.org/docs/#examples/en/postprocessing/EffectComposer). Use this to add post-processing [rendering effects](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/postprocessing) to the scene. By default the composer has a single pass ([RenderPass](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/postprocessing/RenderPass.js)) that directly renders the scene without any effects. | | :heavy_check_mark: | | | 
| <b>controls</b> | *-* | Access the internal ThreeJS controls object. | | :heavy_check_mark: | | |
| <b>refresh</b> | *-* | Redraws all the nodes/links. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Force engine configuration

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>numDimensions</b> | <i>1</i>, <i>2</i> or <i>3</i> | 3 | Not applicable to 2D mode. Number of dimensions to run the force simulation on. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>forceEngine</b> | <i>string</i> | `d3` | Which force-simulation engine to use ([*d3*](https://github.com/vasturiano/d3-force-3d) or [*ngraph*](https://github.com/anvaka/ngraph.forcelayout)). | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>dagMode</b> | <i>string</i> | *-* | Apply layout constraints based on the graph directionality. Only works correctly for [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) graph structures (without cycles). Choice between `td` (top-down), `bu` (bottom-up), `lr` (left-to-right), `rl` (right-to-left), `zout` (near-to-far), `zin` (far-to-near), `radialout` (outwards-radially) or `radialin` (inwards-radially). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>dagLevelDistance</b> | <i>number</i> | *auto-derived from the number of nodes* | If `dagMode` is engaged, this specifies the distance between the different graph depths. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>dagNodeFilter</b> | <i>func</i> | `node => true` | Node accessor function to specify nodes to ignore during the DAG layout processing. This accessor method receives a node object and should return a `boolean` value indicating whether the node is to be included. Excluded nodes will be left unconstrained and free to move in any direction. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onDagError</b> | <i>func</i> | *-* | Callback to invoke if a cycle is encountered while processing the data structure for a DAG layout. The loop segment of the graph is included for information, as an array of node ids. By default an exception will be thrown whenever a loop is encountered. You can override this method to handle this case externally and allow the graph to continue the DAG processing. Strict graph directionality is not guaranteed if a loop is encountered and the result is a best effort to establish a hierarchy. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3AlphaMin</b> | <i>number</i> | 0 | Sets the [simulation alpha min](https://github.com/vasturiano/d3-force-3d#simulation_alphaMin) parameter. Only applicable if using the d3 simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3AlphaDecay</b> | <i>number</i> | 0.0228 | Sets the [simulation intensity decay](https://github.com/vasturiano/d3-force-3d#simulation_alphaDecay) parameter. Only applicable if using the d3 simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3VelocityDecay</b> | <i>number</i> | 0.4 | Nodes' [velocity decay](https://github.com/vasturiano/d3-force-3d#simulation_velocityDecay) that simulates the medium resistance. Only applicable if using the d3 simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>ngraphPhysics</b> | <i>object</i> | *-* | Specify custom physics configuration for ngraph, according to its [configuration object](https://github.com/anvaka/ngraph.forcelayout#configuring-physics) syntax. Only applicable if using the ngraph simulation engine. | | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>warmupTicks</b> | <i>number</i> | 0 | Number of layout engine cycles to dry-run at ignition before starting to render. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>cooldownTicks</b> | <i>number</i> | Infinity | How many build-in frames to render before stopping and freezing the layout engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>cooldownTime</b> | <i>number</i> | 15000 | How long (ms) to render for before stopping and freezing the layout engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onEngineTick</b> | <i>func</i> | *-* | Callback function invoked at every tick of the simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onEngineStop</b> | <i>func</i> | *-* | Callback function invoked when the simulation engine stops and the layout is frozen. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

| Method | Arguments | Description | 2D | 3D | VR | AR |
| --- | :--: | --- | :--: | :--: | :--: | :--: |
| <b>d3Force</b> | (<i>string</i>, [<i>func</i>]) | Access to the internal forces that control the d3 simulation engine. Follows the same interface as `d3-force-3d`'s [simulation.force](https://github.com/vasturiano/d3-force-3d#simulation_force). Three forces are included by default: `'link'` (based on [forceLink](https://github.com/vasturiano/d3-force-3d#forceLink)), `'charge'` (based on [forceManyBody](https://github.com/vasturiano/d3-force-3d#forceManyBody)) and `'center'` (based on [forceCenter](https://github.com/vasturiano/d3-force-3d#forceCenter)). Each of these forces can be reconfigured, or new forces can be added to the system. Only applicable if using the d3 simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3ReheatSimulation</b> | () | Reheats the force simulation engine, by setting the `alpha` value to `1`. Only applicable if using the d3 simulation engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Interaction

| Prop | Type | Default | Description | 2D | 3D | VR | AR |
| --- | :--: | :--: | --- | :--: | :--: | :--: | :--: |
| <b>onNodeClick</b> | <i>func</i> | *-* | Callback function for node (left-button) clicks. The node object and the event object are included as arguments `onNodeClick(node, event)`. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onNodeRightClick</b> | <i>func</i> | *-* | Callback function for node right-clicks. The node object and the event object are included as arguments `onNodeRightClick(node, event)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onNodeHover</b> | <i>func</i> | *-* | Callback function for node mouse over events. The node object (or `null` if there's no node under the pointer line of sight) is included as the first argument, and the previous node object (or null) as second argument: `onNodeHover(node, prevNode)`. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onNodeDrag</b> | <i>func</i> | *-* | Callback function for node drag interactions. This function is invoked repeatedly while dragging a node, every time its position is updated. The node object is included as the first argument, and the change in coordinates since the last iteration of this function are included as the second argument in format {x,y,z}: `onNodeDrag(node, translate)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onNodeDragEnd</b> | <i>func</i> | *-* | Callback function for the end of node drag interactions. This function is invoked when the node is released. The node object is included as the first argument, and the change in coordinates from the node's initial postion are included as the second argument in format {x,y,z}: `onNodeDragEnd(node, translate)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onLinkClick</b> | <i>func</i> | *-* | Callback function for link (left-button) clicks. The link object and the event object are included as arguments `onLinkClick(link, event)`. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onLinkRightClick</b> | <i>func</i> | *-* | Callback function for link right-clicks. The link object and the event object are included as arguments `onLinkRightClick(link, event)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onLinkHover</b> | <i>func</i> | *-* | Callback function for link mouse over events. The link object (or `null` if there's no link under the pointer line of sight) is included as the first argument, and the previous link object (or null) as second argument: `onLinkHover(link, prevLink)`. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>onBackgroundClick</b> | <i>func</i> | *-* | Callback function for click events on the empty space between the nodes and links. The event object is included as single argument `onBackgroundClick(event)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onBackgroundRightClick</b> | <i>func</i> | *-* | Callback function for right-click events on the empty space between the nodes and links. The event object is included as single argument `onBackgroundRightClick(event)`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>linkHoverPrecision</b> | <i>number</i> | 4 | Whether to display the link label when gazing the link closely (low value) or from far away (high value). | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>onZoom</b> | <i>func</i> | *-* | Callback function for zoom/pan events. The current zoom transform is included as single argument `onZoom({ k, x, y })`. Note that `onZoom` is triggered by user interaction as well as programmatic zooming/panning with `zoom()` and `centerAt()`. | :heavy_check_mark: | | | |
| <b>onZoomEnd</b> | <i>func</i> | *-* | Callback function for on 'end' of zoom/pan events. The current zoom transform is included as single argument `onZoomEnd({ k, x, y })`. Note that `onZoomEnd` is triggered by user interaction as well as programmatic zooming/panning with `zoom()` and `centerAt()`. | :heavy_check_mark: | | | |
| <b>controlType</b> | <i>string</i> | `trackball` | Which type of control to use to control the camera on 3D mode. Choice between [trackball](https://threejs.org/examples/misc_controls_trackball.html), [orbit](https://threejs.org/examples/#misc_controls_orbit) or [fly](https://threejs.org/examples/misc_controls_fly.html). | | :heavy_check_mark: | | |
| <b>enableZoomInteraction</b> | <i>bool</i> | `true` | Whether to enable zooming user interactions on a 2D canvas. | :heavy_check_mark: | | | |
| <b>enablePanInteraction</b> | <i>bool</i> | `true` | Whether to enable panning user interactions on a 2D canvas. | :heavy_check_mark: | | | |
| <b>enableNavigationControls</b> | <i>bool</i> | `true` | Whether to enable the trackball navigation controls used to move the camera using mouse interactions (rotate/zoom/pan). | | :heavy_check_mark: | | |
| <b>enablePointerInteraction</b> | <i>bool</i> | `true` | Whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your graph performance it's recommended to switch off this property. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>enableNodeDrag</b> | <i>bool</i> | `true` | Whether to enable the user interaction to drag nodes by click-dragging. If enabled, every time a node is dragged the simulation is re-heated so the other nodes react to the changes. Only applicable if enablePointerInteraction is `true`. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>nodePointerAreaPaint</b> | <i>func</i> | *default interaction area is a circle centered on the node and sized according to `val`.* | Callback function for painting a canvas area used to detect node pointer interactions. The provided paint color uniquely identifies the node and should be used to perform drawing operations on the provided canvas context. This painted area will not be visible, but instead be used to detect pointer interactions with the node. The callback function has the signature: `nodePointerAreaPaint(<node>, <color>, <canvas context>, <current global scale>)`. | :heavy_check_mark: | | | |
| <b>linkPointerAreaPaint</b> | <i>func</i> | *default interaction area is a straight line between the source and target nodes.* | Callback function for painting a canvas area used to detect link pointer interactions. The provided paint color uniquely identifies the link and should be used to perform drawing operations on the provided canvas context. This painted area will not be visible, but instead be used to detect pointer interactions with the link. The callback function has the signature: `linkPointerAreaPaint(<link>, <color>, <canvas context>, <current global scale>)`. | :heavy_check_mark: | | | |

###  Utility

| Method | Arguments | Description | 2D | 3D | VR | AR |
| --- | :--: | --- | :--: | :--: | :--: | :--: |
| <b>getGraphBbox</b> | ([<i>nodeFilterFn</i>]) | Returns the current bounding box of the nodes in the graph, formatted as `{ x: [<num>, <num>], y: [<num>, <num>], z: [<num>, <num>] }`. If no nodes are found, returns `null`. Accepts an optional argument to define a custom node filter: `node => <boolean>`, which should return a truthy value if the node is to be included. This can be useful to calculate the bounding box of a portion of the graph. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>screen2GraphCoords</b> | (<i>x</i>, <i>y</i>[, <i>distance</i>]) | Utility method to translate viewport coordinates to the graph domain. Given a pair of `x`,`y` screen coordinates, and optionally distance from camera for 3D mode, returns the current equivalent `{x, y (, z)}` in the domain of graph node coordinates. | :heavy_check_mark: | :heavy_check_mark: | | |
| <b>graph2ScreenCoords</b> | (<i>x</i>, <i>y</i>[, <i>z</i>]) | Utility method to translate node coordinates to the viewport domain. Given a set of `x`,`y`(,`z`) graph coordinates, returns the current equivalent `{x, y}` in viewport coordinates. | :heavy_check_mark: | :heavy_check_mark: | | |

### Input JSON syntax

```json
{
    "nodes": [ 
        { 
          "id": "id1",
          "name": "name1",
          "val": 1 
        },
        { 
          "id": "id2",
          "name": "name2",
          "val": 10 
        },
        ...
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        },
        ...
    ]
}
```

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-2d-img]: https://img.shields.io/npm/v/react-force-graph-2d
[npm-3d-img]: https://img.shields.io/npm/v/react-force-graph-3d
[npm-vr-img]: https://img.shields.io/npm/v/react-force-graph-vr
[npm-ar-img]: https://img.shields.io/npm/v/react-force-graph-ar
[npm-2d-url]: https://npmjs.org/package/react-force-graph-2d
[npm-3d-url]: https://npmjs.org/package/react-force-graph-3d
[npm-vr-url]: https://npmjs.org/package/react-force-graph-vr
[npm-ar-url]: https://npmjs.org/package/react-force-graph-ar
[build-size-2d-img]: https://img.shields.io/bundlephobia/minzip/react-force-graph-2d
[build-size-3d-img]: https://img.shields.io/bundlephobia/minzip/react-force-graph-3d
[build-size-vr-img]: https://img.shields.io/bundlephobia/minzip/react-force-graph-vr
[build-size-ar-img]: https://img.shields.io/bundlephobia/minzip/react-force-graph-ar
[build-size-2d-url]: https://bundlephobia.com/result?p=react-force-graph-2d
[build-size-3d-url]: https://bundlephobia.com/result?p=react-force-graph-3d
[build-size-vr-url]: https://bundlephobia.com/result?p=react-force-graph-vr
[build-size-ar-url]: https://bundlephobia.com/result?p=react-force-graph-ar
[npm-downloads-2d-img]: https://img.shields.io/npm/dt/react-force-graph-2d
[npm-downloads-3d-img]: https://img.shields.io/npm/dt/react-force-graph-3d
[npm-downloads-vr-img]: https://img.shields.io/npm/dt/react-force-graph-vr
[npm-downloads-ar-img]: https://img.shields.io/npm/dt/react-force-graph-ar
[npm-downloads-2d-url]: https://www.npmtrends.com/react-force-graph-2d
[npm-downloads-3d-url]: https://www.npmtrends.com/react-force-graph-2d
[npm-downloads-vr-url]: https://www.npmtrends.com/react-force-graph-vr
[npm-downloads-ar-url]: https://www.npmtrends.com/react-force-graph-ar
