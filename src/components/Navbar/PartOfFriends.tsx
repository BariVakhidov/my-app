import React from "react";
import s from "./Nav.module.css";
import Friends from "./Friend/Friends";
import StyledButton from "../common/StyledButton";
import {User} from "../../types/intefaces";

export interface PartOfFriendsProps {
    isAuth: boolean;
    friendsCount: number;
    friends: Array<User>
}

const PartOfFriends: React.FC<PartOfFriendsProps> = ({isAuth,friendsCount,friends}) => {
    if (isAuth) {
        return (
            <div>
                <div>{friendsCount}</div>
                <div className={s.friendsItems}>
                    {friends.map(f => <Friends name={f.name} id={f.id} image={f.photos.small} key={f.id}/>)}
                </div>
                <div>
                    <StyledButton>Show more</StyledButton>
                </div>
            </div>
        );
    } else return <div>0</div>
}
export default PartOfFriends;