import * as React from 'react';
import { Object3D, Material } from 'three';
import { ConfigOptions, ForceGraphVRInstance as ForceGraphKapsuleInstance } from '3d-force-graph-vr';

export interface GraphData<NodeType = {}, LinkType = {}> {
  nodes: NodeObject<NodeType>[];
  links: LinkObject<NodeType, LinkType>[];
}

export type NodeObject<NodeType = {}> = NodeType & {
  id?: string | number;
  x?: number;
  y?: number;
  z?: number;
  vx?: number;
  vy?: number;
  vz?: number;
  fx?: number;
  fy?: number;
  fz?: number;
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

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'zout' | 'zin' | 'radialout' | 'radialin';

type ForceEngine = 'd3' | 'ngraph';

interface ForceFn<NodeType = {}> {
  (alpha: number): void;
  initialize?: (nodes: NodeObject<NodeType>[], ...args: any[]) => void;
  [key: string]: any;
}

type Coords = { x: number; y: number; z: number; }

type LinkPositionUpdateFn = <NodeType = {}, LinkType = {}>(obj: Object3D, coords: { start: Coords, end: Coords }, link: LinkObject<NodeType, LinkType>) => void | null | boolean;

export interface ForceGraphProps<
  NodeType = {},
  LinkType = {}
> extends ConfigOptions {
  // Data input
  graphData?: GraphData<NodeObject<NodeType>, LinkObject<NodeType, LinkType>>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  yOffset?: number;
  glScale?: number;

  // Node styling
  nodeLabel?: NodeAccessor<NodeType, string>;
  nodeDesc?: NodeAccessor<NodeType, string>;
  nodeRelSize?: number;
  nodeVal?: NodeAccessor<NodeType, number>;
  nodeVisibility?: NodeAccessor<NodeType, boolean>;
  nodeColor?: NodeAccessor<NodeType, string>;
  nodeAutoColorBy?: NodeAccessor<NodeType, string | null>;
  nodeOpacity?: number;
  nodeResolution?: number;
  nodeThreeObject?: NodeAccessor<NodeType, Object3D>;
  nodeThreeObjectExtend?: NodeAccessor<NodeType, boolean>;

  // Link styling
  linkLabel?: LinkAccessor<NodeType, LinkType, string>;
  linkDesc?: LinkAccessor<NodeType, LinkType, string>;
  linkVisibility?: LinkAccessor<NodeType, LinkType, boolean>;
  linkColor?: LinkAccessor<NodeType, LinkType, string>;
  linkAutoColorBy?: LinkAccessor<NodeType, LinkType, string | null>;
  linkWidth?: LinkAccessor<NodeType, LinkType, number>;
  linkOpacity?: number;
  linkResolution?: number;
  linkCurvature?: LinkAccessor<NodeType, LinkType, number>;
  linkCurveRotation?: LinkAccessor<NodeType, LinkType, number>;
  linkMaterial?: LinkAccessor<NodeType, LinkType, Material | boolean | null>;
  linkThreeObject?: LinkAccessor<NodeType, LinkType, Object3D>;
  linkThreeObjectExtend?: LinkAccessor<NodeType, LinkType, boolean>;
  linkPositionUpdate?: LinkPositionUpdateFn | null;
  linkDirectionalArrowLength?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalArrowColor?: LinkAccessor<NodeType, LinkType, string>;
  linkDirectionalArrowRelPos?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalArrowResolution?: number;
  linkDirectionalParticles?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleSpeed?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleOffset?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleWidth?: LinkAccessor<NodeType, LinkType, number>;
  linkDirectionalParticleColor?: LinkAccessor<NodeType, LinkType, string>;
  linkDirectionalParticleResolution?: number;
  linkDirectionalParticleThreeObject?: LinkAccessor<NodeType, LinkType, Object3D>;

  // Force engine (d3-force) configuration
  forceEngine?: ForceEngine;
  numDimensions?: 1 | 2 | 3;
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
  onNodeHover?: (node: NodeObject<NodeType> | null, previousNode: NodeObject<NodeType> | null) => void;
  onNodeClick?: (link: LinkObject<NodeType, LinkType>) => void;
  onLinkHover?: (link: LinkObject<NodeType, LinkType> | null, previousLink: LinkObject<NodeType, LinkType> | null) => void;
  onLinkClick?: (link: LinkObject<NodeType, LinkType>) => void;
}

export interface ForceGraphMethods<
  NodeType = {},
  LinkType = {}
> {
  // Link styling
  emitParticle(link: LinkObject<NodeType, LinkType>): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn<NodeObject<NodeType>> | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeObject<NodeType>> | null): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  refresh(): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject<NodeType>) => boolean): { x: [number, number], y: [number, number], z: [number, number] };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
