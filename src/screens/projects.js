import React from 'react';
import '../assets/js/app.js';
import Side from './sidebar';
import Nav from './nav';
import Moment from 'react-moment';
import Images from '../images';
import '../screens/projects.css'
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage,employeeId;
var empName,empAddress,empPhone,projectData;
class Projects extends React.Component {
	constructor(props)
	{    super(props);
		this.state = {
			projectName1:'',
			array1:[]
			}
		// this.editProfile = this.editProfile.bind(this);
	}

	componentDidMount(){
	 this.getProjects();
	}
	getProjects(){
		let dataarray = []
		fetch('http://34.231.95.57:4142/employee/getEmpProjects', {
                    method: 'POST',
                    body: JSON.stringify({
                        empId:employeeId
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(responseData=>responseData.json())
                .then(response => {
					console.log("Project +++"+JSON.stringify(response))
					projectData=response.projects
					console.log("array===",projectData)
					for (let i = 0; i < projectData.projects.length; i++) {
		
							dataarray.push({
								deadline: projectData.projects[i].deadline,
								projectName1:projectData.projects[i]._id.projectName,
						        description:projectData.projects[i]._id.description,
						        status:projectData.projects[i]._id.status,
							})
						}
					
					this.setState({array1:dataarray});
					
				})
      
	}
    render(){
		employeeId=localStorage.getItem("EmpId");
        empImage=localStorage.getItem("EmployeeImage");
        return(
            <div >
		
			{/* <!-- Header --> */}
            <Nav/>
			{/* <!-- /Header --> */}
			
			{/* <!-- Sidebar --> */}
			<Side/>
			{/* <!-- /Sidebar --> */}
			
			{/* <!-- Page Wrapper --> */}
            <div class="page-wrapper bg-light">
			
				{/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Projects</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item active">Projects</li>
								</ul>
							</div>
							<div class="col-auto float-right ml-auto">
								{/* <a href="#" class="btn bg-secondary text-white" data-toggle="modal" data-target="#create_project"><i class="fa fa-plus"></i> Create Project</a><br/> */}
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					{/* <!-- Search Filter --> */}
					<div class="row filter-row">
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
								<input type="text" class="form-control floating"/>
								<label class="focus-label">Project Name</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
							<input type="text" class="form-control floating"/>
							<label class="focus-label">Employee Name</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select id="selectDesignation"> 
									
									<option>Web Developer</option>
                                    <option>Sales Executive</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
								<label class="focus-label">Designation</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">  
							<a href="#" class="btn btn-success text-white btn-block ml-4"> Search </a>  
						</div>     
                    </div>
					{/* <!-- Search Filter --> */}
					
					<div class="row">
					{this.state.array1 != null && this.state.array1 != "" && this.state.array1 != [] ?
												this.state.array1.map(item =>
						<div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
							<div class="card bg-white shadow-sm border rounded ">
								<div class="card-body">
									<div class="dropdown dropdown-action profile-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i class="fa fa-pencil m-r-5"></i> Edit</a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
									
		<h4 class="project-title"><a href="project-view.html">{item.projectName1}</a></h4>
									<small class="block text-ellipsis m-b-15">
		<span class="text-xs"></span> <span class="text-muted">Status:{item.status}</span>
										{/* <span class="text-xs">9</span> <span class="text-muted">tasks completed</span> */}
									</small>
									<p class="text-muted">{item.description}
									</p>
									<div class="pro-deadline m-b-15">
										<div class="sub-title">
											Deadline:
										</div>
										<div class="text-muted">
											<Moment format="DD/MM/YYYY">{item.deadline}</Moment>
										</div>
							</div>
						  {/* <p class="m-b-5">Progress <span class="text-success float-right">70%</span></p>
							<div class="progress">
    <div class="progress-bar bg-success" >70%</div>
  </div> */}
								</div>
							</div>
							</div>):null}
                        </div>
				 </div>
				{/* <!-- /Page Content --> */}
				
				{/* <!-- Create Project Modal --> */}
				<div id="create_project" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Create Project</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Project Name</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Client</label>
												<select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Start Date</label>
												<div class="cal-icon">
													<input class="form-control datetimepicker" type="text"/>
												</div>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>End Date</label>
												<div class="cal-icon">
													<input class="form-control datetimepicker" type="text"/>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-3">
											<div class="form-group">
												<label>Rate</label>
												<input placeholder="$50" class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="form-group">
												<label>&nbsp;</label>
												<select class="select">
													<option>Hourly</option>
													<option>Fixed</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Priority</label>
												<select class="select">
													<option>High</option>
													<option>Medium</option>
													<option>Low</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Add Project Leader</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Team Leader</label>
												<div class="project-members">
													<a href="#" data-toggle="tooltip" title="Jeffery Lalor" class="avatar">
														<img src="assets/img/profiles/avatar-16.jpg" alt=""/>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Add Team</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Team Members</label>
												<div class="project-members">
													<a href="#" data-toggle="tooltip" title="John Doe" class="avatar">
														<img src="assets/img/profiles/avatar-16.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="Richard Miles" class="avatar">
														<img src="assets/img/profiles/avatar-09.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="John Smith" class="avatar">
														<img src="assets/img/profiles/avatar-10.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="Mike Litorus" class="avatar">
														<img src="assets/img/profiles/avatar-05.jpg" alt=""/>
													</a>
													<span class="all-team">+2</span>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Description</label>
										<textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
									</div>
									<div class="form-group">
										<label>Upload Files</label>
										<input class="form-control" type="file"/>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Create Project Modal --> */}
				
				{/* <!-- Edit Project Modal --> */}
				<div id="edit_project" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Project</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Project Name</label>
												<input class="form-control" value="Project Management" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Client</label>
												<select class="select">
													<option>Global Technologies</option>
													<option>Delta Infotech</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Start Date</label>
												<div class="cal-icon">
													<input class="form-control datetimepicker" type="text"/>
												</div>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>End Date</label>
												<div class="cal-icon">
													<input class="form-control datetimepicker" type="text"/>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-3">
											<div class="form-group">
												<label>Rate</label>
												<input placeholder="$50" class="form-control" value="$5000" type="text"/>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="form-group">
												<label>&nbsp;</label>
												<select class="select">
													<option>Hourly</option>
													<option selected>Fixed</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Priority</label>
												<select class="select">
													<option selected>High</option>
													<option>Medium</option>
													<option>Low</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Add Project Leader</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Team Leader</label>
												<div class="project-members">
													<a href="#" data-toggle="tooltip" title="Jeffery Lalor" class="avatar">
														<img src="assets/img/profiles/avatar-16.jpg" alt=""/>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>Add Team</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Team Members</label>
												<div class="project-members">
													<a href="#" data-toggle="tooltip" title="John Doe" class="avatar">
														<img src="assets/img/profiles/avatar-16.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="Richard Miles" class="avatar">
														<img src="assets/img/profiles/avatar-09.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="John Smith" class="avatar">
														<img src="assets/img/profiles/avatar-10.jpg" alt=""/>
													</a>
													<a href="#" data-toggle="tooltip" title="Mike Litorus" class="avatar">
														<img src="assets/img/profiles/avatar-05.jpg" alt=""/>
													</a>
													<span class="all-team">+2</span>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Description</label>
										<textarea rows="4" class="form-control" placeholder="Enter your message here"></textarea>
									</div>
									<div class="form-group">
										<label>Upload Files</label>
										<input class="form-control" type="file"/>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Edit Project Modal --> */}
				
				{/* <!-- Delete Project Modal --> */}
				<div class="modal custom-modal fade" id="delete_project" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete Project</h3>
									<p>Are you sure want to delete?</p>
								</div>
								<div class="modal-btn delete-action">
									<div class="row">
										<div class="col-6">
											<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
										</div>
										<div class="col-6">
											<a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Delete Project Modal --> */}
				
            </div>
			{/* <!-- /Page Wrapper --> */}
			
        </div>
		
		
        );
    }
}
export default Projects;