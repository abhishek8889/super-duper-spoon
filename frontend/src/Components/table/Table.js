import React  from "react";


const Table = ({rows ,data}) => {
  console.log('From table ');
  console.log(data);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            {rows.map((header, index) => (
              <th key={index} scope="col">{header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            
            <tr>
              <th>{index + 1}</th>
              <th scope="col">{user.name}</th>
              <th scope="col">{user.phone}</th>
              <th scope="col">{user.email}</th>
              <th scope="col">
                <button className="btn btn-warning mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </th>
            </tr>
            
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;