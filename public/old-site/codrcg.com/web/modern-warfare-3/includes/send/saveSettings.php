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
	if(!isset($data['settingsData']['Level']) || !is_numeric($data['settingsData']['Level'])){
		$data['settingsData']['Level'] = MW3_Level;
	}


	if(isset($_SESSION['SESS_MID'])){
		$Settings->PutSetting($data['settingsData']['Level'], 'MW3_Level', $_SESSION['SESS_MID']);

		if($data['settingsData']['SettingType'] == 'roll'){
			$Settings->PutSetting($data['settingsData']['roll'], 'MW3_RollSettings', $_SESSION['SESS_MID']);

	  	}
	}

	# Set Roll settings
	$_SESSION['MW3_RollSettings'] = (isset($data['settingsData']['roll']) ? $data['settingsData']['roll'] : []);
	# Set user level
	$_SESSION['MW3_Level'] = $data['settingsData']['Level'];

	unset($data['settingsData']['SettingType']);

	$data['errorcount'] = count($data['error']);
  	echo json_encode($data);
	exit();
?>