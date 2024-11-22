<?php
function bo3_rollClass($data,$userLevel){
  /* Initialized Needed Classes */
	$Gun = new Gun();
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$Killstreaks = new Killstreaks();
  	$ClassExtras = new ClassExtras();

	$PrestigeUnlocks = bo3_getPrestigeUnlocks ();
	$_SESSION[ 'BO3_DlcSettings' ] = (isset( $_SESSION[ 'BO3_DlcSettings' ]) ? $_SESSION[ 'BO3_DlcSettings' ] : []);
	$_SESSION[ 'BO3_GunLevels' ] = (isset( $_SESSION[ 'BO3_GunLevels' ]) ? $_SESSION[ 'BO3_GunLevels' ] : []);

	/* Get wildcards if they are park of the frame */
	if(isset($data['Wildcards'])){ $return['Wildcards'] = $data['Wildcards']; }
	
	/* Set Points Used */
	if(isset($data['PointsUsed'])){ $return['PointsUsed'] = $data['PointsUsed']; }
	
	/* Danger Close */
	if(isset($data['DangerClose'])){ $return['DangerClose'] = 1; }
	
	if(isset($data['Primary'])){
		$hasOptic = (isset($data['Primary_Optic']) ? 1:0);
		$hasAttach = (isset($data['Primary_Attach']) ? 1:0);
    	$return['Primary'] = $Gun->GetGun([
			'UserLevel'=>$userLevel,'GunClass'=>1,'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach, 'DlcSettings' => $_SESSION['BO3_DlcSettings'],
			'Unlocks' => $PrestigeUnlocks['Gun'], 'Game_ID' => BO3_Game_ID
		]);
		$gunID = $return['Primary']['ID'];
		$GunUnlockLevel = (!empty($_SESSION['BO3_GunLevels'][$gunID]) ? $_SESSION['BO3_GunLevels'][$gunID] : 20);

		/* Get Attachments */
    	if(isset($data['Primary_Attach'])){
			$i = 0;
			while (true) {
				$return['Primary_Attach'] = $Gun->GetGunAttach ([
					'GunID' => $return['Primary']['ID'], 'TotalAttachments' => $data['Primary_Attach'],
					'UnlockLevel' => $GunUnlockLevel, 'Group_ID' => $return['Primary']['Attachment_Group_ID']
				]);

				//check if there is an optic
				$optic = (!empty($data['Primary_Optic']) ? 1 : 0);
				//if attachments are valid break the loop
				$valid = ValidateAttachs::BO3 ($return['Primary_Attach'], $optic);
				if ($valid) {
					break;
				}
				$i++;
				if ($i > 10) {
					break;
				}
			}
    	}
		/* Get Optic */
		if(isset($data['Primary_Optic'])){
			$return['Primary_Optic'] = $Gun->GetGunAttach([
				'GunID'=>$return['Primary']['ID'], 'TotalAttachments'=>1, 'isOptic'=>1, 'UnlockLevel' => $GunUnlockLevel,
				'Group_ID' => $return['Primary']['Attachment_Group_ID']
			]);
		}
		
		/* Get Overkill Gun */
		if(isset($data['Overkill'])){
			$hasOptic = (isset($data['Overkill_Optic']) ? 1:0);
			$hasAttach = (isset($data['Overkill_Attach']) ? 1:0);
			$return['Overkill'] = $Gun->GetGun([
					'UserLevel'=>$userLevel,'GunClass'=>1,'GunID'=>$return['Primary']['ID'],'HasOptic'=>$hasOptic, 'HasAttach'=>$hasAttach,
					'DlcSettings' => $_SESSION['BO3_DlcSettings'], 'Unlocks' => $PrestigeUnlocks['Gun'], 'Game_ID' => BO3_Game_ID
			]);
			$gunID = $return['Overkill']['ID'];
			$GunUnlockLevel = (!empty($_SESSION['BO3_GunLevels'][$gunID]) ? $_SESSION['BO3_GunLevels'][$gunID] : 20);

			/* Get Overkill Attachments */
			if(isset($data['Overkill_Attach'])){
				$i = 0;
				while (TRUE) {
					$return['Overkill_Attach'] = $Gun->GetGunAttach ([
						'GunID' => $return['Overkill']['ID'], 'TotalAttachments' => $data['Overkill_Attach'],
						'UnlockLevel' => $GunUnlockLevel, 'Group_ID' => $return['Overkill']['Attachment_Group_ID']
					]);

					//check if there is an optic
					$optic = (!empty($data['Overkill_Optic']) ? 1 : 0);
					//if attachments are valid break the loop
					$valid = ValidateAttachs::BO3 ($return['Overkill_Attach'], $optic);
					if ($valid) {
						break;
					}
					$i++;
					if ($i > 10) {
						break;
					}
				}
			}
			/* Get Optic */
			if (isset($data['Overkill_Optic'])) {
				$return['Overkill_Optic'] = $Gun->GetGunAttach ([
					'GunID' => $return['Overkill']['ID'], 'TotalAttachments' => 1, 'isOptic' => 1, 'UnlockLevel' => $GunUnlockLevel,
					'Group_ID' => $return['Overkill']['Attachment_Group_ID']
				]);
			}
		}
  	}/* Primary Check */
	if(isset($data['Secondary']) && !isset($data['Youmb'])){
		$hasOptic = (isset($data['Secondary_Optic']) ? 1:0);
		$hasAttach = (isset($data['Secondary_Attach']) ? 1:0);
    	$return['Secondary'] = $Gun->GetGun([
			'UserLevel'=>$userLevel,'GunClass'=>2,'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach, 'DlcSettings' => $_SESSION['BO3_DlcSettings'],
			'Unlocks' => $PrestigeUnlocks['Gun'], 'Game_ID' => BO3_Game_ID
		]);
		$gunID = $return['Secondary']['ID'];
		$GunUnlockLevel = (!empty($_SESSION['BO3_GunLevels'][$gunID]) ? $_SESSION['BO3_GunLevels'][$gunID] : 20);

		/* Get Attachments */
    	if(isset($data['Secondary_Attach'])){
			$i = 0;
			while (TRUE) {
				$return['Secondary_Attach'] = $Gun->GetGunAttach ([
					'GunID' => $return['Secondary']['ID'], 'TotalAttachments' => $data['Secondary_Attach'],
					'UnlockLevel' => $GunUnlockLevel, 'Group_ID' => $return['Secondary']['Attachment_Group_ID']
				]);

				//check if there is an optic
				$optic = (!empty($data['Overkill_Optic']) ? 1 : 0);
				//if attachments are valid break the loop
				$valid = ValidateAttachs::BO3 ($return['Secondary_Attach'], $optic);
				if ($valid) {
					break;
				}
				$i++;
				if ($i > 10) {
					break;
				}
			}
    	}
		/* Get Optic */
		if(isset($data['Secondary_Optic'])){
      		$return['Secondary_Optic'] = $Gun->GetGunAttach([
				'GunID' => $return['Secondary']['ID'], 'TotalAttachments'=>1, 'isOptic'=>1, 'UnlockLevel' => $GunUnlockLevel,
				'Group_ID' => $return['Secondary']['Attachment_Group_ID']
			]);
    	}
  	}elseif(isset($data['Secondary']) && isset($data['Youmb'])){
  		$return['Secondary'] = (object) ["Type"=>"Special","Name"=>"Combat Knife","GunClass"=>"Secondary"];
  	}
	
	/* Get equipment if they are part of the frame */
	if(isset($data['Lethal'])){
		$return['Lethal'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>2, 'Unlocks' => $PrestigeUnlocks['Equipment'], 'Game_ID' => BO3_Game_ID
		]);
	}
	if(isset($data['Tactical'])){
		$return['Tactical'] = $Equipment->GetEquipment([
			'UserLevel' => $userLevel, 'Type'=>1, 'Unlocks' => $PrestigeUnlocks['Equipment'], 'Game_ID' => BO3_Game_ID
		]);
		/* Tactician */
		if(isset($data['Tactician'])){
			$return['Tactician'] = $Equipment->GetEquipment([
				'UserLevel' => $userLevel, 'Type'=>1, 'EquipID'=>$return['Tactical']['ID'], 'Unlocks' => $PrestigeUnlocks['Equipment'],
				'Game_ID' => BO3_Game_ID
			]);
		}
	}
	
	/* Get Perks if they are part of the frame */
  	if(isset($data['Perk_1'])){
		$return['Perk_1'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount'=>$data['Perk_1'], 'Unlocks' => $PrestigeUnlocks['Perk'], 'Game_ID' => BO3_Game_ID
		]);
	}
  	if(isset($data['Perk_2'])){
		$return['Perk_2'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount'=>$data['Perk_2'], 'Unlocks' => $PrestigeUnlocks['Perk'], 'Game_ID' => BO3_Game_ID
		]);
	}
  	if(isset($data['Perk_3'])){
		$return['Perk_3'] = $Perk->GetPerk([
			'UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount'=>$data['Perk_3'], 'Unlocks' => $PrestigeUnlocks['Perk'], 'Game_ID' => BO3_Game_ID
		]);
	}

	/* if they want a challenge roll it */
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(['Game_ID' => BO3_Game_ID]); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(['Game_ID' => BO3_Game_ID]); }
	if(isset($data['Specialist'])){
		$return['Specialist'] = $ClassExtras->GetSpecialist(['UserLevel' => $userLevel, 'Unlocks' => $PrestigeUnlocks['Specialist']]);
	}
	if(isset($data['Killstreaks'])){
		$return['Killstreaks'] = $Killstreaks->GetKillstreaks([
			'UserLevel' => $userLevel, 'TotalStreaks'=> 3,'Game_ID' => BO3_Game_ID, 'Unlocks' => $PrestigeUnlocks['Streak']
		]);
	}

  	return $return;
}
?>
