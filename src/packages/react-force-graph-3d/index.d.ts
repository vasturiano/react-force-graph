import * as React from 'react';
import { Scene, Camera, WebGLRenderer, Object3D, Material } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ConfigOptions, ForceGraph3DInstance as ForceGraphKapsuleInstance } from '3d-force-graph';

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
  backgroundColor?: string;
  showNavInfo?: boolean;

  // Node styling
  nodeRelSize?: number;
  nodeVal?: NodeAccessor<number>;
  nodeLabel?: NodeAccessor<string>;
  nodeVisibility?: NodeAccessor<boolean>;
  nodeColor?: NodeAccessor<string>;
  nodeAutoColorBy?: NodeAccessor<string | null>;
  nodeOpacity?: number;
  nodeResolution?: number;
  nodeThreeObject?: NodeAccessor<Object3D>;
  nodeThreeObjectExtend?: NodeAccessor<boolean>;

  // Link styling
  linkLabel?: LinkAccessor<string>;
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
  onNodeClick?: (node: NodeObject, event: MouseEvent) => void;
  onNodeRightClick?: (node: NodeObject, event: MouseEvent) => void;
  onNodeHover?: (node: NodeObject | null, previousNode: NodeObject | null) => void;
  onNodeDrag?: (node: NodeObject, translate: { x: number, y: number }) => void;
  onNodeDragEnd?: (node: NodeObject, translate: { x: number, y: number }) => void;
  onLinkClick?: (link: LinkObject, event: MouseEvent) => void;
  onLinkRightClick?: (link: LinkObject, event: MouseEvent) => void;
  onLinkHover?: (link: LinkObject | null, previousLink: LinkObject | null) => void;
  linkHoverPrecision?: number;
  onBackgroundClick?: (event: MouseEvent) => void;
  onBackgroundRightClick?: (event: MouseEvent) => void;
  enableNodeDrag?: boolean;
  enableNavigationControls?: boolean;
  enablePointerInteraction?: boolean;
}

export interface ForceGraphMethods {
  // Link styling
  emitParticle(link: LinkObject): ForceGraphKapsuleInstance;

  // Force engine (d3-force) configuration
  d3Force(forceName: 'link' | 'charge' | 'center' | string): ForceFn | undefined;
  d3Force(forceName: 'link' | 'charge' | 'center' | string, forceFn: ForceFn): ForceGraphKapsuleInstance;
  d3ReheatSimulation(): ForceGraphKapsuleInstance;

  // Render control
  pauseAnimation(): ForceGraphKapsuleInstance;
  resumeAnimation(): ForceGraphKapsuleInstance;
  cameraPosition(position: Partial<Coords>, lookAt?: Coords, transitionMs?: number): ForceGraphKapsuleInstance;
  zoomToFit(durationMs?: number, padding?: number, nodeFilter?: (node: NodeObject) => boolean): ForceGraphKapsuleInstance;
  postProcessingComposer(): EffectComposer;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  controls(): object;
  refresh(): ForceGraphKapsuleInstance;

  // Utility
  getGraphBbox(nodeFilter?: (node: NodeObject) => boolean): { x: [number, number], y: [number, number], z: [number, number] };
  screen2GraphCoords(x: number, y: number, distance: number): Coords;
  graph2ScreenCoords(x: number, y: number, z: number): Coords;
}

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<P & { ref?: React.MutableRefObject<R | undefined> }>;

declare const ForceGraph: FCwithRef<ForceGraphProps, ForceGraphMethods>;

export default ForceGraph;
