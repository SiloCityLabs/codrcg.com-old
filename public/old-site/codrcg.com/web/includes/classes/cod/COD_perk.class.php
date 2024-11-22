<?php
	class Perk{
	 /**
		* Returns Perk
		*
		* @param $Options['UserLevel']		Level of user to make sure they get guns they already have unlocked
		* @param $Options['PerkCat']		Which Perk Level it is in
		* @param $Options['PerkCount']		Which Perk Level it is in
	  	* @param $Options ['Unlocks']   	Unlocks string for prestige unlocks
	  	* @param $Options ['Game_ID']   	Game ID you are getting perks from
	  	* @param $Options ['Perk_ID']   	A perk id or multiple perk ids so that we make sure we get different perks
		*
		* @returns a perk
		*/
		public function GetPerk($Options){
			global $db;

			$db->query("SELECT `p`.`ID`, `p`.`Name`, `p`.`Category_ID`, `p`.`UnlockLevel`, `pc`.`Name` `CatName`
						FROM `COD_Perks` `p`
						JOIN `COD_PerkCategories` `pc` ON `pc`.`ID`=`p`.`Category_ID`
						WHERE (`p`.`UnlockLevel` <= $Options[UserLevel] ".(!empty($Options ['Unlocks']) ? "OR `p`.`ID` IN ($Options[Unlocks])":'').")
							AND `p`.`Game_ID`= $Options[Game_ID]
							".(isset($Options['PerkCat']) ? " AND `Category_ID`=$Options[PerkCat]":"")."
							".(isset($Options['Perk_ID']) ? " AND `p`.`ID` NOT IN ($Options[Perk_ID])":"")."
						ORDER BY RAND()
						LIMIT $Options[PerkCount]");
			$count = 0;
			while ($row = $db->fetchRecord()) {
				$return[$count] = $row;
				$count++;
			}
			return $return;
		}/* GetPerk */

	   /*
		* Returns All Perks for a game
		*
		* @param $Options['Game_ID']
		* @param $Options['Unlocks']	Notes that you are getting data for the my-unlocks section
		*
		* @returns a list of perks
		*/
		public function GetPerks($Options){
			global $db;

			$db->query("SELECT `p`.`ID`, `p`.`Name`, `p`.`Category_ID`, `p`.`UnlockLevel`, `pc`.`Name` `CatName`
						FROM `COD_Perks` `p`
						JOIN `COD_PerkCategories` `pc` ON `pc`.`ID`=`p`.`Category_ID`
						WHERE `p`.`Game_ID`=$Options[Game_ID]
						".(isset($Options['Unlocks']) ? ' AND `p`.`UnlockLevel` > 0 ':'')."
						GROUP BY `p`.`ID`
						ORDER BY `CatName`,`p`.`UnlockLevel`");

			if($db->numRows() > 0){
				while ($row = $db->fetchRecord()) {
					$row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Perk'];
					$row['TypeName'] = 'Perks';
					$return[] = $row;
				}
			}else{
				$return = '';
			}

			return $return;
		}/* GetPerk */
	}/* Perk */
?>
