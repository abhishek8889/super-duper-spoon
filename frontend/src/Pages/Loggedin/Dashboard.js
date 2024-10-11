import React, { useState, useEffect, useContext } from "react";
import Table from "../../Components/table/Table";
import axios from "axios";
import { getCookie } from '../../Utils/utils';
import { AuthContext } from "../../Context/AuthContext";
import Card from "../../Components/card/Card";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const rows = ["name", "contact", "email", "action"]
  const {authState } = useContext(AuthContext);

  const getUserList = async (e) => {
    await axios.get('http://localhost:8080/api/user-list', {
      headers: {
        authorization: `Bearer ${getCookie('jwt')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        console.log('data fetched successfully ');
        console.log(response);
        if (response.data !== undefined) {
          console.log(response.data);
          setUserList(response.data);
        }
      })
      .catch(function (error) {
        console.log('error is there :: ');
        console.log(error.message);
      });
  }
  useEffect(() => {
    if(authState.is_admin){
      getUserList();
    }
  }, []);

  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title center">User lists</h5>
          <div className="container mt-5">
            {authState.is_admin ? (<Table rows={rows} data={userList} />) : <p>Hello welcome user </p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;