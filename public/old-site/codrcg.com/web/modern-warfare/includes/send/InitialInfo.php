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

	/* Check if user is logged in and if MW player level session is not set or empty */
	$data['MW_Level'] = getMemberOption ('MW_Level', MW_Level);
	$data['MW_RollSettings'] = getMemberOption ('MW_RollSettings', []);
	$data['MW_DlcSettings'] = getMemberOption('MW_DlcSettings', []);
	$data['TotalClasses'] = getconfig ('Cached_MW_Class_Count');

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings(['Game_ID'=> MW_Game_ID]);
	/* Get DLC List */
	$data['DLC'] = $Settings->GetDLCSettings (['Game_ID' => MW_Game_ID]);

  	echo json_encode($data);
	exit();
?>
