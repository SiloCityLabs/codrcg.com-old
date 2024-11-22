<?php
	function getGun ($type,$gunClass,&$data,&$return) {
  		$Gun = new Gun();

		$hasOptic = 0;
		$optic = rand(0, 10);
		
		# Check if i should add an optic
		if($optic % 2 == 0 && $data[$type.'_Attach'] >= 1) {
			$data[$type.'_Attach'] -= 1;
			$data[$type.'_Optic'] = 1;
			$hasOptic = 1;
		}
		
		$args = [
			'UserLevel'=>$data['userLevel'],'GunClass'=>$gunClass,'HasOptic'=>$hasOptic,'HasAttach'=>1,
			'Unlocks' => $data['prestigeUnlocks']['Gun'], 'Game_ID' => WW2_Game_ID, 'DlcSettings' => $_SESSION['WW2_DlcSettings']
		];
		
		if (isset($data['Serrated'])) {
			if ($type == 'Primary') {
				//Melee ID is 10
				$args['GunType'] = 10;
				$args['GunClass'] = 2;
				$args['HasOptic'] = 0;
				$args['HasAttach'] = 0;
			} else {
				//Pistol ID is 6
				$args['GunType'] = 6;
			}
		
		} else if (isset($data['Launcher'])) {
			//Launchers ID is 8
			$args['GunType'] = 8;
			$args['HasOptic'] = 0;
			$args['HasAttach'] = 0;
		}
		# If overkill make sure you cant get the same Gun
		if ($type == 'Overkill') {
			$args['GunID'] = $return['Primary']['ID'];
		}
    	$return[$type] = $Gun->GetGun($args);
		$gunID = $return[$type]['ID'];
		$GunUnlockLevel = (!empty($_SESSION['WW2_GunLevels'][$gunID]) ? $_SESSION['WW2_GunLevels'][$gunID] : 20);

		# Get Attachments
		if (isset($data['Duelist']) && $type == 'Secondary') {
			$return[$type.'_Attach'] = [['Name' => 'Akimbo']];
		} else if(!empty($data[$type.'_Attach'])) {
			$i = 0;
			while (true) {
				$return[$type.'_Attach'] = $Gun->GetGunAttach ([
					'GunID' => $gunID, 'TotalAttachments' => $data[$type.'_Attach'],
					'UnlockLevel' => $GunUnlockLevel, 'Group_ID' => $return[$type]['Attachment_Group_ID']
				]);

				# if attachments are valid break the loop
				$valid = ValidateAttachs::WW2 ($return[$type.'_Attach'], $hasOptic);
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
		if(!empty($data[$type.'_Optic'])) {
			$return[$type.'_Optic'] = $Gun->GetGunAttach([
				'GunID'=>$gunID, 'TotalAttachments'=>1, 'isOptic'=>1, 'UnlockLevel' => $GunUnlockLevel,
				'Group_ID' => $return[$type]['Attachment_Group_ID']
			]);
		}
	}