<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session([ 'ALL' ]);

	/* Initialized Needed Classes */
	$Classes = new Classes();

	$data['WW2_Level'] = getMemberOption ('WW2_Level', WW2_Level);
	$data['WW2_RollSettings'] = getMemberOption ('WW2_RollSettings', []);
	$data['WW2_DlcSettings'] = getMemberOption ('WW2_DlcSettings', []);
	$data['WW2_GunLevels'] = getMemberOption ('WW2_GunLevels', []);

	/* Fill the classes frame with weapons, perks and equipment */
  	$classData = rollClass($data,$data['WW2_Level']);

	/* Add class to the DB */
	$classArr = ['Game_ID'=> WW2_Game_ID,'Data'=>$classData];
	if(isset($_SESSION['SESS_MID'])){
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	
	$classData = $Classes->SetClass($classArr);
	
	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> WW2_Folder,'ID'=>$classData['ID']]);
	
	header("location: " . '/' . WW2_Folder . "/class/$classData[ID]");
	exit();
?>