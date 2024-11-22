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

	/* Get all user data for the rcg */
	$data['GH_Level'] = getMemberOption('GH_Level',10);
	$data['GH_RollSettings'] = getMemberOption('GH_RollSettings', []);

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings (['Game_ID' => GH_Game_ID]);

	$data['Session'] = $_SESSION;
  	echo json_encode($data);
	exit();
?>