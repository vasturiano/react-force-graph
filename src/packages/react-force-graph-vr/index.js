import fromKapsule from 'react-kapsule';
import ForceGraphVRKapsule from '3d-force-graph-vr';
import { ForceGraphVRPropTypes } from '../../forcegraph-proptypes';

const ForceGraphVR = fromKapsule(ForceGraphVRKapsule);

ForceGraphVR.displayName = 'ForceGraphVR';
ForceGraphVR.propTypes = ForceGraphVRPropTypes;

export default ForceGraphVR;
