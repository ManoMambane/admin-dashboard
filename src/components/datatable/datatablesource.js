export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "user", headerName: "User", width: 230,
        renderCell: (params) =>
            {return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            );
            },
        },
        {field: "email", headerName: "Email", width: 230},
        {field: "age", headerName: "Age", width: 100},
        {field: "status", headerName: "Status", width: 160, 
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>

            )
        }},
];

//temporary data

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "pending",
        email: "1snow@gmail.com",
        age: 35,
    },

    {
        id: 2,
        username: "Mo",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "active",
        email: "1mo@gmail.com",
        age: 13,
    },

    {
        id: 3,
        username: "Jack",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "passive",
        email: "jack@gmail.com",
        age: 55,
    },

    {
        id: 4,
        username: "Bless",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "active",
        email: "bless@gmail.com",
        age: 21,
    },

    {
        id: 5,
        username: "jade",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "pending",
        email: "jade22@gmail.com",
        age: 77,
    },
    {
        id: 6,
        username: "mano_mano",
        img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc",
        status: "approved",
        email: "Mano@gmail.com",
        age: 25,
    },
]