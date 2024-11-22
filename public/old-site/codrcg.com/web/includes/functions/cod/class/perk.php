<?php
	function perkLayout ($data,$type, $col = 's4') {
		if (is_numeric($type)) {
			$type = 'Perk_'.$type;
		}
		
		echo '<div class="col '.$col.'">';
			echo '<h3>'.str_replace('_',' ',$type).'</h3>';
			if(isset( $data[$type] )){
				foreach($data[$type] as $value){
					echo $value['Name'] . ( $value === end($data[$type]) ? '' : '<br>' );
				}
			} else{
				echo '<span>None</span>';
			}
		echo '</div>';
	}
?>