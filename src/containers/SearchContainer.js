import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux';
import * as actions from '../actions/jobOfferActions';
import {loadJobCategories} from '../actions/jobCategoryActions';
import {loadStateLists} from '../actions/naijaStateActions';
import SearchHeader from '../components/universal/SearchHeader';


class SearchContainer extends Component {
 constructor(props, context) {
    super(props, context);
    
    this.state = {
      loading: 0,
      selectedValues:[],
      searchTerm:{}
    };
    //this.onClickAccept = this.onClickAccept.bind(this);
  }
 componentDidMount() {
    //debugger;
     this.props.dispatch(loadJobCategories());
     this.props.dispatch(loadStateLists());
  }
  shouldComponentUpdate(nextProps) {
     //debugger;
        const different9jastateList = this.props.naijaStateLists.length !== nextProps.naijaStateLists.length;
        const differentjobCategory = this.props.jobCategories.length !== nextProps.jobCategories.length;
        return differentjobCategory || different9jastateList;
    }
    
    searchFor(event) {
    //debugger;
    if (event.value == "offer"){
     //debugger;
      if (event.state){
          //debugger;
       this.props.dispatch(actions.setStateVisibilityFilter('job_by_state'));
      }
      if (event.job_category){
         //debugger; 
        this.props.dispatch(actions.setCategoryVisibilityFilter('job_by_category'));
      }
    this.props.dispatch(actions.setVisibilityFilter('search_jobs'));  
    this.props.dispatch(actions.setSearchTermFilter(event));
    this.props.dispatch(actions.searchAllJobs(this.context.router.history));
    //this.context.router.history.push('/search_results');
    }
    if (event.value == "request"){
      if (event.state){
          //debugger;
       this.props.dispatch(actions.setStateVisibilityFilter('request_by_state'));
      }
      if (event.job_category){
         //debugger; 
        this.props.dispatch(actions.setCategoryVisibilityFilter('request_by_category'));
      }
    this.props.dispatch(actions.setVisibilityFilter('search_requests'));  
    this.props.dispatch(actions.setSearchTermFilter(event));
    this.props.dispatch(actions.searchAllRequests(this.context.router.history));
    }
   }
  reactToChange = event => {
    this.setState({selectedValues : this.state.selectedValues.concat([event.target.value])});
  };    
  
   render() {
  const {jobCategories,naijaStateLists} = this.props;
  
    return (
       <div> 
        <SearchHeader searchFor={this.searchFor.bind(this)} jobCategories={jobCategories} 
        naijaStateLists={naijaStateLists}
        handleChange={this.reactToChange} />
        <hr />
     </div>
        );
   }
}    

SearchContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

SearchContainer.propTypes = {
 //actions: PropTypes.object.isRequired,
 naijaStateLists: PropTypes.array.isRequired,
 jobCategories: PropTypes.array.isRequired,
 dispatch: PropTypes.func,
 loading: PropTypes.number,
 searchTerm: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
    const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
    const naijaStateFormattedForDropDown = state.stateLists.map(naijaState => {
     return {
         value: naijaState.id,
         text: naijaState.name
     };
    });
    return {
     naijaStateLists: naijaStateFormattedForDropDown,
     jobCategories: jobCategoriesFormattedForDropDown,
     loading: state.ajaxCallsInProgress,
     searchTerm: state.searchTermFilter
    };
}
//function mapDispatchToProps(dispatch) {
//  return {
//    actions: bindActionCreators(actions, dispatch)
//  };
//}
export default connect(
  mapStateToProps
  //mapDispatchToProps
)(SearchContainer);