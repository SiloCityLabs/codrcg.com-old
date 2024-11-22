<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>
<form id="regForm" onload="document.getElementById('captcha-form').focus()">
	<div id="register-general">
		<div class="row section">
			<div class="input-field col m4">
		    	<input name="data['uname']" id="Uname" type="text" class="validate">
		      	<label class='active' for="Uname">Username</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['fname']" id="Fname" type="text" class="validate">
		      	<label class='active' for="Fname">First Name</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['lname']" id="Lname" type="text" class="validate">
		      	<label class='active' for="Lname">Last Name</label>
    		</div>
		</div>
		<div class='divider'></div>
		<div class="row section">
			<div class="input-field col m4">
		    	<input name="data['email']" id="Email" type="email" class="validate">
		      	<label class='active' for="Email">Email</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['password']" id="password" type="password" class="validate">
		      	<label class='active' for="password">Password</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['c_password']"  id="c_password" type="password" class="validate">
		      	<label class='active' for="c_password">Confirm Password</label>
    		</div>
		</div>
	</div>
	<div class="text-center section"><button class="btn red" id="registerBtn" onclick="register();"><i class="fa fa-edit"></i> Register</button></div>
</form>