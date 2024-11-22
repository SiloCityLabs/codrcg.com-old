<?php
	require('../../../includes/includes.php');
	require('../includes.php');
	ob_start();
	new Session([ 'ALL' ]);

	/* Initialized Needed Classes */
	$Classes = new Classes();

	$data['GH_Level'] = getMemberOption ('GH_Level', 10);
	$data['GH_RollSettings'] = getMemberOption ('GH_RollSettings', []);

	/* Get the classes frame */
	$ExecuteAll = new RCG_Execute();
	$class = $ExecuteAll->executeAll($data['GH_Level'],$data['GH_RollSettings']);
	
	/* Add class to the DB */
	$classArr = ['Game_ID'=> GH_Game_ID,'Data'=>$class];
	if(isset($_SESSION['SESS_MID'])){
		$classArr['MID'] = $_SESSION['SESS_MID'];
	}
	
	$classData = $Classes->SetClass($classArr);

	$classData['TinyUrl'] = getTinyUrl(['SiteSection'=> GH_Folder,'ID'=>$classData['ID']]);

	header("location: " . '/' . GH_Folder . "/class/$classData[ID]");
	exit();
?>