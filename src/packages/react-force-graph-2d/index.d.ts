import * as React from 'react';
import { ForceGraphInstance as ForceGraphKapsuleInstance } from 'force-graph';

export interface GraphData<NodeType = {}, LinkType = {}> {
  nodes: NodeObject<NodeType>[];
  links: LinkObject<NodeType, LinkType>[];
}

export type NodeObject<NodeType = {}> = NodeType & {
  id?: string | number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
  [others: string]: any;
};

export type LinkObject<NodeType = {}, LinkType = {}> = LinkType & {
  source?: string | number | NodeObject<NodeType>;
  target?: string | number | NodeObject<NodeType>;
  [others: string]: any;
};

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

type CanvasCustomRenderMode = 'replace' | 'before' | 'after';
type CanvasCustomRenderFn<T> = (obj: T, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
type CanvasPointerAreaPaintFn<T> = (obj: T, paintColor: string, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';

interface ForceFn<NodeType = {}> {
  (alpha: number): void;
  initialize?: (nodes: NodeObject<NodeType>[], ...args: any[]) => void;
  [key: string]: any;
}

export interface ForceGraphProps<
  NodeType = {},
  LinkType = {}
> {
  // Data input
  graphData?: GraphData<NodeObject<NodeType>, LinkObject<NodeType, LinkType>>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;

  // Node styling
  nodeRelSize?: number;
  nodeVal?: Accessor<NodeObject<NodeType>, number>;
  nodeLabel?: Accessor<NodeObject<NodeType>, string>;
  nodeVisibility?: Accessor<NodeObject<NodeType>, boolean>;
  nodeColor?: Accessor<NodeObject<NodeType>, string>;
  nodeAutoColorBy?: Accessor<NodeObject<NodeType>, string | null>;
  nodeCanvasObjectMode?: string | ((obj: NodeObject<NodeType>) => CanvasCustomRenderMode | any);
  nodeCanvasObject?: CanvasCustomRenderFn<NodeObject<NodeType>>;
  nodePointerAreaPaint?: CanvasPointerAreaPaintFn<NodeObject<NodeType>>;

  // Link styling
  linkLabel?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkVisibility?: Accessor<LinkObject<NodeType, LinkType>, boolean>;
  linkColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkAutoColorBy?: Accessor<LinkObject<NodeType, LinkType>, string | null>;
  linkLineDash?: Accessor<LinkObject<NodeType, LinkType>, number[] | null>;
  linkWidth?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkCurvature?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkCanvasObject?: CanvasCustomRenderFn<LinkObject<NodeType, LinkType>>;
  linkCanvasObjectMode?: string | ((obj: LinkObject<NodeType, LinkType>) => CanvasCustomRenderMode | any);
  linkDirectionalArrowLength?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalArrowColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkDirectionalArrowRelPos?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticles?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleSpeed?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleWidth?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkPointerAreaPaint?: CanvasPointerAreaPaintFn<LinkObject<NodeType, LinkType>>;

  // Render control
  autoPauseRedraw?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onRenderFramePre?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
  onRenderFramePost?: (canvasContext: CanvasRenderingContext2D, globalScale: number) => void;

  // Force engine (d3-force) configuration
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  dagNodeFilter?: (node: NodeObject<NodeType>) => boolean;
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
  onNodeClick?: (node: NodeObject<NodeType>, event: MouseEvent) => void;
  onNodeRightClick?: (node: NodeObject<NodeType>, event: MouseEvent) => void;
  onNodeHover?: (node: NodeObject<NodeType> | null, previousNode: NodeObject<NodeType> | null) => void;
  onNodeDrag?: (node: NodeObject<NodeType>, translate: { x: number, y: number }) => void;
  onNodeDragEnd?: (node: NodeObject<NodeType>, translate: { x: number, y: number }) => void;
  onLinkClick?: (link: LinkObject<NodeType, LinkType>, event: MouseEvent) => void;
  onLinkRightClick?: (link: LinkObject<NodeType, LinkType>, event: MouseEvent) => void;
  onLinkHover?: (link: LinkObject<NodeType, LinkType> | null, previousLink: LinkObject<NodeType, LinkType> | null) => void;
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
  emitParticle(link: LinkObject<NodeType, LinkType>): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<NodeObject<NodeType>> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeObject<NodeType>>): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  pauseAnimation(): ForceGraphKapsuleInstance;
  resumeAnimation(): ForceGraphKapsuleInstance;
  centerAt(): {x: number, y: number};
  centerAt(x?: number, y?: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoom(): number;
  zoom(scale: number, durationMs?: number): ForceGraphKapsuleInstance;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: NodeObject<NodeType>) => boolean): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject<NodeType>) => boolean): { x: [number, number], y: [number, number] };
  screen2GraphCoords(x: number, y: number): { x: number, y: number };
  graph2ScreenCoords(x: number, y: number): { x: number, y: number };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
