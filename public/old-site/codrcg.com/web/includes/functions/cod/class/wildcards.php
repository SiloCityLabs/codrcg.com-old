<?php
	function wildcardsLayout ($data,$type,$x2 = 1,$class = 's4') {
		echo "<div class='col $class'>";
			echo '<h3>'.str_replace('_',' ',$type).'</h3>';
			if(isset($data[$type])){
				foreach($data[$type] as $value){
					echo $value . ($value === end($data[$type]) ? '' : '<br>');
				}
			} else{
				echo '<span>None</span>';
			}
		echo '</div>';
	}
?>