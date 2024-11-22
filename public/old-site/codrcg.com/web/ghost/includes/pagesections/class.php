<?php
	/* Protect this file from being called alone */
	if(!!empty($clean)) exit();
?>

<div class='row'>
	<div class="col s12">
		<h1 class="text-center flex-text">"<?php echo $class['Name']; ?>"</h1>
		<?php require('../includes/pagesections/ads/Ad_top.php'); ?>
		<?php require('../includes/pagesections/dev_alert.php'); ?>
		<!-- Guns Section -->
		<div class="row text-center">
			<div id="Primary" class="col s12 m6">
				<h3>Primary</h3>
				<?php
					if (!empty($class['Data']['Primary'])) {
						echo '<span>'.$class['Data']['Primary']['Name'].'</span> <br>';

						if (!empty($class['Data']['Primary_Attach'])){
							echo '<label>Attachments:</label> ';

							foreach ($class['Data']['Primary_Attach'] as $value) {
								echo $value['name'].($value === end ($class['Data']['Primary_Attach']) ? '' : ', ');
							}
						}
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div id="Secondary" class="col s12 m6">
				<h3>Secondary</h3>
				<!-- Secondary -->
				<?php
					if(!empty( $class[ 'Data' ][ 'Secondary' ] )){
						echo '<span>' . $class[ 'Data' ][ 'Secondary' ][ 'Name' ] . '</span> <br>';

						if(!empty( $class[ 'Data' ][ 'Secondary_Attach' ] )){
							echo '<label>Attachments:</label> ';

							foreach($class[ 'Data' ][ 'Secondary_Attach' ] as $value){
								echo $value[ 'name' ] . ( $value === end($class[ 'Data' ][ 'Secondary_Attach' ]) ? '' : ', ' );
							}
						}
					} else if(!empty( $class[ 'Data' ][ 'Overkill' ] )){
						echo '<span>' . $class[ 'Data' ][ 'Overkill' ][ 'Name' ] . '</span> <br>';

						if(!empty( $class[ 'Data' ][ 'Overkill_Attach' ] )){
							echo '<label>Attachments:</label> ';

							foreach($class[ 'Data' ][ 'Overkill_Attach' ] as $value){
								echo $value[ 'name' ] . ( $value === end($class[ 'Data' ][ 'Overkill_Attach' ]) ? '' : ', ' );
							}
						}
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
		</div>
		<div class="divider"></div>
		<!-- Perks Section -->
		<div class="row text-center">
			<h3>Perks</h3>
			<?php foreach($class[ 'Data' ][ 'Perks' ] as $value) { ?>
				<div class='col s4'>
					<span><?php echo $value['Name']; ?></span>
				</div>
			<?php } ?>
		</div>
		<div class="divider"></div>
		<!-- Equipment & Section -->
		<div class="row text-center">
			<div class="col s6" id="Lethal">
				<h3>Lethal</h3>
				<?php
					if(!empty( $class[ 'Data' ][ 'Lethal' ] )){
						echo $class[ 'Data' ][ 'Lethal' ]['Name'].(!empty($class[ 'Data' ]['DangerClose']) ? ' <strong>x2</strong>' : '');
					} else if(!empty( $class[ 'Data' ][ 'Tactician' ] )) {
						echo $class[ 'Data' ][ 'Tactician' ][ 'Name' ] . ( $class[ 'Data' ][ 'Frame' ]['Tactician'] == 2 ? ' <strong>x2</strong>' : '' );
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div class="col s6" id="Tactical">
				<h3>Tactical</h3>
				<?php
					if(!empty( $class[ 'Data' ][ 'Tactical' ] ) && !empty($class[ 'Data' ][ 'Tactical' ][ 'Name' ])){
						echo $class[ 'Data' ][ 'Tactical' ][ 'Name' ] . ( intval($class[ 'Data' ][ 'Frame' ][ 'Tactical' ]) == 2 ? ' <strong>x2</strong>' : '' );
					} else{
						echo '<span>None</span>';
					}
				?>
			</div>
		</div>
		<!-- Check for killstreaks -->
		<div class="divider"></div>
		<div class="row text-center">
			<?php
				if ($class[ 'Data' ][ 'PackageName' ] == 'Specialist') {
					$count = 0;
					echo '<h3>'. $class[ 'Data' ][ 'PackageName' ] .'</h3>';
					foreach($class[ 'Data' ][ 'Specialist_Perks' ] as $value) {
						$count += 2;
						echo "<div class='col s4'>
								<span>$value[Name] | $count</span>
							</div>";
					}
					echo '</div><div class="divider"></div><div class="row text-center">';
					echo '<h3>Final Specialist Perks</h3>';
					foreach($class[ 'Data' ][ 'Super_Solider_Perks' ] as $value) {
						$count += 2;
						echo "<div class='col s6 m3'>
								<span>$value[Name]</span>
							</div>";
					}
				} else {
					echo '<h3>'.$class['Data']['PackageName'].' Killstreaks</h3>';
					foreach($class[ 'Data' ][ 'Killstreaks' ] as $value){
						echo "<div class='col s4'>
								<span>$value[Name] | $value[Points]</span>
							</div>";
					}
				}
			?>
		</div>

		<!-- Check for class extras -->
		<?php
			if (!empty($class['Data']['Gamemode']) || !empty($class['Data']['Challenge'])) {
				echo '<div class="divider"></div>';

				echo '<div class="row text-center">';
					if (!empty($class['Data']['Gamemode'])) {
						echo '<div class="col s6">
									<h3>Gamemode</h3>
									<span>'.$class['Data']['Gamemode'].'</span>
								</div>';
					}
					if (!empty($class['Data']['Challenge'])) {
						echo '<div class="col s6">
									<h3>Challenge</h3>
									<span>'.$class['Data']['Challenge'].'</span>
								</div>';
					}
				echo '</div>';
			}
		?>
		<div class="divider"></div>
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