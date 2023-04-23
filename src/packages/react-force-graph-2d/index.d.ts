import * as React from 'react';
import { ForceGraphInstance as ForceGraphKapsuleInstance } from 'force-graph';

export interface GraphData<NodeType = {}, LinkType = {}> {
  nodes: NodeObjectIntersection<NodeType>[];
  links: LinkObjectIntersection<NodeType, LinkType>[];
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

type NodeObjectIntersection<NodeType> = NodeType & NodeObject & { [others: string]: any; };

export type LinkObject<NodeType = {}> = {
  source?: string | number | NodeObjectIntersection<NodeType>;
  target?: string | number | NodeObjectIntersection<NodeType>;
};

type LinkObjectIntersection<NodeType, LinkType> = LinkType & LinkObject<NodeType> & { [others: string]: any; };

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

type CanvasCustomRenderMode = 'replace' | 'before' | 'after';
type CanvasCustomRenderFn<T> = (obj: T, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
type CanvasPointerAreaPaintFn<T> = (obj: T, paintColor: string, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';

interface ForceFn<NodeType = {}> {
  (alpha: number): void;
  initialize?: (nodes: NodeObjectIntersection<NodeType>[], ...args: any[]) => void;
  [key: string]: any;
}

export interface ForceGraphProps<
  NodeType = {},
  LinkType = {}
> {
  // Data input
  graphData?: GraphData<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;

  // Node styling
  nodeRelSize?: number;
  nodeVal?: Accessor<NodeObjectIntersection<NodeType>, number>;
  nodeLabel?: Accessor<NodeObjectIntersection<NodeType>, string>;
  nodeVisibility?: Accessor<NodeObjectIntersection<NodeType>, boolean>;
  nodeColor?: Accessor<NodeObjectIntersection<NodeType>, string>;
  nodeAutoColorBy?: Accessor<NodeObjectIntersection<NodeType>, string | null>;
  nodeCanvasObjectMode?: string | ((obj: NodeObjectIntersection<NodeType>) => CanvasCustomRenderMode | any);
  nodeCanvasObject?: CanvasCustomRenderFn<NodeObjectIntersection<NodeType>>;
  nodePointerAreaPaint?: CanvasPointerAreaPaintFn<NodeObjectIntersection<NodeType>>;

  // Link styling
  linkLabel?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkVisibility?: Accessor<LinkObjectIntersection<NodeType, LinkType>, boolean>;
  linkColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkAutoColorBy?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string | null>;
  linkLineDash?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number[] | null>;
  linkWidth?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkCurvature?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkCanvasObject?: CanvasCustomRenderFn<LinkObjectIntersection<NodeType, LinkType>>;
  linkCanvasObjectMode?: string | ((obj: LinkObjectIntersection<NodeType, LinkType>) => CanvasCustomRenderMode | any);
  linkDirectionalArrowLength?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalArrowColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkDirectionalArrowRelPos?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticles?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleSpeed?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleWidth?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkPointerAreaPaint?: CanvasPointerAreaPaintFn<LinkObjectIntersection<NodeType, LinkType>>;

  // Render control
  autoPauseRedraw?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onRenderFramePre?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
  onRenderFramePost?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

  // Force engine (d3-force) configuration
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  dagNodeFilter?: (node: NodeObjectIntersection<NodeType>) => boolean;
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
  onNodeClick?: (node: NodeObjectIntersection<NodeType>, event: MouseEvent) => void;
  onNodeRightClick?: (node: NodeObjectIntersection<NodeType>, event: MouseEvent) => void;
  onNodeHover?: (node: NodeObjectIntersection<NodeType> | null, previousNode: NodeObjectIntersection<NodeType> | null) => void;
  onNodeDrag?: (node: NodeObjectIntersection<NodeType>, translate: { x: number, y: number }) => void;
  onNodeDragEnd?: (node: NodeObjectIntersection<NodeType>, translate: { x: number, y: number }) => void;
  onLinkClick?: (link: LinkObjectIntersection<NodeType, LinkType>, event: MouseEvent) => void;
  onLinkRightClick?: (link: LinkObjectIntersection<NodeType, LinkType>, event: MouseEvent) => void;
  onLinkHover?: (link: LinkObjectIntersection<NodeType, LinkType> | null, previousLink: LinkObjectIntersection<NodeType, LinkType> | null) => void;
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
  NodeType = {},
  LinkType = {}
> {
  // Link styling
  emitParticle(link: LinkObjectIntersection<NodeType, LinkType>): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<NodeObjectIntersection<NodeType>> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeObjectIntersection<NodeType>>): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  pauseAnimation(): ForceGraphKapsuleInstance;
  resumeAnimation(): ForceGraphKapsuleInstance;
  centerAt(): {x: number, y: number};
  centerAt(x?: number, y?: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoom(): number;
  zoom(scale: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: NodeObjectIntersection<NodeType>) => boolean): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObjectIntersection<NodeType>) => boolean): { x: [number, number], y: [number, number] };
  screen2GraphCoords(x: number, y: number): { x: number, y: number };
  graph2ScreenCoords(x: number, y: number): { x: number, y: number };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
