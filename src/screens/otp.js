import React from 'react';
// import Otp from 'react-otp-timer'
import Timer from 'react-compound-timer'
import '../assets/css/style.css';
import '../screens/otp.css'
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom'
var Email,Password,firstValue,secondValue,thirdValue,fourthValue,digit;
class OtpComponent extends React.Component{
	constructor(props)
	{    super(props);
		this.state = {
			flag:false,
			credit:false,
			empid:'',
			resend:false
			}
	}

	componentDidMount(){
		Email=localStorage.getItem("Email");
		Password=localStorage.getItem("Password");
		console.log("email from local storage=="+Email)
		console.log("password from local storage=="+Password)
	}
	handleFirstValue = (e) => {
		e.preventDefault();
		firstValue=e.target.value;
		console.log(firstValue);
	}
	handleSecondValue = (e) => {
		e.preventDefault();
		secondValue=e.target.value;
		console.log(secondValue);
	}
	handleThirdValue = (e) => {
		e.preventDefault();
		thirdValue=e.target.value;
		console.log(thirdValue);
	}
	handleFourthValue = (e) => {
		e.preventDefault();
		fourthValue=e.target.value;
		console.log(fourthValue);
		digit=(1000*firstValue)+(100*secondValue)+(10*thirdValue)+(1*fourthValue);
		console.log("calculated digit=="+digit)
	}
	callResendOtp()
	{
		this.resendOtp();
		console.log("call Resend Otp")
		
	}
	resendOtp(){
	    console.log("Api called===")
		console.log(Email,Password);
		fetch('http://34.231.95.57:4142/employee/empLogin', {
			
			method: 'POST', 
			body: JSON.stringify({
				email:Email,
				password:Password,
			}),
			headers: {
				"Content-type": "application/json"
			}
		}).then(responseData => responseData.json())
		.then(responseData => {
			
			console.log("response of API==="+JSON.stringify(responseData))
			if(responseData.success)
			{ console.log("inside if==")
				this.setState({
					resend:true
				})
				console.log("after setstate=="+this.state.resend)
			}
		console.log( "data after api fetch==="+JSON.stringify(responseData.success))
		})
		.catch(error => 
			{		
				console.log(" error "+error)
			}) 
        // this.callResendOtp()
			//  window.location.reload();
		}

	otpVerification()
		{  console.log("email in api=="+Email)
			console.log("api called==="+digit);
			fetch('http://34.231.95.57:4142/employee/verifyOTPforLogin', {
		            method: 'POST', 
					body: JSON.stringify({
		    		email:Email,
					otp:digit,
		}),
		headers: {
			"Content-type": "application/json"
		}
	}).then(responseData => responseData.json())
	.then(responseData => {
		console.log("response of API==="+JSON.stringify(responseData))
		if(responseData.success)
			{
				this.setState({
					empid:responseData.employee.empId	
				   })
			console.log( "data after api fetch empId==="+this.state.empid)
			console.log( "data after api fetch==="+JSON.stringify(responseData.success.empid))
				  {
					 this.setState({ flag : true})
					 console.log("inside if===="+this.state.flag);
					}
				}
				if(responseData.success==false)
					{
						this.setState({ credit : true})	
						console.log("success false")
					}
			localStorage.setItem('EmpId',this.state.empid);
		console.log("+++++++set item++++++++"+this.state.empid)
	})
}
	
render()
{   
	if(this.state.resend)
	{
		window.location.reload();
	}
	if (this.state.flag==true)		{
	{console.log("redirection...")
	return <Redirect to='/profile'/>
}
}
    return(
	 <div className="main-wrapper container-fluid ">
			 <div className="card ">
				<div className="container">
					<center> 
					<div className="account-box col-md-5 mt-5">
					<div className="account-logo">
						{/* <a ><img className="img-fluid h-75 w-75 mt-3" src={Images.logo2} alt="bluCursor Technologies"/></a> */}
						{/* <br/> */}
						<h4 class="account-subtitle font-weight-bold mt-2">Verify your account</h4>
						<h5 className=" mt-4 ">Enter the 4 digit code we sent you via email to continue</h5>
					</div>

		   <div className="account-wrapper">
					<form> 
								    <div class="otp-wrap">
										<input type="text" placeholder="0" maxlength="1" class="otp-input"  onChange = {(e) => this.handleFirstValue(e)}/>
										<input type="text" placeholder="0" maxlength="1" class="otp-input" onChange = {(e) => this.handleSecondValue(e)}/>
										<input type="text" placeholder="0" maxlength="1" class="otp-input" onChange = {(e) => this.handleThirdValue(e)}/>
										<input type="text" placeholder="0" maxlength="1" class="otp-input" onChange = {(e) => this.handleFourthValue(e)}/>
									</div>
									<center>
									<Timer
					         direction="backward"
                           initialTime={60000}>
                  <Timer.Seconds /> seconds
				</Timer>
				</center>
            <br/>
                           <div class="form-group text-center">
									{this.state.credit==true?<p id="inputValid"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>  Invalid OTP</p>:null}
										<div class="btn btn-primary account-btn p-1" type="submit" onClick={()=>this.otpVerification()}>Enter</div>
									</div>
									<div class="account-footer">
									
			<p>Not yet received? <a id="resendLink" className="font-weight-bold"
			 onClick={()=>this.callResendOtp()}>Resend OTP</a></p>
			 {/* <button onClick={reset}>Reset Timer</button> */}
									</div>
								</form>
							</div>

        {/* </React.Fragment> */}
    {/* )} */}

						
					</div>
					</center>
				</div>
			</div> 
        </div>








		// <!-- Main Wrapper -->
	//    <div id="mainWrapper" >
	// 		<div class="account-content">
			// {/* <!-- Account Logo --> */}
					// <div class="account-logo">
					// <a ><img className="img-fluid w-25 h-25 mt-3" src={Images.logo2} alt="bluCursor Technologies"/></a>
					// </div>
					// {/* <!-- /Account Logo --> */}
					// <center>
					// <div class="account-box">
					// 	<div id="accountWrapper" class="account-wrapper">
					// 		<center>
					// 		<h3 class="account-title font-weight-bold">OTP</h3>
					// 		</center>
					// 		<p class="account-subtitle">Verification your account</p>
							// {/* <!-- Account Form --> */}
							// <form>
							// 	<div class="otp-wrap">
							// 		<input type="text" placeholder="0" maxlength="1" class="otp-input"/>
							// 		<input type="text" placeholder="0" maxlength="1" class="otp-input"/>
							// 		<input type="text" placeholder="0" maxlength="1" class="otp-input"/>
							// 		<input type="text" placeholder="0" maxlength="1" class="otp-input"/>
							// 	</div>
							// 	<div class="form-group text-center">
							// 		<button class="btn btn-primary account-btn p-1" type="submit">Enter</button>
							// 	</div>
							// 	<div class="account-footer">
							// 		<p>Not yet received? <a class="text-decoration none" href="javascript:void(0);">Resend OTP</a></p>
							// 	</div>
							// </form>
							// {/* <!-- /Account Form --> */}
		// 				</div>
		// 			</div>
		// 			</center>
		// 	</div>
        // </div>
);
}
}
export default OtpComponent;  