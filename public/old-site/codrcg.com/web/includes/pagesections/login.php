<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>
<form id="loginForm" name="loginForm" method="post" action="includes/_fw/send/login-exec.php" autocomplete="off">
	<div class="row">
		<div class="input-field col m4 offset-m2">
	    	<input name="login" id="login" type="text" class="validate">
	      	<label class='active' for="login">Email or Username</label>
		</div>
		<div class="input-field col m4">
	    	<input name="password" id="password" type="password" class="validate">
	      	<label class='active' for="password">Password</label>
		</div>
	</div>
	<div class="row">
		<div class="input-field col m2 offset-m2">
			<a href="forgotpass" class="smallText">Forgot Password?</a>
		</div>
		<div class="input-field col m4">
			<button id="loginsumbitbtn" class="btn btn-default btn-inverse btn-sm"><span class="glyphicon glyphicon-log-in"></span> Login</button> or 
			<a id="registerlink" href="register" class="btn btn-default btn-inverse btn-sm"><span class="glyphicon glyphicon-registration-mark"></span> Register</a>
		</div>
	</div>
</form>