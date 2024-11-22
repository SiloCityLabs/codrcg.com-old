<?php
	/* Initialize Classes */
	$Classes = new Classes();
	
	if(!empty($classID) && is_numeric($classID)){
		$classData = ['ID'=>$classID, 'AddViews'=>1];
		if(isset($_SESSION['SESS_MID'])){$classData['MID'] = $_SESSION['SESS_MID']; }
		$class = $Classes->GetClass($classData);
	}else{
		$class = false;
	}