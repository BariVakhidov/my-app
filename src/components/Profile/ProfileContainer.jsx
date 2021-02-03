import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfilePage, getStatus, setShowingUserId, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.mainUserId;
        this.props.getProfilePage(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile {...this.props} updateStatus={this.props.updateStatus} />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        mainUserId: state.auth.userId,
        showingUserId: state.profilePage.showingUserId
    }
};

export default compose(connect(mapStateToProps, {setUserProfile,setShowingUserId, getProfilePage, getStatus,updateStatus}),withRouter, withAuthRedirect)(ProfileContainer);

