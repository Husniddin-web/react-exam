import React, { useEffect } from "react";
import { MdOutlinePeople } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAddLocation } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./style.scss";
import User from "../../assets/images/hacker-bg.jpg";
import { Link } from "react-router-dom";

const index = ({ data }) => {
  const {
    login,
    avatar_url,
    bio,
    company,
    email,
    followers,
    following,
    location,
    name,
    public_repos,
    twiter_username,
    url,
  } = data;
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-list">
        <li className="sidenar-item">
          <img src={avatar_url} alt="user-avatar" className="user-avatar" />
        </li>
        <li className="sidenar-item user-name">
          <h2>{login}</h2>
          <span>{name}</span>
          <p>Edit Profile</p>
        </li>
        <li className="sidenar-item d-flex gap-2 follow">
          <div className="follower d-flex align-items-center">
            <MdOutlinePeople />
            <Link to={`/follower/${login}`}>
              <p className="m-0 text-dark">
                <span>{followers}</span> follwers{" "}
              </p>
            </Link>
          </div>
          <div className="following">
            <p className="m-0">
              .<span>{following}</span>following
            </p>
          </div>
        </li>
        <li className="sidenar-item">
          {location ? <MdOutlineAddLocation /> : ""}
          {location ? location : ""}
        </li>
        <li className="sidenar-item">{company ? company : ""}</li>
        <li className="sidenar-item">
          {twiter_username ? "" : twiter_username}
        </li>
        <li className="sidenar-item">
          {bio ? <HiOutlineLocationMarker /> : ""}
          {bio ? bio : ""}
        </li>
        <li className="sidenar-item">
          {email ? <MdOutlineAlternateEmail /> : ""}
          {email ? email : ""}
        </li>
      </ul>
    </div>
  );
};

export default index;
