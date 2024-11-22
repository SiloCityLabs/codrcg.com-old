<?php
function rollClass($data,$userLevel) {
  /* Initialized Needed Classes */
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$Killstreaks = new Killstreaks();
  	$ClassExtras = new ClassExtras();

	$data['userLevel'] = $userLevel;
	$data['prestigeUnlocks'] = getPrestigeUnlocks ();
	$_SESSION['WW2_DlcSettings'] = (isset($_SESSION['WW2_DlcSettings']) ? $_SESSION['WW2_DlcSettings'] : []);
	$_SESSION['WW2_GunLevels'] = (isset($_SESSION['WW2_GunLevels']) ? $_SESSION['WW2_GunLevels'] : []);
	# TODO: Should i randomize?
	$data['Primary_Attach'] = 2;
	$data['Secondary_Attach'] = 0;
	# TODO: Does this get any attaches?
	$data['Overkill_Attach'] = 0;
	
	# Get Division & Basic Training
	$return['Division'] = $Perk->GetPerk([
		'UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount'=>1, 'Unlocks' => $data['prestigeUnlocks']['Division'], 'Game_ID' => WW2_Game_ID
	]);
	$return['Basic_Training'] = $Perk->GetPerk([
		'UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount'=>1, 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => WW2_Game_ID
	]);
	
	# Check for Division Specialties
	switch ($return['Division'][0]['Name']) {
		case 'Infantry':
			# Gives 3 Primary attachments
			$data['Primary_Attach'] += 1;
			break;
		case 'Expeditionary':
			# Select a piece of tac and lethal equipment
			$data['Tactical'] = TRUE;
			$data['Lethal'] = TRUE;
			break;
	}
	
	# Check for Basic Training Specialties
	switch ($return['Basic_Training'][0]['Name']) {
		case 'Launched':
			# Take a launcher as a secondary
			$data['Launcher'] = TRUE;
			break;
		case 'Rifleman':
			# Take two primary weapons
			$data['Overkill'] = TRUE;
			break;
		case 'Primed':
			# Additional Primary Attachment
			$data['Primary_Attach'] += 1;
			break;
		case 'Serrated':
			# Melee Weapon as primary, 2 throwing knifes and 2 tacticals
			$data['Serrated'] = 1;
			break;
		case 'Duelist':
			# Akimbo pistols
			$data['Duelist'] = 1;
			break;
		case 'Bang':
			# Take extra tactical & MK 2 Fragmentation Grenade
			$data['Tactical'] = TRUE;
			$return['Lethal'] = ['Name'=> 'MK 2 Fragmentation Grenade'];
			break;
		case 'Concussed':
			# Take a British N° 69 as a Tactical and an extra piece of Lethal equipment.
			$data['Lethal'] = TRUE;
			$return['Tactical'] = ['Name'=> 'British N° 69'];
			break;
	}
	
	
	# Get Primary Info
	getGun ('Primary',1,$data,$return);
	
	if(isset($data['Overkill'])) {
		/* Get Overkill Gun */
		if(isset($data['Overkill'])){
			getGun ('Overkill',1,$data,$return);
		}
	} else {
		getGun ('Secondary',2,$data,$return);
	}
	
	# Randomly Choose Lethal or Tactical
	$equip = rand(0, 10);
	
	if($equip % 2 == 0 || isset($data['Lethal'])) {
		$return['Lethal'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>2, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => WW2_Game_ID
		]);
	}
	if($equip % 2 != 0 || isset($data['Tactical'])) {
		$return['Tactical'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>1, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => WW2_Game_ID
		]);
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => WW2_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => WW2_Game_ID]); }
	if(isset($data['Killstreaks'])){
		$return['Killstreaks'] = $Killstreaks->GetKillstreaks([
			'UserLevel' => $userLevel, 'TotalStreaks'=> 3,'Game_ID' => WW2_Game_ID, 'Unlocks' => $data['prestigeUnlocks']['Streak']
		]);
	}

  	return $return;
}
?>