<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session(['ALL']);

	/* Initialized Needed Classes */
	$Classes = new Classes();
	$data['extras'] = [];
	$data['MW3_Level'] = getMemberOption ('MW3_Level', MW3_Level);
	$data['MW3_RollSettings'] = getMemberOption ('MW3_RollSettings', []);

	/* if they choose they want a challenge to be rolled */
	if (in_array ('Ychallenge', $data['MW3_RollSettings'])) {
		$data['extras']['Challenge'] = TRUE;
	}
	/* if they choose they want a gamemode to be rolled */
	if (in_array ('Ygamemode', $data['MW3_RollSettings'])) {
		$data['extras']['Gamemode'] = TRUE;
	}

	/* Fill the classes frame with weapons, perks and equipment */
	$classData = rollClass($data['extras'],$data['MW3_Level']);

	/* Add class to the DB */
	$classArr = ['Game_ID'=> MW3_Game_ID,'Data'=> $classData];
	if (isset($_SESSION['SESS_MID'])) {
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> MW3_Folder,'ID'=> $classData['ID']]);

	header ("location: ".'/'.MW3_Folder."/class/$classData[ID]");
	exit();
?>