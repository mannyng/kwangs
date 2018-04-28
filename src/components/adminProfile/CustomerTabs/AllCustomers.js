import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../actions/adminActions';
import UpdateCustomer from './UpdateCustomer';

class AllCustomers extends Component {
    constructor(props) {
    super(props);

    this.state = {
        
    };
    }
    
    render() {
    const {all_customers} = this.props;
    //debugger;
    return (
      <article>
      {all_customers && all_customers.map(customer =>(
       <div className="jumbotron" id="fronte" key={customer.id}>
       
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
              <div className="row">
              <div className="col-xs-8">{customer.username}</div>
               <div className="col-xs-2">{customer.id}</div>
               </div>
               <div>
                <p><small>{customer.firstname}{" "}{customer.lastname}</small></p>
               </div>
               <div>
                <h5>{customer.address}</h5>
                <h5>{customer.city}</h5>
                {customer && <UpdateCustomer customer={customer} />}
                <h3>Poster: <small>{customer.username}</small></h3>
               </div>
          </div>
         </div>
      
     </div>))}
     </article>
    
    );
    }
}
AllCustomers.propTypes = {
  actions: PropTypes.object.isRequired,
  all_customers: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    all_customers: state.admin.all_customers,  
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
)(AllCustomers);  