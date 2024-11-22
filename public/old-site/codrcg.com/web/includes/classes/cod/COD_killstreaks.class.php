<?php
	class Killstreaks{
	 /**
		* Returns Killstreaks
		*
		* @param $Options['UserLevel']		Level of user to make sure they get guns they already have unlocked
		* @param $Options['TotalStreaks']	The amount of killstreaks to select
		* @param $Options['Game_ID']		Game id
		* @param $Options['DiffPoints']		Make sure no streaks are the same points
	  	* @param $Options ['Unlocks']       Unlocks string for prestige unlocks
	  	* @param $Options ['Type']       	Choose streak type, ex: Assault vs support
		*
		* @returns an array of killstreaks
		*/
		public function GetKillstreaks($Options){
			global $db;

			$return = array();

			$WHERE = "WHERE (`k`.`UnlockLevel` <= $Options[UserLevel]";
			if (!empty($Options ['Unlocks'])) {
				$WHERE .= " OR `k`.`ID` IN ($Options[Unlocks])";
			}
			$WHERE .= ')';
			if (!empty($Options ['Type'])) {
				$WHERE .= " AND `k`.`Type_ID` = $Options[Type]";
			}

			$db->query("SELECT `k`.`ID`, `k`.`Name`, `k`.`Points`, `k`.`UnlockLevel`
						 FROM `COD_Killstreaks` `k`
						 JOIN `COD_Games` `g` ON `g`.`ID`=`k`.`Game_ID` AND `k`.`Game_ID`=$Options[Game_ID]
						 $WHERE
						 ORDER BY RAND()
						 LIMIT $Options[TotalStreaks];");

			$count = 0;
			while ($row = $db->fetchRecord()) {
				$return[$count] = $row; $count++;
			}

			return sort_multi_array($return, 'Points');
		}/* GetKillstreaks */

		/**
 		* Creates/Updates a Killstreak info
 		*
 		* @param $data	all Killstreak data
 		*
 		* @returns true/false
 		*/
 		public function SetKillstreak($data){
 			global $db;

			if(isset($data['ID']) && is_numeric($data['ID'])){
				$db->query("UPDATE `COD_Killstreaks` SET `InternalName`='$data[InternalName]', `Name`='$data[Name]', `UnlockLevel`=$data[UnlockLevel], `Points`=$data[Points] WHERE `ID`=$data[ID]");
			}else{
				$db->query("INSERT INTO `COD_Killstreaks`(`InternalName`, `Name`, `UnlockLevel`, `Points`) VALUES ('$data[InternalName]', '$data[Name]', $data[UnlockLevel], $data[Points])");
			}

 			return true;
 		}/* SetKillstreak */

	   /*
		* Returns All Killstreaks from a game
		*
		* @param $Options['Game_ID'] 	Game id
		* @param $Options['Unlocks']	Notes that you are getting data for the my-unlocks section
		*
		* @returns an array of killstreaks
		*/
		public function GetAllKillstreaks($Options){
			global $db;

			$db->query("SELECT `k`.`ID`, `k`.`Name`, `k`.`Points`, `k`.`UnlockLevel`
						FROM `COD_Killstreaks` `k`
						JOIN `COD_Games` `g` ON `g`.`ID`=`k`.`Game_ID` AND `k`.`Game_ID`=$Options[Game_ID]
						".(isset($Options['Unlocks']) ? ' WHERE `k`.`UnlockLevel` > 0 ':'')."
						ORDER BY `k`.`Points`,`k`.`UnlockLevel`");

			if($db->numRows() > 0){
				while ($row = $db->fetchRecord()) {
					$row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Streak'];
					$row['TypeName'] = 'Killstreaks';
					$return[] = $row;
				}
			}else{
				$return = '';
			}

			return $return;
		}/* GetKillstreaks */

	}/* Killstreaks */
