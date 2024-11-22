<?php
	require('../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	/* Initialize Classes */
	$Settings = new Settings();

	$data['error'] = [];
	$data['settingsData'] = (isset($_POST['data']) ? $_POST['data']:'');
	$data['settingsData']['roll'] = (isset($data['settingsData']['roll']) ? $data['settingsData']['roll'] : []);
	$data['settingsData']['dlc'] = (isset($data['settingsData']['dlc']) ? $data['settingsData']['dlc'] : []);
	if(!isset($data['settingsData']['Level']) || !is_numeric($data['settingsData']['Level'])){
		$data['settingsData']['Level'] = BO3_Level;
	}


	if(isset($_SESSION['SESS_MID'])){
		$Settings->PutSetting($data['settingsData']['Level'], 'BO3_Level', $_SESSION['SESS_MID']);

		if($data['settingsData']['SettingType'] == 'roll'){
			$Settings->PutSetting($data['settingsData']['roll'], 'BO3_RollSettings', $_SESSION['SESS_MID']);

	  	}elseif($data['settingsData']['SettingType'] == 'dlc'){
			$Settings->PutSetting($data['settingsData']['dlc'], 'BO3_DlcSettings', $_SESSION['SESS_MID']);
	  	}
	}
	
	# Set Roll settings
	$_SESSION['BO3_RollSettings'] = (isset($data['settingsData']['roll']) ? $data['settingsData']['roll'] : []);
	# Set DLC settings
	$_SESSION['BO3_DlcSettings'] = (isset($data['settingsData']['dlc']) ? $data['settingsData']['dlc'] : []);
	# Set User Level
	$_SESSION['BO3_Level'] = $data['settingsData']['Level'];

	unset($data['settingsData']['SettingType']);

	$data['errorcount'] = count($data['error']);
  	echo json_encode($data);
	exit();
?>