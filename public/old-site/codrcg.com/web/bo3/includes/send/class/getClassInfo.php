<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');
	
	$data['error'] = [];
	/* Get Class Frame */
  	$dataObj = (isset($_POST['data']) ? $_POST['data']:"");
	
	/* Initialize Classes */
	$Classes = new Classes();
	
	if(isset($dataObj['ID']) && !empty($dataObj['ID']) && is_numeric($dataObj['ID'])){
		$classData = ['ID'=>$dataObj['ID'],'AddViews'=>1];
		if(isset($_SESSION['SESS_MID'])){$classData['MID'] = $_SESSION['SESS_MID']; }
		$data['Class'] = $Classes->GetClass($classData);
	}else{
		$data['Class'] = false;
	}
	

	$data['errorcount'] = count($data['error']);
    echo json_encode($data);
	exit();
?>