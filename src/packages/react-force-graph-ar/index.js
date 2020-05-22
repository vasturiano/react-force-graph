import fromKapsule from 'react-kapsule';
import ForceGraphARKapsule from '3d-force-graph-ar';
import { ForceGraphARPropTypes } from '../../forcegraph-proptypes';

const ForceGraphAR = fromKapsule(
  ForceGraphARKapsule,
  {
    methodNames: [ // bind methods
      'getGraphBbox',
      'emitParticle',
      'd3Force',
      'd3ReheatSimulation',
      'refresh'
    ],
    initPropNames: ['markerAttrs']
  }
);

ForceGraphAR.displayName = 'ForceGraphAR';
ForceGraphAR.propTypes = ForceGraphARPropTypes;

export default ForceGraphAR;
