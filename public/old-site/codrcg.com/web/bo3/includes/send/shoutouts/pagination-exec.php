<?php
	require('../../../../includes/includes.php');
	ob_start('json_minify');
	new Session(['ALL']);

	/* Sanitize the POST values */
	$dataObj = (isset($_POST['dataObj'])? $clean->UserInputArray(json_decode($_POST['dataObj'],true), 15):"");
	$data['Success'] = true;

	/* Validate/parse pagenum */
	if($dataObj['Page'] == '' || $dataObj['Page'] == null){ $dataObj['Page'] = 1; }

	/* Validate/parse countper */
	if(!in_array($dataObj['Length'], [10,25,50,100]) || $dataObj['Length'] == '' || $dataObj['Length'] == null){ $dataObj['Length'] = 10; }

	$START = ($dataObj['Page'] == 1 ? 0:$dataObj['Length']*($dataObj['Page']-1));

	/* Actually get all now for return json data */
	$records = $db->query("SELECT SQL_CALC_FOUND_ROWS `s`.`ID`, `s`.`Name`, `s`.`Data`
						   FROM `COD_Shoutouts` `s` 
						   JOIN `COD_Game_Shoutouts` `cgs` ON `cgs`.`Shoutout_ID`=`s`.`ID` AND `cgs`.`Game_ID` = ". BO3_Game_ID."
						   ".(isset($dataObj['Search']) ? " WHERE `s`.`Name` LIKE '%$dataObj[Search]%'":'')."
						   LIMIT $START, $dataObj[Length]");

	$count = 1;
	while($row = $db->fetchRecord($records)){
		$row['Data'] = json_decode($row['Data'],true);
		$data['jsondata']['Info'][$count] = $row;
		$count++;
	}
	/* Get total row count */
	$db->query("SELECT FOUND_ROWS()");
	$data['jsondata']['Count'] = $db->fetchOne();

	echo json_encode($data);
	exit();
?>
