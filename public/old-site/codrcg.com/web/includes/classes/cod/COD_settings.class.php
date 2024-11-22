<?php
	class Settings{
	   /**
		* Returns Roll Settings
		*
		* @param $Options['Game_ID']	The id of the game you are getting the settings for
		*
		* @returns an array of roll settings
		*/
		public function GetRollSettings($Options){
			global $db;

			$db->query("SELECT `s`.`ID`, `s`.`Name`, `s`.`Index`, `s`.`Description`
						FROM `COD_Settings` `s`
						JOIN `COD_Game_Settings` `gs` ON `gs`.`Setting_ID`=`s`.`ID` AND `gs`.`Game_ID`=$Options[Game_ID]
						WHERE `s`.`isActive`=1
						ORDER BY `s`.`Ordering`,`s`.`Name`");
			$count = 0;
			while ($row = $db->fetchRecord()) {
				$return[$count] = $row;
				$count++;
			}
			return (!empty($return) ? $return : []);
		}/* GetRollSettings */
		
	   /**
		* Returns DLC Settings
		*
		* @param $Options['Game_ID']	The id of the game you are getting the settings for
		*
		* @returns an array of DLC
		*/
		public function GetDLCSettings($Options){
			global $db;
			
			$db->query("SELECT `ID`, `Name` FROM `COD_DLC` WHERE `Game_ID`=$Options[Game_ID] AND `isActive`=1");
			$count = 0;
			while ($row = $db->fetchRecord()) {
				$return[$count] = $row;
				$count++;
			}

			return (!empty($return) ? $return : []);
		}/* GetDLCSettings */

		/**
		 * Saves Roll Settings
		 *
		 * @param $data			Data to update settings
		 * @param $OptionName	Which Setting you are saving
		 * @param $Member_ID	Member ID
		 *
		 */
		public function PutSetting($data,$OptionName,$Member_ID){
			global $db;

			$data = (is_array($data) || is_object($data) ? json_encode($data) : $data);

			$db->query("SELECT `ID` FROM `Member_Options` WHERE `Member_ID`=$Member_ID AND `OptionName`='$OptionName' LIMIT 1");
			if($db->numRows() == 1){
				$db->query("UPDATE `Member_Options` SET `OptionValue`='$data' WHERE `Member_ID`=$Member_ID AND `OptionName`='$OptionName'");
			}else{
				$db->query("INSERT INTO `Member_Options`(`OptionName`,`OptionValue`,`Member_ID`) VALUES('$OptionName','$data',$Member_ID)");
			}

		}/* PutSetting */
	}/* Settings */
?>
