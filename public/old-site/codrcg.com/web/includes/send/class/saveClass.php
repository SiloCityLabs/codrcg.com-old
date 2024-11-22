<?php
	require('../../includes.php');
	ob_start('json_minify');
	new Session([1,2,3]);
	header('Content-Type: application/json');
	
	$data['error'] = [];
	/* Get Class Frame */
	$id = (isset($_POST['id']) ? $_POST['id']:"");
	
	/* Initialize Classes */
	$Classes = new Classes();
	if (isset($_SESSION['SESS_MID']) && isset($id)) {
		$data['Join_ID'] = $Classes->SetMemberClass (['ID' => $id, 'MID' => $_SESSION['SESS_MID']]);
	}

	$data['errorcount'] = count($data['error']);
    echo json_encode($data);
	exit();