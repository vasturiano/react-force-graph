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
  nodeLabel?: Accessor<NodeObject<NodeType>, string>;
  nodeDesc?: Accessor<NodeObject<NodeType>, string>;
  nodeRelSize?: number;
  nodeVal?: Accessor<NodeObject<NodeType>, number>;
  nodeVisibility?: Accessor<NodeObject<NodeType>, boolean>;
  nodeColor?: Accessor<NodeObject<NodeType>, string>;
  nodeAutoColorBy?: Accessor<NodeObject<NodeType>, string | null>;
  nodeOpacity?: number;
  nodeResolution?: number;
  nodeThreeObject?: Accessor<NodeObject<NodeType>, Object3D>;
  nodeThreeObjectExtend?: Accessor<NodeObject<NodeType>, boolean>;

  // Link styling
  linkLabel?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkDesc?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkVisibility?: Accessor<LinkObject<NodeType, LinkType>, boolean>;
  linkColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkAutoColorBy?: Accessor<LinkObject<NodeType, LinkType>, string | null>;
  linkWidth?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkOpacity?: number;
  linkResolution?: number;
  linkCurvature?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkCurveRotation?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkMaterial?: Accessor<LinkObject<NodeType, LinkType>, Material | boolean | null>;
  linkThreeObject?: Accessor<LinkObject<NodeType, LinkType>, Object3D>;
  linkThreeObjectExtend?: Accessor<LinkObject<NodeType, LinkType>, boolean>;
  linkPositionUpdate?: LinkPositionUpdateFn | null;
  linkDirectionalArrowLength?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalArrowColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkDirectionalArrowRelPos?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalArrowResolution?: number;
  linkDirectionalParticles?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleSpeed?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleWidth?: Accessor<LinkObject<NodeType, LinkType>, number>;
  linkDirectionalParticleColor?: Accessor<LinkObject<NodeType, LinkType>, string>;
  linkDirectionalParticleResolution?: number;

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
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn<NodeObject<NodeType>>): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  refresh(): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject<NodeType>) => boolean): { x: [number, number], y: [number, number], z: [number, number] };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObject<NodeType>, LinkObject<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
