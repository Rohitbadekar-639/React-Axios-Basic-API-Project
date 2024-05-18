// import axios from "axios";
// import React, { useEffect, useState } from 'react'

// function AxiosTest() {
//     const [userData, setData] = useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//             console.log(response.data);
//             setData(response.data)
//         })
//         .catch((error)=>
//             console.log(error)
//         )
//     },[])
//   return (
//     <div>
//         {userData.map((data)=>{
//             const { name } = data;
//             return (
//                 <div key={name}>{data}</div>
//             )
//         })}
//     </div>
//   )
// }

// export default AxiosTest



import axios from "axios";
import React, { useEffect, useState } from 'react';

function AxiosTest() {
    const [userData, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {userData.map((data) => {
                const { id, name, username, email } = data;
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>Username: {username}</p>
                        <p>Email: {email}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default AxiosTest;
