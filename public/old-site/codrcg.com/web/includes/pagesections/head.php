<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>
	<meta name="robots" content="index, follow" >
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">
  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="android-touch-icon" href="apple-touch-icon.png">
    <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
	<?php
		echo minify_builder(
				array(
					'BASE'=>'assets',
					'files'=>array(
						'lib/font-awesome/css/font-awesome.css',
						'css/framework.css',
						'css/main.css',
						'lib/smart-banner/smart-app-banner.css'
					)
				)
		);

		echo minify_builder(
				array(
					'BASE'=>'assets',
					'files'=>array(
						'scripts/jquery-2.2.4.min.js',
						'lib/materializecss/js/materialize.min.js',
						'scripts/framework.js',
						'lib/modernizr/modernizr.js',
						'lib/smart-banner/smart-app-banner.js',
						'scripts/main.js'
					)
				)
		);
	?>
	<?php require( 'includes/pagesections/ads/page_level.php' ); ?>

	<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
		<a href="http://codrcg.com" itemprop="url">
			<span itemprop="title">Home</span>
		</a> <?php echo($_SERVER['REQUEST_URI'] != '/' ? '›' : ''); ?>
	</div>
