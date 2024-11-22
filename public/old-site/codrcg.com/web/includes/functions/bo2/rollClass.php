<?php
function bo2_rollClass($data,$userLevel){
  /* Initialized Needed Classes */
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$Killstreaks = new Killstreaks();
  	$ClassExtras = new ClassExtras();

	$data['userLevel'] = $userLevel;
	$data['prestigeUnlocks'] = bo2_getPrestigeUnlocks ();
	$_SESSION[ 'BO2_GunLevels' ] = (isset( $_SESSION[ 'BO2_GunLevels' ]) ? $_SESSION[ 'BO2_GunLevels' ] : []);

	/* Get wildcards if they are park of the frame */
	if(isset($data['Wildcards'])){ $return['Wildcards'] = $data['Wildcards']; }

	/* Set Points Used */
	if(isset($data['PointsUsed'])){ $return['PointsUsed'] = $data['PointsUsed']; }

	/* Danger Close */
	if(isset($data['DangerClose'])){ $return['DangerClose'] = 1; }

	if(isset($data['Primary'])) {
		/* Get/Set Primary Gun data */
		getGunBO2 ('Primary',1,$data,$return);

		/* Get Overkill Gun */
		if(isset($data['Overkill'])){
			getGunBO2 ('Overkill',1,$data,$return);
		}
  	}/* Primary Check */
	if(isset($data['Secondary']) && !isset($data['Youmb'])){
		getGunBO2 ('Secondary',2,$data,$return);
  	}elseif(isset($data['Secondary']) && isset($data['Youmb'])){
  		$return['Secondary'] = (object) ["Type"=>"Special","Name"=>"Combat Knife","GunClass"=>"Secondary"];
  	}

	/* Get equipment if they are part of the frame */
	if(isset($data['Lethal'])){
		$return['Lethal'] = $Equipment->GetEquipment([
			'UserLevel' => $data['userLevel'], 'Type'=>2, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => BO2_Game_ID
		]);
	}
	if(isset($data['Tactical'])){
		$return['Tactical'] = $Equipment->GetEquipment([
			'UserLevel' => $data['userLevel'], 'Type'=>1, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => BO2_Game_ID
		]);
		/* Tactician */
		if(isset($data['Tactician'])){
			$return['Tactician'] = $Equipment->GetEquipment([
				'UserLevel' => $data['userLevel'], 'Type'=>1, 'EquipID'=>$return['Tactical']['ID'], 'Unlocks' => $data['prestigeUnlocks']['Equipment'],
				'Game_ID' => BO2_Game_ID
			]);
		}
	}

	/* Get Perks if they are part of the frame */
  	if(isset($data['Perk_1'])){
		$return['Perk_1'] = $Perk->GetPerk([
			'UserLevel' => $data['userLevel'], 'PerkCat' => 2, 'PerkCount'=>$data['Perk_1'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => BO2_Game_ID
		]);
	}
  	if(isset($data['Perk_2'])){
		$return['Perk_2'] = $Perk->GetPerk([
			'UserLevel' => $data['userLevel'], 'PerkCat' => 3, 'PerkCount'=>$data['Perk_2'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => BO2_Game_ID
		]);
	}
  	if(isset($data['Perk_3'])){
		$return['Perk_3'] = $Perk->GetPerk([
			'UserLevel' => $data['userLevel'], 'PerkCat' => 4, 'PerkCount'=>$data['Perk_3'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => BO2_Game_ID
		]);
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => BO2_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => BO2_Game_ID]); }
	if(isset($data['Killstreaks'])){
		$return['Killstreaks'] = $Killstreaks->GetKillstreaks([
			'UserLevel' => $data['userLevel'], 'TotalStreaks'=> 3,'Game_ID' => BO2_Game_ID, 'Unlocks' => $data['prestigeUnlocks']['Streak']
		]);
	}

  	return $return;
}
?>