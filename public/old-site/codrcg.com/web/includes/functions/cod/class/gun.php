<?php
	function gunLayout ($data, $type, $classes = 's12 m6') {
		echo '<div class="col '.$classes.'">';
			echo "<h3>$type</h3>";
			if (isset($data[$type])) {
				echo '<span>'.$data[$type]['Name'].'</span> <br>';

				if (isset($data[$type.'_Prof']) && !empty($data[$type.'_Prof']['Name'])) {
					echo '<label>Proficiency:</label> '.$data[$type.'_Prof']['Name'].'<br>';
				}

				if (isset($data[$type.'_Optic']) && !empty($data[$type.'_Optic']['Name'])) {
					echo '<label>Optic:</label> '.$data[$type.'_Optic']['Name'].'<br>';
				}

				if (!empty($data[$type.'_Attach'])) {
					echo '<label>Attachments:</label> ';

					foreach ($data[$type.'_Attach'] as $value) {
						echo $value['Name'].($value === end ($data[$type.'_Attach']) ? '' : ', ');
					}
				}
			} else {
				echo '<span>None</span>';
			}
		echo '</div>';
	}
?>