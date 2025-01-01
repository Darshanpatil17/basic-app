import React from 'react'

function Login() {
  return (
   <>
   <div>
   <dialog id="my_modal_3" className="modal" style={{width:"300px",borderRadius:"10px", border:"none"}}>
  <div className="modal-box">
    <form method="dialog">
    
      <button style={{marginLeft:"90%"}} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg" style={{color:"rgb(241, 111, 51)"}}>Login</h3>
   
    <label><h4>Username</h4></label>
    <input style={{border:"1px white", width:"100%",height:"30px"}} placeholder='Enter your Email' type='email'></input>
    <label><h4>Password</h4></label>
    <input style={{border:"1px white", width:"100%",height:"30px"}} placeholder='Enter strong password' type='password'></input>
     <div style={{display:"flex", alignItems:"center",marginTop:"30px"}}>
        <button style={{width:"80px", height:"30px",backgroundColor:"rgb(255, 82, 0)"}}>Login</button>
        <p style={{color:"black", fontSize:"15px"}}>Not registered? <span style={{color:"rgb(255, 82, 0)",textDecoration:" 2px underline"}}><a href='/signup'>SignUp</a></span></p>
     </div>
  </div>
</dialog>
   </div>
   </>
  )
}

export default Login
