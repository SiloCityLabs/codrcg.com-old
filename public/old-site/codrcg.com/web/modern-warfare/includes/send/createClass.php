<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session(['ALL']);

	/* Initialized Needed Classes */
	$Classes = new Classes();
	$data['extras'] = [];
	$data['MW_Level'] = getMemberOption ('MW_Level', MW_Level);
	$data['MW_RollSettings'] = getMemberOption ('MW_RollSettings', []);
	$data['MW_DlcSettings'] = getMemberOption ('MW_DlcSettings', []);

	# if they choose they want a challenge to be rolled
	if (in_array ('Ychallenge', $_SESSION['MW_RollSettings'])) {
		$data['extras']['Challenge'] = TRUE;
	}
	# if they choose they want a gamemode to be rolled
	if (in_array ('Ygamemode', $_SESSION['MW_RollSettings'])) {
		$data['extras']['Gamemode'] = TRUE;
	}
	# if they choose they want a melee to be rolled
	if (in_array ('Ymelee', $_SESSION['MW_RollSettings'])) {
		$data['extras']['Melee'] = TRUE;
	}

	# Fill the classes frame with weapons, perks and equipment
	$classData = rollClass($data['extras'],$_SESSION['MW_Level']);

	# Add class to the DB
	$classArr = ['Game_ID'=> MW_Game_ID,'Data'=> $classData];
	if (isset($_SESSION['SESS_MID'])) {
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> MW_Folder,'ID'=> $classData['ID']]);

	header ("location: ".'/'.MW_Folder."/class/$classData[ID]");
	exit();
?>