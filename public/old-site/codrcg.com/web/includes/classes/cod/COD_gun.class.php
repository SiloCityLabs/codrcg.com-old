<?php
	class Gun {
	 /**
		* Randomly chooses a gun
		*
		* @param $Options['UserLevel']		Level of user to make sure they get guns they already have unlocked
		* @param $Options['GunClass']		2 = Secondary Or 1 = Primary
		* @param $Options['GunID']			A gun id so that we make sure we get different guns
		* @param $Options['HasOptic']		If a optic is chosen (to stop Weapons without optic from being chosen)
		* @param $Options['HasAttach']		If a attchment is chosen (to stop Weapons without attachments from being chosen)
		* @param $Options['DlcSettings']	DLC settings
		* @param $Options['Unlocks']		Unlocks string for prestige unlocks
		* @param $Options['Game_ID']		ID of the current game you are rolling for
		* @param $Options['GunType']		ID of the gun type u want
		*
		* @returns an array
		*/
		public function GetGun($Options){
			global $db;
			$Options['HasOptic'] = (!empty($Options['HasOptic']) ? $Options['HasOptic'] : 0);
			$Options['HasAttach'] = (!empty($Options['HasAttach']) ? $Options['HasAttach'] : 0);

			$sql = "SELECT `g`.`ID`, `gt`.`Name` `Type`, `g`.`Name`, IF(`g`.`GunClass`=1,'Primary','Secondary') `GunClass`, `g`.`Data`, `g`.`DLC_ID`,
						`g`.`Attachment_Group_ID`, `g`.`Proficiency_Group_ID`
					FROM `COD_Guns` `g`
					JOIN `COD_GunTypes` `gt` ON `gt`.`ID`=`g`.`Type_ID`
					WHERE `g`.`Game_ID` = $Options[Game_ID] AND
						(`g`.`UnlockLevel` <= $Options[UserLevel] ".(!empty($Options['Unlocks']) ? "OR `g`.`ID` IN ($Options[Unlocks])":'').") AND `GunClass`=$Options[GunClass]
						AND (ISNULL(`g`.`DLC_ID`) ".(!empty($Options['DlcSettings']) ? " OR `g`.`DLC_ID` IN (".implode(',', $Options['DlcSettings']).")":'').")
						".(isset($Options['GunID']) ? " AND `g`.`ID` NOT IN ($Options[GunID])":"")."
						".($Options['HasOptic'] == 1 ? " AND `g`.`Optic` = 1":"")."
						".($Options['HasAttach'] == 1 ? " AND `g`.`Attachments` = 1":"")."
						".(!empty($Options['GunType']) ? " AND `g`.`Type_ID` = $Options[GunType]":"")."
					ORDER BY RAND()
					LIMIT 1;";
			$db->query($sql);

			return $db->fetchRecord();
		}/* GetGun */

		/**
		* Returns Gun Attachments
		*
		* @param $Options['TotalAttachments']	Number of attachments that need to be selected
		* @param $Options['GunID']				Id of the chosen gun
		* @param $Options['Group_ID']			Id of the attachment group
		* @param $Options['isOptic']			If you want to only select optics
		* @param $Options['allAttachs']			Choose from all attachments no matter of type
		* @param $Options['UnlockLevel']		The weapons or users level
		*
		* @returns array
		*/
		public function GetGunAttach($Options){
			global $db;

			if (empty($Options['Group_ID'])) {
				return [];
			}

			if (empty($Options['UnlockLevel'])) {
				$Options['UnlockLevel'] = 10;
			}

			//Set Gun weapon/user level
			$WHERE = " WHERE `aga`.`UnlockLevel` <= $Options[UnlockLevel] AND `g`.`ID`= $Options[GunID]
						AND `aga`.`Group_ID`=$Options[Group_ID]";
			if (!isset($Options['allAttachs'])) {
				if (isset($Options['isOptic'])) {
					$WHERE .= ' AND  `a`.`AttachType_ID`=1';
				} else {
					$WHERE .= ' AND (`a`.`AttachType_ID` <> 1 OR ISNULL(`a`.`AttachType_ID`))';
				}
			}

			$db->query("SELECT `a`.`ID`, `a`.`Name`
						FROM `COD_Guns` `g`
						JOIN `COD_Attachment_Groups_Attachments` `aga` ON `aga`.`Group_ID`=`g`.`Attachment_Group_ID`
						JOIN `COD_Attachments` `a` ON `aga`.`Attachment_ID`=`a`.`ID`
						$WHERE
						GROUP BY `a`.`ID`
						ORDER BY RAND()
						LIMIT $Options[TotalAttachments];");

			if($db->numRows() > 0){
				if(isset($Options['isOptic'])){
					return $db->fetchRecord();
				}else{
					while ($row = $db->fetchRecord()) {
						$return[] = $row;
					}

					return $return;
				}
			}else{
				return [];
			}
		}/* GetGunAttach */

	   /*
		* Get All guns that are part of a specific game
		*
		* @param $Options['Game_ID']
		* @param $Options['Unlocks']	Notes that you are getting data for the my-unlocks section
		* @param $Options['GunLevels']	Notes that you are getting data for the gun-levels section
		*
		* @returns a list of guns
		*/
		public function GetGuns($Options){
			global $db;
			$sql = "SELECT `g`.`ID`, `gt`.`Name` `Type`, `g`.`Name`, IF(`g`.`GunClass`=1,'Primary','Secondary') `GunClass`, `d`.`Name` `Dlc_Name`,
						`g`.`UnlockLevel`,IF(!ISNULL(`g`.`DLC_ID`),'Yes','No') `isDLC`
					FROM `COD_Guns` `g`
					JOIN `COD_GunTypes` `gt` ON `gt`.`ID`=`g`.`Type_ID`
					LEFT JOIN `COD_DLC` `d` ON `d`.`ID`=`g`.`DLC_ID`
					WHERE `g`.`Game_ID`=$Options[Game_ID] ".
					(isset($Options['Unlocks']) ? ' AND `g`.`UnlockLevel` > 0 ':'').
					(isset($Options['GunLevels']) ? ' AND `g`.`Attachments` = 1 ':'')."
					GROUP BY `g`.`ID`
					ORDER BY `Type`,`g`.`UnlockLevel`";
			$db->query($sql);

			if($db->numRows() > 0){
				while ($row = $db->fetchRecord()) {
					//TODO: WTF is this
					$row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Gun'];
					$row['TypeName'] = 'Guns';
					$return[] = $row;
				}
			}else{
				$return = '';
			}

			return $return;
		}/* GetGuns */


		/**
		* Returns Gun Proficiency
		* @param $Options['GunID']				Id of the chosen gun
		* @param $Options['Group_ID']			Id of the attachment group
		* @param $Options['UnlockLevel']		The weapons or users level
		*
		* @returns array
		*/
		public function GetGunProf($Options){
			global $db;

			if (empty($Options['Group_ID'])) {
				return [];
			}

			if (empty($Options['UnlockLevel'])) {
				$Options['UnlockLevel'] = 10;
			}

			//Set Gun weapon/user level
			$WHERE = " WHERE `pgp`.`UnlockLevel` <= $Options[UnlockLevel] AND `g`.`ID`= $Options[GunID]
						AND `pgp`.`Group_ID`=$Options[Group_ID]";

			$db->query("SELECT `p`.`ID`, `p`.`Name`
						FROM `COD_Guns` `g`
						JOIN `COD_Gun_Proficiency_Groups_Proficiencys` `pgp` ON `pgp`.`Group_ID`=`g`.`Proficiency_Group_ID`
						JOIN `COD_Gun_Proficiencys` `p` ON `pgp`.`Proficiency_ID`=`p`.`ID`
						$WHERE
						GROUP BY `p`.`ID`
						ORDER BY RAND()
						LIMIT 1;");

			if($db->numRows() > 0){
				return $db->fetchRecord();
			}else{
				return [];
			}
		}/* GetGunProf */
	}/* Gun */
?>
