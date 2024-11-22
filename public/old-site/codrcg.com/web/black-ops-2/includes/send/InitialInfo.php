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

	/* Get all user data for bo2 rcg */
	$data['BO2_Level'] = getMemberOption('BO2_Level',BO2_Level);
	$data['BO2_RollSettings'] = getMemberOption('BO2_RollSettings', []);
	$data['BO2_GunLevels'] = getMemberOption('BO2_GunLevels', []);

	/* Get Settings List */
	$data['Settings'] = $Settings->GetRollSettings (['Game_ID' => BO2_Game_ID]);

	/* Get prestige unlocks */
	if(isset($_SESSION['SESS_MID'])) {
		$db->query ("SELECT `ID`, `UnlockType`, `Unlock_ID`, `Prestige`, `Member_ID`, `Data` FROM `COD_Prestige_Unlocks` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `Game_ID`=".BO2_Game_ID.';');
		unset($_SESSION['BO2_PrestigeUnlocks']);
		if ($db->numRows () > 0) {
			while ($row = $db->fetchRecord ()) {
				$_SESSION['BO2_PrestigeUnlocks'][$row['Prestige']] = json_decode ($row['Data'], TRUE);
			}
		}
	}

	$data['Session'] = $_SESSION;
  	echo json_encode($data);
	exit();
?>