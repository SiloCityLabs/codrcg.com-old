<?php
	function streaksLayout ($data,$type) {
		echo '<h3>'.str_replace('_',' ',$type).'</h3>';
		foreach($data[$type] as $value){
			echo "<div class='col s4'>
					<span>$value[Name] | $value[Points]</span>
				</div>";
		}
	}
?>