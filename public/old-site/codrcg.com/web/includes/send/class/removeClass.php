<?php
	require('../../includes.php');
	ob_start('json_minify');
	new Session([1,2,3]);
	header('Content-Type: application/json');
	
	$data['error'] = [];
	/* Get Class Frame */
  	$id = (isset($_POST['id']) ? $_POST['id']:'');
	
	/* Initialize Classes */
	$Classes = new Classes();
	
	$Classes->DeleteMemberClass(['ID'=>$id,'MID'=>$_SESSION['SESS_MID']]);

	$data['Join_ID'] = '';

	$data['errorcount'] = count($data['error']);
    echo json_encode($data);
	exit();