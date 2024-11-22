<?php
	require('../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$data['Post'] = (isset($_POST['data']) ? $_POST['data']:'');
	/* Call classes needed */
	$Settings = new Settings();

	/* Check if user is logged in */
	$data['isLoggedIn'] = (isset($_SESSION['SESS_MID']) ? 1:0);

	/* Check if user is logged in and if MW2 player level session is not set or empty */
	$data['MW2_Level'] = getMemberOption ('MW2_Level', MW2_Level);
	$data['MW2_RollSettings'] = getMemberOption ('MW2_RollSettings', []);
	$data['TotalClasses'] = getconfig ('Cached_MW2_Class_Count');

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings(['Game_ID'=> MW2_Game_ID]);

  	echo json_encode($data);
	exit();
?>
