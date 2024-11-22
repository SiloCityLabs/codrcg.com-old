<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class='row'>
	<div class="col s12">
		<span class="badge yellow accent-2 black-text pull-right"><?php echo $class['Data']['PointsUsed']; ?>/10</span>
		<h1 class="text-center flex-text">"<?php echo $class['Name']; ?>"</h1>
		<?php require('../includes/pagesections/ads/Ad_top.php'); ?>
		<?php require('../includes/pagesections/dev_alert.php'); ?>
		<!-- Guns Section -->
		<div class="row text-center">
			<div id="Primary" class="col s12 m6">
				<h3>Primary</h3>
				<?php
					if (isset($class['Data']['Primary'])) {
						echo '<span>'.$class['Data']['Primary']['Name'].'</span> <br>';

						if (isset($class['Data']['Primary_Optic']) && !empty($class['Data']['Primary_Optic']['Name'])) {
							echo '<label>Optic:</label> '.$class['Data']['Primary_Optic']['Name'].'<br>';
						}

						if (isset($class['Data']['Primary_Attach'])){
							echo '<label>Attachments:</label> ';

							foreach ($class['Data']['Primary_Attach'] as $value) {
								echo $value['Name'].($value === end ($class['Data']['Primary_Attach']) ? '' : ', ');
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
					if(isset( $class[ 'Data' ][ 'Secondary' ] )){
						echo '<span>' . $class[ 'Data' ][ 'Secondary' ][ 'Name' ] . '</span> <br>';

						if(isset( $class[ 'Data' ][ 'Secondary_Optic' ] )){
							echo '<label>Optic:</label> ' . $class[ 'Data' ][ 'Secondary_Optic' ][ 'Name' ] . '<br>';
						}

						if(isset( $class[ 'Data' ][ 'Secondary_Attach' ] )){
							echo '<label>Attachments:</label> ';

							foreach($class[ 'Data' ][ 'Secondary_Attach' ] as $value){
								echo $value[ 'Name' ] . ( $value === end($class[ 'Data' ][ 'Secondary_Attach' ]) ? '' : ', ' );
							}
						}
					} else if(isset( $class[ 'Data' ][ 'Overkill' ] )){
						echo '<span>' . $class[ 'Data' ][ 'Overkill' ][ 'Name' ] . '</span> <br>';

						if(isset( $class[ 'Data' ][ 'Overkill_Optic' ] )){
							echo '<label>Optic:</label> ' . $class[ 'Data' ][ 'Overkill_Optic' ][ 'Name' ] . '<br>';
						}

						if(isset( $class[ 'Data' ][ 'Overkill_Attach' ] )){
							echo '<label>Attachments:</label> ';

							foreach($class[ 'Data' ][ 'Overkill_Attach' ] as $value){
								echo $value[ 'Name' ] . ( $value === end($class[ 'Data' ][ 'Overkill_Attach' ]) ? '' : ', ' );
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
			<div class="col s4" id="Perk1">
				<h3>Perk 1</h3>
				<div class="block">
					<?php
						if(isset( $class[ 'Data' ][ 'Perk_1' ] )){
							foreach($class[ 'Data' ][ 'Perk_1' ] as $value){
								echo $value[ 'Name' ] . ( $value === end($class[ 'Data' ][ 'Perk_1' ]) ? '' : '<br>' );
							}
						} else{
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
			<div class="col s4" id="Perk2">
				<h3>Perk 2</h3>
				<div class="block">
					<?php
						if(isset( $class[ 'Data' ][ 'Perk_2' ] )){
							foreach($class[ 'Data' ][ 'Perk_2' ] as $value){
								echo $value[ 'Name' ] . ( $value === end($class[ 'Data' ][ 'Perk_2' ]) ? '' : '<br>' );
							}
						} else{
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
			<div class="col s4" id="Perk3">
				<h3>Perk 3</h3>
				<div class="block">
					<?php
						if(isset( $class[ 'Data' ][ 'Perk_3' ] )){
							foreach($class[ 'Data' ][ 'Perk_3' ] as $value){
								echo $value[ 'Name' ] . ( $value === end($class[ 'Data' ][ 'Perk_3' ]) ? '' : '<br>' );
							}
						} else{
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
		</div>
		<div class="divider"></div>
		<!-- Equipment & Wildcards Section -->
		<div class="row text-center">
			<div class="col s4" id="Lethal">
				<h3>Lethal</h3>
				<?php
					if(isset( $class[ 'Data' ][ 'Lethal' ] )){
						echo $class[ 'Data' ][ 'Lethal' ]['Name'].(isset($class[ 'Data' ]['ExtraLethal']) ? ' <strong>x2</strong>' : '');
					} else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div class="col s4" id="Tactical">
				<h3>Tactical</h3>
				<?php
					if (isset($class['Data']['Tactical'])) {
						echo $class['Data']['Tactical']['Name'].(isset($class['Data']['ExtraTactical']) ? ' <strong>x2</strong>' : '');
					}else {
						echo '<span>None</span>';
					}
				?>
			</div>
			<div class="col s4" id="Wildcards">
				<h3>Wildcards</h3>
				<div class="block">
					<?php
						if(isset( $class[ 'Data' ][ 'Wildcards' ] )){
							foreach($class[ 'Data' ][ 'Wildcards' ] as $value){
								echo $value . ( $value === end($class[ 'Data' ][ 'Wildcards' ]) ? '' : '<br>' );
							}
						} else{
							echo '<span>None</span>';
						}
					?>
				</div>
			</div>
		</div>
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

		<!-- Check for class extras -->
		<?php
			if (isset($class['Data']['Rig']) || isset($class['Data']['Gamemode']) || isset($class['Data']['Challenge'])) {
				echo '<div class="divider"></div>';

				echo '<div class="row text-center">';
					if (isset($class['Data']['Rig'])) {
						echo '<div class="col s4">
								<h3>Rig</h3>
								<span><label>Payload:</label> '.$class['Data']['Rig']['Payload'].'</span><br>
								<span><label>Trait:</label> '.$class['Data']['Rig']['Trait'].'</span>
							</div>';
					}
					if (isset($class['Data']['Gamemode'])) {
						echo '<div class="col s4">
									<h3>Gamemode</h3>
									<span>'.$class['Data']['Gamemode'].'</span>
								</div>';
					}
					if (isset($class['Data']['Challenge'])) {
						echo '<div class="col s4">
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