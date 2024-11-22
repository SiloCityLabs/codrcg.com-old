<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');


	$Gun = new Gun();
	$Perk = new Perk();
	$Killstreaks = new Killstreaks();
	$Equipment = new Equipment();
	$ClassExtras = new ClassExtras();


	$guns = $Gun->GetGuns(['Game_ID'=> IW_Game_ID,'Unlocks'=>1]);
	$perks = $Perk->GetPerks(['Game_ID'=> IW_Game_ID,'Unlocks'=>1]);
	$streaks = $Killstreaks->GetAllKillstreaks(['Game_ID'=> IW_Game_ID,'Unlocks'=>1]);
	$equip = $Equipment->GetAllEquipment(['Game_ID'=> IW_Game_ID,'Unlocks'=>1]);
	//$rigs = $ClassExtras->GetRigs(['Unlocks'=>1]);

    $streaks = (!is_array($streaks) ? [] : $streaks);
    //$rigs = (!is_array($rigs) ? [] : $rigs);

	$data['mergedEquip'] = array_merge ($guns,$perks,$equip,$streaks);

	/* Set unlocks data */
	if(isset($_SESSION['IW_PrestigeUnlocks'])){ $data['Unlocks'] = $_SESSION['IW_PrestigeUnlocks']; }


    echo json_encode($data);
	exit();
?>