<?php
    /* Protect this file from being called alone */
    if (!isset($clean))
        exit();

    /* Get The menu */
	$menu[] = ['Name' => 'Modern Warfare', 'Href' => '/'.MW_Folder];
    $menu[] = ['Name' => 'Shoutouts', 'Href' => '/shoutouts'];
	$menu[] = ['Name' => 'Class Info', 'Href' => '/'.MW_Folder.'/info'];
	$menu[] = ['Name' => 'Stats', 'Href' => '/'.MW_Folder.'/stats'];
	if (isset($_SESSION['SESS_GID'])) {
		$menu['Account'][] = ['Name' => 'My Classes', 'Href' => '/myclasses'];
		$menu['Account'][] = ['Name' => 'My Account', 'Href' => '/myaccount'];
		if ($perm->in_groups ([1, 2])) {
			$menu['Account'][] = ['Name' => 'Superpanel', 'Href' => '/superpanel'];
		}
		$menu['Account'][] = ['Name' => 'Logout', 'Href' => '/includes/logout'];
	} else {
		$menu['Account'][] = ['Name' => 'Register', 'Href' => '/register'];
		$menu['Account'][] = ['Name' => 'Log In', 'Href' => '/login'];
	}

    $menuString = '<li> <a href="/"> <i class="material-icons black-text">home</i> </a> </li>';
    $smMenuString = '<li> <a href="/" class="black-text"> Home </a> </li>';
    foreach ($menu as $key => $value) {
        if (!is_numeric ($key)) {
            $childrenString = '';
            foreach ($value as $innerKey => $innerVal) {
                $childrenString .= "<li class='collection-item'><a href='$innerVal[Href]' class='black-text'>$innerVal[Name]</a></li>";
            }
            $smMenuString .= $childrenString;

            $menuString .= '<li class="collection-item">';
            $menuString .= "
					<a class='dropdown-button' data-beloworigin='true' href='#' data-activates='$key-nav' data-constrainwidth='false'>
						<span class='left black-text'>$key</span>
						<i class='material-icons left black-text'>keyboard_arrow_down</i>
					</a>

					<ul id='$key-nav' class='dropdown-content'>$childrenString</ul>";

            $menuString .= '</li>';
        }
        else {
            $menuString .= "<li class='collection-item'><a href='$value[Href]' class='black-text'>$value[Name]</a></li>";
            $smMenuString .= "<li class='collection-item'><a href='$value[Href]'>$value[Name]</a></li>";
        }
    }
?>

    <div class="navbar-fixed">
        <nav class="green accent-4" role="navigation">
            <div class="nav-wrapper">
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons black-text">menu</i></a>
                <!-- Set PAdding for this to 11px -->
                <ul class="left hide-on-med-and-down" ng-cloak>
                    <?php echo $menuString; ?>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <?php echo $smMenuString; ?>
                </ul>

                <ul class="right" ng-cloak>
                    <!-- Only Show if on class page -->
                    <?php if (strpos ($_SERVER['SCRIPT_FILENAME'], 'class.php') !== FALSE): ?>
                        <li>
                            <a href='/<?php echo MW_Folder; ?>/class' class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Roll new class">
                                <i class="material-icons black-text">refresh</i>
                            </a>
                        </li>

                        <li>
                            <a ng-show='isLoggedIn'
                               ng-click='saveClass();' href='#' onClick='return false;'>
                                <i class="fa fa-heart black-text" ng-class="{'favoriteClass':Join_ID}"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="dropdown-button tooltipped" data-position="bottom" data-delay="50" data-tooltip="Share" data-activates='socialDropdown' data-constrainwidth='false'>
                                <i class="material-icons black-text">share</i>
                            </a>
                        </li>
                    <?php else: ?>
                        <li>
                            <a href="<?php echo App_Short_Link; ?>" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Android App">
                                <i class="material-icons black-text">android</i>
                            </a>
                        </li>
                    <?php endif; ?>

                    <li><a href="#" class="dropdown-button tooltipped" data-position="bottom" data-delay="50" data-tooltip="Settings" data-activates='settingsDropdown' data-constrainwidth='false'><i
                                class="material-icons black-text">more_vert</i></a></li>
                </ul>
            </div>
        </nav>
    </div>

    <ul id='settingsDropdown' class='dropdown-content'>
        <li><a ng-click='cancelSettings("rollModal")' href="#" onclick="return false;">Roll Settings</a></li>
        <li><a ng-click='cancelSettings("dlcModal")' href="#" onclick="return false;">DLC Settings</a></li>
    </ul>

<?php if (strpos ($_SERVER['SCRIPT_FILENAME'], 'class.php') !== FALSE): ?>
    <ul id='socialDropdown' class='dropdown-content'>
        <li class="text-center">
            <a ng-href="https://twitter.com/intent/tweet?hashtags=ModernWarfare&text=Check out this Modern Warfare Random Class!&url=<?php echo $class['TinyUrl']; ?>&via=silocitylabs"
               onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;">
                <i class="fa fa-twitter-square"></i>
            </a>
        </li>
        <li class="text-center">
            <a ng-href="http://www.facebook.com/sharer/sharer.php?u=<?php echo $class['TinyUrl']; ?>&t=Modern Warfare Random Class Generator"
               onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;">
                <i class="fa fa-facebook-square"></i>
            </a>
        </li>
        <li class="text-center">
            <a ng-href="http://plus.google.com/share?url=<?php echo $class['TinyUrl']; ?>"
               onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;">
                <i class="fa fa-google-plus-square"></i>
            </a>
        </li>
    </ul>
<?php endif; ?>