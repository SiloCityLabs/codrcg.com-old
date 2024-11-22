<?php
	class Equipment{
	   /**
		* Returns Equipment
		*
		* @param $Options['UserLevel']	Level of user to make sure they get guns they already have unlocked
		* @param $Options['Type']		2= Lethal Or 1 = Tactical
		* @param $Options['EquipID']	An equipment id so that we make sure we get different tacticals or leathals
		* @param $Options ['Unlocks']   Unlocks string for prestige unlocks
		* @param $Options ['Game_ID']    Game ID
		*
		* @returns equipment
		*/
		public function GetEquipment($Options){
			global $db;

			$db->query("SELECT `ID`, `Type`, `Name`, `UnlockLevel`
						FROM `COD_Equipment`
						WHERE `Game_ID` = $Options[Game_ID] AND
							(`UnlockLevel` <= $Options[UserLevel] ".(!empty($Options ['Unlocks']) ? "OR `ID` IN ($Options[Unlocks])":'').") AND `Type`=$Options[Type]
							".(isset($Options['EquipID']) ? " AND `ID` NOT IN ($Options[EquipID])":"")."
						ORDER BY RAND()
						LIMIT 1;");

			return $db->fetchRecord();
		}/* GetEquipment */
		
	   /*
		* Returns all Equipment from a game
		*
		* @param $Options['Game_ID']
		* @param $Options['Unlocks']	Notes that you are getting data for the my-unlocks section
		*
		* @returns an array of equipment
		*/
		public function GetAllEquipment($Options){
			global $db;

			$db->query("SELECT `e`.`ID`, IF(`e`.`Type`=1,'Tactical','Lethal') `EType` , `e`.`Name`, `e`.`UnlockLevel`
						FROM `COD_Equipment` `e`
						WHERE `e`.`Game_ID`=$Options[Game_ID]
						".(isset($Options['Unlocks']) ? ' AND `e`.`UnlockLevel` > 0 ':'')." 
						ORDER BY `e`.`Type`,`e`.`UnlockLevel`");
			
			if($db->numRows() > 0){
				while ($row = $db->fetchRecord()) {
					$row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Equipment'];
					$row['TypeName'] = 'Equipment';
					$return[] = $row;
				}
			}else{
				$return = '';
			}
			
			return $return;
		}/* GetEquipment */
	}/* Equipment */
?>
