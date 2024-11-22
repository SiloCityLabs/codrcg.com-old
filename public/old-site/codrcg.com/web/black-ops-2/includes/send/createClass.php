<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session([ 'ALL' ]);

	/* Initialized Needed Classes */
	$ClassFrame = new ClassFrame();
	$Classes = new Classes();

	$data['BO2_Level'] = getMemberOption ('BO2_Level', BO2_Level);
	$data['BO2_RollSettings'] = getMemberOption ('BO2_RollSettings', []);
	$data['BO2_GunLevels'] = getMemberOption ('BO2_GunLevels', []);

	/* Get the classes frame */
	while(true){
		$data['frame'] = $ClassFrame->Roll(['Level'=>$_SESSION['BO2_Level'],'Roll'=>$_SESSION['BO2_RollSettings']]);
		if(is_array($data['frame'])){
			break;
		}
	}

	/* Fill the classes frame with weapons, perks and equipment */
  	$classData = rollClass($data['frame'],$_SESSION['BO2_Level']);
	$classData['Frame'] = $data['frame'];

	/* Add class to the DB */
	$classArr = ['Game_ID'=> BO2_Game_ID,'Data'=>$classData];
	if(isset($_SESSION['SESS_MID'])){
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> BO2_Folder,'ID'=>$classData['ID']]);

	header("location: " . '/' . BO2_Folder . "/class/$classData[ID]");
	exit();
?>