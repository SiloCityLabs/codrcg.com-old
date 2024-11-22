<?php
function iw_rollClass($data,$userLevel){
  /* Initialized Needed Classes */
	$Gun = new Gun();
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$Killstreaks = new Killstreaks();
  	$ClassExtras = new ClassExtras();

	$data['userLevel'] = $userLevel;
	$data['prestigeUnlocks'] = iw_getPrestigeUnlocks ();
	$_SESSION[ 'IW_DlcSettings' ] = (isset( $_SESSION[ 'IW_DlcSettings' ]) ? $_SESSION[ 'IW_DlcSettings' ] : []);
	$_SESSION[ 'IW_GunLevels' ] = (isset( $_SESSION[ 'IW_GunLevels' ]) ? $_SESSION[ 'IW_GunLevels' ] : []);

	/* Get wildcards if they are park of the frame */
	if(isset($data['Wildcards'])){ $return['Wildcards'] = $data['Wildcards']; }

	/* Set Points Used */
	if(isset($data['PointsUsed'])){ $return['PointsUsed'] = $data['PointsUsed']; }

	/* Extra Lethal */
	if(isset($data['ExtraLethal'])){ $return['ExtraLethal'] = 1; }
	/* Extra Tactical */
	if(isset($data['ExtraTactical'])){ $return['ExtraTactical'] = 1; }

	if(isset($data['Primary'])){
		getGunIW ('Primary',1,$data,$return);

		/* Get Overkill Gun */
		if(isset($data['Overkill'])) {
			getGunIW ('Overkill',1,$data,$return);
		}
  	}/* Primary Check */
	if(isset($data['Secondary']) && !isset($data['Youmb'])){
		getGunIW ('Secondary',2,$data,$return);
  	}elseif(isset($data['Secondary']) && isset($data['Youmb'])){
  		$return['Secondary'] = (object) ["Type"=>"Special","Name"=>"Combat Knife","GunClass"=>"Secondary"];
  	}

	/* Get equipment if they are part of the frame */
	if(isset($data['Lethal'])){
		$return['Lethal'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>2, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => IW_Game_ID
		]);
	}
	if(isset($data['Tactical'])){
		$return['Tactical'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>1, 'Unlocks' => $data['prestigeUnlocks']['Equipment'], 'Game_ID' => IW_Game_ID
		]);
	}

	/* Get Perks if they are part of the frame */
  	if(isset($data['Perk_1'])){
		$return['Perk_1'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount'=>$data['Perk_1'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => IW_Game_ID
		]);
	}
  	if(isset($data['Perk_2'])){
		$return['Perk_2'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount'=>$data['Perk_2'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => IW_Game_ID
		]);
	}
  	if(isset($data['Perk_3'])){
		$return['Perk_3'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount'=>$data['Perk_3'], 'Unlocks' => $data['prestigeUnlocks']['Perk'], 'Game_ID' => IW_Game_ID
		]);
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => IW_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => IW_Game_ID]); }
	if(isset($data['Rig'])){
		$return['Rig'] = $ClassExtras->GetRig(['UserLevel' => $userLevel, 'Unlocks' => $data['prestigeUnlocks']['Rigs']]);
	}
	if(isset($data['Killstreaks'])){
		$return['Killstreaks'] = $Killstreaks->GetKillstreaks([
			'UserLevel' => $userLevel, 'TotalStreaks'=> 3,'Game_ID' => IW_Game_ID, 'Unlocks' => $data['prestigeUnlocks']['Streak']
		]);
	}

  	return $return;
}
?>
