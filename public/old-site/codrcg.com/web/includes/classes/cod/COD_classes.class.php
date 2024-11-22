<?php
	class Classes{
	 /**
		* Returns the class that matches the given ID
		*
		* @param $Options['ID']			Class ID
		* @param $Options['AddViews']	Add views to class
		* @param $Options['MID']		Member ID
		*
		* @returns an array of the class
		*/
		public function GetClass($Options) {
			global $db;
			$db->query("SELECT `c`.`ID`, `c`.`Member_ID`, `c`.`TinyUrl`, `c`.`Name`, `c`.`Views`, `c`.`Data` ".(isset($Options['MID']) ? ', `c2`.`ID` `Join_ID`':'')."
						FROM `COD_Classes` `c`
						".(isset($Options['MID']) ? "LEFT JOIN `COD_Member_Classes` `c2` ON `c2`.`Class_ID`=$Options[ID] AND `c2`.`Member_ID`=$Options[MID]":'')."
						WHERE `c`.`ID`=$Options[ID]
						LIMIT 1;");
			if($db->numRows() == 1) {
				$return = $db->fetchRecord();
				$return['Data'] = json_decode($return['Data'],true);
				if(!isset($return['Join_ID'])) {$return['Join_ID'] = null;}
				if(isset($Options['AddViews'])) {
					$return['Views']++;
					$db->query("UPDATE `COD_Classes` SET `Views`= $return[Views] WHERE `ID`=$Options[ID]");
				}
			}else{
				$return = false;
			}
			
			
			return $return;
		}/* GetClass */

		/**
		* Creates the DB record for the new class
		*
		* @param $Options['MID']		Member ID
		* @param $Options['Game_ID']	Game ID
		* @param $Options['isAppClass']	Class wass rolled from app
		*
		* @returns the class
		*/
		public function SetClass($Options) {
			global $db;
			$Options['isAppClass'] = (isset($Options['isAppClass']) ? 1 : 0);
			$DATA = addslashes(json_encode($Options['Data']));
			$db->query("INSERT INTO `COD_Classes`(`Member_ID`, `Game_ID`, `TinyUrl`, `Name`, `Views`, `IP`, `CreationDate`, `Data`,`isAppClass`)
				VALUES (".(!isset($Options['MID']) ? 'NULL':"$Options[MID]").",$Options[Game_ID],NULL,'".COD_RandomName()."',1,'$_SERVER[REMOTE_ADDR]',CURRENT_TIMESTAMP,'".$DATA."',$Options[isAppClass])");
			$id = $db->lastID();
			
			$return = $this->GetClass(array('ID'=>$id));
			return $return;
		}/* SetClass */
		
		/**
		* Saves a class so a memebr can view it whenever they want
		*
		* @param $Options['MID']		Member ID
		*
		* @returns the join id
		*/
		public function SetMemberClass($Options) {
			global $db;
			
			$db->query("INSERT INTO `COD_Member_Classes`(`Member_ID`, `Class_ID`) VALUES ($Options[MID],$Options[ID])");
			$id = $db->lastID();
			
			return $id;
		}/* SetClass */
		
		/**
		* deletes the join between the member and the class
		*
		* @param $Options['MID']		Member ID
		*
		* @returns the join id
		*/
		public function DeleteMemberClass($Options) {
			global $db;
			
			$db->query("DELETE FROM `COD_Member_Classes` WHERE `Member_ID`=$Options[MID] AND `Class_ID`=$Options[ID]");
			$id = $db->lastID();
			
			return $id;
		}/* SetClass */

	}/* Classes */
?>
