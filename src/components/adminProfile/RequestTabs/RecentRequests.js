import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../actions/adminActions';
import UpdateRequest from './UpdateRequest';

class RecentRequests extends Component {
    constructor(props) {
    super(props);

    this.state = {
        
    };
    }
    
    render() {
    const {recent_requests} = this.props;
    //debugger;
    return (
      <article>
      {recent_requests && recent_requests.length >= 1 && recent_requests.map(request =>(
       <div className="jumbotron" id="fronte" key={request.id}>
       
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
              <div className="row">
              <div className="col-xs-8">{request.employee_title}</div>
               <div className="col-xs-2">{request.id}</div>
               </div>
               <div>
                <p><small>{request.employee_category}{" "}{request.employee_experience}</small></p>
               </div>
               <div>
                <h5>{request.pay_type}</h5>
                <h5>Customer ID:{" "}{request.customer_id}</h5>
                {request && <UpdateRequest request={request} />}
                <h3>Category: <small>{request.job_category}</small></h3>
               </div>
          </div>
         </div>
      
     </div>))}
     </article>
    
    );
    }
}
RecentRequests.propTypes = {
  actions: PropTypes.object.isRequired,
  recent_requests: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    recent_requests: state.admin.recent_requests,  
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
)(RecentRequests);  