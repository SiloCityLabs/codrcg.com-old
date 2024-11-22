<?php
function rollClass($data,$userLevel) {
  /* Initialized Needed Classes */
	$Gun = new Gun();
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$ClassExtras = new ClassExtras();
	$noPerk1 = ['Grenade Launcher', 'Grip'];
	$_SESSION[ 'MW_DlcSettings' ] = (isset( $_SESSION[ 'MW_DlcSettings' ]) ? $_SESSION[ 'MW_DlcSettings' ] : []);

	/* Get primary info */
	$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
	$return['Primary'] = $Gun->GetGun (['UserLevel' => $userLevel, 'GunClass' => 1, 'HasAttach' => $hasAttach, 'Game_ID' => MW_Game_ID, 'DlcSettings' => $_SESSION['MW_DlcSettings']]);
	/* Get Primary Attachment */
	if ($hasAttach == 1) {
		$return['Primary_Attach'] = $Gun->GetGunAttach ([
			'GunID' => $return['Primary']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1, 'UnlockLevel' => $userLevel,
			'Group_ID' => $return['Primary']['Attachment_Group_ID']
		]);
	}

	/* Get equipment if they are part of the frame */
	$return['Special_Grenade'] = $Equipment->GetEquipment (['UserLevel' => $userLevel, 'Type' => 2, 'Game_ID' => MW_Game_ID]);


	//TODO: Make sure if the primary guns attachment is a grenade launcher you dont get a perk 1
	if (!isset($return['Primary_Attach'][0]) || !in_array ($return['Primary_Attach'][0]['Name'], $noPerk1)) {
		$return['Perk_1'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount' => 1, 'Game_ID' => MW_Game_ID]);
	}
	$return['Perk_2'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount' => 1, 'Game_ID' => MW_Game_ID]);
	$return['Perk_3'] = $Perk->GetPerk (['UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount' => 1, 'Game_ID' => MW_Game_ID]);



	//If overkill is selected then choose this, else choose a secondary
	if($return['Perk_2'] == 'Overkill') {
		/* Get Overkill Gun */
		$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		$return['Overkill'] = $Gun->GetGun([
			'UserLevel' => $userLevel,
			'GunClass' => 1,
			'GunID' => $return['Primary']['ID'],
			'HasAttach' => $hasAttach,
			'Game_ID' => MW_Game_ID,
			'DlcSettings' => $_SESSION['MW_DlcSettings']
		]);

		/* Get Overkill Attachment */
		if($hasAttach == 1) {
			$return['Overkill_Attach'] = $Gun->GetGunAttach ([
				'GunID' => $return['Overkill']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1, 'UnlockLevel' => $userLevel,
				'Group_ID' => $return['Overkill']['Attachment_Group_ID']
			]);
		}
  	} else {
		/* Get Secondary info */
		//$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		//TODO: see what the attachments are for these
		$hasAttach = 0;
		$return['Secondary'] = $Gun->GetGun (['UserLevel' => $userLevel, 'GunClass' => 2, 'HasAttach' => $hasAttach, 'Game_ID' => MW_Game_ID, 'DlcSettings' => $_SESSION['MW_DlcSettings']]);

		/* Get Secondary Attachment */
		if ($hasAttach == 1) {
			$return['Secondary_Attach'] = $Gun->GetGunAttach ([
				'GunID' => $return['Secondary']['ID'], 'TotalAttachments' => 1, 'allAttachs' => 1, 'UnlockLevel' => $userLevel,
				'Group_ID' => $return['Secondary']['Attachment_Group_ID']
			]);
		}
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => MW_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => MW_Game_ID]); }
	if(isset($data['Melee'])) {
		$return['Melee'] = $Gun->GetGun ([
			'UserLevel' => $userLevel,
			'GunClass' => 2,
			'Game_ID' => MW_Game_ID,
			'DlcSettings' => $_SESSION['MW_DlcSettings'],
			'GunType' => 10 # Melee
		]);
	}

  	return $return;
}
?>
