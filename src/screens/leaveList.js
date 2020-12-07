import React from 'react';
import Moment from 'react-moment';
import '../App';
import Nav from './nav';
import Side from './sidebar';
import Images from '../images';
import '../screens/leaveList.css';
// import Images from "../image";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var dataLeave, fromStart, toEnd, diffInTime, diffInDays,leave2;
var sd, ed,empImage,esd,eed,employeeId;
class Leavelist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array1: [],
			idLeave:"",
			editModal:false,
			startDate: new Date(),
			editStartDate: new Date(),
			editEndDate: new Date(),
			endDate: new Date(),
			reason: '',
			diffDays: "0",
			valid:false,
		}
		this.getStateData = this.getStateData.bind(this);
		this.editLeave=this.editLeave.bind(this);
		this.deleteLeave=this.deleteLeave.bind(this);
		// this.handleEnd = this.handleEnd.bind(this);
	}
	componentDidMount() {
		console.log("component did mount")
		this.getEmpLeave();
	};
	getEmpLeave() {
		let dataarray = []
		fetch('http://34.231.95.57:4142/employee/getEmpLeaves', {
			method: 'POST',
			body: JSON.stringify({
				empId:employeeId
			}),
			headers: { 
				"Content-type": "application/json"
			}
		})
 
			.then(results => {
				return results.json();
			}).then(data => {
				for (let i = 0; i < data.allLeaves.length; i++) {
				// console.log("RESON VLUE===", data.allLeaves[0].reason)

					dataarray.push({
						Reason: data.allLeaves[i].reason,
						LeaveType: data.allLeaves[i].leaveType,
						From: data.allLeaves[i].from,
						To: data.allLeaves[i].to,
						NoOfDays: data.allLeaves[i].noOfDays,
						Status: data.allLeaves[i].status,
						leaveId: data.allLeaves[i].leaveId
					})
				}
				// console.log("arr data"+JSON.stringify(dataarray[0]));
				this.setState({ array1: dataarray });
			})

	}
	editFrom = date => {
		esd = date;
		this.setState({
			editStartDate: date
		});
	};
	editTo = date => {
		eed = date;
		this.setState({
			editEndDate: date
		});
	};
	handleChange = date => {
		sd = date;
		this.setState({
			startDate: date
		});
	};
	handleEnd = (date) => {
		console.log("DATE FROM DP ::: " + JSON.stringify(date));
		ed = date;
		this.setState({
			endDate: date
		});
		// this.setState({});
		this.calculateNoOfDays();
	};

	calculateNoOfDays() {
		// fromStart = this.state.startDate;
		// toEnd = this.state.endDate;
		// console.log("calculate function ==" + toEnd)
		console.log("start date value(calculate fn)==" + sd)
		console.log("end date value(calculate fn)==" + ed)
		console.log("end date (state)value==" + this.state.endDate)
		diffInTime = ed.getTime() - sd.getTime();
		diffInDays = (diffInTime / (1000 * 3600 * 24))+1;
		console.log("diff in days=====  " + Math.ceil(diffInDays))
		console.log("EMP SUCCESS dataLeave")
        this.setState({ diffDays: Math.ceil(diffInDays).toString() });
	}
	editLeaveType = (e) => {
		e.preventDefault();
		this.setState({ editLeaveType: e.target.value });
		console.log("Reason====" + this.state.leaveType)
	}

	handleLeaveType = (e) => {
		e.preventDefault();
		this.setState({ leaveType: e.target.value });
		console.log("Reason====" + this.state.leaveType)
	}

	handleEditReason = (e) => {
		e.preventDefault();
		this.setState({ editReason: e.target.value });
		console.log("Reason====" + this.state.editReason)
	}
	handleEditDays = (e) => {
		e.preventDefault();
		this.setState({ editDays: e.target.value });
		// console.log("Reason====" + this.state.editReason)
	}

    openModal=item=>{
		this.setState({
			leaveIdValue:item.leaveId,
			reasonValue:item.Reason,
			leaveTypeValue:item.LeaveType,
			fromValue:item.From,
			toValue:item.To,
			noOfDaysValue:item.NoOfDays,
		})
		localStorage.setItem('leaveid',this.state.leaveIdValue);
		console.log("item value reason===="+JSON.stringify(item.Reason))
		console.log("item value no of days ===="+this.state.noOfDaysValue)
		console.log("open modal function===="+this.state.editModal)
		this.setState({editModal:true})
	}
	handleReason = (e) => {
		e.preventDefault();
		this.setState({ leaveReason: e.target.value });
		// console.log("Reason====" + this.state.leaveReason)
	}
	openDelete=item=>{
		console.log("+++++++++++++++"+item.leaveId)
        this.setState({
			deleteLeaveIdValue:item.leaveId
		})
		console.log("delete leave id+++"+this.state.deleteLeaveIdValue);
		// this.deleteLeave();
	}
	

	getStateData() {
		console.log("Reason inside get statttttte====" + this.state.leaveReason)
		if(this.state.leaveReason==null||this.state.startDate==null||this.state.endDate==null||this.state.leaveType==null)
			 {this.setState({valid:true})}
		console.log("inside api start date==" + this.state.startDate)
		console.log("inside api end date==" + this.state.endDate)
		console.log("this.state.leaveReason" + this.state.leaveReason)
		fetch('http://34.231.95.57:4142/employee/applyForLeave', {
			method: 'POST',
			body: JSON.stringify({
				empId: employeeId,
				reason: this.state.leaveReason,
				from: this.state.startDate,
				to: this.state.endDate,
				// reason:this.state.editReason,
				// reason:this.state.leaveReason,
				// leaveReason:this.state.reason,
				leaveType: this.state.leaveType,
				noOfDays:this.state.diffDays,
			}),
			headers: {
				"access-control-allow-origin": "*",
				"Content-type": "application/json"
			}
		})
			.then(responsedata => responsedata.json())
			.then(emp => {

				if (emp.success) {
					dataLeave = emp.leave;
					console.log("end date (state)value==" + this.state.endDate)
					// var fromStart,toEnd,diffInTime,diffInDays;
					this.setState({
						
                        idLeave:dataLeave.leaveId,
						fromData: dataLeave.from,
						toData: dataLeave.to,
						reasonData: dataLeave.reason,
						leaveTypeData: dataLeave.leaveType,
						daysNumber:dataLeave.noOfDays
					})
					console.log("apply leave api==="+this.state.idLeave)
					
				}
				if(this.state.leaveReason!=null&&this.state.startDate!=null&&this.state.endDate!=null&&this.state.leaveType!=null)
					{
					if(emp.success == true)
					   {
						   window.location.reload(); 
					   }
					}

			})
			.catch(err => {
				console.log("ERROR====" + err)
			})
	}
	
	
	deleteLeave() {
		leave2=localStorage.getItem('leaveid');
		console.log("DeleteLeaveId 1++++++",leave2);
		console.log("DeleteLeaveId 2+++++"+this.state.deleteLeaveIdValue)
		fetch('http://34.231.95.57:4142/employee/editLeave', {
			method: 'POST',
			body: JSON.stringify({
				empId: employeeId,
				leaveId:this.state.deleteLeaveIdValue,
				status:'Deleted',
				// noOfDays:this.state.diffDays,
			}),
			headers: {
				"access-control-allow-origin": "*",
				"Content-type": "application/json"
			}
		})
			.then(responsedata => responsedata.json())
			.then(emp => {
				console.log("Response of delete  api====", JSON.stringify(emp));
				if(emp.success){
					window.location.reload();
				}
				})
			.catch(err => {
				console.log("ERROR====" + err)
			})
	}


	editLeave() {
		leave2=localStorage.getItem('leaveid');
		console.log("this.state.leaveReason  =  ",this.state.reasonValue)
		console.log("edit leave api==="+this.state.idLeave)
		fetch('http://34.231.95.57:4142/employee/editLeave', {
			method: 'POST',
			body: JSON.stringify({
				empId: employeeId,
				leaveId:leave2,
				reason: this.state.editReason,
				from: this.state.editStartDate,
				to: this.state.editEndDate,
				leaveType: this.state.editLeaveType,
				noOfDays:this.state.editDays,
			}),
			headers: {
				"access-control-allow-origin": "*",
				"Content-type": "application/json"
			}
		})
			.then(responsedata => responsedata.json())
			.then(emp => {
				console.log("Response of edit api====", JSON.stringify(emp));
				if(emp.success){
					window.location.reload();
				}
				})
			.catch(err => {
				console.log("ERROR====" + err)
			})
	}




	render() {
		// console.log("leave id in render"+)
		employeeId=localStorage.getItem("EmpId");
	    console.log("rederrrrederrr empId leave list===",employeeId)
		empImage=localStorage.getItem("EmployeeImage");
		// console.log("render2")
		// console.log("Image IN RENDER==", empImage)
		// console.log("INSIDE RENDER reason ====" + JSON.stringify(this.state.Reason));

		return (

			<div >

				{/* <!-- Header --> */}
				<Nav/>
				{/* <!-- /Header --> */}

				{/* <!-- Sidebar --> */}
				<Side/>
				{/* <!-- /Sidebar --> */}

				{/* <!-- Page Wrapper --> */}
				<div className="page-wrapper bg-light">

					{/* <!-- Page Content --> */}
					<div className="content container-fluid">

						{/* <!-- Page Header --> */}
                       
						

						<div className="page-header">
							<div className="row align-items-center">
								<div className="col">
									<h3 className="page-title">Leaves</h3>
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link className="text-decoration-none" to="/employee">Dashboard</Link></li>
										<li className="breadcrumb-item active">Leaves</li>
									</ul>
								</div>
								<div className="col-auto float-right ml-auto">
									<a id="addBtn" className="btn add-btn btn-custom text-white bg-primary" data-toggle="modal" data-target="#add_leave"><i className="fa fa-plus"></i> Add Leave Application</a>
								</div>
							</div>
						</div>
						<div class="card-deck">
  <div class="card bg-white shadow-sm">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-address-card white fa-lg mr-2" aria-hidden="true"></i>
												Annual Leaves</div>
	<div class="card-body">
	<center>
     <h4 class="card-title">12</h4>
    </center>
	</div>
  </div>
  <div class="card bg-white shadow-sm">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-ambulance white fa-lg mr-2" aria-hidden="true"></i>
												Medical Leaves</div>
	<div class="card-body">
		<center>
     <h4 class="card-title">8</h4>
    </center>
	</div>
  </div>
  <div class="card bg-white shadow-sm">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-random white fa-lg mr-2" aria-hidden="true"></i>
												Casual Leaves</div>
	<div class="card-body">
	<center>
     <h4 class="card-title">4</h4>
    </center>
	</div>
  </div>
  <div class="card bg-white shadow-sm">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-thumbs-o-up white fa-lg mr-2" aria-hidden="true"></i>
												Remaining Leaves</div>
	<div class="card-body">
	<center>
     <h4 class="card-title">0</h4>
    </center>
	</div>
  </div>
</div>
						<div className="row">
							<div className="col-md-12">
								<div className="table-responsive">
									<table className="table table-striped custom-table mb-0 datatable">
										<thead>
											<tr id="tableRow" className="text-white">
												<th>Leave Type</th>
												<th>From</th>
												<th>To</th>
												<th>No of Days</th>
												<th>Reason</th>
												<th >Status</th>
												<th className="text-right" >Action</th>
											</tr>
										</thead>
										<tbody>
											{this.state.array1 != null && this.state.array1 != "" && this.state.array1 != [] ?
												this.state.array1.map(item =>
                                                  <tr>
														<td >{item.LeaveType}</td>
														<td><Moment format="DD/MM/YYYY">{item.From}</Moment></td>
														<td><Moment format="DD/MM/YYYY">{item.To}</Moment></td>
														<td>{item.NoOfDays}</td>
														<td>{item.Reason}</td>
														<td>{item.Status}</td>
														<td className="text-right">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<div id="pensil" className="dropdown-item" onClick={() => this.openModal(item)}  data-toggle="modal" data-target="#edit_leave"><i  className="fa fa-pencil m-r-5"></i> Edit</div>
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve" onClick={() => this.openDelete(item)}  ><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>

													</tr>
												)
												:
												<div id="loadingGif">
												<img width="80" height="80" src='https://thumbs.gfycat.com/ConventionalHarmlessCapybara-max-1mb.gif' />
												</div>
											}
										</tbody>

									</table>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Page Content --> */}

					{/* <!-- Add Leave Modal --> */}
					<div id="add_leave" className="modal custom-modal fade" role="dialog">
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Add Leave Application</h5>
									<button type="button" className="close mr-1 mt-1" data-dismiss="modal" aria-label="Close">
										<i id="closeIcon" className="fa fa-times " aria-hidden="true"></i>
									</button>
								</div>
								<div className="modal-body">
									<form>
										<div className="form-group">
											<label>Leave Type <span className="text-danger">*</span></label><br />
											<select placeholder="select leave type
				                 " className="select col-md-12" onChange={(e) => this.handleLeaveType(e)}>
												{/* <option s0elected>Select Leave Type</option> */}
												<option>Casual Leave</option>
												<option>Medical Leave</option>
											</select>
										</div>
										<div className="form-row">
											<div className="col">
												<label>From <span className="text-danger">*</span></label>
												<div id="calanderIcon" className="cal-icon">
													<DatePicker id="datePicker"
														selected={this.state.startDate}
														onChange={this.handleChange}
											        />
													{/* <input className="form-control datetimepicker" type="text"/> */}
												</div>
											</div>
											<div className="col col-sm-6">
												<label>To <span className="text-danger">*</span></label>
												<div className="cal-icon">
													<DatePicker id="datePicker"
														// onSelect={this.handleEnd} 
														selected={this.state.endDate}
														onChange={this.handleEnd}/>
												</div>
											</div>
										</div>
										<div className="form-row mb-4 pt-2">
											<div className="col">
												<label>Number of days </label>
												<input className="form-control" value={this.state.diffDays} type="text" />
											</div>
											<div className="col">
												<label>Leave Credits </label>
												<input className="form-control" type="text" />
											</div>
										</div>
										<div className="form-group">
											<label>Remaining Leaves </label>
											<input className="form-control" type="text" />
										</div>
										<div className="form-group">
											<label>Leave Reason <span className="text-danger">*</span></label>
											<input   className="form-control" type="text" onChange={(e) => this.handleReason(e)} />
											{/* <textarea rows="4" className="form-control" onChange = {(e) => this.handleReason(e)}></textarea> */}
										</div>
										<div className="submit-section">
										{this.state.valid==true?<p id="inputValid"><i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please fill out all the fields</p>:null}
				{/* <div type="submit" id="editBtn"  className="btn btn-secondary submit-btn"  onClick={this.editProfile} >Edit</div> */}
											<div id="editBtn" className="btn btn-secondary submit-btn" onClick={this.getStateData}>Submit</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Add Leave Modal --> */}
					{/* <!-SubmitLeave Modal --> */}

					{this.state.editModal ?       
					<div id="edit_leave" className="modal custom-modal fade" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Edit Leave</h5>
								<button type="button" className="close mr-1 mt-1" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label>Leave Type <span className="text-danger">*</span></label><br/>
										<select  className="select col-md-11" className="select" onChange={(e) => this.editLeaveType(e)} >
										<option selected >{this.state.leaveTypeValue}</option>
										{this.state.leaveTypeValue=='Medical Leave'? <option>Casual Leave</option>: <option>Medical Leave</option>}
										</select>
									</div>
									<div className="form-row mb-4">
											<div className="col">
												<label>From <span className="text-danger">*</span></label>
												<div id="calanderIcon" className="cal-icon">
													<DatePicker id="datePicker"
													    placeholder={this.fromValue}
														selected={this.state.editStartDate}
														onChange={this.editFrom}
													/>
													{/* <input className="form-control datetimepicker" type="text"/> */}
												</div>
											</div>
											<div className="col">
												<label>To <span className="text-danger">*</span></label>
												<div className="cal-icon">
													<DatePicker id="datePicker" 
													    placeholder={this.state.toValue}
														selected={this.state.editEndDate}
														onChange={this.editTo}

													/>
												</div>
											</div>
										</div>
										
									<div className="form-group">
										<label>Number of days <span className="text-danger">*</span></label>
										<input className="form-control" readonly type="text" placeholder={this.state.noOfDaysValue} onChange={(e) => this.handleEditDays(e)}/>
									</div>
									<div className="form-group">
										<label>Remaining Leaves <span className="text-danger">*</span></label>
										<input className="form-control" readonly  type="text" />
									</div>
									<div className="form-group">
									<label>Leave Reason <span className="text-danger">*</span></label>
									<input className="form-control" placeholder={this.state.reasonValue} onChange={(e) => this.handleEditReason(e)} ></input>
									</div>
									<div className="submit-section">
										<div id="editLeaveId" className="btn btn-secondary text-white submit-btn" onClick={this.editLeave}>Save</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				 : null} 
					{/* <!-- /Edit Leave Modal --> */}

					{/* <!-- Delete Leave Modal --> */}
					<div className="modal custom-modal fade" id="delete_approve" role="dialog">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-body">
									<div className="form-header">
										<h3>Delete Leave</h3>
										<p>Are you sure you want to Delete this leave?</p>
									</div>
									<div className="modal-btn delete-action">
										<div className="row">
										    <div className="col-6">
												<a href="javascript:void(0);" className="btn btn-secondary text-white continue-btn" onClick={()=>this.deleteLeave()}>Delete</a>
											</div>
									
											<div className="col-6">
												<a href="javascript:void(0);" data-dismiss="modal" className="btn btn-secondary text-white cancel-btn">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Delete Leave Modal --> */}

				</div>
				{/* <!-- /Page Wrapper --> */}

			</div>
		);
	}
}
export default Leavelist;