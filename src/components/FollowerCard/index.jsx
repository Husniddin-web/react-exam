import React from "react";
import "./index.scss";
import UserAvater from "../../assets/images/hacker-bg.jpg";
import { GoLocation } from "react-icons/go";
import { HiBuildingOffice } from "react-icons/hi2";
import Loader from "../../components/Loader";

const index = ({ data }) => {
  console.log(data);
  // avatar_url
  // html_url
  // login
  // url
  // const { url, avatar_url, html_url, login } = data;
  return (
    <>
      {data.length > 0 ? (
        data.map((e) => {
          return (
            <div className=" fll " key={e.login}>
              <div className="follow-wrapper d-flex">
                <div className="follower-img">
                  <img
                    src={e.avatar_url}
                    className="follower-img"
                    alt="follower-img"
                  />
                </div>
                <ul className="follower-info">
                  <li className="follower-item follower-name"> {e.login}</li>
                  <li className="follower-item follower-user-name">
                    {e.name ? e.name : ""}
                  </li>
                </ul>
              </div>
              <div className="follow-icon">Follow</div>
              <hr />
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default index;
