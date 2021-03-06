import React from "react";
import {NavLink} from "react-router-dom";
import s from './Friends.module.css';
import userPhoto from '../../../assets/images/profile.jpg';

interface FriendsProps {
    id:number;
    image:string | null;
    name: string;
}

const Friends:React.FC<FriendsProps> = (props) => {
    let path = "/profile/" + props.id;
    return (
        <div className={s.friend}>
            <NavLink to={path}>
                <div className={s.container}>
                <img alt="userPhoto" src={props.image != null ? props.image : userPhoto}/>
                <div className={s.name}>
                    {props.name}
                </div>
                </div>
            </NavLink>
        </div>
    );
};
export default Friends;