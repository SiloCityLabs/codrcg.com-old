<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$Gun = new Gun();
	$Perk = new Perk();
	$Killstreaks = new Killstreaks();
	$Equipment = new Equipment();
	
	#TODO: Update streaks unlock levels
	$guns = $Gun->GetGuns(['Game_ID'=> WW2_Game_ID,'Unlocks'=> 1]);
	$perks = $Perk->GetPerks(['Game_ID'=> WW2_Game_ID,'Unlocks'=> 2]);
	$streaks = $Killstreaks->GetAllKillstreaks(['Game_ID'=> WW2_Game_ID,'Unlocks'=> 3]);
	$equip = $Equipment->GetAllEquipment(['Game_ID'=> WW2_Game_ID,'Unlocks'=> 4]);
	
	$data['mergedEquip'] = array_merge ($guns,$perks,$streaks,$equip);

	/* Set unlocks data */
	if(isset($_SESSION['WW2_PrestigeUnlocks'])){ $data['Unlocks'] = $_SESSION['WW2_PrestigeUnlocks']; }


    echo json_encode($data);
	exit();
?>