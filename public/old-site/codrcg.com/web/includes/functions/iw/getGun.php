<?php
	function getGunIW ($type,$gunClass,$data,&$return) {
  		$Gun = new Gun();

		$hasOptic = (!empty($data[$type.'_Optic']) ? 1:0);
		$hasAttach = (!empty($data[$type.'_Attach']) ? 1:0);
		$args = [
			'UserLevel'=>$data['userLevel'],'GunClass'=>$gunClass,'HasOptic'=>$hasOptic,'HasAttach'=>$hasAttach,
			'Unlocks' => $data['prestigeUnlocks']['Gun'], 'Game_ID' => IW_Game_ID
		];
		//If overkill make sure you cant get the same Gun
		if ($type == 'Overkill') {
			$args['GunID'] = $return['Primary']['ID'];
		}
    	$return[$type] = $Gun->GetGun($args);
		$gunID = $return[$type]['ID'];
		$GunUnlockLevel = (!empty($_SESSION['IW_GunLevels'][$gunID]) ? $_SESSION['IW_GunLevels'][$gunID] : 20);

		/* Get Attachments */
    	if(!empty($data[$type.'_Attach'])) {
			$i = 0;
			while (true) {
				$return[$type.'_Attach'] = $Gun->GetGunAttach ([
					'GunID' => $gunID, 'TotalAttachments' => $data[$type.'_Attach'],
					'UnlockLevel' => $GunUnlockLevel, 'Group_ID' => $return[$type]['Attachment_Group_ID']
				]);

				//if attachments are valid break the loop
				$valid = ValidateAttachs::IW ($return[$type.'_Attach'], $hasOptic);
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