<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);
	$seoArr['title'] = MW_Title;
	$seoArr['image'] = MW_Image;
	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty 4 Modern Warfare. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['url'] = 'http://'.SYS_URL_PATH.'/'.MW_Folder;
?>
<!DOCTYPE html>
<html ng-app='MainApp' class="ng-scope" ng-controller='MainCtrl'>
	<head>
		<title><?php echo $seoArr['title']; ?></title>
		<meta name="description" content="<?php echo $seoArr['desc']; ?>">
		<meta name="keywords" content="">
		<?php
			echo COD_setSeoData ($seoArr);
			require ('../includes/pagesections/schema.php');
			require ('includes/pagesections/head.php');
		?>
	</head>
	<body>
		<?php require('includes/pagesections/menu.php'); ?>
		<div id="Wrapper" class="z-depth-2 topBorder-mw">
			<div class="row">
				<div class="col s12">
					Blank					
				</div>
			</div>
    	</div>
		<?php require('includes/pagesections/footer.php'); ?>
	</body>	
</html>