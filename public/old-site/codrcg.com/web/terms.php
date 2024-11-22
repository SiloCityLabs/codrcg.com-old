<?php
	require ('includes/includes.php');
	ob_start ("sanitize_page");
	new Session(['ALL']);
	$seoArr['title'] = 'Terms And Conditions - '.SITE_NAME;
	$seoArr['desc'] = 'This is the terms and conditions for codrcg.';
	$seoArr['keywords'] = 'call of duty, cod, rcg, codrcg, cod rcg, terms and conditions';
	$seoArr['url'] = "http://".SYS_URL_PATH."/terms";
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php require ('includes/pagesections/terms.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>