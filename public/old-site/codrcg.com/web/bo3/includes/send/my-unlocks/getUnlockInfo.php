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

	$guns = $Gun->GetGuns(['Game_ID'=> BO3_Game_ID,'Unlocks'=>1]);
	$perks = $Perk->GetPerks(['Game_ID'=> BO3_Game_ID,'Unlocks'=>1]);
	$streaks = $Killstreaks->GetAllKillstreaks(['Game_ID'=> BO3_Game_ID,'Unlocks'=>1]);
	$equip = $Equipment->GetAllEquipment(['Game_ID'=> BO3_Game_ID,'Unlocks'=>1]);
	$specialists = $ClassExtras->GetSpecialists(['Unlocks'=>1]);

	$data['mergedEquip'] = array_merge ($guns,$perks,$streaks,$equip,$specialists);

	/* Set unlocks data */
	if(isset($_SESSION['BO3_PrestigeUnlocks'])){ $data['Unlocks'] = $_SESSION['BO3_PrestigeUnlocks']; }


    echo json_encode($data);
	exit();
?>