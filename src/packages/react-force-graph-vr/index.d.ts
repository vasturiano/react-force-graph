import * as React from 'react';
import { Object3D, Material } from 'three';
import { ConfigOptions, ForceGraphVRInstance as ForceGraphKapsuleInstance } from '3d-force-graph-vr';

export interface GraphData<NodeType = {}, LinkType = {}> {
  nodes: NodeObjectIntersection<NodeType>[];
  links: LinkObjectIntersection<NodeType, LinkType>[];
}

export type NodeObject = {
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
};

type NodeObjectIntersection<NodeType> = NodeType & NodeObject & { [others: string]: any; };

export type LinkObject<NodeType> = {
  source?: string | number | NodeObjectIntersection<NodeType>;
  target?: string | number | NodeObjectIntersection<NodeType>;
};

type LinkObjectIntersection<NodeType = {}, LinkType = {}> = LinkType & LinkObject<NodeType> & { [others: string]: any; };

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'zout' | 'zin' | 'radialout' | 'radialin';

type ForceEngine = 'd3' | 'ngraph';

interface ForceFn<NodeType = {}> {
  (alpha: number): void;
  initialize?: (nodes: NodeObjectIntersection<NodeType>[], ...args: any[]) => void;
  [key: string]: any;
}

type Coords = { x: number; y: number; z: number; }

type LinkPositionUpdateFn = <NodeType = {}, LinkType = {}>(obj: Object3D, coords: { start: Coords, end: Coords }, link: LinkObjectIntersection<NodeType, LinkType>) => void | null | boolean;

export interface ForceGraphProps<
  NodeType = {},
  LinkType = {}
> extends ConfigOptions {
  // Data input
  graphData?: GraphData<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>>;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  yOffset?: number;
  glScale?: number;

  // Node styling
  nodeLabel?: Accessor<NodeObjectIntersection<NodeType>, string>;
  nodeDesc?: Accessor<NodeObjectIntersection<NodeType>, string>;
  nodeRelSize?: number;
  nodeVal?: Accessor<NodeObjectIntersection<NodeType>, number>;
  nodeVisibility?: Accessor<NodeObjectIntersection<NodeType>, boolean>;
  nodeColor?: Accessor<NodeObjectIntersection<NodeType>, string>;
  nodeAutoColorBy?: Accessor<NodeObjectIntersection<NodeType>, string | null>;
  nodeOpacity?: number;
  nodeResolution?: number;
  nodeThreeObject?: Accessor<NodeObjectIntersection<NodeType>, Object3D>;
  nodeThreeObjectExtend?: Accessor<NodeObjectIntersection<NodeType>, boolean>;

  // Link styling
  linkLabel?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkDesc?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkVisibility?: Accessor<LinkObjectIntersection<NodeType, LinkType>, boolean>;
  linkColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkAutoColorBy?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string | null>;
  linkWidth?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkOpacity?: number;
  linkResolution?: number;
  linkCurvature?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkCurveRotation?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkMaterial?: Accessor<LinkObjectIntersection<NodeType, LinkType>, Material | boolean | null>;
  linkThreeObject?: Accessor<LinkObjectIntersection<NodeType, LinkType>, Object3D>;
  linkThreeObjectExtend?: Accessor<LinkObjectIntersection<NodeType, LinkType>, boolean>;
  linkPositionUpdate?: LinkPositionUpdateFn | null;
  linkDirectionalArrowLength?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalArrowColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkDirectionalArrowRelPos?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalArrowResolution?: number;
  linkDirectionalParticles?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleSpeed?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleWidth?: Accessor<LinkObjectIntersection<NodeType, LinkType>, number>;
  linkDirectionalParticleColor?: Accessor<LinkObjectIntersection<NodeType, LinkType>, string>;
  linkDirectionalParticleResolution?: number;

  // Force engine (d3-force) configuration
  forceEngine?: ForceEngine;
  numDimensions?: 1 | 2 | 3;
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
  onNodeHover?: (node: NodeObjectIntersection<NodeType> | null, previousNode: NodeObjectIntersection<NodeType> | null) => void;
  onNodeClick?: (link: LinkObjectIntersection<NodeType, LinkType>) => void;
  onLinkHover?: (link: LinkObjectIntersection<NodeType, LinkType> | null, previousLink: LinkObjectIntersection<NodeType, LinkType> | null) => void;
  onLinkClick?: (link: LinkObjectIntersection<NodeType, LinkType>) => void;
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
  refresh(): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObjectIntersection<NodeType>) => boolean): { x: [number, number], y: [number, number], z: [number, number] };
}

type FCwithRef = <NodeType = {}, LinkType = {}>(props: ForceGraphProps<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>> & { ref?: React.MutableRefObject<ForceGraphMethods<NodeObjectIntersection<NodeType>, LinkObjectIntersection<NodeType, LinkType>> | undefined>; }) => React.ReactElement;

declare const ForceGraph: FCwithRef;

export default ForceGraph;
