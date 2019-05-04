import fromKapsule from 'react-kapsule';
import ForceGraph2DKapsule from 'force-graph';
import { ForceGraph2DPropTypes } from '../../forcegraph-proptypes';

const ForceGraph2D = fromKapsule(
  ForceGraph2DKapsule,
  undefined,
  [ // bind methods
    'd3Force',
    'stopAnimation',
    'pauseAnimation',
    'resumeAnimation',
    'centerAt',
    'zoom',
    'refresh'
  ]
);

ForceGraph2D.displayName = 'ForceGraph2D';
ForceGraph2D.propTypes = ForceGraph2DPropTypes;

export default ForceGraph2D;
