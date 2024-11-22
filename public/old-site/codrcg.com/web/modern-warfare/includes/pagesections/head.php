<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>
	<meta name="robots" content="index, follow" >
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">
  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="apple-touch-icon" href="/<?php echo MW_Folder; ?>/apple-touch-icon.png">
    <link rel="android-touch-icon" href="/<?php echo MW_Folder; ?>/apple-touch-icon.png">
    <meta name="google-play-app" content="app-id=com.techreanimate.blackops3">
    <link rel='shortcut icon' href='/<?php echo MW_Folder; ?>/favicon.ico' type='image/x-icon' />

	<?php
		echo minify_builder([
			'BASE'=>'/',
			'files'=>[
				'assets/lib/font-awesome/css/font-awesome.css',
				'assets/css/framework.css',
				'assets/css/'.MW_Folder.'/main.css',
				'assets/lib/smart-banner/smart-app-banner.css'
			]
		]);

		echo minify_builder([
			'BASE'=>'/',
			'files'=>[
				'assets/scripts/jquery-2.2.4.min.js',
				'assets/lib/materializecss/js/materialize.min.js',
				'assets/scripts/framework.js',
				'assets/scripts/angular/angular.min.js',
				'assets/scripts/angular/angular-sanitize.min.js',
				'assets/scripts/angular/angular-animate.min.js',
				'assets/scripts/angular/angular-aria.min.js',
				'assets/lib/clipboard/clipboard.js',
				'assets/lib/ngclipboard/ngclipboard.js',
				MW_Folder .'/assets/scripts/_app/app.js',
				'assets/scripts/_app/BootstrapMediaQuieres.js',
				'assets/scripts/_app/filters/filters.js',
				MW_Folder .'/assets/scripts/_app/main/main.controller.js',
				MW_Folder .'/assets/scripts/_app/main/main.service.js',
				'assets/lib/smart-banner/smart-app-banner.js',
				'assets/scripts/main.js'
			]
		]);
?>
<?php require( '../includes/pagesections/ads/page_level.php' ); ?>
<?php require('includes/pagesections/schema.php'); ?>
<!-- SEO breadcrubs -->
<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
	<a href="http://codrcg.com" itemprop="url">
		<span itemprop="title">Home</span>
	</a> ›
</div>
<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
	<a href="http://codrcg.com/<?php echo MW_Folder; ?>" itemprop="url">
		<span itemprop="title">Modern Warfare RCG</span>
	</a> <?php echo ($_SERVER['REQUEST_URI'] != '/'.MW_Folder.'/' ? '›':''); ?>
</div>

