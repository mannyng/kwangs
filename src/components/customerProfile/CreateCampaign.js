import React, { Component } from 'react';
//import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import * as actions from '../../actions/customerProfilesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import { Button } from 'react-elemental';
//import Dropzone from 'react-dropzone';



class CreateCampaign extends Component {
 constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
    //this.saveMyCampaign = this.saveMyCampaign.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);
    this.props.actions.saveCampaign(this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            name="pictures"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}
CreateCampaign.propTypes = {
    actions: PropTypes.func,
};
function mapStateToProps(state) {
  //debugger;
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    customerConnect: state.customerConnect,
    myCampaigns: state.myCampaigns,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
    //createJobOffer: jobOffer => dispatch(actions.createJobOffer(jobOffer))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);


