import fromKapsule from 'react-kapsule';
import ForceGraphVRKapsule from '3d-force-graph-vr';
import { ForceGraphVRPropTypes } from '../../forcegraph-proptypes';

const ForceGraphVR = fromKapsule(
  ForceGraphVRKapsule,
  undefined,
  [ // bind methods
    'd3Force',
    'refresh'
  ]
);

ForceGraphVR.displayName = 'ForceGraphVR';
ForceGraphVR.propTypes = ForceGraphVRPropTypes;

export default ForceGraphVR;
