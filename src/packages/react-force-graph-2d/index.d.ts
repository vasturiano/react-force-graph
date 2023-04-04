import * as React from 'react';
import { ForceGraphInstance as ForceGraphKapsuleInstance } from 'force-graph';

export interface GraphData<Node extends NodeObject, Link extends LinkObject<Node>> {
  nodes: Node[];
  links: Link[];
}

export type NodeObject = {
  id?: string | number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
};

export type LinkObject<Node extends NodeObject = NodeObject> = {
  source?: string | number | Node;
  target?: string | number | Node;
};

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

type CanvasCustomRenderMode = 'replace' | 'before' | 'after';
type CanvasCustomRenderFn<T> = (obj: T, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
type CanvasPointerAreaPaintFn<T> = (obj: T, paintColor: string, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';

interface ForceFn<Node extends NodeObject> {
  (alpha: number): void;
  initialize?: (nodes: Node[], ...args: any[]) => void;
  [key: string]: any;
}

export interface ForceGraphProps<
  Node extends NodeObject,
  Link extends LinkObject<Node>
> {
  // Data input
  graphData?: GraphData<Node, Link>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;

  // Node styling
  nodeRelSize?: number;
  nodeVal?: Accessor<Node, number>;
  nodeLabel?: Accessor<Node, string>;
  nodeVisibility?: Accessor<Node, boolean>;
  nodeColor?: Accessor<Node, string>;
  nodeAutoColorBy?: Accessor<Node, string | null>;
  nodeCanvasObjectMode?: string | ((obj: Node) => CanvasCustomRenderMode | any);
  nodeCanvasObject?: CanvasCustomRenderFn<Node>;
  nodePointerAreaPaint?: CanvasPointerAreaPaintFn<Node>;

  // Link styling
  linkLabel?: Accessor<Link, string>;
  linkVisibility?: Accessor<Link, boolean>;
  linkColor?: Accessor<Link, string>;
  linkAutoColorBy?: Accessor<Link, string | null>;
  linkLineDash?: Accessor<Link, number[] | null>;
  linkWidth?: Accessor<Link, number>;
  linkCurvature?: Accessor<Link, number>;
  linkCanvasObject?: CanvasCustomRenderFn<Link>;
  linkCanvasObjectMode?: string | ((obj: Link) => CanvasCustomRenderMode | any);
  linkDirectionalArrowLength?: Accessor<Link, number>;
  linkDirectionalArrowColor?: Accessor<Link, string>;
  linkDirectionalArrowRelPos?: Accessor<Link, number>;
  linkDirectionalParticles?: Accessor<Link, number>;
  linkDirectionalParticleSpeed?: Accessor<Link, number>;
  linkDirectionalParticleWidth?: Accessor<Link, number>;
  linkDirectionalParticleColor?: Accessor<Link, string>;
  linkPointerAreaPaint?: CanvasPointerAreaPaintFn<Link>;

  // Render control
  autoPauseRedraw?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onRenderFramePre?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
  onRenderFramePost?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

  // Force engine (d3-force) configuration
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  dagNodeFilter?: (node: Node) => boolean;
  onDagError?: ((loopNodeIds: (string | number)[]) => void) | undefined;
  d3AlphaMin?: number;
  d3AlphaDecay?: number;
  d3VelocityDecay?: number;
  ngraphPhysics?: object;
  warmupTicks?: number;
  cooldownTicks?: number;
  cooldownTime?: number;
  onEngineTick?: () => void;
  onEngineStop?: () => void;

  // Interaction
  onNodeClick?: (node: Node, event: MouseEvent) => void;
  onNodeRightClick?: (node: Node, event: MouseEvent) => void;
  onNodeHover?: (node: Node | null, previousNode: Node | null) => void;
  onNodeDrag?: (node: Node, translate: { x: number, y: number }) => void;
  onNodeDragEnd?: (node: Node, translate: { x: number, y: number }) => void;
  onLinkClick?: (link: Link, event: MouseEvent) => void;
  onLinkRightClick?: (link: Link, event: MouseEvent) => void;
  onLinkHover?: (link: Link | null, previousLink: Link | null) => void;
  linkHoverPrecision?: number;
  onBackgroundClick?: (event: MouseEvent) => void;
  onBackgroundRightClick?: (event: MouseEvent) => void;
  onZoom?: (transform: {k: number, x: number, y: number}) => void;
  onZoomEnd?: (transform: {k: number, x: number, y: number}) => void;
  enableNodeDrag?: boolean;
  enableZoomInteraction?: boolean;
  enablePanInteraction?: boolean;
  enablePointerInteraction?: boolean;
}

export interface ForceGraphMethods<
  Node extends NodeObject,
  Link extends LinkObject<Node>
> {
  // Link styling
  emitParticle(link: Link): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<Node> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<Node>): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  pauseAnimation(): ForceGraphKapsuleInstance;
  resumeAnimation(): ForceGraphKapsuleInstance;
  centerAt(): {x: number, y: number};
  centerAt(x?: number, y?: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoom(): number;
  zoom(scale: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: Node) => boolean): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: Node) => boolean): { x: [number, number], y: [number, number] };
  screen2GraphCoords(x: number, y: number): { x: number, y: number };
  graph2ScreenCoords(x: number, y: number): { x: number, y: number };
}

type FCwithRef = <Node extends NodeObject, Link extends LinkObject<Node>>(props: ForceGraphProps<Node, Link> & { ref?: React.MutableRefObject<ForceGraphMethods<Node, Link> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
