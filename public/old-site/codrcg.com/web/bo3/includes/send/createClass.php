<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session([ 'ALL' ]);

	/* Initialized Needed Classes */
	$ClassFrame = new ClassFrame();
	$Classes = new Classes();

	$data['BO3_Level'] = getMemberOption ('BO3_Level', BO3_Level);
	$data['BO3_RollSettings'] = getMemberOption ('BO3_RollSettings', []);
	$data['BO3_DlcSettings'] = getMemberOption ('BO3_DlcSettings', []);
	$data['BO3_GunLevels'] = getMemberOption ('BO3_GunLevels', []);

	/* Get the classes frame */
	while(true){
		$data['frame'] = $ClassFrame->Roll(['Level'=>$_SESSION['BO3_Level'],'Roll'=>$_SESSION['BO3_RollSettings']]);
		if(is_array($data['frame'])){
			break;
		}
	}

	/* Fill the classes frame with weapons, perks and equipment */
  	$classData = rollClass($data['frame'],$_SESSION['BO3_Level']);
	$classData['Frame'] = $data['frame'];

	/* Add class to the DB */
	$classArr = ['Game_ID'=> BO3_Game_ID,'Data'=>$classData];
	if(isset($_SESSION['SESS_MID'])){
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> BO3_Folder,'ID'=>$classData['ID']]);

	header("location: " . '/' . BO3_Folder . "/class/$classData[ID]");
	exit();
?>