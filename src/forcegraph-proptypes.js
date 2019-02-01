import PropTypes from 'prop-types';

const commonPropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  graphData: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  backgroundColor: PropTypes.string,
  nodeRelSize: PropTypes.number,
  nodeId: PropTypes.string,
  nodeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  nodeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkSource: PropTypes.string,
  linkTarget: PropTypes.string,
  linkLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  linkHoverPrecision: PropTypes.number,
  linkColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkCurvature: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkDirectionalArrowRelPos: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticles: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  dagMode: PropTypes.oneOf(['td', 'bu', 'lr', 'rl', 'zin', 'zout', 'radialin', 'radialout']),
  dagLevelDistance: PropTypes.number,
  d3AlphaDecay: PropTypes.number,
  d3VelocityDecay: PropTypes.number,
  warmupTicks: PropTypes.number,
  cooldownTicks: PropTypes.number,
  cooldownTime: PropTypes.number,
  onEngineTick: PropTypes.func,
  onEngineStop: PropTypes.func
};

const pointerBasedPropTypes = {
  onNodeClick: PropTypes.func,
  onNodeRightClick: PropTypes.func,
  onNodeHover: PropTypes.func,
  onNodeDrag: PropTypes.func,
  onNodeDragEnd: PropTypes.func,
  onLinkClick: PropTypes.func,
  onLinkRightClick: PropTypes.func,
  onLinkHover: PropTypes.func,
  enablePointerInteraction: PropTypes.bool,
  enableNodeDrag: PropTypes.bool
};

const threeBasedPropTypes = {
  showNavInfo: PropTypes.bool,
  nodeOpacity: PropTypes.number,
  nodeResolution: PropTypes.number,
  nodeThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkOpacity: PropTypes.number,
  linkResolution: PropTypes.number,
  linkCurveRotation: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkPositionUpdate: PropTypes.func,
  linkDirectionalArrowResolution: PropTypes.number,
  linkDirectionalParticleResolution: PropTypes.number,
  forceEngine: PropTypes.oneOf(['d3', 'ngraph']),
  numDimensions: PropTypes.oneOf([1, 2, 3])
};

export const ForceGraph2DPropTypes = Object.assign({},
  commonPropTypes,
  pointerBasedPropTypes,
  {
    nodeCanvasObject: PropTypes.func,
    linkCanvasObject: PropTypes.func,
    enableZoomPanInteraction: PropTypes.bool
  }
);

export const ForceGraph3DPropTypes = Object.assign({},
  commonPropTypes,
  pointerBasedPropTypes,
  threeBasedPropTypes,
  {
    enableNavigationControls: PropTypes.bool,
    controlType: PropTypes.oneOf(['trackball', 'orbit', 'fly']),
    rendererConfig: PropTypes.object
  }
);

export const ForceGraphVRPropTypes = Object.assign({},
  commonPropTypes,
  threeBasedPropTypes,
  {
    nodeDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    linkDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }
);
