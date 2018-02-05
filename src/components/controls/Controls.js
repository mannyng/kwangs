import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-elemental';
import BaseWidget from '../widgets/BaseWidget';
import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
//import {setVisibilityFilter} from '../../actions/ajaxStatusActions';
import {connect} from 'react-redux';

class Controls extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      loading: '0',
      errors: {}
    };
    
    this.redirectToActiveEmployer = this.redirectToActiveEmployer.bind(this);
    this.redirectToLatestJob = this.redirectToLatestJob.bind(this);
    this.redirectToNewestEmployers = this.redirectToNewestEmployers.bind(this);
  }
  
  
  redirectToActiveEmployer() {
      //debugger;
    this.props.actions.setVisibilityFilter('active_employers');
    this.context.router.history.push('/search_jobs');
  }
  redirectToLatestJob() {
      //debugger;
    this.props.actions.setVisibilityFilter('latest_jobs');
    this.context.router.history.push('/search_jobs');
    
  }
  redirectToNewestEmployers() {
     // debugger;
    this.props.actions.setVisibilityFilter('newest_employers');
    this.context.router.history.push('/search_jobs');
  }
  
  render(){
      const {loading} = this.props;
      const fstpic = "https://s9.postimg.org/feennujj3/boota.jpg";
      return (
       <BaseWidget type="info">
         <WidgetHeader  loading={loading}>Control Center</WidgetHeader>
         
         <Button onClick={this.redirectToLatestJob}>Latest Jobs
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
         <hr />
         <Button onClick={this.redirectToNewestEmployers}>Newest Employees
          <span className="fa fa-cogs fa-lg fa-pull-right"/>
         </Button>
         <div className="imgContPrv">
         <img src={fstpic} />
         </div>
       </BaseWidget>
      );
  }
  
}  
Controls.propTypes = {
    history: PropTypes.object,
    actions: PropTypes.object,
    loading: PropTypes.number
};

Controls.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   loading: state.ajaxCallsInProgress
  };    
}    
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);