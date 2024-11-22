<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>
<h2>
	<?php echo (isset($member) ? "Hello, ".$clean->UserOutput($member['Uname']):''); ?>
</h2>
<br>
<form id="updateForm">
	<div id="myaccount-general">
		<div class="row section">
			<div class="input-field col m6">
		    	<input name="data['fname']" data-original-val="<?php echo (isset($member) ? $member['Fname']:''); ?>" value="<?php echo (isset($member) ? $member['Fname']:''); ?>" id="Fname" type="text" class="validate">
		      	<label class='active' for="Fname">First Name</label>
    		</div>
			<div class="input-field col m6">
		    	<input name="data['lname']" data-original-val="<?php echo (isset($member) ? $member['Lname']:''); ?>" value="<?php echo (isset($member) ? $member['Lname']:''); ?>" id="Lname" type="text" class="validate">
		      	<label class='active' for="Lname">Last Name</label>
    		</div>
		</div>
		<div class='divider'></div>
		<div class="row section">
			<div class="input-field col m4">
		    	<input name="data['email']" data-original-val="<?php echo (isset($member) ? $member['Email']:''); ?>" value="<?php echo (isset($member) ? $member['Email']:''); ?>" id="Email" type="email" class="validate">
		      	<label class='active' for="Email">Email</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['password']" data-original-val="" id="password" type="password" class="validate">
		      	<label class='active' for="password">New Password</label>
    		</div>
			<div class="input-field col m4">
		    	<input name="data['c_password']" data-original-val="" id="c_password" type="password" class="validate">
		      	<label class='active' for="c_password">Confirm Password</label>
    		</div>
		</div>
		<div class='divider'></div>
		<div class='row'>
			<div class="input-field offset-m3 col m6">
		    	<input name="data['current_pass']" data-original-val="" id="current_pass" type="password" class="validate" class="empty">
		      	<label class='active' for="current_pass">Current Password</label>
    		</div>
		</div>
	</div>
	<div class="text-center section"><button class="btn btn-default" id="updateBtn" onclick="saveMyaccount();"><i class="fa fa-edit"></i> Update</button></div>
</form>