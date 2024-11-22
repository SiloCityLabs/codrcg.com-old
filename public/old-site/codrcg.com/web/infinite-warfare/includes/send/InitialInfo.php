<?php
	require('../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$data['Post'] = (isset($_POST['data']) ? $_POST['data']:'');
	/* Call classes needed */
	$Settings = new Settings();

	/* Check if user is logged in */
	$data['isLoggedIn'] = (isset($_SESSION['SESS_MID']) ? 1:0);

	/* Get all user data for bo3 rcg */
	$data['IW_Level'] = getMemberOption('IW_Level',IW_Level);
	$data['IW_RollSettings'] = getMemberOption('IW_RollSettings', []);
	$data['IW_DlcSettings'] = getMemberOption('IW_DlcSettings', []);
	$data['IW_GunLevels'] = getMemberOption('IW_GunLevels', []);

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings (['Game_ID' => IW_Game_ID]);
	/* Get DLC List */
	$data['DLC'] = $Settings->GetDLCSettings (['Game_ID' => IW_Game_ID]);


	/* Get prestige unlocks */
	if(isset($_SESSION['SESS_MID'])) {
		$db->query ("SELECT `ID`, `UnlockType`, `Unlock_ID`, `Prestige`, `Member_ID`, `Data` FROM `COD_Prestige_Unlocks` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `Game_ID`=".IW_Game_ID);
		unset($_SESSION['IW_PrestigeUnlocks']);
		if ($db->numRows () > 0) {
			while ($row = $db->fetchRecord ()) {
				$_SESSION['IW_PrestigeUnlocks'][$row['Prestige']] = json_decode ($row['Data'], TRUE);
			}
		}
	}

	$data['Session'] = $_SESSION;
  	echo json_encode($data);
	exit();
?>
