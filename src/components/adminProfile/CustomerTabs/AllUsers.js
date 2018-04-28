import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../actions/adminActions';
import UpdateCustomer from './UpdateCustomer';
import UpdateUser from './UpdateUser';

class AllUsers extends Component {
    constructor(props) {
    super(props);

    this.state = {
        
    };
    }
    
    render() {
    const {all_users} = this.props;
    //debugger;
    return (
      <article>
      {all_users.length >= 1 && all_users.map(user =>(
       <div className="jumbotron" id="fronte" key={user.user.id}>
       
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
              <div className="row">
              <div className="col-xs-8">{user.user && user.user.email}</div>
               <div className="col-xs-2">{user.user && user.user.id}</div>
               </div>
               <div>
                <p><small>{user.customer && user.customer.firstname}{" "}{user.customer && user.customer.lastname}</small></p>
               </div>
               <div>
                <h5>{user.customer && user.customer.address}</h5>
                <h5>{user.customer && user.customer.city}</h5>
                {user.customer && <UpdateCustomer customer={user.customer} />}
                {!user.customer && <UpdateUser user={user.user} />}
                <h3>Poster: <small>{user.customer && user.customer.username}</small></h3>
               </div>
          </div>
         </div>
      
     </div>))}
     </article>
    
    );
    }
}
AllUsers.propTypes = {
  actions: PropTypes.object.isRequired,
  all_users: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    all_users: state.admin.all_users,  
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
)(AllUsers);  