import * as React from 'react';
import { Object3D, Material } from 'three';
import { ConfigOptions, ForceGraphVRInstance as ForceGraphKapsuleInstance } from '3d-force-graph-vr';

export interface GraphData {
  nodes: NodeObject[];
  links: LinkObject[];
}

export type NodeObject = object & {
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

export type LinkObject = object & {
  source?: string | number | NodeObject;
  target?: string | number | NodeObject;
};

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type NodeAccessor<T> = Accessor<NodeObject, T>;
type LinkAccessor<T> = Accessor<LinkObject, T>;

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'zout' | 'zin' | 'radialout' | 'radialin';

type ForceEngine = 'd3' | 'ngraph';

interface ForceFn {
  (alpha: number): void;
  initialize?: (nodes: NodeObject[]) => void;
  [key: string]: any;
}

type Coords = { x: number; y: number; z: number; }

type LinkPositionUpdateFn = (obj: Object3D, coords: { start: Coords, end: Coords }, link: LinkObject) => null | boolean;

export interface ForceGraphProps extends ConfigOptions {
  // Data input
  graphData?: GraphData;
  nodeId?: string;
  linkSource?: string;
  linkTarget?: string;

  // Container layout
  width?: number;
  height?: number;
  yOffset?: number;
  glScale?: number;

  // Node styling
  nodeLabel?: NodeAccessor<string>;
  nodeDesc?: NodeAccessor<string>;
  nodeRelSize?: number;
  nodeVal?: NodeAccessor<number>;
  nodeVisibility?: NodeAccessor<boolean>;
  nodeColor?: NodeAccessor<string>;
  nodeAutoColorBy?: NodeAccessor<string | null>;
  nodeOpacity?: number;
  nodeResolution?: number;
  nodeThreeObject?: NodeAccessor<Object3D>;
  nodeThreeObjectExtend?: NodeAccessor<boolean>;

  // Link styling
  linkLabel?: LinkAccessor<string>;
  linkDesc?: LinkAccessor<string>;
  linkVisibility?: LinkAccessor<boolean>;
  linkColor?: LinkAccessor<string>;
  linkAutoColorBy?: LinkAccessor<string | null>;
  linkWidth?: LinkAccessor<number>;
  linkOpacity?: number;
  linkResolution?: number;
  linkCurvature?: LinkAccessor<number>;
  linkCurveRotation?: LinkAccessor<number>;
  linkMaterial?: LinkAccessor<Material | boolean | null>;
  linkThreeObject?: LinkAccessor<Object3D>;
  linkThreeObjectExtend?: LinkAccessor<boolean>;
  linkPositionUpdate?: LinkPositionUpdateFn | null;
  linkDirectionalArrowLength?: LinkAccessor<number>;
  linkDirectionalArrowColor?: LinkAccessor<string>;
  linkDirectionalArrowRelPos?: LinkAccessor<number>;
  linkDirectionalArrowResolution?: number;
  linkDirectionalParticles?: LinkAccessor<number>;
  linkDirectionalParticleSpeed?: LinkAccessor<number>;
  linkDirectionalParticleWidth?: LinkAccessor<number>;
  linkDirectionalParticleColor?: LinkAccessor<string>;
  linkDirectionalParticleResolution?: number;

  // Force engine (d3-force) configuration
  forceEngine?: ForceEngine;
  numDimensions?: 1 | 2 | 3;
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  dagNodeFilter?: (node: NodeObject) => boolean;
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
  onNodeHover?: (node: NodeObject | null, previousNode: NodeObject | null) => void;
  onNodeClick?: (link: LinkObject) => void;
  onLinkHover?: (link: LinkObject | null, previousLink: LinkObject | null) => void;
  onLinkClick?: (link: LinkObject) => void;
}

export interface ForceGraphMethods {
  // Link styling
  emitParticle(link: LinkObject): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  refresh(): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject) => boolean): { x: [number, number], y: [number, number], z: [number, number] };
}

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<P & { ref?: React.MutableRefObject<R | undefined> }>;

declare const ForceGraph: FCwithRef<ForceGraphProps, ForceGraphMethods>;

export default ForceGraph;
