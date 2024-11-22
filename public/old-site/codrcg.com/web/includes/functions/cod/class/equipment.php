<?php
	function equipLayout ($data,$type,$x2 = 1,$class = 's4') {
		echo "<div class='col $class'>";
			echo '<h3>'.str_replace('_',' ',$type).'</h3>';
			if(isset($data[$type])){
				echo $data[$type]['Name'] . ($x2 == 2 ? ' <strong>x2</strong>' : '');
			} else{
				echo '<span>None</span>';
			}
		echo '</div>';
	}
?>