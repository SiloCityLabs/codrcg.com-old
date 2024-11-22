<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session([1,2,3]);
	header('Content-Type: application/json');
	
	$data['error'] = [];
	/* Get Class Frame */
  	$dataObj = (isset($_POST['data']) ? $_POST['data']:"");
	
	/* Initialize Classes */
	$Classes = new Classes();
	
	$data['Join_ID'] = $Classes->SetMemberClass(['ID'=>$dataObj['ID'],'MID'=>$_SESSION['SESS_MID']]);

	$data['errorcount'] = count($data['error']);
    echo json_encode($data);
	exit();
?>
