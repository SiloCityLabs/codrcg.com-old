<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session(['ALL']);

	/* Initialized Needed Classes */
	$Classes = new Classes();
	$data['extras'] = [];
	$data['MW2_Level'] = getMemberOption ('MW2_Level', MW2_Level);
	$data['MW2_RollSettings'] = getMemberOption ('MW2_RollSettings', []);

	/* if they choose they want a challenge to be rolled */
	if (in_array ('Ychallenge', $data['MW2_RollSettings'])) {
		$data['extras']['Challenge'] = TRUE;
	}
	/* if they choose they want a gamemode to be rolled */
	if (in_array ('Ygamemode', $data['MW2_RollSettings'])) {
		$data['extras']['Gamemode'] = TRUE;
	}
	/* if they choose they want killstreaks to be rolled */
	if (in_array ('Ystreaks', $data['MW2_RollSettings'])) {
		$data['extras']['Killstreaks'] = TRUE;
	}

	/* Fill the classes frame with weapons, perks and equipment */
	$classData = rollClass($data['extras'],$_SESSION['MW2_Level']);

	/* Add class to the DB */
	$classArr = ['Game_ID'=> MW2_Game_ID,'Data'=> $classData];
	if (isset($_SESSION['SESS_MID'])) {
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> MW2_Folder,'ID'=> $classData['ID']]);


	header ("location: ".'/'.MW2_Folder."/class/$classData[ID]");
	exit();
