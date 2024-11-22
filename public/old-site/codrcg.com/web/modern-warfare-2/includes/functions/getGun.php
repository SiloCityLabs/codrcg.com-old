<?php
	function getGun ($type,$gunClass,$data,&$return) {
  		$Gun = new Gun();

		$hasAttach = ((rand (0, 10)) % 2 == 0 ? 1 : 0);
		//TODO: Figure out optics
		$hasOptic = 0;
		$return[$type] = $Gun->GetGun (['UserLevel' => $data['userLevel'], 'GunClass' => $gunClass, 'HasAttach' => $hasAttach, 'Game_ID' => MW2_Game_ID]);
		/* Get Primary Attachment */
		if ($hasAttach == 1 || isset($return['Bling'])) {
			//If Bling perk is selected choose 2 attachments
			$attachs = (isset($return['Bling']) ? 2 : 1);
			$i = 0;

			while (true) {
				$return[$type.'_Attach'] = $Gun->GetGunAttach ([
					'GunID' => $return[$type]['ID'], 'TotalAttachments' => $attachs, 'allAttachs' => 1, 'UnlockLevel' => $data['userLevel'],
					'Group_ID' => $return[$type]['Attachment_Group_ID']
				]);

				//if attachments are valid break the loop
				$valid = ValidateAttachs::MW2 ($return[$type.'_Attach'], $hasOptic);
				if ($valid) {
					break;
				}
				$i++;
				if ($i > 20) {
					break;
				}
			}
		}
	}