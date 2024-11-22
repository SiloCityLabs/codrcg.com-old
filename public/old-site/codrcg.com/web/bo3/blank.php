<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);
?>
<!DOCTYPE html>
<html ng-app='MainApp' class="ng-scope" ng-controller='MainCtrl'>
	<head>
		<title><?php echo SITE_NAME; ?></title>
		<meta name="description" content="">
		<meta name="keywords" content="">
		<?php require('includes/pagesections/head.php'); ?>
	</head>
	<body>
		<?php require('includes/pagesections/menu.php'); ?>
		<div id="Wrapper" class="z-depth-2 topBorder-bo3">
			<div class="row">
				<div class="col s12">
					Blank					
				</div>
			</div>
    	</div>
		<?php require('includes/pagesections/footer.php'); ?>
	</body>	
</html>