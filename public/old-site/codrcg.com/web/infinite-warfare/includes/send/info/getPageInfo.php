<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$Gun = new Gun();
	$Perk = new Perk();
	$Killstreaks = new Killstreaks();
	$Equipment = new Equipment();
	
	
	$data['Guns'] = $Gun->GetGuns(['Game_ID'=> IW_Game_ID]);
	$data['Perks'] = $Perk->GetPerks(['Game_ID'=> IW_Game_ID]);
	$data['Streaks'] = $Killstreaks->GetAllKillstreaks(['Game_ID'=> IW_Game_ID]);
	$data['Equipment'] = $Equipment->GetAllEquipment(['Game_ID'=> IW_Game_ID]);

    echo json_encode($data);
	exit();
?>


