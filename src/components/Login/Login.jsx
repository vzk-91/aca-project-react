import React, {useState,useEffect} from 'react';


const Login = (props) =>{

    const { example } = props;
    const [data, setData] = useState(example);
    const { password, email } = data;

    const onSubmitForm = () => {
        props.submit(data)
        // loginOpen()
      }

    const hendleFormChange = (event) => {
        const { target: { name, value } } = event;
        setData({
          ...data,
          [name]: value 
        })
      }

    return(
        <div className="logForm">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" onChange={hendleFormChange} value={email} className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange={hendleFormChange} value={password} className="form-control" id="password" placeholder="Enter Password"/>
                </div>
                 <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="save" />
                    <label name="save" className="form-check-label" htmlFor="save">Remember me</label>
                </div>
                    <button type="submit" className="btn btn-primary" onClick={onSubmitForm} id="login">Log In</button>             
        </div>
    )
}

export default Login;