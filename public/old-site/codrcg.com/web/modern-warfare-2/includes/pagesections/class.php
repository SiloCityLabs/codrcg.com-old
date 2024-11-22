<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<pre>
	<?php //var_dump($class['Data']); ?>
</pre>

<div class='row'>
	<div class="col s12">
		<h1 class="text-center flex-text">"<?php echo $class['Name']; ?>"</h1>
		<?php require('../includes/pagesections/ads/Ad_top.php'); ?>
		<?php require('../includes/pagesections/dev_alert.php'); ?>
		<!-- Guns Section -->
		<div class="row text-center" ng-cloak>
			<div class="col s12 m6">
				<h3>Primary</h3>
				<?php
					if (isset($class['Data']['Primary'])) {
						echo '<span>'.$class['Data']['Primary']['Name'].'</span> <br>';

						if (!empty($class['Data']['Primary_Attach'])) {
							echo '<label>Attachment:</label> ';

							foreach ($class['Data']['Primary_Attach'] as $value) {
								echo $value['Name'].($value === end ($class['Data']['Primary_Attach']) ? '' : ', ');
							}
						}
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div class="col s12 m6">
				<h3>Secondary</h3>
				<?php
					if (isset($class['Data']['Secondary'])) {
						echo '<span>'.$class['Data']['Secondary']['Name'].'</span> <br>';

						if (!empty($class['Data']['Secondary_Attach'])) {
							echo '<label>Attachment:</label> ';

							foreach ($class['Data']['Secondary_Attach'] as $value) {
								echo $value['Name'].($value === end ($class['Data']['Secondary_Attach']) ? '' : ', ');
							}
						}
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
		</div>
		<div class="divider" ng-cloak></div>
		<!-- Perks Section -->
		<div class="row text-center" ng-cloak>
			<div class="col s4">
				<h3>Perk 1</h3>
				<div class="block">
					<?php
						if (isset($class['Data']['Perk_1'])) {
							echo $class['Data']['Perk_1'][0]['Name'];
						} else {
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
			<div class="col s4">
				<h3>Perk 2</h3>
				<div class="block">
					<?php
						if (isset($class['Data']['Perk_2'])) {
							echo $class['Data']['Perk_2'][0]['Name'];
						} else {
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
			<div class="col s4">
				<h3>Perk 3</h3>
				<div class="block">
					<?php
						if (isset($class['Data']['Perk_3'])) {
							echo $class['Data']['Perk_3'][0]['Name'];
						} else {
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
		</div>
		<div class="divider" ng-cloak></div>
		<!-- Equipment & Wildcards Section -->
		<div class="row text-center" ng-cloak>
			<div class="col s6">
				<h3>Lethal</h3>
				<?php
					if (!empty($class['Data']['Lethal'])) {
						echo $class['Data']['Lethal']['Name'];
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div class="col s6">
				<h3>Special Grenade</h3>
				<?php
					if (!empty($class['Data']['Special_Grenade'])) {
						echo $class['Data']['Special_Grenade']['Name'];
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
		</div>

		<?php if (isset($class['Data']['Gamemode']) || isset($class['Data']['Challenge'])): ?>
			<div class="divider" ng-cloak></div>
			<div class="row text-center" ng-cloak>
				<?php
					if (isset($class['Data']['Gamemode'])) {
						echo '<div class="col s6">
								<h3>Gamemode</h3>
								<span>'.$class['Data']['Gamemode'].'</span>
							</div>';
					}
					if (isset($class['Data']['Challenge'])) {
						echo '<div class="col s6">
								<h3>Challenge</h3>
								<span>'.$class['Data']['Challenge'].'</span>
							</div>';
					}
				?>
			</div>
		<?php endif; ?>
		<!-- Check for killstreaks -->
		<?php
			if (isset( $class[ 'Data' ][ 'Killstreaks' ] )) {
				echo '<div class="divider"></div>';

				echo '<div class="row text-center">';
					echo '<h3>Killstreaks</h3>';
					foreach($class[ 'Data' ][ 'Killstreaks' ] as $value){
						echo "<div class='col s4'>
								<span>$value[Name] | $value[Points]</span>
							</div>";
					}
				echo '</div>';
			}
		?>

		<div class="divider" ng-cloak></div>

		<div class="row text-center">
			<div class="col s12 m6 offset-m3">
				<div class="input-field col s12" ng-init="myCtrl.TinyUrl = '<?php echo $class['TinyUrl']; ?>'">
					<i class="material-icons prefix fa fa-link pointer tooltipped" ngclipboard data-clipboard-target="#icon_prefix"
					   data-position="bottom" data-delay="20" data-tooltip="Copy"></i>
					<input id="icon_prefix" type="text" ng-model="myCtrl.TinyUrl" readonly>
				</div>

			</div>
		</div>
	</div>
</div>