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

	/* Check if user is logged in and if MW3 player level session is not set or empty */
	$data['MW3_Level'] = getMemberOption ('MW3_Level', MW3_Level);
	$data['MW3_RollSettings'] = getMemberOption ('MW3_RollSettings', []);
	$data['TotalClasses'] = getconfig ('Cached_MW3_Class_Count');

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings(['Game_ID'=> MW3_Game_ID]);

  	echo json_encode($data);
	exit();
?>
