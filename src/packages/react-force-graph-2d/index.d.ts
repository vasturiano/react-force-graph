import * as React from 'react';
import ForceGraphKapsule from 'force-graph';

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
type NodeAccessor<NodeType, T> = Accessor<NodeObject<NodeType>, T>;
type LinkAccessor<NodeType, LinkType, T> = Accessor<LinkObject<NodeType, LinkType>, T>;

type TooltipContent = string | React.ReactHTMLElement<HTMLElement>;

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
  nodeVal?: NodeAccessor<NodeType, number>;
  nodeLabel?: NodeAccessor<NodeType, TooltipContent>;
  nodeVisibility?: NodeAccessor<NodeType, boolean>;
  nodeColor?: NodeAccessor<NodeType, string>;
  nodeAutoColorBy?: NodeAccessor<NodeType, string | null>;
  nodeCanvasObjectMode?: string | ((obj: NodeObject<NodeType>) => CanvasCustomRenderMode | any);
  nodeCanvasObject?: CanvasCustomRenderFn<NodeObject<NodeType>>;
  nodePointerAreaPaint?: CanvasPointerAreaPaintFn<NodeObject<NodeType>>;

  // Link styling
  linkLabel?: LinkAccessor<NodeType, LinkType, TooltipContent>;
  linkVisibility?: LinkAccessor<NodeType, LinkType, boolean>;
  linkColor?: LinkAccessor<NodeType, LinkType, string>;
  linkAutoColorBy?: LinkAccessor<NodeType, LinkType, string | null>;
  linkLineDash?: LinkAccessor<NodeType, LinkType, number[] | null>;
  linkWidth?: LinkAccessor<NodeType, LinkType, number>;
  linkCurvature?: LinkAccessor<NodeType, LinkType, number>;
  linkCanvasObject?: CanvasCustomRenderFn<LinkObject<NodeType, LinkType>>;
  linkCanvasObjectMode?: string | ((obj: LinkObject<NodeType, LinkType>) => CanvasCustomRenderMode | any);
  linkDirectionalArrowLength?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalArrowColor?: LinkAccessor<NodeType, LinkType, string>;
  linkDirectionalArrowRelPos?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticles?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleSpeed?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleOffset?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleWidth?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleColor?: LinkAccessor<NodeType, LinkType, string>;
  linkDirectionalParticleCanvasObject?: (x: number, y: number, link: LinkType, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
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
  showPointerCursor?: boolean | ((obj: NodeObject<NodeType> | LinkObject<NodeType, LinkType> | undefined) => boolean);
  onZoom?: (transform: {k: number, x: number, y: number}) => void;
  onZoomEnd?: (transform: {k: number, x: number, y: number}) => void;
  enableNodeDrag?: boolean;
  enableZoomInteraction?: boolean | ((event: MouseEvent) => boolean);
  enablePanInteraction?: boolean | ((event: MouseEvent) => boolean);
  enablePointerInteraction?: boolean;
}

export interface ForceGraphMethods<
  NodeType = {},
  LinkType = {}
> {
  // Link styling
  emitParticle(link: LinkObject<NodeType, LinkType>): ForceGraphKapsule;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<NodeObject<NodeType>> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeObject<NodeType>> | null): ForceGraphKapsule;
  d3ReheatSimulation(): ForceGraphKapsule;

  // Render control
  pauseAnimation(): ForceGraphKapsule;
  resumeAnimation(): ForceGraphKapsule;
  centerAt(): {x: number, y: number};
  centerAt(x?: number, y?: number, durationMs?: number): ForceGraphKapsule;
  zoom(): number;
  zoom(scale: number, durationMs?: number): ForceGraphKapsule;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: NodeObject<NodeType>) => boolean): ForceGraphKapsule;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject<NodeType>) => boolean): { x: [number, number], y: [number, number] };
  screen2GraphCoords(x: number, y: number): { x: number, y: number };
  graph2ScreenCoords(x: number, y: number): { x: number, y: number };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
