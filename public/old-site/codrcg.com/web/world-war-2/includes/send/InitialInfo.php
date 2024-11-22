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

	/* Get all user data for WW2 rcg */
	$data['WW2_Level'] = getMemberOption('WW2_Level',WW2_Level);
	$data['WW2_RollSettings'] = getMemberOption('WW2_RollSettings', []);
	$data['WW2_DlcSettings'] = getMemberOption('WW2_DlcSettings', []);
	$data['WW2_GunLevels'] = getMemberOption('WW2_GunLevels', []);

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings (['Game_ID' => WW2_Game_ID]);

	/* Get prestige unlocks */
	if(isset($_SESSION['SESS_MID'])) {
		$db->query ("SELECT `ID`, `UnlockType`, `Unlock_ID`, `Prestige`, `Member_ID`, `Data` FROM `COD_Prestige_Unlocks` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `Game_ID`=".WW2_Game_ID.';');
		unset($_SESSION['WW2_PrestigeUnlocks']);
		if ($db->numRows () > 0) {
			while ($row = $db->fetchRecord ()) {
				$_SESSION['WW2_PrestigeUnlocks'][$row['Prestige']] = json_decode ($row['Data'], TRUE);
			}
		}
	}

	$data['Session'] = $_SESSION;
  	echo json_encode($data);
	exit();
?>