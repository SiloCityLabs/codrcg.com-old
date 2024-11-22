<?php
	function getGun ($type,$gunClass,$data,&$return) {
  		$Gun = new Gun();

		$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		$hasOptic = 0;
		$args = [
			'UserLevel'=>$data['userLevel'],'GunClass'=>$gunClass,'HasAttach'=>$hasAttach,'Game_ID' => MW3_Game_ID
		];

		//If overkill make sure you cant get the same Gun
		if ($type == 'Overkill') {
			$args['GunID'] = $return['Primary']['ID'];
		}
    	$return[$type] = $Gun->GetGun($args);
		$gunID = $return[$type]['ID'];
		$GunUnlockLevel = (!empty($_SESSION['MW3_GunLevels'][$gunID]) ? $_SESSION['MW3_GunLevels'][$gunID] : 30);

		//Get weapon proficiency
		//TODO: Figure out if overkill weapons can get them
		if ($type == 'Primary') {
			$return[$type.'_Prof'] = $Gun->GetGunProf ([
				'GunID' => $return[$type]['ID'], 'UnlockLevel' => $data['userLevel'], 'Group_ID' => $return[$type]['Proficiency_Group_ID']
			]);
		}
		$isAttachs = (isset($return[$type.'_Prof']) && $return[$type.'_Prof']['Name'] == 'Attachments' ? 1 : 0);

		/* Get Primary Attachment(s) if hasAttach == 1 or the weapon proficiency == Attachments */
		if ($hasAttach == 1 || $isAttachs) {
			//If Attachments profieciency is selected choose 2 attachments
			$attachs = ($isAttachs ? 2 : 1);

			$hasOptic = ((rand (0, 15)) % 2 == 0 ? 1 : 0);

			/* Get Optic */
			if($hasOptic) {
				$attachs -= 1;
				$return[$type.'_Optic'] = $Gun->GetGunAttach([
					'GunID'=>$return[$type]['ID'], 'TotalAttachments'=>1, 'isOptic'=>1, 'UnlockLevel' => $GunUnlockLevel,
					'Group_ID' => $return[$type]['Attachment_Group_ID']
				]);
			}

			if ($attachs > 0) {
				while (true) {
					$return[$type.'_Attach'] = $Gun->GetGunAttach ([
						'GunID' => $return[$type]['ID'], 'TotalAttachments' => $attachs, 'allAttachs' => 1, 'UnlockLevel' => $GunUnlockLevel,
						'Group_ID' => $return[$type]['Attachment_Group_ID']
					]);

					//if attachments are valid break the loop
					$valid = ValidateAttachs::MW3 ($return[$type.'_Attach'], $hasOptic);
					if ($valid) {
						break;
					}
					$i++;
					if ($i > 10) {
						break;
					}
				}
			}
		}
	}