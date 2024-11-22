<?php
	class ClassFrame {
		/**
	     * Rolls and creates a frame for the random class to fill in with things
	     */
	     
	     /* I might add a thing for them to choose the amount of perks they want */
	     public function Roll($settings) {
	     	/* boolean for the pieces */
	     	$boolPrimary = false;
	     	$boolSecondary = false;
	     	$boolLethal = false;
	     	$boolTactical = false;
			
			/**
			 * 0-11 will be for the frame
			 * 12 will be the strike package
			 */
	     	$frame = array();
			
			$count = 0;
	     	$classPoints = 12;
			
			/* if they choose they want a primary */
	     	if(in_array('Yprimary', $settings)) {/* set by player */
	     		$classPoints--;
		     	$frame[] = 'Primary';
				$boolPrimary = true;
	     	}
			/* if they choose they want a secondary */
	     	if(in_array('Ysecondary', $settings)) {/* set by player */
	     		$classPoints--;
		     	$frame[] = 'Secondary';
				$boolSecondary = true;
	     	}
			/* if they choose they want a lethal */
	     	if(in_array('Ylethal', $settings)) {
	     		$classPoints--;
		     	$frame[] = 'Lethal';
				$boolLethal = true;
	     	}
			/* if they choose they want a secondary */
	     	if(in_array('Ytactical', $settings)) {
	     		$classPoints--;
		     	$frame[] = 'Tactical';
				$boolTactical = true;
	     	}
			
			if($classPoints == 8) {
		     	for($i = 0; $i < $classPoints; $i++) {
		     		$frame[] = 'Perk';
		     	}
			}else{
				if($classPoints >= 9) {
					for($i=0;$i<100;$i++) {
						$perkCount = $this->getPerkCount();
						$classPoints -= $perkCount;
						if($classPoints >= 0) {
							break;
						}else{
							$classPoints += $perkCount;
						}
					}
			     	for($i = 0; $i < $perkCount; $i++) {
			     		$frame[] = 'Perk';
			     	}
				}
				if($classPoints > 0) {
					for($i = 0; $i < $classPoints; $i++) {
			     		$mypiece = $this->getPiece();
						
						/* Primary Check */
						if($mypiece == 'Primary') {
						    if(in_array('Youmb', $settings)) {
						        $frame[] = 'Perk';
                                continue;
						    }
							if(!$boolPrimary) {
								$frame[] = $mypiece;
								$boolPrimary = true;
							}else{
								$i--;
								continue;
							}
						}/* Primary */
						
						/* Secondary Check */
						if($mypiece == 'Secondary') {
                            if(in_array('Youmb', $settings)) {
                                $frame[] = 'Perk';
                                continue;
                            }
							if(!$boolSecondary) {
								$frame[] = $mypiece;
								$boolSecondary = true;
							}else{
								$i--;
								continue;
							}
						}/* Secondary */
						
						/* Lethal Check */
						if($mypiece == 'Lethal') {
							if(!$boolLethal) {
								$frame[] = $mypiece;
								$boolLethal = true;
							}else{
								$i--;
								continue;
							}
						}/* Lethal */
						
						/* Tactical Check */
						if($mypiece == 'Tactical') {
							if(!$boolTactical) {
								$frame[] = $mypiece;
								$boolTactical = true;
							}else{
								$i--;
								continue;
							}
						}/* Tactical */
			     	}/* for */
			     }/* inner if */
			}
	     
			/* return frame */
			return $frame;
		}/* Roll */
	     
		private function getPiece() {
	     	$rand = rand(1, 12);
	     	switch ($rand) {
			    case 1:
			        $piece = 'Secondary';
			        break;
			    case 2:
			        $piece = 'Lethal';
			        break;
			    case 3:
			        $piece = 'Tactical';
			        break;
			    case 4:
			        $piece = 'Primary';
			        break;
			    case 5:
			        $piece = 'Secondary';
			        break;
			    case 6:
			        $piece = 'Primary';
			        break;
			    case 7:
			        $piece = 'Primary';
			        break;
			    case 8:
			        $piece = 'Primary';
			        break;
			    case 9:
			        $piece = 'Primary';
			        break;
			    case 10:
			        $piece = 'Lethal';
			        break;
			    case 11:
			        $piece = 'Tactical';
			        break;
			    case 12:
			        $piece = 'Primary';
			        break;
			    default:
			        $piece = 'Primary';
					break;
			}
			
			return $piece;
	  	}/* getPiece */
		
		/* 8 - 27% - 5.4 ~ 6
		 * 9 - 27% - 5.4 ~ 5
		 * 10 - 20% - 4
		 * 11 - 16% - 3.2 ~ 3
		 * 12 - 20% - 2
		 */
		private function getPerkCount() {
			$rand = rand(1, 20);
	     	switch ($rand) {
			    case 1:
			        $piece = 8;
			        break;
			    case 2:
			        $piece = 9;
			        break;
			    case 3:
			        $piece = 10;
			        break;
			    case 4:
			        $piece = 11;
			        break;
			    case 5:
			        $piece = 8;
			        break;
			    case 6:
			        $piece = 9;
			        break;
			    case 7:
			        $piece = 12;
			        break;
			    case 8:
			        $piece = 11;
			        break;
			    case 9:
			        $piece = 8;
			        break;
			    case 10:
			        $piece = 9;
			        break;
			    case 11:
			        $piece = 10;
			        break;
			    case 12:
			        $piece = 8;
			        break;
			    case 13:
			        $piece = 12;
			        break;
			    case 14:
			        $piece = 10;
			        break;
			    case 15:
			        $piece = 8;
			        break;
			    case 16:
			        $piece = 9;
			        break;
			    case 17:
			        $piece = 10;
			        break;
			    case 18:
			        $piece = 11;
			        break;
			    case 19:
			        $piece = 9;
			        break;
			    case 20:
			        $piece = 8;
			        break;
			    default:
			        $piece = 8;
					break;
			}
			
			return $piece;
		}
		
		public function getPrimaryAttach() {
	     	$rand = rand(1, 4);
	     	switch ($rand) {
			    case 1:
			        $piece = 0;
			        break;
			    case 2:
			        $piece = 1;
			        break;
			    case 3:
			        $piece = 2;
			        break;
			    case 4:
			        $piece = 1;
			        break;
			    default:
			        $piece = 2;
					break;
			}
			
			return $piece;
	  	}/* getPrimaryAttach */
	  	
	  	public function getSecAttach() {
	     	$rand = rand(1, 3);
	     	switch ($rand) {
			    case 1:
			        $piece = 0;
			        break;
			    case 2:
			        $piece = 1;
			        break;
			    case 3:
			        $piece = 1;
			        break;
			    default:
			        $piece = 0;
					break;
			}
			
			return $piece;
	  	}/* getSecAttach */
	  	
	}/* Class frame */