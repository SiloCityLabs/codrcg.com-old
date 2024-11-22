<?php
	class ClassExtras{
	   /**
		* Returns A challenge
		*
		* @param $Options['Game_ID']	ID of the game the challenge is being rolled for
		*
		* @returns challenge
		*/
		public function GetChallenge($Options) {
			global $db;

			$db->query("SELECT `c`.`Challenge`
						FROM `COD_Challenges` `c`
						JOIN `COD_Game_Challenges` `gc` ON `gc`.`Challenge_ID`=`c`.`ID` AND `gc`.`Game_ID`=$Options[Game_ID]
						ORDER BY RAND()
						LIMIT 1;");

			return $db->fetchOne();
		}/* GetChallenge */

	   /**
		* Returns A gamemode
		*
		* @param $Options['Game_ID']	ID of the game the gamemode is being rolled for
		*
		* @returns gamemode
		*/
		public function GetGamemode($Options) {
			global $db;

			$db->query("SELECT `c`.`Name`
						FROM `COD_Gamemodes` `c`
						JOIN `COD_Game_Gamemodes` `gc` ON `gc`.`Gamemode_ID`=`c`.`ID` AND `gc`.`Game_ID`=$Options[Game_ID]
						ORDER BY RAND()
						LIMIT 1;");

			return $db->fetchOne();
		}/* GetGamemode */

	   /** Black Ops 3 Exclusive
		* Returns A specialist
	    *
		* @param $Options['UserLevel']	Level of user to make sure they get specialists they already have unlocked
		* @param $Options['Unlocks']	Level of user to make sure they get specialists they already have unlocked
		*
		* @returns specialist
		*/
		public function GetSpecialist($Options) {
			global $db;

			$db->query("SELECT `Specialist`
						FROM `COD_BO3_Specialists`
						WHERE `UnlockLevel` <= $Options[UserLevel] ".(!empty($Options['Unlocks']) ? "OR `ID` IN ($Options[Unlocks])":'')."
						ORDER BY RAND()
						LIMIT 1;");

			return $db->fetchOne();
		}/* GetSpecialist */

	   /** Black Ops 3 Exclusive
		* Returns All specialists
	    *
		* @param $Options['Unlocks']	Notes that you are getting data for the my-unlocks section
	    *
		* @returns a list of all specialists
		*/
		public function GetSpecialists($Options) {
			global $db;

			$db->query("SELECT `ID`,`Specialist` AS `Name`
					    FROM `COD_BO3_Specialists`
					    ".(isset($Options['Unlocks']) ? ' WHERE `UnlockLevel` > 0 ':'')."
					    ORDER BY `UnlockLevel`");

			if($db->numRows() > 0) {
				while ($row = $db->fetchRecord()) {
					$row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Specialist'];
					$row['TypeName'] = 'Specialists';
					$return[] = $row;
				}
			}else{
				$return = '';
			}
			return $return;
		}/* GetSpecialist */


        /** Infinite Warfare Exclusive
         * Returns A specialist
         *
         * @param $Options ['UserLevel']    Level of user to make sure they get specialists they already have unlocked
         * @param $Options ['Unlocks']    Level of user to make sure they get specialists they already have unlocked
         *
         * @returns specialist
         */
        public function GetRig ($Options) {
            global $db;

            $arr = [['Name' => 'Payload', 'Value' => 1], ['Name' => 'Trait', 'Value' => 2]];
			//Get random rig
			$db->query('SELECT `ID`,`Name` FROM `COD_IW_Rigs` WHERE `UnlockLevel` <= '.$Options['UserLevel'].' ORDER BY RAND() LIMIT 1');
			$rig = $db->fetchRecord();

            foreach ($arr as $value) {
                $db->query ("SELECT `Name`
                        FROM `COD_IW_Rig_Extras`
						WHERE `Type` = $value[Value] AND `Rig_ID` = $rig[ID]
						AND (`UnlockLevel` <= $Options[UserLevel] ".(!empty($Options['Unlocks']) ? "OR `ID` IN ($Options[Unlocks]))" : ')')."
						ORDER BY RAND()
						LIMIT 1;");

                $return[$value['Name']] = $rig['Name'].' '.$db->fetchOne ();
            }

            return $return;
        }/* GetRig */


        /** Black Ops 3 Exclusive
         * Returns All specialists
         *
         * @param $Options ['Unlocks']    Notes that you are getting data for the my-unlocks section
         *
         * @returns a list of all specialists
         */
        public function GetRigs ($Options) {
            global $db;

            $db->query ("SELECT CONCAT(`r`.`Name`, ' ', `re`.`Name`) `Name`, `re`.`UnlockLevel`, IF(`re`.`Type` = 1, 'Payload', 'Trait') `Type`
                        FROM `COD_IW_Rigs` `r`
                        JOIN `COD_IW_Rig_Extras` `re` ON `re`.`Rig_ID` = `r`.`ID`".
                        (isset($Options['Unlocks']) ? ' WHERE `re`.`UnlockLevel` > 0 ' : '')."
                        ORDER BY `r`.`ID`, `re`.`Type`, `re`.`UnlockLevel`");

            if ($db->numRows () > 0) {
                while ($row = $db->fetchRecord ()) {
                    $row['Type'] = $GLOBALS['BO3_PrestigeTypes']['Specialist'];
                    $row['TypeName'] = 'Rigs';
                    $return[] = $row;
                }
            }else {
                $return = '';
            }

            return $return;
        }/* GetRigs */

	}/* ClassExtras */
?>