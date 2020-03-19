import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoading as setLoadingAction } from 'ducks/actions';
class SandboxPage extends React.PureComponent {
  static propTypes = {
    loadingAction: PropTypes.func,
  };

  tableauRef = React.createRef();

  state = {
    height: 400,
  };

  componentDidMount() {
    const { loadingAction } = this.props;
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    loadingAction(false);
  }

  handleResize = () => {
    if (this.tableauRef.current) {
      const dim = this.tableauRef.current.getBoundingClientRect();
      this.setState({ height: dim.height });
    }
  };

  render() {
    const { height } = this.state;
    return (
      <div style={{ flexGrow: 1, position: 'relative' }} ref={this.tableauRef}>
        <script type="text/javascript" src="http://tableau.cognitivlabs.com/javascripts/api/viz_v1.js"></script>
        <iframe
          title="Tableau"
          src="http://tableau.cognitivlabs.com/views/Discrepancies/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link"
          width="100%"
          height={height}
          style={{ position: 'absolute', border: '1px solid #bfbfbf' }}
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  intervals: state.lookups.intervals,
});

const mapDispatchToProps = {
LoadingAction: setLoadingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SandboxPage);
