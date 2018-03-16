import React from 'react';
//import PropTypes from 'prop-types';

// Load VR first to avoid three.js collisions
import ForceGraphVR from './ForceGraphVR.js';
import ForceGraph3D from './ForceGraph3D.js';
import ForceGraph2D from './ForceGraph2D.js';

class ForceGraph extends React.PureComponent {
  static propTypes = {
    //mode: PropTypes.oneOf('2D', '3D', 'VR')
  };

  static defaultProps = {
    mode: '3D'
  };

  render() {
    const { mode, ...props } = this.props;

    const FgComp = {
      '2D': ForceGraph2D,
      '3D': ForceGraph3D,
      'VR': ForceGraphVR
    }[mode];

    return <FgComp {...props} />;
  }
}

export default ForceGraph;
