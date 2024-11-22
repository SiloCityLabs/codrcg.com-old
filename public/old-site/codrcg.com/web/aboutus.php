<?php
	require ('includes/includes.php');
	ob_start ("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'About Us - '.SITE_NAME;
	$seoArr['desc'] = 'This is the about us for codrcg.';
	$seoArr['keywords'] = 'call of duty, cod, rcg, codrcg, cod rcg, about us';
	$seoArr['url'] = "http://".SYS_URL_PATH."/aboutus";
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div class="row">
		<div class="col s12">
			<h1 class="text-center">About Us</h1>
			<div class="divider"></div>
			<h3>Our Team</h3>
			<?php require ('includes/pagesections/aboutus/team.php'); ?>
			<h3>Why we started this site?</h3>
			<p>
				Do you enjoy playing Call Of Duty? We all know that after a while it can get a little repetative, so we thought why not make a website that will randomly create classes to
				add variety and make it more fun and challenging for everyone. Plus who knows, you might even discover a new class setup that you think is pretty awesome.
			</p>
		</div>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>