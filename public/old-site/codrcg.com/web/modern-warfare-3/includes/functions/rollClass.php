<?php
function rollClass($data,$userLevel) {
  	/* Initialized Needed Classes */
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$ClassExtras = new ClassExtras();

	$data['userLevel'] = $userLevel;
	//$data['prestigeUnlocks'] = getPrestigeUnlocks();
	$_SESSION[ 'MW3_GunLevels' ] = (isset( $_SESSION[ 'MW3_GunLevels' ]) ? $_SESSION[ 'MW3_GunLevels' ] : []);

	/* Get Perks */
	$return['Perk_1'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount' => 1, 'Game_ID' => MW3_Game_ID]);
	$return['Perk_2'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount' => 1, 'Game_ID' => MW3_Game_ID]);
	$return['Perk_3'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount' => 1, 'Game_ID' => MW3_Game_ID]);

	switch ($return['Perk_2'][0]['Name']) {
		case 'Overkill':
			$return['OverKill'] = true;
			break;
	}

	/* Get primary info */
	getGun ('Primary',1,$data,$return);

	/* Get equipment if they are part of the frame */
	$return['Lethal'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 2, 'Game_ID' => MW3_Game_ID]);
	$return['Tactical'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 1, 'Game_ID' => MW3_Game_ID]);

	//If overkill is selected then do not choose a secondary
	if(!isset($return['Overkill'])) {
		/* Get Secondary info */
		getGun ('Secondary',2,$data,$return);
	} else {
		/* Get Overkill info */
		getGun ('Overkill',1,$data,$return);
	}

  	$Killstreaks = new Killstreaks();
	//Get strike package
	switch (rand (0, 12) % 3) {
		case 1://assault
			$type = 1;
			$return['StrikePackage'] = 'Assault';
			break;
		case 2://support
			$type = 2;
			$return['StrikePackage'] = 'Support';
			break;
		default://specialist
			if ($userLevel > 20) {
				$type = 0;
				$return['StrikePackage'] = 'Specialist';
				//TODO: get perks
			} else {
				$type = 1;
				$return['StrikePackage'] = 'Assault';
			}
			break;
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => MW3_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => MW3_Game_ID]); }
	//If type is not specialist
	if($type > 0) {
		while (true) {
			$return['Killstreaks'] = $Killstreaks->GetKillstreaks(['UserLevel' => $userLevel, 'TotalStreaks'=> 3,'Game_ID' => MW3_Game_ID,'Type'=>$type]);
			$valid = true;
			unset($tmpStreaks);
			//loop through the streaks to see if any have the same points
			foreach ($return['Killstreaks'] as $key => $value) {
				if (isset($tmpStreaks[$value['Points']])) {
					$valid = false;
				} else {
					$tmpStreaks[$value['Points']] = 1;
				}
			}
			//Leave the loop if the streaks are valid
			if ($valid) {
				break;
			}
		}
	} else {//Get specialist perks
		//Get List of already gotten perks
		$Perklist = $return['Perk_1'][0]['ID'].','.$return['Perk_2'][0]['ID'].','.$return['Perk_3'][0]['ID'];
		$return['S_Perks'] = $Perk->GetPerk ([
			'UserLevel' => $userLevel, 'PerkCount' => 3, 'Game_ID' => MW3_Game_ID,'Perk_ID' => $Perklist
		]);

	}

  	return $return;
}
?>
