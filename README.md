# react-force-graph

React bindings for the **force-graph** suite of components: [3d-force-graph](https://github.com/vasturiano/3d-force-graph) (ThreeJS/WebGL), [3d-force-graph-vr](https://github.com/vasturiano/3d-force-graph-vr) (A-Frame) and [force-graph](https://github.com/vasturiano/force-graph) (2D HTML Canvas).

[![NPM](https://nodei.co/npm/react-force-graph.png?compact=true)](https://nodei.co/npm/react-force-graph/)

This module exports 3 React components with identical interfaces: `ForceGraph2D`, `ForceGraph3D` and `ForceGraphVR`. Each can be used to represent a graph data structure in a 2 or 3-dimensional space using a force-directed iterative layout.

Uses canvas/WebGL for rendering and [d3-force-3d](https://github.com/vasturiano/d3-force-3d) for the underlying physics engine. 
Supports zooming/panning, node dragging and node/link hover/click interactions.

Check out the examples:
* [Basic](https://vasturiano.github.io/react-force-graph/example/basic/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/basic/index.html))
* [Directional links](https://vasturiano.github.io/react-force-graph/example/directional-links/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/directional-links/index.html))
* [Auto-colored nodes/links](https://vasturiano.github.io/react-force-graph/example/auto-colored/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/auto-colored/index.html))
* [2D Text nodes](https://vasturiano.github.io/react-force-graph/example/text-nodes/index-2d.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/text-nodes/index-2d.html))
* [3D Text nodes](https://vasturiano.github.io/react-force-graph/example/text-nodes/index-3d.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/text-nodes/index-3d.html))
* [Custom 2D node shapes](https://vasturiano.github.io/react-force-graph/example/custom-node-shape/index-canvas.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/custom-node-shape/index-canvas.html))
* [Custom 3D/VR node geometries](https://vasturiano.github.io/react-force-graph/example/custom-node-shape/index-three.html) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/custom-node-shape/index-three.html))
* [Highlight nodes/links](https://vasturiano.github.io/react-force-graph/example/highlight/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/highlight/index.html))
* [Larger graph](https://vasturiano.github.io/react-force-graph/example/large-graph/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/large-graph/index.html))
* [Dynamic data changes](https://vasturiano.github.io/react-force-graph/example/dynamic/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/dynamic/index.html))
* [Camera automatic orbitting](https://vasturiano.github.io/react-force-graph/example/camera-auto-orbit/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/camera-auto-orbit/index.html))
* [Node collision detection](https://vasturiano.github.io/react-force-graph/example/collision-detection/) ([source](https://github.com/vasturiano/react-force-graph/blob/master/example/collision-detection/index.html))

## Quick start

```
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';
```
or
```
var { ForceGraph2D, ForceGraph3D, ForceGraphVR } = require('react-force-graph');
```
or even
```
<script src="//unpkg.com/react-force-graph"></script>
```
then
```
ReactDOM.render(
  <ForceGraph3D
    graphData={myData}
  />, 
  myDOMElement
);
```

## API reference

Note that not all props listed below apply to all 3 components. The last 3 columns in these tables indicate the specific component availability of each prop/method.

### Data input
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>graphData</b> | <i>object</i> | `{ nodes: [], links: [] }` | Graph data structure (see below for syntax details). Can also be used to apply incremental updates. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeId</b> | <i>string</i> | `id` | Node object accessor attribute for unique node id (used in link objects source/target). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkSource</b> | <i>string</i> | `source` | Link object accessor attribute referring to id of source node. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkTarget</b> | <i>string</i> | `target` | Link object accessor attribute referring to id of target node. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Container layout 
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>width</b> | <i>number</i> | *&lt;window width&gt;* | Canvas width, in px. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>height</b> | <i>number</i> | *&lt;window height&gt;* | Canvas height, in px. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>backgroundColor</b> | <i>string</i> | (2D - <i>light</i> / 3D - <i>dark</i>)| Chart background color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>showNavInfo</b> | <i>bool</i> | `true` | Whether to show the navigation controls footer info. | | :heavy_check_mark: | :heavy_check_mark: |

### Node styling 
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>nodeRelSize</b> | <i>number</i> | 4 | Ratio of node circle area (square px) [2D] or sphere volume (cubic px) [3D] per value unit. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeVal</b> | <i>number</i>, <i>string</i> or <i>func</i> | `val` | Node object accessor function, attribute or a numeric constant for the node numeric value (affects node size). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeLabel</b> | <i>string</i> or <i>func</i> | `name` | Node object accessor function or attribute for name (shown in label). Supports plain text or HTML content (except in VR). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeDesc</b> | <i>string</i> or <i>func</i> | `desc` | For VR only. Node object accessor function or attribute for description (shown under label). | | | :heavy_check_mark: |
| <b>nodeColor</b> | <i>string</i> or <i>func</i> | `color` | Node object accessor function or attribute for node color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeAutoColorBy</b> | <i>string</i> or <i>func</i> | | Node object accessor function or attribute to automatically group colors by. Only affects nodes without a color attribute. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeOpacity</b> | <i>number</i> | 0.75 | Nodes sphere opacity, between [0,1]. | | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeResolution</b> | <i>number</i> | 8 | Geometric resolution of each node's sphere, expressed in how many slice segments to divide the circumference. Higher values yield smoother spheres. Only applicable to 3D modes. | | :heavy_check_mark: | :heavy_check_mark: |
| <b>nodeCanvasObject</b> | <i>func</i> | *default 2D node object is a circle, sized according to `val` and styled according to `color`.* | Callback function for painting a custom 2D canvas object to represent graph nodes. Should use the provided canvas context attribute to perform drawing operations for each node. The callback function will be called for each node at every frame, and has the signature: `nodeCanvasObject(<node>, <canvas context>, <current global scale>)`. | :heavy_check_mark: | | |
| <b>nodeThreeObject</b> | <i>Object3d</i>, <i>string</i> or <i>func</i> | *default 3D node object is a sphere, sized according to `val` and styled according to `color`.* | Node object accessor function or attribute for generating a custom 3d object to render as graph nodes. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). If a <i>falsy</i> value is returned, the default 3d object type will be used instead for that node. | | :heavy_check_mark: | :heavy_check_mark: |

### Link styling 
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>linkLabel</b> | <i>string</i> or <i>func</i> | `name` | Link object accessor function or attribute for name (shown in label). Supports plain text or HTML content (except in VR). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDesc</b> | <i>string</i> or <i>func</i> | `desc` | For VR only. Link object accessor function or attribute for description (shown under label). | | | :heavy_check_mark: |
| <b>linkColor</b>| <i>string</i> or <i>func</i> | `color` | Link object accessor function or attribute for line color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkAutoColorBy</b> | <i>string</i> or <i>func</i> | | Link object accessor function or attribute to automatically group colors by. Only affects links without a color attribute. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkOpacity</b> | <i>number</i> | 0.2 | Line opacity of links, between [0,1]. | | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkWidth</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Link object accessor function, attribute or a numeric constant for the link line width. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkResolution</b> | <i>number</i> | 6 | Geometric resolution of each link 3D line, expressed in how many radial segments to divide the cylinder. Higher values yield smoother cylinders. Applicable only to links with positive width. | | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticles</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Link object accessor function, attribute or a numeric constant for the number of particles (small spheres) to display over the link line. The particles are distributed equi-spaced along the line, travel in the direction `source` > `target`, and can be used to indicate link directionality. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleSpeed</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.01 | Link object accessor function, attribute or a numeric constant for the directional particles speed, expressed as the ratio of the link length to travel per frame. Values above `0.5` are discouraged. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleWidth</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.5 | Link object accessor function, attribute or a numeric constant for the directional particles width. Values are rounded to the nearest decimal for indexing purposes. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleColor</b> | <i>string</i> or <i>func</i> | `color` | Link object accessor function or attribute for the directional particles color. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>linkDirectionalParticleResolution</b> | <i>number</i> | 4 | Geometric resolution of each 3D directional particle, expressed in how many slice segments to divide the circumference. Higher values yield smoother particles. | | :heavy_check_mark: | :heavy_check_mark: |

### Render control
| Method | Arguments | Description | 2D | 3D | VR |
| --- | :--: | --- | :--: | :--: | :--: |
| <b>stopAnimation</b> | *-* | Stops the rendering cycle of the component, effectively freezing the current view and canceling all future user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>centerAt</b> | ([<i>x</i>, <i>y</i>]) | Set the coordinates of the center of the viewport. This method can be used to perform panning on the 2D canvas programmatically. Each of the `x, y` coordinates is optional, allowing for motion in just one dimension. | :heavy_check_mark: | |
| <b>zoom</b> | ([<i>num</i>]) | Set the 2D canvas zoom amount. The zoom is defined in terms of the scale transform of each px. A value of `1` indicates unity, larger values zoom in and smaller values zoom out. By default the zoom is set to a value inversely proportional to the amount of nodes in the system. | :heavy_check_mark: | |
| <b>cameraPosition</b> | ([<i>{x,y,z}</i>],[<i>lookAt</i>]) | Re-position the camera, in terms of `x`, `y`, `z` coordinates. Each of the coordinates is optional, allowing for motion in just some dimensions. An optional second argument can be used to define the direction that the camera should aim at, in terms of an `{x,y,z}` point in the 3D space. By default the camera will face the center of the graph at a `z` distance proportional to the amount of nodes in the system. | | :heavy_check_mark: | |

### Force engine (d3-force) configuration 
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>numDimensions</b> | <i>1</i>, <i>2</i> or <i>3</i> | 3 | Not applicable to 2D mode. Number of dimensions to run the force simulation on. | | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3AlphaDecay</b> | <i>number</i> | 0.0228 | Sets the [simulation intensity decay](https://github.com/vasturiano/d3-force-3d#simulation_alphaDecay) parameter. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>d3VelocityDecay</b> | <i>number</i> | 0.4 | Nodes' [velocity decay](https://github.com/vasturiano/d3-force-3d#simulation_velocityDecay) that simulates the medium resistance. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>warmupTicks</b> | <i>number</i> | 0 | Number of layout engine cycles to dry-run at ignition before starting to render. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>cooldownTicks</b> | <i>number</i> | Infinity | How many build-in frames to render before stopping and freezing the layout engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>cooldownTime</b> | <i>num</i> | 15000 | How long (ms) to render for before stopping and freezing the layout engine. | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

| Method | Arguments | Description | 2D | 3D | VR |
| --- | :--: | --- | :--: | :--: | :--: |
| <b>d3Force</b> | (<i>string</i>, [<i>func</i>]) | Access to the internal forces that control the d3 simulation engine. Follows the same interface as `d3-force-3d`'s [simulation.force](https://github.com/vasturiano/d3-force-3d#simulation_force). Three forces are included by default: `'link'` (based on [forceLink](https://github.com/vasturiano/d3-force-3d#forceLink)), `'charge'` (based on [forceManyBody](https://github.com/vasturiano/d3-force-3d#forceManyBody)) and `'center'` (based on [forceCenter](https://github.com/vasturiano/d3-force-3d#forceCenter)). Each of these forces can be reconfigured, or new forces can be added to the system. | :heavy_check_mark: | :heavy_check_mark: | |

### Interaction
| Prop | Type | Default | Description | 2D | 3D | VR |
| --- | :--: | :--: | --- | :--: | :--: | :--: |
| <b>onNodeClick</b> | <i>func</i> | *-* | Callback function for node clicks. The node object is included as single argument `onNodeClick(node)`. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>onLinkClick</b> | <i>func</i> | *-* | Callback function for link clicks. The link object is included as single argument `onLinkClick(link)`. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>onNodeHover</b> | <i>func</i> | *-* | Callback function for node mouse over events. The node object (or `null` if there's no node under the mouse line of sight) is included as the first argument, and the previous node object (or null) as second argument: `onNodeHover(node, prevNode)`. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>onLinkHover</b> | <i>func</i> | *-* | Callback function for link mouse over events. The link object (or `null` if there's no link under the mouse line of sight) is included as the first argument, and the previous link object (or null) as second argument: `onLinkHover(link, prevLink)`. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>linkHoverPrecision</b> | <i>number</i> | 4 | Whether to display the link label when gazing the link closely (low value) or from far away (high value). | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| <b>enableZoomPanInteraction</b> | <i>bool</i> | `true` | Whether to enable zooming and panning user interactions on a 2D canvas. | :heavy_check_mark: | | |
| <b>enablePointerInteraction | <i>bool</i> | `true` | Whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your graph performance it's recommended to switch off this property. | :heavy_check_mark: | :heavy_check_mark: | |
| <b>enableNodeDrag</b> | <i>bool</i> | `true` | Whether to enable the user interaction to drag nodes by click-dragging. If enabled, every time a node is dragged the simulation is re-heated so the other nodes react to the changes. Only applicable if enablePointerInteraction is `true`. | :heavy_check_mark: | :heavy_check_mark: | |

### Input JSON syntax

```
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
        (...)
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        },
        (...)
    ]
}
```
