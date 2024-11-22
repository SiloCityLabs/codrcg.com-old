<?php
	require('../includes.php');
	ob_start('json_minify');
	new Session(['ALL']);
	header('Content-Type: application/json');

	$data['error'] = [];
	$data['Post'] = (isset($_POST['data']) ? $_POST['data']:'');
	
	/* Check if user is logged in */
	$data['isLoggedIn'] = (isset($_SESSION['SESS_MID']) ? 1 : 0);
	
	/* Get The menu */
	$data['Menu'][] = ['Name' => 'Home', 'Href' => '/'];
	if(isset($_SESSION['SESS_GID'])){
		if($perm->in_groups([1, 2])){
			$data['Menu'][] = ['Name' => 'Superpanel', 'Href' => '/superpanel'];
		}
		$data['Menu'][] = ['Name' => 'My Classes', 'Href' => '/myclasses'];
		$data['Menu'][] = ['Name' => 'My Account', 'Href' => '/myaccount'];
		$data['Menu'][] = ['Name' => 'Logout', 'Href' => '/includes/logout'];
	}else{
		$data['Menu'][] = ['Name' => 'Register', 'Href' => '/register'];
		$data['Menu'][] = ['Name' => 'Log In', 'Href' => '/login'];
	}

	$data['ClassCount'] = getconfig('Cached_BO3_Class_Count','Cached_MW_Class_Count');

	$data['errorcount'] = count($data['error']);
  	echo json_encode($data);
	exit();
?>
