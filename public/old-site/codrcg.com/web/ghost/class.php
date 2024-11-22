<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	if (!empty($_GET['ID'])) {
		$classID = $_GET['ID'];
		require_once ('../includes/send/class/getClassInfo.php');
	} else {
		header("location: " . '/' . GH_Folder . "/includes/send/createClass.php");
		exit();
	}

	$seoArr['title'] = 'Class - '.GH_Title;
	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty: Ghost. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['keywords'] = 'Call of duty, random class generator, multiplayer, call of duty random class generator, COD Ghost RCG,
		ghost, ghost random class generator, infinity ward';
	$seoArr['url'] = 'https://'.SYS_URL_PATH.'/'.GH_Folder.'/class/'.$classID;

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Random Class</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div class="row" ng-init="ClassID = <?php echo $classID; ?>; Join_ID = '<?php echo $class['Join_ID']; ?>';">
		<div class="col s12">
			<?php require ('includes/pagesections/class.php'); ?>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>