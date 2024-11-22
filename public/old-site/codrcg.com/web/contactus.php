<?php
	require ('includes/includes.php');
	ob_start ("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Contact Us - '.SITE_NAME;
	$seoArr['desc'] = 'This is the contact us page for codrcg.';
	$seoArr['keywords'] = 'call of duty, cod, rcg, codrcg, cod rcg, contact us';
	$seoArr['url'] = "http://".SYS_URL_PATH."/contactus";
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
<?php
	echo minify_builder ([
		'JS_ATTR' => 'defer',
		'BASE' => 'assets',
		'files' => [
			'scripts/angular/angular.min.js',
			'scripts/angular/angular-sanitize.min.js',
			'scripts/angular/angular-animate.min.js',
			'scripts/_app/app.js', 'scripts/_app/BootstrapMediaQuieres.js',
			'scripts/_app/filters/filters.js',
			'scripts/_app/pagination/pag.controller.js',
			'scripts/_app/pagination/pag.service.js'
		]
	]);
?>
<?php require ('includes/pagesections/ads/Ad_top.php'); ?>
	<div class="row" ng-app='MainApp' class="ng-scope">
		<div class="col s12">
			<h1 class="text-center">Contact Us</h1>
			<div class="divider"></div>
			<div class="row">
				<div class="col m6">
					<p>We enjoy hearing from our users!</p>
					<p>Message us with any issues or features you would like to see added to our site.</p>
					<p>We always do our best to respond to all the emails.</p>
					<div class="divider"></div>
					<h4>Connect with us</h4>
					<a href="https://www.facebook.com/SiloCityLabs" class="btn btn-default"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/silocitylabs" class="btn btn-default"><i class="fa fa-twitter"></i></a>
					<a href="https://plus.google.com/107086389506869616559" class="btn btn-default"><i class="fa fa-google-plus"></i></a>
					<a href="https://www.youtube.com/user/techreanimate" class="btn btn-default"><i class="fa fa-youtube-play"></i></a>
				</div>
				<div class="col m6">
					<form name="myForm" role='form'>
						<div class="col s6 form-group" ng-class='{"has-error": myForm.Name.$invalid && myForm.Name.$dirty}'>
							<label>Name <span class="text-danger">*</span></label>
							<input type="text" class="form-control" name="Name" ng-model='myCtrl.data.Name' required maxlength='40'>
						</div>
						<div class="col s6 form-group" ng-class='{"has-error": myForm.Email.$invalid && myForm.Email.$dirty}'>
							<label>Email <span class="text-danger">*</span></label>
							<input type="email" class="form-control" name="Email" ng-model='myCtrl.data.Email' required>
						</div>
						<div class="col s12 form-group" ng-class='{"has-error": myForm.Message.$invalid && myForm.Message.$dirty}'>
							<label>Message <span class="text-danger">*</span></label>
							<textarea class="form-control noresize" name="Message" ng-model='myCtrl.data.Message' required rows="10" maxlength='200'></textarea>
						</div>
						<div class="col s12">
							<button class="btn btn-default btn-block" ng-disabled='myForm.$invalid' ng-click='myCtrl.sendContactInfo();'>
								<span ng-show='myForm.$valid'><i class="fa fa-send"></i> Send Message</span>
								<span ng-show='myForm.$invalid'>Fill out form</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>