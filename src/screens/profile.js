import React from 'react';// import { useHistory } from 'react-router-dom';
import '../assets/js/app.js';
import Side from './sidebar';
import Nav from '../components/nav';
import Moment from 'react-moment';
import Images from '../images';
import ImageUploader from 'react-images-upload';
import '../screens/profilePage.css';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import '../screens/profile.css';
import axios from 'axios';
var email,picVar,employeeId,empEduId,EduEmpId,married=false;
var empName,empAddress,empPhone,empImage;
class Profile extends React.Component {
	constructor(props)
	{    super(props);
		this.state = {
			startDate: new Date(),
			familyDob: new Date(),
			fromDate:new Date(),
			toDate:new Date(),
			editExpiry:new Date(),
			selectedFile: null,
			variable:'',
			user: "",
			name:"",
			alertVar:false,
			flag:false,
			valid:false,
			validNumber:false,
			isEditOpen: false,
			editGender: 'Male',
			pictures: [],
			educationArray: [],
			educationArray2: [],
			experienceArray: [],
			educationArray4: [],
			educationArray5: [],
			addVar:false,
			single:false,
			
			}
		this.editProfile = this.editProfile.bind(this);
		
	}
	
	

    componentDidMount(){
        this.getApiState();
		console.log("component did mount");
			window.history.pushState(null, null, window.location.href);
			window.onpopstate = function(event) {
			  window.history.go(1);
			  }}
		       addEmployeeEducation(){
				console.log("employee education")
                fetch('http://34.231.95.57:4142/employee/addEducation', {
                    method: 'POST',
                    body: JSON.stringify({
						empId:employeeId,
						instituteName:this.state.addInstitution,
						educationYear:this.state.addYear,
						degree:this.state.addDegree
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(responseData=>responseData.json())
                .then(response => {
                       console.log("response of add Education++"+JSON.stringify(response))    
						})
				// window.location.reload();
				this.editProfile(); 
				}

		addFunction(){
		 this.setState({
			 addVar:true
		 })	
		}
         onChangeHandler=event=>{
				this.setState({
				  selectedFile: event.target.files[0],
				  loaded: 0,
				})
			  }

			  onClickHandler = () => {
				const data = new FormData() 
				data.append('file', this.state.selectedFile)
				data.append('empId',employeeId)
				axios.post("http://34.231.95.57:4142/employee/uploadEmpImage", data, { // receive two parameter endpoint url ,form data 
	  })
	  localStorage.setItem('employeeImage',this.state.empImg)
	console.log("EMP IMAGE ===", this.state.empImg)
	this.editProfile();	
			}
                handleChange = date => {
				this.setState({
				startDate: date
				});
				console.log("handle change==="+this.state.startDate)
			  };
			  handleFamilyDob = date => {
				this.setState({
				familyDob: date
				});
				console.log("handle change==="+this.state.startDate)
			  };
			  handleFromDate = date => {
				  console.log(date.target.value)
				this.setState({
				  fromDate: date
				});
				console.log("handle change==="+this.state.fromDate)
			  };
			  handletoDate = date => {
				// console.log(date.target.value)
			  this.setState({
				toDate: date
			  });
			//   console.log("handle change==="+this.state.fromDate)
			};
			  handleExpiry = data => {
				this.setState({
				  editExpiry: data
				}); 
				// console.log("handle change==="+this.state.startDate)
			  };
			  handleAddress = (e) => {
				e.preventDefault();
				empAddress = e.target.value;
				this.setState({editAddress : empAddress});
				console.log(this.state.editAddress);
			}

				handleGender = (e) => {
					e.preventDefault();
				    this.setState({editGender : e.target.value});
			      }

				handleMaritalStatus = (e) => {
					if(e.target.value=='Married'){
						console.log("true or false")
					 this.setState({single : true});
					}
					e.preventDefault();
				   this.setState({editMaritalStatus : e.target.value});
				   console.log("Marital Status==="+this.state.editMaritalStatus)
				   
	             }

				handlePassportno = (e) => {
					e.preventDefault();
					this.setState({editPassportno : e.target.value});
				}
				handleNationality= (e) => {
					e.preventDefault();
                 this.setState({editNationality : e.target.value});
				}
				handleOrganisationName= (e) => {
					e.preventDefault();
                 this.setState({editExpName : e.target.value});
				}
				handleOrgSkills= (e) => {
					e.preventDefault();
                 this.setState({editOrgSkills : e.target.value});
				}
				handleSummary= (e) => {
					e.preventDefault();
					console.log("summary value++"+e.target.value)
				 this.setState({editSummary : e.target.value});
				 console.log("summary value++"+this.state.editSummary)
				}
				handleLocation= (e) => {
					e.preventDefault();
                 this.setState({editLocation : e.target.value});
				}
				handlePosition= (e) => {
					e.preventDefault();
                 this.setState({editPosition : e.target.value});
				}
				handleEmerName= (e) => {
					e.preventDefault();
                 this.setState({editEmerName : e.target.value});
				}
				handleFamilyName= (e) => {
				e.preventDefault();
                 this.setState({editFamilyName: e.target.value});
				}
				handleFamilyPhone= (e) => {
					e.preventDefault();
					 this.setState({editFamilyPhone: e.target.value});
					}
				handleFamilyRelationship= (e) => {
					e.preventDefault();
					 this.setState({editFamilyRelationship: e.target.value});
					}

				handleReligion= (e) => {
					e.preventDefault();
                 this.setState({editReligion : e.target.value});
				}
			   handleText = (e) => {
				e.preventDefault();
				this.setState({editName : e.target.value});
			   }
			   handlePhone = (e) => {
				e.preventDefault();
				this.setState({editPhone : e.target.value});
			   }
			   handleEmerContact = (e) => {
				e.preventDefault();
				this.setState({editEmerContact :  e.target.value});
				console.log("emergency contact==="+this.state.editEmerContact)
			   }
			   handleEmerRelationship = (e) => {
				e.preventDefault();
				this.setState({editEmerRelationship :  e.target.value});
			   }
			   
			   handleChildren = (e) => {
				e.preventDefault();
				this.setState({editChildren: e.target.value});
			   }
			   handleSkills = (e) => {
				e.preventDefault();
				this.setState({editSkills: e.target.value});
			   }
			   handleInstitution= (e) => {
				e.preventDefault();
			 this.setState({editInstitution : e.target.value});
			 console.log("edit institution===");
			}
			employeeInstitution= (e) => {
				e.preventDefault();
			 this.setState({addInstitution : e.target.value});
			 console.log("add institution=="+this.state.addInstitution)
			}
			employeeYear= (e) => {
				e.preventDefault();
			 this.setState({addYear : e.target.value});
			 console.log("add year=="+this.state.addYear)
			}
			employeeDegree= (e) => {
				e.preventDefault();
			 this.setState({addDegree : e.target.value});
			 console.log("add degree=="+this.state.addDegree)
			}

			handleYear= (e) => {
				e.preventDefault();
			 this.setState({editYear : e.target.value});
			}
			handleDegree= (e) => {
				e.preventDefault();
			 this.setState({editDegree : e.target.value});
			}
            getApiState(){
				let dataarray = []
				console.log("Api calleeddddd",employeeId)
                fetch('http://34.231.95.57:4142/employee/getEmpDetail', {
                    method: 'POST',
                    body: JSON.stringify({
                        empId:employeeId
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(responseData=>responseData.json())
                .then(response => {
                      
                        this.setState({
							empId: response.employee.empId,
							empImg: "http://34.231.95.57:4142/"+response.employee.empImg,
							pictures: "http://34.231.95.57:4142/"+response.employee.empImg,
							name:response.employee.name,
							editName:response.employee.name,
							dob:response.employee.dob,
							profile:response.employee.profile,
							joiningDate:response.employee.joiningDate,
							team:response.employee.team,
							phone:response.employee.phone,
							editPhone:response.employee.phone,
							email:response.employee.email,
							gender:response.employee.gender,
							editGender:response.employee.gender,
						    localAddress:response.employee.localAddress,
							editAddress:response.employee.localAddress,
							aadharNo:response.employee.aadharNo,
							passportNo:response.employee.passportNo,
							editPassportno:response.employee.passportNo,
							passportExpDate:response.employee.passportExpDate,
							nationality:response.employee.nationality,
							editNationality:response.employee.nationality,
							religion:response.employee.religion,
							editReligion:response.employee.religion,
							maritalStatus:response.employee.maritalStatus,
							editMaritalStatus:response.employee.maritalStatus,
							noOfChildren:response.employee.noOfChildren,
							editChildren:response.employee.noOfChildren,
							skills:response.employee.skills,
							editSkills:response.employee.skills,
                        	permanentAddress:response.employee.permanentAddress,
						}) 
                        if(response.employee.familyInformation[0]!=null){
							this.setState({
							familyPersonName:response.employee.familyInformation[0].familyPersonName,
							editFamilyName:response.employee.familyInformation[0].familyPersonName,
							familyPersonRelation:response.employee.familyInformation[0].familyPersonRelation,
							editFamilyRelationship:response.employee.familyInformation[0].familyPersonRelation,
							familyPersonContact:response.employee.familyInformation[0].familyPersonContact,
							editFamilyPhone:response.employee.familyInformation[0].familyPersonContact,
							familyPersonDOB:response.employee.familyInformation[0].familyPersonDOB,
							familyDob:response.employee.familyInformation[0].familyPersonDOB,
						    
						})
						}

						if(response.employee.emergencyContact[0]!=null){
							this.setState({
							emerId:response.employee.emergencyContact[0].emerId,
							emerName:response.employee.emergencyContact[0].emerName,
							editEmerName:response.employee.emergencyContact[0].emerName,
							emerContact:response.employee.emergencyContact[0].emerContact,
							editEmerContact:response.employee.emergencyContact[0].emerContact,
							emerRelationship:response.employee.emergencyContact[0].emerRelationship,
							editEmerRelationship:response.employee.emergencyContact[0].emerRelationship,
							})
						}
						
						if(response.employee.bankInformation[0]!=null){
							this.setState({
							bankId:response.employee.bankInformation[0].bankId,
							bankName:response.employee.bankInformation[0].bankName,
							bankBranch:response.employee.bankInformation[0].bankBranch,
							bankIFSCCode:response.employee.bankInformation[0].bankIFSCCode,
							bankAccNo:response.employee.bankInformation[0].bankAccNo,
							})
						}   
							for (let i = 0; i < response.employee.educationInformation.length; i++) {
				            dataarray.push({
							educationId:response.employee.educationInformation[i].educationId,
							instituteName:response.employee.educationInformation[i].instituteName,
							editInstitution:response.employee.educationInformation[i].instituteName,
                            degree:response.employee.educationInformation[i].degree,
							editDegree:response.employee.educationInformation[i].degree,
			                educationYear:response.employee.educationInformation[i].educationYear,
							editYear:response.employee.educationInformation[i].educationYear,
						    
						})
					   }
					if(response.employee.experience[0]!=null) {
					this.setState({
						    expOrgName:response.employee.experience[0].expOrgName,
							editExpName:response.employee.experience[0].expOrgName,
							jobPosition:response.employee.experience[0].jobPosition,
							editPosition:response.employee.experience[0].jobPosition,
							experienceLocation:response.employee.experience[0].experienceLocation,
							editLocation:response.employee.experience[0].experienceLocation,
							jobStartDate:response.employee.experience[0].jobStartDate,
							// fromdate:response.employee.experience[0].jobStartDate,
							jobEndDate:response.employee.experience[0].jobEndDate,
							experienceSkill:response.employee.experience[0].experienceSkill,
							editOrgSkills:response.employee.experience[0].experienceSkill,
							professionalSummary:response.employee.experience[0].professionalSummary,
					
				}) 
			   }
                    if (response.employee.bankInformation[0]!=null) {
						this.setState({
							bankId:response.employee.bankInformation[0].bankId,
							bankName:response.employee.bankInformation[0].bankName,
							bankBranch:response.employee.bankInformation[0].bankBranch,
							bankIFSCCode:response.employee.bankInformation[0].bankIFSCCode,
							bankAccNo:response.employee.bankInformation[0].bankAccNo,
						})
			   }
					this.setState({educationArray:dataarray,
								})
                    localStorage.setItem('EmployeeImage',response.employee.empImg);
					localStorage.setItem('EmployeeName', response.employee.name);
						})
						console.log("RESPONSE second ====="+JSON.stringify(this.state.educationArray));
						this.setState({loading:false}) ; 
				}
				deleteEducation=item=>{
					console.log("eduId+++++++++++++++"+item.educationId)
					console.log("empId+++++++++++++++"+this.state.empId)
					empEduId=item.educationId;
					EduEmpId=this.state.empId;
    				this.setState({
						deleteEducationId:item.educationId,
						// deleteEmployeeId:item.empId
					})
					console.log("delete education id+++$$$",empEduId);
					console.log("delete employee edu $$$id+++",EduEmpId);
					this.deleteEmployeeEducation();
					
				}
				deleteEmployeeEducation() {
					console.log("Delete Employee Id +++++"+this.state.deleteEducationId)
					console.log("Delete educationId +++++",employeeId)
					fetch('http://34.231.95.57:4142/employee/deleteEducation', {
						method: 'POST',
						body: JSON.stringify({
							empId: EduEmpId,
							educationId:empEduId,
						}),
						headers: {
							"access-control-allow-origin": "*",
							"Content-type": "application/json"
						}
					})
						.then(responsedata => responsedata.json())
						.then(emp => {
							console.log("Response of delete education  api====", JSON.stringify(emp));
							
							})
						.catch(err => {
							console.log("ERROR====" + err)
						})
						this.editProfile();
			        // window.location.reload();
					}

			

         editProfile() {

			if(this.state.editName.length=='0'||this.state.editAddress.length=='0')
			 {this.setState({valid:true})}
			 if(this.state.editPhone.length!='10')
			 {this.setState({validNumber:true})}
			console.log("this.state.name  "+this.state.editGender);
			fetch('http://34.231.95.57:4142/employee/updateEmployee', {
                    method: 'POST',
                    body: JSON.stringify({
						empId:employeeId,
						name:this.state.editName,
						dob:this.state.startDate,
						passportExpDate:this.state.editExpiry,
						gender:this.state.editGender,
						localAddress:this.state.editAddress,
						phone:this.state.editPhone,
						passportNo:this.state.editPassportno,
						nationality:this.state.editNationality,
						religion:this.state.editReligion,
						maritalStatus:this.state.editMaritalStatus,
						noOfChildren:this.state.editChildren,
						skills:this.state.editSkills,
						emerContact:this.state.editEmerContact,
						emerName:this.state.editEmerName,
						emerRelationship:this.state.editEmerRelationship,
						familyPersonName:this.state.editFamilyName,
						familyPersonDOB:this.state.familyDob,
						familyPersonRelation:this.state.editFamilyRelationship,
						familyPersonContact:this.state.editFamilyPhone,
						instituteName:this.state.editInstitution,
						educationYear:this.state.editYear,
						degree:this.state.editDegree,
						expOrgName:this.state.editExpName,
						experienceSkill:this.state.editOrgSkills,
						experienceLocation:this.state.editLocation,
						jobPosition:this.state.editPosition,
						jobStartdate:this.state.fromDate,
						jobEnddate:this.state.toDate,

					}),
                    headers: {
                        "Content-type": "application/json"
                    }
				}).then(responseData=>responseData.json())
				.then(response => {
					if(response.success)
					{
						this.setState({alertVar:true})
					}
					if(this.state.editName.length!='0'&&this.state.editAddress.length!='0'&&this.state.editPhone.length=='10')
					{
					if(response.success == true)
					   {
						   this.setState({flag:true})
                           window.location.reload(); 
                       }
					}
				})
      }
         render() {
			 if(this.state.maritalStatus=='Married'){
				 married=true;
			 }
			 console.log("inside render==="+this.state.maritalStatus)
		    	// console.log("educationArray++render==="+JSON.stringify(this.state.educationArray.editInstitution))
				employeeId=localStorage.getItem("EmpId");
				empImage=localStorage.getItem("EmployeeImage")
				console.log("rederrrrederrr empId===",employeeId)
				console.log("rederrr==="+picVar)
			return (
			<div>
				{/* <div className="main-wrapper"> */}
				<div className="header">
			
			{/* <!-- Logo --> */}
			<div className="header-left">
			
				<a href="index.html" className="logo">
				<i id="iconLogo" class="fa fa-cog fa-3x mt-2" aria-hidden="true"></i>
					{/* <img src={Images.logo1} width="150" height="40" alt=""/> */}
				</a>
			</div>
			{/* <!-- /Logo --> */}
			<a id="mobile_btn" className="mobile_btn" ><i className="fa fa-bars"></i></a>
			<div className="page-title-box className">
				<h3 >Integrated Monitoring HRMS</h3>
			</div>
			{/* <!-- Header Menu --> */}
			<ul className="nav user-menu">
		
				{/* <!-- Notifications --> */}
				<li className="nav-item dropdown">
					
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<i className="fa fa-bell-o"></i> <span className="badge badge-pill">3</span>
					</a>
					<div className="dropdown-menu notifications">
						<div className="topnav-dropdown-header">
							<span className="notification-title">Notifications</span>
							<a className="clear-noti"> Clear All </a>
						</div>
						<div className="noti-content">
							<ul className="notification-list">
								<li className="notification-message">
									<a href="activities.html">
										<div className="media">
											<span className="avatar">
												<img alt="" src={Images.ava2}/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="activities.html">
										<div className="media">
											<span className="avatar">
												<img alt="" src={Images.ava3}/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
												<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="activities.html">
										<div className="media">
											<span className="avatar">
												<img alt="" src={Images.ava6}/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
												<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="activities.html">
										<div className="media">
											<span className="avatar">
												<img alt="" src={Images.ava17}/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
												<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="activities.html">
										<div className="media">
											<span className="avatar">
												<img alt="" src={Images.ava13}/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
												<p className="noti-time"><span className="notification-time">2 days ago</span></p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="topnav-dropdown-footer">
						<Link to="/notification">View all Notifications</Link>
							{/* <a href="activities.html"></a> */}
						</div>
					</div>
				</li>
				
				<li className="nav-item dropdown has-arrow main-drop">
				<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
							<span className="user-img"><img src={"http://34.231.95.57:4142/"+empImage} height="32" width="42" />
								<span className="status online"></span>
								</span>
							<span className="ml-2">Employee</span>
						</a>
					<div className="dropdown-menu">
					 <Link className="dropdown-item" to="/profile">My profile</Link>
					 <Link className="dropdown-item" to="/settings">Settings</Link>
						<Link className="dropdown-item" to="/">Logout</Link>
						{/* <a className="dropdown-item" href="login.html">Logout</a> */}
					</div>
				</li>
			</ul>
			{/* <!-- /Header Menu --> */}
			
			{/* <!-- Mobile Menu --> */}
			<div className="dropdown mobile-user-menu">
							<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
							<div className="dropdown-menu dropdown-menu-right">
								<Link className="dropdown-item" to="/profile">My Profile</Link>
								<Link className="dropdown-item" to="/settings">Settings</Link>
								<Link className="dropdown-item" to="/">Logout</Link>
							</div>
						</div>
			{/* <!-- /Mobile Menu --> */}
			
		</div>	
						{/* <!-- /Header --> */}
						{/* <!-- Sidebar --> */}
						<Side/>
						{/* <!-- /Sidebar --> */}
						{/* <!-- Page Wrapper --> */}
						<div className="page-wrapper bg-light">
							{/* <!-- Page Content --> */}
							<div className="content container-fluid ">
								{/* <!-- Page Header --> */}
								<div className="page-header">
									<div className="row">
										<div className="col-sm-12">
											<h3 className="page-title">Profile</h3>
											<ul className="breadcrumb">
												<li className="breadcrumb-item "><Link className="text-decoration-none" to="/employee"><b>Dashboard</b></Link></li>
												<li className="breadcrumb-item active"><b>Profile</b></li>
											</ul>
										</div>
									</div>
								</div>
								{/* <!-- /Page Header --> */}
								<div className="card mb-0 bg-white">
									<div className="card-body border rounded shadow-sm">
										<div className="row">
											<div className="col-md-12">
												<div id="profileView" className="profile-view">
													<div className="profile-img-wrap">
														<div className="profile-img">
															<a href="#">
												<img id="imageEmployee" height="32" width="42" alt="" src={this.state.empImg} /></a>
														</div>
													</div>
													<div className="profile-basic">
														<div className="row">
															<div className="col-md-5">
																<div className="profile-info-left">
																	<h3 className="user-name m-t-0 mb-0">
																		{this.state.name}
																   {/* {this.state.flag== true ? this.state.name : null } */}
																		</h3>
																	<h6 className="text-muted">{this.state.team}</h6>
																	<small className="text-muted">{this.state.profile}</small>
																	<div className="staff-id">{this.state.empId}</div>
																	<div className="small doj text-muted"><Moment format="DD/MM/YYYY">{this.state.joiningDate}</Moment></div>
																	{/* <div className="staff-msg"><a className="btn btn-custom text-white" >Send Message</a></div> */}
																</div>
															</div>
															<div className="col-md-7">
																<ul className="personal-info">
																	<li>
																		<div className="title">Phone:</div>
																		<div className="text-blue">{this.state.phone}</div>
																	</li>
																	<li>
																		<div className="title">Email:</div>
																		<div className="text-blue">{this.state.email}</div>
																	</li>
																	<li>
																		<div className="title">Date Of Birth:</div>
																		<div className="text"><Moment format="DD/MM/YYYY">{this.state.dob}</Moment></div>
																	</li>
																	<li>
																		<div className="title">Address:</div>
																		<div className="text">{this.state.localAddress}</div>
																	</li>
																	<li>
																		<div className="title">Gender:</div>
																		<div className="text">{this.state.gender}</div>
																	</li>
																	<li>
																		{/* <div className="title">Reports to:</div>
																		<div className="text">
																			<div className="avatar-box">
																				<div className="avatar avatar-xs">
																					<img alt="" src={Image.logo13} />
																				</div>
																			</div>
																			<a href="profile.html">
																				Jeffery Lalor
																			</a>
																		</div> */}
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div className="pro-edit mt-3 mr-2"><a data-target="#profile_info" data-toggle="modal" className="edit-icon" href="#"><i className="fa fa-pencil"></i></a></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card tab-box">
									<div className="row user-tabs">
										<div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
											<ul className="nav nav-tabs nav-tabs-bottom">
												<li className="nav-item"><a href="#emp_profile" data-toggle="tab" className="nav-link active">Profile</a></li>
												<li className="nav-item"><a href="#emp_projects" data-toggle="tab" className="nav-link">Projects</a></li>
												{/* <li className="nav-item"><a href="#bank_statutory" data-toggle="tab" className="nav-link">Bank & Statutory <small className="text-danger">(Admin Only)</small></a></li> */}
											</ul>
										</div>
									</div>
								</div>
								<div className="tab-content">
									{/* <!-- Profile Info Tab --> */}
									<div id="emp_profile" className="pro-overview tab-pane fade show active">
										<div className="row">
											<div className="col-md-6 d-flex">
												<div className="card profile-box flex-fill bg-white">
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Personal Details<a href="#" className="edit-icon" data-toggle="modal" data-target="#personal_info_modal"><i className="fa fa-pencil"></i></a></h3>
														<ul className="personal-info">
															<li>
																<div className="title">Passport No.</div>
																<div className="text">{this.state.passportNo}</div>
															</li>
															<li>
																<div className="title ">Passport Exp Date</div>
																<div className="text"><Moment  format="DD/MM/YYYY">{this.state.passportExpDate}</Moment></div>
															</li>
															<li>
																<div className="title">Nationality</div>
																<div className="text">{this.state.nationality}</div>
															</li>
															<li>
																<div className="title">Religion</div>
																<div className="text">{this.state.religion}</div>
															</li>
															
														   <li>
															    <div className="title">Marital status</div>
																<div className="text">{this.state.maritalStatus}</div>
															</li>	
															{/* <li>  
																<div className="title">Employment of spouse</div>
																<div className="text">{this.state.maritalStatus}</div>
															</li> */}
															{married?<li>
															<div className="title">No. of children</div>
															<div className="text">{this.state.noOfChildren}</div>
														</li>:null}
															
															<li>
																<div className="title">Skills</div>
																<div className="text">{this.state.skills}</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="col-md-6 d-flex">
												<div className="card profile-box flex-fill bg-white">
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Emergency Contact <a href="#" className="edit-icon" data-toggle="modal" data-target="#emergency_contact_modal"><i className="fa fa-pencil"></i></a></h3>
														{/* <h5 className="section-title">Primary</h5> */}
														
													
													<ul className="personal-info">
															<li>
																<div className="title">Name</div>
																<div className="text">{this.state.emerName}</div>
															</li>
															<li>
																<div className="title">Relationship</div>
																<div className="text">{this.state.emerRelationship}</div>
															</li>
															<li>
																<div className="title">Phone </div>
																<div className="text">{this.state.emerContact}</div>
															</li>
												</ul>
												</div>
												</div>
											</div>
										</div>
										<div className="row">
										
											<div className="col-md-6 d-flex">
												<div className="card profile-box flex-fill bg-white">
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Bank Details</h3>
												
														<ul className="personal-info">
														<li>
																<div className="title">Bank Id</div>
																<div className="text">{this.state.bankId}</div>
															</li>
															
															<li>
																<div className="title">Bank name</div>
																	<div className="text">{this.state.bankName}</div>
															</li>
															<li>
																<div className="title">Bank account No.</div>
																<div className="text">{this.state.bankAccNo}</div>
															</li>
															<li>
																<div className="title">IFSC Code</div>
																<div className="text">{this.state.bankIFSCCode}</div>
															</li>
														</ul>
														
													</div>
												</div>
											</div>
											<div className="col-md-6 d-flex">
												<div className="card profile-box flex-fill bg-white">
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Family Details <a href="#" className="edit-icon" data-toggle="modal" data-target="#family_info_modal"><i className="fa fa-pencil"></i></a></h3>
														<div className="table-responsive">
					                                   <table className="table table-nowrap">
																<thead>
																	<tr>
																		<th>Name</th>
																		<th>Relationship</th>
																		<th>Date of Birth</th>
																		<th>Phone</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>{this.state.familyPersonName}</td>
																		<td>{this.state.familyPersonRelation}</td>
																		<td><Moment format="DD/MM/YYYY">{this.state.familyPersonDOB}</Moment></td>
																		<td>{this.state.familyPersonContact}</td>
																		<td className="text-right">
																			<div className="dropdown dropdown-action">
																				<a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
																				<div className="dropdown-menu dropdown-menu-right">
																					<a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																					<a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																				</div>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
												        </div>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
										
											<div className="col-md-6 d-flex">
											
												<div className="card profile-box flex-fill bg-white">
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Education Details <a href="#" className="edit-icon" data-toggle="modal" data-target="#education_info"><i className="fa fa-pencil"></i></a></h3>
													   <div className="experience-box">
														<ul className="experience-list">
														{this.state.educationArray != null && this.state.educationArray != "" && this.state.educationArray != [] ?
												this.state.educationArray.map(item =>
																<li>
																	<div className="experience-user">
																		<div className="before-circle"></div>
																	</div>
																	<div className="experience-content">
																		<div className="timeline-content">
																		<div className="name">{item.instituteName}</div>
																			<div>{item.degree}</div>
																			<span className="time">{item.educationYear}</span>
																		</div>
																	</div>
																</li>
																):null}
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6 d-flex">
												<div className="card profile-box flex-fill bg-white" >
													<div className="card-body border rounded shadow-sm">
														<h3 className="card-title">Experience Details <a href="#" className="edit-icon" data-toggle="modal" data-target="#experience_info"><i className="fa fa-pencil"></i></a></h3>
														<div className="experience-box">
															<ul className="experience-list">
																<li>
																	<div className="experience-user">
																		<div className="before-circle"></div>
																	</div>
																</li>
																<li>
																	<div className="experience-user">
																	<div className="before-circle"></div>
																	</div>
																	<div className="experience-content">
																	<div className="timeline-content">
																	<a href="#/" className="name">{this.state.jobPosition} at {this.state.expOrgName} ,{this.state.experienceLocation}</a>
															<span className="time">{this.state.jobStartDate} - {this.state.jobEndDate}</span>
															<span>Experience skill-{this.state.experienceSkill}</span>
															  <span>{this.state.professionalSummary}</span>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="experience-user">
																		<div className="before-circle"></div>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
                                      </div>
									{/* <!-- /Profile Info Tab --> */}
									{/* <!-- Projects Tab --> */}
									<div className="tab-pane fade" id="emp_projects">
										<div className="row">
											<div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
												<div className="card bg-white">
													<div className="card-body">
														<div className="dropdown profile-action">
															<a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
															<div className="dropdown-menu dropdown-menu-right">
																<a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																<a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
															</div>
														</div>
														<h4 className="project-title"><a href="project-view.html">JhatPat Jobs</a></h4>
														<small className="block text-ellipsis m-b-15">
														<span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
														<span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
														</small>
														<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. When an unknown printer took a galley of type and
															scrambled it...
														</p>
														<div className="pro-deadline m-b-15">
															<div className="sub-title">
																Deadline:
															</div>
															<div className="text-muted">
																17 Apr 2019
															</div>
														</div>
														<div className="project-members m-b-15">
															<div>Project Leader :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
																</li>
															</ul>
														</div>
														<div className="project-members m-b-15">
															<div>Team :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
																</li>
																<li>
																	<a href="#" className="all-users">+15</a>
																</li>
															</ul>
														</div>
														<p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
														<div className="progress progress-xs mb-0">
															<div new="width: 40%" title="" data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%"></div>
														</div>
													</div>
												</div>
											</div>
											{/* <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
												<div className="card">
													<div className="card-body">
														<div className="dropdown profile-action">
															<a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
															<div className="dropdown-menu dropdown-menu-right">
																<a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																<a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
															</div>
														</div>
														<h4 className="project-title"><a href="project-view.html">Project Management</a></h4>
														<small className="block text-ellipsis m-b-15">
														<span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
														<span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
														</small>
														<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. When an unknown printer took a galley of type and
															scrambled it...
														</p>
														<div className="pro-deadline m-b-15">
															<div className="sub-title">
																Deadline:
															</div>
															<div className="text-muted">
																17 Apr 2019
															</div>
														</div>
														<div className="project-members m-b-15">
															<div>Project Leader :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
																</li>
															</ul>
														</div>
														<div className="project-members m-b-15">
															<div>Team :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
																</li>
																<li>
																	<a href="#" className="all-users">+15</a>
																</li>
															</ul>
														</div>
														<p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
														<div className="progress progress-xs mb-0">
															<div new="width: 40%" title="" data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%"></div>
														</div>
													</div>
												</div>
											</div> */}
											{/* <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
												<div className="card">
													<div className="card-body">
														<div className="dropdown profile-action">
															<a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
															<div className="dropdown-menu dropdown-menu-right">
																<a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																<a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
															</div>
														</div>
														<h4 className="project-title"><a href="project-view.html">Video Calling App</a></h4>
														<small className="block text-ellipsis m-b-15">
														<span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
														<span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
														</small>
														<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. When an unknown printer took a galley of type and
															scrambled it...
														</p>
														<div className="pro-deadline m-b-15">
															<div className="sub-title">
																Deadline:
															</div>
															<div className="text-muted">
																17 Apr 2019
															</div>
														</div>
														<div className="project-members m-b-15">
															<div>Project Leader :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
																</li>
															</ul>
														</div>
														<div className="project-members m-b-15">
															<div>Team :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
																</li>
																<li>
																	<a href="#" className="all-users">+15</a>
																</li>
															</ul>
														</div>
														<p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
														<div className="progress progress-xs mb-0">
															<div new="width: 40%" title="" data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%"></div>
														</div>
													</div>
												</div>
											</div> */}
											{/* <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
												<div className="card">
													<div className="card-body">
														<div className="dropdown profile-action">
															<a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
															<div className="dropdown-menu dropdown-menu-right">
																<a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																<a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
															</div>
														</div>
														<h4 className="project-title"><a href="project-view.html">Hospital Administration</a></h4>
														<small className="block text-ellipsis m-b-15">
														<span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
														<span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
														</small>
														<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. When an unknown printer took a galley of type and
															scrambled it...
														</p>
														<div className="pro-deadline m-b-15">
															<div className="sub-title">
																Deadline:
															</div>
															<div className="text-muted">
																17 Apr 2019
															</div>
														</div>
														<div className="project-members m-b-15">
															<div>Project Leader :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
																</li>
															</ul>
														</div>
														<div className="project-members m-b-15">
															<div>Team :</div>
															<ul className="team-members">
																<li>
																	<a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
																</li>
																<li>
																	<a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
																</li>
																<li>
																	<a href="#" className="all-users">+15</a>
																</li>
															</ul>
														</div>
														<p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
														<div className="progress progress-xs mb-0">
															<div new="width: 40%" title="" data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%"></div>
														</div>
													</div>
												</div>
											</div>
										</div> */}
									</div>
									{/* <!-- /Projects Tab --> */}
									{/* <!-- Bank Statutory Tab --> */}
									{/* <div className="tab-pane fade" id="bank_statutory"> */}
										{/* <div className="card"> */}
											{/* <div className="card-body"> */}
												{/* <h3 className="card-title"> Basic Salary Information</h3> */}
												{/* <form> */}
													{/* <div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Salary basis <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select salary basis type</option>
																	<option>Hourly</option>
																	<option>Daily</option>
																	<option>Weekly</option>
																	<option>Monthly</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Salary amount <small className="text-muted">per month</small></label>
																<div className="input-group">
																	<div className="input-group-prepend">
																		<span className="input-group-text">$</span>
																	</div>
																	<input type="text" className="form-control" placeholder="Type your salary amount" value="0.00" />
																</div>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Payment type</label>
																<select className="select">
																	<option>Select payment type</option>
																	<option>Bank transfer</option>
																	<option>Check</option>
																	<option>Cash</option>
																</select>
															</div>
														</div>
													</div>
													<hr> */}
													{/* <h3 className="card-title"> PF Information</h3>
													<div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">PF contribution</label>
																<select className="select">
																	<option>Select PF contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">PF No. <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select PF contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Employee PF rate</label>
																<select className="select">
																	<option>Select PF contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select additional rate</option>
																	<option>0%</option>
																	<option>1%</option>
																	<option>2%</option>
																	<option>3%</option>
																	<option>4%</option>
																	<option>5%</option>
																	<option>6%</option>
																	<option>7%</option>
																	<option>8%</option>
																	<option>9%</option>
																	<option>10%</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Total rate</label>
																<input type="text" className="form-control" placeholder="N/A" value="11%" />
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Employee PF rate</label>
																<select className="select">
																	<option>Select PF contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select additional rate</option>
																	<option>0%</option>
																	<option>1%</option>
																	<option>2%</option>
																	<option>3%</option>
																	<option>4%</option>
																	<option>5%</option>
																	<option>6%</option>
																	<option>7%</option>
																	<option>8%</option>
																	<option>9%</option>
																	<option>10%</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Total rate</label>
																<input type="text" className="form-control" placeholder="N/A" value="11%" />
															</div>
														</div>
													</div>
													<hr> */}
													{/* <h3 className="card-title"> ESI Information</h3>
													<div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">ESI contribution</label>
																<select className="select">
																	<option>Select ESI contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">ESI No. <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select ESI contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Employee ESI rate</label>
																<select className="select">
																	<option>Select ESI contribution</option>
																	<option>Yes</option>
																	<option>No</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
																<select className="select">
																	<option>Select additional rate</option>
																	<option>0%</option>
																	<option>1%</option>
																	<option>2%</option>
																	<option>3%</option>
																	<option>4%</option>
																	<option>5%</option>
																	<option>6%</option>
																	<option>7%</option>
																	<option>8%</option>
												
																	<option>9%</option>
																	<option>10%</option>
																</select>
															</div>
														</div>
														<div className="col-sm-4">
															<div className="form-group">
																<label className="col-form-label">Total rate</label>
																<input type="text" className="form-control" placeholder="N/A" value="11%"/>
															</div>
														</div>
													</div>
													<div className="submit-section">
														<button className="btn btn-primary submit-btn" type="submit">Save</button>
													</div> */}
											{/* </hr> */}
											{/* </hr> */}
											{/* </form> */}
											{/* </div> */}
										{/* </div> */}
									{/* </div> */}
								</div>
							</div>
							{/* <!-- /Page Content --> */}
							{/* <!-- Profile Modal --> */}
							<div id="profile_info" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Profile Information</h5>
											<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										</div>
										<div className="modal-body">
											<form>
                                     {/* <img className="inline-block" src={"http://34.231.95.57:414icVar} alt="user" /> */}
												<div className="row">
													<div className="col-md-12">
									           <center>
											   <div className="container">
												   <img className="inline-block border circle" height="100px" width="100px" src={this.state.empImg} alt="user" />
												   <br/><br/>
													<input className="btn-sm pl-5 bg-light" name="file" type="file"  onChange={(event) => this.onChangeHandler(event)} /><br/><br/>
										           < div id="uploadBtn" className="btn btn-secondary mr-2 btn-sm text-white" onClick={this.onClickHandler}>Upload</ div>
													</div>
													</center>
														{/* </div> */}
														<div className="row align-items-start ">
															<div className="col-12 col-md-6">
																<div className="form-group">
																<label >Employee Name</label>
																<input id="marginInput" value={this.state.editName} type="text" className="form-control"  onChange = {(e) => this.handleText(e)}></input>
																</div>
								                             </div>
															
															<div className="ml-2">
																<div className="form-group">
																	<label id="margin">Birth Date</label>
																	<div id="calIcon"className="cal-icon">
																	<DatePicker id="datepicker" 
																	 selected={this.state.startDate}
																	onChange={this.handleChange}
																	/>
																	</div>
																</div>
															</div>
															<div className="col-6 col-md-3">
																<div className="form-group">
																	<label>Gender</label>
																	<select  className="select form-control" onChange = {(e) => this.handleGender(e)} >
												                        <option selected >{this.state.gender}</option>
																		{this.state.gender=='Male'? <option>Female</option>: <option>Male</option>}
																		
																		 </select>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Address</label>
			<input type="text" className="form-control" value={this.state.editAddress} onChange = {(e) => this.handleAddress(e)} ></input>
														</div>
													</div>
											<div className="col-md-6">
														<div className="form-group">
															<label>Phone Number</label>
															<input value={this.state.editPhone} type="number" className="form-control"  onChange = {(e) => this.handlePhone(e)}/>
															{this.state.validNumber==true?<p id="inputValid"><i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please Enter a valid 10 digit number</p>:null}
													</div>
													</div>
													</div>
												<div className="submit-section">
												{this.state.valid==true?<p id="inputValid"><i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please fill out all the fields</p>:null}
												
				<div type="submit" id="editBtn"  className="btn btn-secondary submit-btn"  onClick={this.editProfile} >Update</div>	
				{/* <button onClick={this.editProfile} className="btn btn-primary submit-btn">Edit</button > */}
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Profile Modal --> */}
							{/* <!-- Personal Info Modal --> */}
							<div id="personal_info_modal" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Personal Details</h5>
											<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										</div>
										<div className="modal-body">
											<form>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Passport No</label>
															<input type="text" value={this.state.editPassportno} className="form-control" onChange = {(e) => this.handlePassportno(e)}></input>
														</div>
													</div>
													<div className="col-md-6">
																<div className="form-group">
																	<label>Passport Expiry Date</label>
																	<div>
																	<div id="calIcon"className="cal-icon">
																	<DatePicker id="datepicker2"
																	selected={this.state.editExpiry}
																	onChange={this.handleExpiry}
																	/>
																	</div>
																	</div>
																</div>
															</div>
									
													<div className="col-md-6">
														<div className="form-group">
															<label>Nationality <span className="text-danger">*</span></label>
															<input value={this.state.editNationality} className="form-control" type="text" onChange = {(e) => this.handleNationality(e)}></input>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Religion</label>
															<div >
															<input value={this.state.editReligion} className="form-control" type="text" onChange = {(e) => this.handleReligion(e)}></input>
															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Marital status <span className="text-danger">*</span></label>
															<select className="select form-control" onChange = {(e) => this.handleMaritalStatus(e)}>
											                	<option selected>{this.state.maritalStatus}</option>
																{this.state.maritalStatus=='Married'?<option>Single</option>:
																<option>Married</option>
																}
												        </select>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Skills</label>
															<input value={this.state.editSkills} className="form-control" type="text" onChange = {(e) => this.handleSkills(e)} />
														</div>
													</div>
													{this.state.single?<div className="col-md-6">
														<div className="form-group">
															<label>No. of children </label>
															<input value={this.state.editChildren} className="form-control" type="text" onChange = {(e) => this.handleChildren(e)} />
														</div>
													</div>:null}
                                                </div>
												<div className="submit-section">
												<div id="editBtn" className="btn btn-secondary submit-btn"  onClick={this.editProfile}>Update</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Personal Info Modal --> */}
							{/* <!-- Family Info Modal --> */}
							<div id="family_info_modal" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title"> Family Details</h5>
											<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										</div>
										<div className="modal-body">
											<form>
												<div className="form-scroll">
													<div className="card">
														<div className="card-body">
															<h3 className="card-title">Family Member <a href="javascript:void(0);" className="delete-icon"><i className="fa fa-trash-o"></i></a></h3>
															<div className="row">
																<div className="col-md-6">
																	<div className="form-group">
																		<label>Name <span className="text-danger">*</span></label>
																		<input value={this.state.editFamilyName} className="form-control" type="text" onChange = {(e) => this.handleFamilyName(e)} ></input>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group">
																		<label>Relationship <span className="text-danger">*</span></label>
																		<input value={this.state.editFamilyRelationship} className="form-control" type="text" onChange = {(e) => this.handleFamilyRelationship(e)}></input>
																	</div>
																</div>
																<div className="ml-3">
																<div className="form-group">
																	<label id="margin">Birth Date</label>
																	<div id="calIcon"className="cal-icon">
																	<DatePicker id="datepicker4" 
																	 selected={this.state.editDob}
																	onChange={this.handleFamilyDob}
																	/>
																	</div>
																</div>
															</div>
																<div className="col-md-6 ml-1">
																	<div className="form-group">
																		<label>Phone <span className="text-danger">*</span></label>
																		<input value={this.state.editFamilyPhone} className="form-control" type="text" onChange = {(e) => this.handleFamilyPhone(e)}/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="submit-section">
													<div id="editBtn" className="btn btn-secondary submit-btn" onClick={this.editProfile}>Update</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Family Info Modal --> */}
							{/* <!-- Emergency Contact Modal --> */}
							<div id="emergency_contact_modal" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Emergency Contact</h5>
											<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										</div>
										<div className="modal-body">

											<form>
											<div className="card">
													<div className="card-body">
														{/* <h3 className="card-title">Primary Contact</h3> */}
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<label>Name <span className="text-danger">*</span></label>
																	
																	<input value={this.state.editEmerName} type="text"  className="form-control" onChange = {(e) => this.handleEmerName(e)}></input>
																	{this.state.editEmerName==this.state.name?<p id="userValid" className="mt-3 font-weight-normal">Username not allowed!</p>:null}
																	
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<label>Relationship <span className="text-danger">*</span></label>
																	<input value={this.state.editEmerRelationship} className="form-control" type="text" onChange = {(e) => this.handleEmerRelationship(e)}></input>
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<label>Phone <span className="text-danger">*</span></label>
																	<input value={this.state.editEmerContact} className="form-control" type="number" onChange = {(e) => this.handleEmerContact(e)}></input>
																</div>
															</div>
												        </div>
													</div>
												</div>
										      <div className="submit-section">
													<div id="editBtn" className="btn btn-secondary submit-btn" onClick={this.editProfile} >Update</div>
												</div>
										 
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Emergency Contact Modal --> */}
							{/* <!-- Education Modal --> */}
							<div id="education_info" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title"> Education Details</h5>
										</div>
										<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										<div className="modal-body">
										{this.state.educationArray != null && this.state.educationArray != "" && this.state.educationArray != [] ?
												this.state.educationArray.map(item =>
											(<form>
												
											<div className="form-scroll">
													<div className="card">
														<div className="card-body">
															<h3 className="card-title">Education Details <a href="javascript:void(0);" className="delete-icon"  onClick={()=>this.deleteEducation(item)}><i className="fa fa-trash-o"></i></a></h3>
															<div className="row">
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Institute Name</label>
																		<input  id="instituteLabel" type="text" value={item.editInstitution} className="form-control floating"  onChange = {(e) => this.handleInstitution(e)} />
																	</div>
																</div>
																 <div className="col-md-6">
																	<div className="form-group">
																	<label >Year</label>
																		<input id="instituteLabel" type="text" value={item.editYear} className="form-control floating"   onChange = {(e) => this.handleYear(e)}  />
																		</div>
																   </div>
						
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Degree</label>
																		<input id="instituteLabel" type="text" value={item.editDegree} className="form-control floating" onChange = {(e) => this.handleDegree(e)}/>
																		</div>
																</div>
													     </div>
														</div>
													</div>
								               </div>
												<div className="submit-section">
													<div id="editBtn" className="btn btn-secondary submit-btn"  onClick={this.editProfile}>Update</div>
												</div>
												</form>)):null}
										</div>
										{this.state.addVar ? 
										<div className="modal-body">
											<form>
												<div className="form-scroll">
													<div className="card">
														<div className="card-body">
															<h3 className="card-title">Education Details <a href="javascript:void(0);" className="delete-icon"><i className="fa fa-trash-o"></i></a></h3>
															<div className="row">
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Institute Name</label>
																		<input  id="instituteLabel" type="text"  className="form-control floating"  onChange = {(e) => this.employeeInstitution(e)}  />
																	</div>
																</div>
																 <div className="col-md-6">
																	<div className="form-group">
																	<label >Year</label>
																		<input id="instituteLabel" type="text"  className="form-control floating" onChange = {(e) => this.employeeYear(e)}/>
																		</div>
																   </div>
						
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Degree</label>
																		<input id="instituteLabel" type="text" className="form-control floating" onChange = {(e) => this.employeeDegree(e)} />
																		</div>
																</div>
													         </div>
														</div>
													</div>
								
												</div>
											<div className="submit-section">
													<div id="editBtn" className="btn btn-secondary submit-btn"  onClick={()=>this.addEmployeeEducation()}>Update</div>
												</div>
											</form>
										</div>
										:null}
									<div className="add-more">
													<div id="addMore" href="javascript:void(0);" className="text-decoration none ml-3 p-3" onClick={()=>this.addFunction()}><i className="fa fa-plus-circle"></i> Add More</div>
												</div>
									</div>

								</div>
							</div>
							{/* <!-- /Education Modal --> */}
							{/* <!-- Experience Modal --> */}
							<div id="experience_info" className="modal custom-modal fade" role="dialog">
								<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Experience Details</h5>
											<button type="button" className="close mr-1 mt-1 " data-dismiss="modal" aria-label="Close">
											<i  id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
											</button>
										</div>
										<div className="modal-body">
											<form>
												<div className="form-scroll">
													<div className="card">
														<div className="card-body">
															<h3 className="card-title">Experience Details <a href="javascript:void(0);" className="delete-icon"><i className="fa fa-trash-o"></i></a></h3>
															<div className="row">
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Organisation Name</label>
																		<input type="text" className="form-control floating" value={this.state.editExpName} onChange = {(e) => this.handleOrganisationName(e)}/>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group ">
																	<label className="focus-label">Location</label>
																	<input type="text" className="form-control floating" value={this.state.editLocation} onChange = {(e) => this.handleLocation(e)}/>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group">
																	<label>Job Position</label>
																		<input type="text" className="form-control floating" value={this.state.editPosition} onChange = {(e) => this.handlePosition(e)} />
																		
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group">
																	<label >Period From</label>
																		<div className="cal-icon">
																		<DatePicker id="datepicker3"
																	 selected={this.state.fromDate}
																	onChange={this.handlefromDate}
																	/>
																	</div>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group">
																	<label className="focus-label">Period To</label>
																		<div className="cal-icon">
																		<DatePicker id="datepicker3"
																	 selected={this.state.toDate}
																	onChange={this.handletoDate}
																	/>
																		</div>
																		</div>
																</div>

																<div className="col-md-6">
																	<div className="form-group">
																	<label>Skills</label>
																		<input value={this.state.editOrgSkills} type="text" className="form-control floating datetimepicker"  onChange = {(e) => this.handleOrgSkills(e)} />
																	</div>
																</div>
																<div className="col-md-12">
																	<div className="form-group form-focus">
																	<label>Professional Summary</label>
																			<input type="text" value={this.state.editSummary} className="form-control floating datetimepicker" onChange = {(e) => this.handleSummary(e)} />
																	</div>
																</div>
												</div>
							                  </div>
													</div>
												</div>
												<div className="submit-section">
												<div type="submit" id="editBtn"  className="btn btn-secondary submit-btn"  onClick={this.editProfile} >Update</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				// </div>
			// </div>
			);
			}
			}
			export default Profile;