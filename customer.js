Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@ajaybhulawat 
ajaybhulawat
/
buhl
Private
1
00
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Settings
buhl/customer.js /
@ajaybhulawat
ajaybhulawat customer.js
Latest commit 6580abb 6 days ago
 History
 1 contributor
67 lines (65 sloc)  2.25 KB
  
import React, { Component } from 'react';
import {Input,Button,Modal} from 'react-bootstrap';
import { Form } from 'formsy-react';
import MyInput from './Input';
class CustomerComponent extends Component {
	constructor(props) {
		super();
		this.onChange 		= this.onChange.bind(this,{});	
		this.state = {			
			showModel:true,
			canSubmit: false,
			cust_name:'ajay'
		};
		this.preview_flag   		= 0;	
	}
	componentWillReceiveProps(newProps) {		
		  this.setState({ showModel: true});
	}	
   	componentDidMount() {		    		
		
   	}
   	componentWillMount() {
		PStore.addChangeListener(this.onChange);
	}
   	componentWillUnmount() {		
    	PStore.removeChangeListener(this.onChange);   	
  	}
	hideModel() {
		this.setState({ showModel: false });
	}
	setdata(val,e){
		e.preventDefault();
		var tmpData 			=  UStore.getcustomer();		
		var dataParams          = {};
		dataParams              = this.refs.cust_prompt.getModel();
		Pactions.setcustomer(dataParams);		
	}
   enableButton() {
      this.setState({ canSubmit: true });	 
   }
   disableButton() {
      this.setState({ canSubmit: false });
   }
	render() { 		
		return (<Modal className="cust_dtl"  show={this.state.showModel} onHide={this.hideModel.bind(this)} id="cust_pmt" backdrop="static" keyboard={false} >
	              <Form  className="form-horizontal" ref="cust_prompt" onSubmit={this.submit} onValid={this.enableButton.bind(this)}  onInvalid={this.disableButton.bind(this)} >
		              <Modal.Header closeButton>
		                <Modal.Title><b>Customer Prompt</b></Modal.Title>
		              </Modal.Header>
		              <Modal.Body>
						<div className="confirmlist">
							<p>Hi, How are you.</p>						
						</div>
						{(this.preview_flag ==1)?<Client cdata={this.props.cdata}  />:''}						
						<div className="clearfix"></div> 
		              </Modal.Body>
		              <Modal.Footer>
						<Button onClick={this.setdata.bind(this,1)} name="btnyes" id="btnyes" key='yes' type="button"  className="btn btn-primary" autoFocus={true}>Customer Ok</Button>
						<Button onClick={this.setdata.bind(this,0)}  key='no' type="button"  className="btn btn-primary" >No</Button>
						
		              </Modal.Footer>
	             </Form>
	            </Modal>
	        );
	}
}
export default CustomerComponent;
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
