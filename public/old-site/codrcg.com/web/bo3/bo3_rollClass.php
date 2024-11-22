<?php
function rollClass($data,$userLevel,$gunlevels=array()){
  /* Initialized Needed Classes */
	$Gun = new Gun();
  	$Equipment = new Equipment();
  	$Perk = new Perk();
  	$Killstreaks = new Killstreaks();
  	$ClassExtras = new ClassExtras();
	
	/* Get wildcards if they are park of the frame */
	if(isset($data['Wildcards'])){ $return['Wildcards'] = $data['Wildcards']; }
	
	/* Set Points Used */
	if(isset($data['PointsUsed'])){ $return['PointsUsed'] = $data['PointsUsed']; }
	
	/* Danger Close */
	if(isset($data['DangerClose'])){ $return['DangerClose'] = 1; }
	
	if(isset($data['Primary'])){
		$hasOptic = (isset($data['Primary_Optic']) ? 1:0);
		$hasAttach = (isset($data['Primary_Attach']) ? 1:0);
    	$return['Primary'] = $Gun->GetGun(array('UserLevel'=>$userLevel,'GunClass'=>1,'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach));
		/* Set Gun level */
		$gunlevel = (isset($gunlevels[$return['Primary']['ID']]) && !empty($gunlevels[$return['Primary']['ID']]) ? $gunlevels[$return['Primary']['ID']]:18);
		/* Get Attachments */
    	if(isset($data['Primary_Attach'])){
      		$return['Primary_Attach'] = $Gun->GetGunAttach(array('GunID'=>$return['Primary']['ID'], 'TotalAttachments'=>$data['Primary_Attach'], 'GunLevel' => $gunlevel));
    	}
		/* Get Optic */
		if(isset($data['Primary_Optic'])){ $return['Primary_Optic'] = $Gun->GetGunAttach(array('GunID'=>$return['Primary']['ID'], 'TotalAttachments'=>1, 'isOptic'=>1, 'GunLevel' => $gunlevel)); }
		/* Get Camo */
		if(isset($data['PrimaryCamo'])){ $return['PrimaryCamo'] = $Gun->GetGunCamo(array('GunID'=>$return['Primary']['ID'])); }
		
		/* Get Overkill Gun */
		if(isset($data['Overkill'])){
			$hasOptic = (isset($data['Overkill_Optic']) ? 1:0);
			$hasAttach = (isset($data['Overkill_Attach']) ? 1:0);
			$return['Overkill'] = $Gun->GetGun(array('UserLevel'=>$userLevel,'GunClass'=>1,'GunID'=>$return['Primary']['ID'],'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach));
			/* Set Gun level */
			$gunlevel = (isset($gunlevels[$return['Overkill']['ID']]) && !empty($gunlevels[$return['Overkill']['ID']]) ? $gunlevels[$return['Overkill']['ID']] : 18);

			/* Get Camo */
			if(isset($data['OverkillCamo'])){
				$return['OverkillCamo'] = $Gun->GetGunCamo(array('GunID' => $return['Overkill']['ID']));
			}

			/* Get Overkill Attachments */
			if(isset($data['Overkill_Attach'])){
				$return['Overkill_Attach'] = $Gun->GetGunAttach(array('GunID' => $return['Overkill']['ID'], 'TotalAttachments' => $data['Overkill_Attach'], 'GunLevel' => $gunlevel));
			}
		}

		
  	}
	if(isset($data['Secondary']) && !isset($data['Youmb'])){
		$hasOptic = (isset($data['Secondary_Optic']) ? 1:0);
		$hasAttach = (isset($data['Secondary_Attach']) ? 1:0);
    	$return['Secondary'] = $Gun->GetGun(array('UserLevel'=>$userLevel,'GunClass'=>2,'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach));
		/* Set Gun level */
		$gunlevel = (isset($gunlevels[$return['Secondary']['ID']]) && !empty($gunlevels[$return['Secondary']['ID']]) ? $gunlevels[$return['Secondary']['ID']] : 18);

		/* Get Attachments */
    	if(isset($data['Secondary_Attach'])){
      		$return['Secondary_Attach'] = $Gun->GetGunAttach(array('GunID'=>$return['Secondary']['ID'], 'TotalAttachments'=>$data['Secondary_Attach'], 'GunLevel' => $gunlevel));
    	}
		/* Get Optic */
		if(isset($data['Secondary_Optic'])){
			/* Figure out how we want todo this */
      		$return['Secondary_Optic'] = $Gun->GetGunAttach(array('GunID' => $return['Secondary']['ID'], 'TotalAttachments'=>1, 'isOptic'=>1, 'GunLevel' => $gunlevel));
    	}
		/* Get Camo */
		if(isset($data['SecondaryCamo'])){ $return['SecondaryCamo'] = $Gun->GetGunCamo(array('GunID' => $return['Secondary']['ID'])); }
  	}elseif(isset($data['Secondary']) && isset($data['Youmb'])){
  		$return['Secondary'] = (object) array("Type"=>"Special","Name"=>"Combat Knife","GunClass"=>"Secondary");
  	}
	
	/* Get equipment if they are part of the frame */
	if(isset($data['Lethal'])){ $return['Lethal'] = $Equipment->GetEquipment(array('UserLevel' => $userLevel, 'Type'=>2)); }
	if(isset($data['Tactical'])){
		$return['Tactical'] = $Equipment->GetEquipment(array('UserLevel' => $userLevel, 'Type'=>1)); 
		/* Tactician */
		if(isset($data['Tactician'])){ $return['Tactician'] = $Equipment->GetEquipment(array('UserLevel' => $userLevel, 'Type'=>1, 'EquipID'=>$return['Tactical']['ID'])); }
	}
	
	
	/* Get Perks if they are part of the frame */
  	if(isset($data['Perk_1'])){ $return['Perk_1'] = $Perk->GetPerk(array('UserLevel' => $userLevel, 'PerkCat' => 2, 'PerkCount'=>$data['Perk_1'])); }
  	if(isset($data['Perk_2'])){ $return['Perk_2'] = $Perk->GetPerk(array('UserLevel' => $userLevel, 'PerkCat' => 3, 'PerkCount'=>$data['Perk_2'])); }
  	if(isset($data['Perk_3'])){ $return['Perk_3'] = $Perk->GetPerk(array('UserLevel' => $userLevel, 'PerkCat' => 4, 'PerkCount'=>$data['Perk_3'])); }

	/* if they want a challenge roll it */
	
	if(isset($data['Challenge'])){ $return['Challenge'] = $ClassExtras->GetChallenge(array('GameID' => 1)); }
	if(isset($data['Gamemode'])){ $return['Gamemode'] = $ClassExtras->GetGamemode(array('GameID' => 1)); }
	if(isset($data['Specialist'])){ $return['Specialist'] = $ClassExtras->GetSpecialist(array('UserLevel' => $userLevel)); }
	if(isset($data['Killstreaks'])){ $return['Killstreaks'] = $Killstreaks->GetKillstreaks(array('UserLevel' => $userLevel, 'TotalStreaks'=> 3,'GameID' => 1)); }

  	return $return;
}
?>
