<?php
	function extrasLayout ($data,$type,$class = 's4') {
		if (isset($data[$type])) {
			echo "<div class='col $class'>";
				echo "<h3>$type</h3>";
				echo "<span>$data[$type]</span>";
			echo '</div>';
		}
	}
?>