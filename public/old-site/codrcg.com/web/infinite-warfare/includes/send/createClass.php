<?php
	require( '../../../includes/includes.php' );
	require('../includes.php' );
	ob_start();
	new Session([ 'ALL' ]);

	/* Initialized Needed Classes */
	$ClassFrame = new ClassFrame();
	$Classes = new Classes();

	$data['IW_Level'] = getMemberOption ('IW_Level', IW_Level);
	$data['IW_RollSettings'] = getMemberOption ('IW_RollSettings', []);
	$data['IW_DlcSettings'] = getMemberOption ('IW_DlcSettings', []);
	$data['IW_GunLevels'] = getMemberOption ('IW_GunLevels', []);

	/* Get the classes frame */
	while(true){
		$data['frame'] = $ClassFrame->Roll(['Level'=>$_SESSION['IW_Level'],'Roll'=>$_SESSION['IW_RollSettings']]);
		if(is_array($data['frame'])){
			break;
		}
	}

	/* Fill the classes frame with weapons, perks and equipment */
  	$classData = rollClass($data['frame'],$_SESSION['IW_Level']);
	$classData['Frame'] = $data['frame'];

	/* Add class to the DB */
	$classArr = ['Game_ID'=> IW_Game_ID,'Data'=>$classData];
	if(isset($_SESSION['SESS_MID'])){
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> IW_Folder,'ID'=>$classData['ID']]);

	header("location: " . '/' . IW_Folder . "/class/$classData[ID]");
	exit();
?>