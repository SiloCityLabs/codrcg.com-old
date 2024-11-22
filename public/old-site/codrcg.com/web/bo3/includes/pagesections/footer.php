<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

	<?php require('../includes/pagesections/_cod/settingsModal.php'); ?>
	<?php require('../includes/pagesections/_cod/dlcModal.php'); ?>
	<div class="row">
		<div id="footer" class="col-sm-12 col-md-12">
			<a href="http://silocitylabs.com">&copy; <?php echo date('Y'); ?> SiloCityLabs</a> |
			<a href="/changelog">Changelog</a> | 
			<a href="/aboutus">About Us</a> | 
			<a href="/contactus">Contact Us</a> | 
			<a href="/privacy">Privacy Policy</a> | 
			<a href="/buy-now">Buy This Website</a> | 
			<a href="/terms">Terms and Conditions</a>
		</div>
	</div>
	<?php echo getconfig('Tracking_Code'); ?>