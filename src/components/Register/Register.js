import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
	const [registeremail, setRegisterEmail ] = useState('')
	const [registerpass, setRegisterPass ] = useState('')
	const [registername, setRegisterName ] = useState('')

	const onNameChange = (event) =>{
		setRegisterName( event.target.value);
	}

	const onEmailChange = (event) => {
		setRegisterEmail( event.target.value);
	}
	const onPassChange = (event) => {
		setRegisterPass(event.target.value);
	}

	const onSubmitRegister = () => {
		const user = {
			name: registername,
			email: registeremail,
			password: registerpass
		}
		console.log(user)
	}
		return (
			<div>
				<article className="br3 ba dark-gray shadow-4 b--black-10 mt6 mb3 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 tc fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
				        <input 
				        	onChange = { onNameChange }
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
				        <input 
				        	onChange = { onEmailChange }
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
				        <input 
				        	onChange = {onPassChange }
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				    	<Link to="/">
				      <input 
				      	onClick={onSubmitRegister}
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib" type="submit" value="Register" /></Link>
				    </div>
				    <div className="lh-copy mt3">
				    </div>
				  </div>
				</main>
				</article>
				
			</div>
		)

}
export default Register;