<?php
function rollClass_cod4($data,$userLevel){
  /* Initialized Needed Classes */
	$Gun = new Gun();
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$ClassExtras = new ClassExtras();

	/* Get primary info */
	$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
	$return['Primary'] = $Gun->GetGun (['UserLevel' => $userLevel, 'GunClass' => 1, 'HasAttach' => $hasAttach]);
	/* Get Primary Attachment */
	if ($hasAttach == 1) {
		$return['Primary_Attach'] = $Gun->GetGunAttach (['GunID' => $return['Primary']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1]);
	}

	/* Get equipment if they are part of the frame */
	$return['Lethal'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 2]);
	$return['Tactical'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 1]);


	/* Get Perks if they are part of the frame */
	//TODO: Make sure if the primary guns attachment is a grenade launcher you dont get a perk 1
	if (!isset($return['Primary_Attach'][0]) || $return['Primary_Attach'][0]['Name'] != 'Grenade Launcher') {
		$return['Perk_1'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount' => 1]);
	}
	$return['Perk_2'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount' => 1]);
	$return['Perk_3'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount' => 1]);



	//If overkill is selected then choose this, else choose a secondary
	if($return['Perk_2'] == 'Overkill') {
		/* Get Overkill Gun */
		$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		$return['Overkill'] = $Gun->GetGun(
			['UserLevel'=>$userLevel,'GunClass'=>1,'GunID'=>$return['Primary']['ID'],'HasAttach'=>$hasAttach]
		);

		/* Get Overkill Attachment */
		if($hasAttach == 1) {
			$return['Overkill_Attach'] = $Gun->GetGunAttach (['GunID' => $return['Overkill']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1]);
		}
  	} else {
		/* Get Secondary info */
		$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		$return['Secondary'] = $Gun->GetGun (['UserLevel' => $userLevel, 'GunClass' => 2, 'HasAttach' => $hasAttach]);

		/* Get Secondary Attachment */
		if ($hasAttach == 1) {
			$return['Secondary_Attach'] = $Gun->GetGunAttach (['GunID' => $return['Secondary']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1]);
		}
	}
	
	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => 1]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => 1]); }

  	return $return;
}
?>
