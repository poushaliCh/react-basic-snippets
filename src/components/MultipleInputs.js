import React, { useState } from "react";

export default function MultipleInputs() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    // console.log(fieldName);
    // console.log(value);
    setUserData({ ...userData, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userData, id: new Date().getTime().toString() };
    // console.log(records);
    setRecords([...records, newRecord]);
    // console.log(records);
    setUserData({ userName: "", email: "", phone: "", password: "" });
  };
//   console.log(records);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div>
            <label htmlFor="userName">full Name :</label>
            <input
              type="text"
              value={userData.userName}
              onChange={handleInput}
              name="userName"
              id="userName"
            />
          </div>
          <div>
            <label htmlFor="email">email :</label>
            <input
              type="text"
              value={userData.email}
              onChange={handleInput}
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone :</label>
            <input
              type="text"
              value={userData.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              value={userData.password}
              onChange={handleInput}
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Registration</button>
        </div>
      </form>

      <section>
        <div>
          {records.map((record) => {
            //with obj destructuring
            const {id,userName,password} = record;
            return (
              <div style={{ display: "flex", flexDirection: "column" }} key={id}>
                <p>User Name : {userName}</p>
                <p>Email : {record.email}</p>
                <p>Phone : {record.phone}</p>
                <p>Password : {password}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}