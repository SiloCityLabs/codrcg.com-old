<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();

	/* Get The menu */
	$menu[] = ['Name' => 'Home', 'Href' => '/'];
	//$menu[] = ['Name' => 'Store', 'Href' => 'http://store.codrcg.com'];
	$menu[] = ['Name' => 'Shoutouts', 'Href' => '/shoutouts'];
	$menu[] = ['Name' => 'Stats', 'Href' => '/statistics'];
	if (isset($_SESSION['SESS_GID'])) {
		if ($perm->in_groups ([1, 2])) {
			$menu[] = ['Name' => 'Superpanel', 'Href' => '/superpanel'];
		}
		$menu[] = ['Name' => 'My Classes', 'Href' => '/myclasses'];
		$menu[] = ['Name' => 'My Account', 'Href' => '/myaccount'];
		$menu[] = ['Name' => 'Logout', 'Href' => '/includes/logout'];
	} else {
		$menu[] = ['Name' => 'Register', 'Href' => '/register'];
		$menu[] = ['Name' => 'Log In', 'Href' => '/login'];
	}
	$menuString = '';
	foreach ($menu as $key => $value) {
		$menuString .= "<li class='collection-item'><a href='$value[Href]'>$value[Name]</a></li>";
	}

?>
<nav class="grey darken-2" role="navigation">
	<div class="nav-wrapper">
		<a id="logo-container" href="/" class="brand-logo">COD RCG</a>
    	<ul class="right hide-on-med-and-down">
			<?php echo $menuString; ?>
      	</ul>

      	<ul id="LeftMenu" class="side-nav collection">
			<?php echo $menuString; ?>
		</ul>
      	<a href="#" data-activates="LeftMenu" class="button-collapse"><i class="material-icons">menu</i></a>
	</div>
</nav>
