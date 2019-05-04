import fromKapsule from 'react-kapsule';
import ForceGraph3DKapsule from '3d-force-graph';
import { ForceGraph3DPropTypes } from '../../forcegraph-proptypes';

const ForceGraph3D = fromKapsule(
  ForceGraph3DKapsule,
  undefined,
  [ // bind methods
    'd3Force',
    'stopAnimation',
    'pauseAnimation',
    'resumeAnimation',
    'cameraPosition',
    'scene',
    'camera',
    'renderer',
    'controls',
    'refresh'
  ],
  ['controlType', 'rendererConfig']
);

ForceGraph3D.displayName = 'ForceGraph3D';
ForceGraph3D.propTypes = ForceGraph3DPropTypes;

export default ForceGraph3D;
