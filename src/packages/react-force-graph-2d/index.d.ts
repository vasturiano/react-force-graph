import * as React from 'react';
import { ForceGraphInstance as ForceGraphKapsuleInstance } from 'force-graph';

export interface GraphData<NodeType extends NodeObject, LinkType extends LinkObject<NodeType>> {
  nodes: NodeType[];
  links: LinkType[];
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

export type LinkObject<NodeType extends NodeObject = NodeObject> = {
  source?: string | number | NodeType;
  target?: string | number | NodeType;
};

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

type CanvasCustomRenderMode = 'replace' | 'before' | 'after';
type CanvasCustomRenderFn<T> = (obj: T, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
type CanvasPointerAreaPaintFn<T> = (obj: T, paintColor: string, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';

interface ForceFn<NodeType extends NodeObject> {
  (alpha: number): void;
  initialize?: (nodes: NodeType[], ...args: any[]) => void;
  [key: string]: any;
}

export interface ForceGraphProps<
  NodeType extends NodeObject,
  LinkType extends LinkObject<NodeType>
> {
  // Data input
  graphData?: GraphData<NodeType, LinkType>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;

  // Node styling
  nodeRelSize?: number;
  nodeVal?: Accessor<NodeType, number>;
  nodeLabel?: Accessor<NodeType, string>;
  nodeVisibility?: Accessor<NodeType, boolean>;
  nodeColor?: Accessor<NodeType, string>;
  nodeAutoColorBy?: Accessor<NodeType, string | null>;
  nodeCanvasObjectMode?: string | ((obj: NodeType) => CanvasCustomRenderMode | any);
  nodeCanvasObject?: CanvasCustomRenderFn<NodeType>;
  nodePointerAreaPaint?: CanvasPointerAreaPaintFn<NodeType>;

  // Link styling
  linkLabel?: Accessor<LinkType, string>;
  linkVisibility?: Accessor<LinkType, boolean>;
  linkColor?: Accessor<LinkType, string>;
  linkAutoColorBy?: Accessor<LinkType, string | null>;
  linkLineDash?: Accessor<LinkType, number[] | null>;
  linkWidth?: Accessor<LinkType, number>;
  linkCurvature?: Accessor<LinkType, number>;
  linkCanvasObject?: CanvasCustomRenderFn<LinkType>;
  linkCanvasObjectMode?: string | ((obj: LinkType) => CanvasCustomRenderMode | any);
  linkDirectionalArrowLength?: Accessor<LinkType, number>;
  linkDirectionalArrowColor?: Accessor<LinkType, string>;
  linkDirectionalArrowRelPos?: Accessor<LinkType, number>;
  linkDirectionalParticles?: Accessor<LinkType, number>;
  linkDirectionalParticleSpeed?: Accessor<LinkType, number>;
  linkDirectionalParticleWidth?: Accessor<LinkType, number>;
  linkDirectionalParticleColor?: Accessor<LinkType, string>;
  linkPointerAreaPaint?: CanvasPointerAreaPaintFn<LinkType>;

  // Render control
  autoPauseRedraw?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onRenderFramePre?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
  onRenderFramePost?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

  // Force engine (d3-force) configuration
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  dagNodeFilter?: (node: NodeType) => boolean;
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
  onNodeClick?: (node: NodeType, event: MouseEvent) => void;
  onNodeRightClick?: (node: NodeType, event: MouseEvent) => void;
  onNodeHover?: (node: NodeType | null, previousNode: NodeType | null) => void;
  onNodeDrag?: (node: NodeType, translate: { x: number, y: number }) => void;
  onNodeDragEnd?: (node: NodeType, translate: { x: number, y: number }) => void;
  onLinkClick?: (link: LinkType, event: MouseEvent) => void;
  onLinkRightClick?: (link: LinkType, event: MouseEvent) => void;
  onLinkHover?: (link: LinkType | null, previousLink: LinkType | null) => void;
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
  NodeType extends NodeObject,
  LinkType extends LinkObject<NodeType>
> {
  // Link styling
  emitParticle(link: LinkType): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<NodeType> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeType>): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  pauseAnimation(): ForceGraphKapsuleInstance;
  resumeAnimation(): ForceGraphKapsuleInstance;
  centerAt(): {x: number, y: number};
  centerAt(x?: number, y?: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoom(): number;
  zoom(scale: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: NodeType) => boolean): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeType) => boolean): { x: [number, number], y: [number, number] };
  screen2GraphCoords(x: number, y: number): { x: number, y: number };
  graph2ScreenCoords(x: number, y: number): { x: number, y: number };
}

type FCwithRef = <NodeType extends NodeObject, LinkType extends LinkObject<NodeType>>(props: ForceGraphProps<NodeType, LinkType> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeType, LinkType> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
