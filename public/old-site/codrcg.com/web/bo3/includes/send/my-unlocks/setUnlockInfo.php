<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$data = (isset($_POST['data']) ? $_POST['data']:"");
	$data['error'] = [];

	if(isset($data['Unlock']) && is_array($data['Unlock'])){
		foreach ($data['Unlock'] as $key => $value) {
			/* Set Session Data */
			$_SESSION['BO3_PrestigeUnlocks'][$key] = $value;
			if(empty($value['ID'])){ unset($_SESSION['BO3_PrestigeUnlocks'][$key]); }

			/* If user is logged in save thier prestige unlocks */
			if(isset($_SESSION['SESS_MID'])){
				$db->query("SELECT `ID` FROM `COD_Prestige_Unlocks` WHERE `Prestige`=$key AND `Member_ID`=$_SESSION[SESS_MID] AND `Game_ID`=".BO3_Game_ID." LIMIT 1;");
				//unset($value['$$hashKey']);
				if($db->numRows() == 1){
					$ID = $db->fetchOne();
					if(empty($value['ID'])){
						$sql = "DELETE FROM `COD_Prestige_Unlocks` WHERE `ID`=$ID";
					}else{
						$sql = "UPDATE `COD_Prestige_Unlocks` SET `UnlockType`=$value[Type],`Unlock_ID`=$value[ID],`Data`='".json_encode($value)."' WHERE `ID`=$ID";
					}
				}else{
					$sql = "INSERT INTO `COD_Prestige_Unlocks`(`UnlockType`, `Unlock_ID`, `Prestige`, `Member_ID`, `Data`,`Game_ID`)
						VALUES ($value[Type],$value[ID],$key,$_SESSION[SESS_MID],'".json_encode($value)."', ".BO3_Game_ID.")";
				}
				$db->query($sql);
			}
		}
	}else{
		$data['Empty'] = 1;
	}


	$data['errorcount'] = count($data['error']);
    echo json_encode($data);
	exit();
?>