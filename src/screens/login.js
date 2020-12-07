import React from 'react';
import '../assets/css/style.css';
import '../screens/login.css';
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom'
class Login extends React.Component{
	constructor(props)
	{ super(props);
	this.state = {
		email: "",
		password : "",
		flag:false,
		validation:false,
		credit:false,
		empid:'',
		
		}}
	componentDidMount(){

		console.log("component did mount");
			window.history.pushState(null, null, window.location.href);
			window.onpopstate = function(event) {
			  window.history.go(1);
			  }};
	// this.getState = this.getState.bind(this);}

	handleSignIn = (e) => {
		e.preventDefault();
		 localStorage.setItem('Email',this.state.email);
		 localStorage.setItem('Password',this.state.password);
		 if(this.state.email.length=='0' || this.state.password=='0')
		 this.setState({ validation : true})
		//  console.log("submit callleeddd")
		 this.getState();
		//  this.props.auth(this.state, values);
	}
 
	handleEmail = (e) => {
		console.log("email"+e.target.value)
		this.setState({email : e.target.value});

	}

	
	handlePassword = (e) => {
		console.log("handle password=="+e.target.value);
		this.setState({password: e.target.value});
		console.log("handle password=="+this.state.password);
	}
getState(){
	console.log("Api called===")
	console.log(this.state.email, this.state.password);
	fetch('http://34.231.95.57:4142/employee/empLogin', {
		
		method: 'POST', 
		body: JSON.stringify({
			email:this.state.email,
			password:this.state.password,
		}),
		headers: {
			"Content-type": "application/json"
		}
	}).then(responseData => responseData.json())
	.then(responseData => {
		console.log("response of API==="+JSON.stringify(responseData))
	// 	this.setState({
	// 	 empid:responseData.employee.empId	
	// 	})
	// console.log( "data after api fetch empId==="+this.state.empid)
	console.log( "data after api fetch==="+JSON.stringify(responseData.success))
	  if( this.state.email!=null&& this.state.password!=null)
		{if(responseData.success)
	      {
			 this.setState({ flag : true})
			 console.log("inside if===="+this.state.flag);
			}
			if(responseData.success==false)
			{
				this.setState({ credit : true})	
				console.log("success false")
			}
		
		}
		// localStorage.setItem('EmpId',this.state.empid);
		// console.log("+++++++set item++++++++"+this.state.empid)
	})
	.catch(error => 
		{
            this.setState({ credit : true})		
			console.log(" error "+error)
		}) 
	}

render()
{   console.log("creadit value=="+this.state.credit)
	console.log("redirection check==== "+this.state.flag);
		if (this.state.flag==true)		{
		   console.log("redirection...")
		   return <Redirect to='/otp'/>
	   }
    return(
		<center>
        <div className="main-wrapper container-fluid ">
			 <div className="card ">
				<div className="container">
					<div className="account-box col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto">
					<div className="account-logo">
						{/* <a ><img className="img-fluid h-75 w-75 mt-3" src={Images.logo2} alt="bluCursor Technologies"/></a> */}
						<h3 className="account-title mt-4">EMPLOYEE LOGIN</h3>
					</div>
						<div className="account-wrapper">
							
							<form>
								<div className="form-group ">
									<label className="h-25 font-weight-bold" >Email Address</label>
									<input placeholder="Enter Email" className="form-control h-25 font-weight-bold" type="text"  onChange = {(e) => this.handleEmail(e)}/>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col">
											<label className="h-25 font-weight-bold">Password</label>
										</div>
									</div>
									
                             <input placeholder="Enter Password" className="form-control h-25 font-weight-bold" type="password"  onChange = {(e) => this.handlePassword(e)}/>
								</div>
								<div className="form-group text-center  h-25">
								{this.state.validation==true?<p id="inputValid"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please fill out all the fields</p>:null}
								{this.state.credit==true?<p id="inputValid"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>  Invalid Credentials</p>:null}
									<button  className="btn btn-primary account-btn h-25" type="submit"  onClick={(e)=> this.handleSignIn(e)} >Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div> 
        </div>
	</center>
    );
}
}
export default Login;  