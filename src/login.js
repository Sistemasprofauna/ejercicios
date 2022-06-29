import React from "react";

const Login = () => {
    return (
  
      
  
      <div className="col-md-8">
      <div className="card-body"> <label className="input-group-text" for="inputGroupSelect01"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg></label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="1">Arnoldo Rodriguez</option>
          <option value="2">Cesar Guzman</option>
          <option value="3">Ramiro Ortega</option>
        </select>
        <div >
    <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
    <input type="text" className="form-control" name="nombre" placeholder="Contraseña"  aria-label="Username" aria-describedby="addon-wrapping" />
  </div>
  </div>
       
      </div>
      
      
  
    )
  }
  export default Login