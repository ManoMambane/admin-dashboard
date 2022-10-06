import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react'

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  console.log(file)

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            src={
              file
              ? URL.createObjectURL(file)
              : "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc"
            }
            alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                type="file"
                id='file' 
                onChange={e => setFile(e.target.files[0])}
                style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New







// First Phase

// import Navbar from '../../components/navbar/Navbar'
// import Sidebar from '../../components/sidebar/Sidebar'
// import './new.scss'
// import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

// function New() {
//   return (
//     <div className='new'>
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New User</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1664876446~exp=1664877046~hmac=5f17fec9cfafd1dcd03f565552f632e47636d5231cecebb459f48859317c31cc" alt="" />
//           </div>
//           <div className="right">
//             <form action="">
//               <div className="formInput">
//                 <label htmlFor='file'>
//                   <DriveFolderUploadOutlinedIcon className='icon'/>
//                 </label>
//                 <input type="file" id='file' style={{display: "none"}}/>
//               </div>
//               <div className="formInput">
//                 <label >Username</label>
//                 <input type="text" placeholder='mano_mano'/>
//               </div>
//               <div className="formInput">
//                 <label >Name and Surname</label>
//                 <input type="text" placeholder='Mano Mano'/>
//               </div>
//               <div className="formInput">
//                 <label >Email</label>
//                 <input type="email" placeholder='mano@gmail.com'/>
//               </div>
//               <div className="formInput">
//                 <label >Phone</label>
//                 <input type="text" placeholder='+27 78 957 1456'/>
//               </div>
//               <div className="formInput">
//                 <label >Password</label>
//                 <input type="password"/>
//               </div>
//               <div className="formInput">
//                 <label >Address</label>
//                 <input type="text" placeholder='Address'/>
//               </div>
//               <div className="formInput">
//                 <label >Country</label>
//                 <input type="text" placeholder='SA'/>
//               </div>
//               <button className="button">Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default New