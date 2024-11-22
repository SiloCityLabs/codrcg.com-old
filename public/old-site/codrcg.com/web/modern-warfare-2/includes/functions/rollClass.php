<?php
function rollClass($data,$userLevel) {
  	/* Initialized Needed Classes */
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$ClassExtras = new ClassExtras();

	$data['userLevel'] = $userLevel;

	/* Get Perks */
	$return['Perk_1'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount' => 1, 'Game_ID' => MW2_Game_ID]);
	$return['Perk_2'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount' => 1, 'Game_ID' => MW2_Game_ID]);
	$return['Perk_3'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount' => 1, 'Game_ID' => MW2_Game_ID]);

	switch ($return['Perk_1'][0]['Name']) {
		case 'Bling':
			$return['Bling'] = true;
			break;
		case 'One Man Army':
			$return['OMA'] = true;
			break;
	}

	/* Get primary info */
	getGun ('Primary',1,$data,$return);

	/* Get equipment if they are part of the frame */
	$return['Lethal'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 2, 'Game_ID' => MW2_Game_ID]);
	$return['Special_Grenade'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 1, 'Game_ID' => MW2_Game_ID]);

	//If One Man Army is selected then do not choose a secondary
	if(!isset($return['OMA'])) {
		/* Get Secondary info */
		getGun ('Secondary',2,$data,$return);
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => MW2_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => MW2_Game_ID]); }
	if(isset($data['Killstreaks'])){
  		$Killstreaks = new Killstreaks();
		while (true) {
			$valid = true;
			unset($tmpStreaks);
			$return['Killstreaks'] = $Killstreaks->GetKillstreaks(['UserLevel' => $userLevel, 'TotalStreaks'=> 3,'Game_ID' => MW2_Game_ID]);
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
				serverlog('Testing: '.print_r($tmpStreaks,true));
				break;
			}
		}
	}

  	return $return;
}
?>
