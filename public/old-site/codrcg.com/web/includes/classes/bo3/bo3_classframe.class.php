<?php
	class ClassFrame{
	 /**
		* Rolls and creates a frame for the random class to fill in with things
		*
	  	* $data['Level']	Players Level 
	  	* $data['Roll']		Roll Settings
	  	* 
		* @returns the frame of the random class
		*/
		public function Roll($data){
			global $db;
			$wildcardLevels = array('Perk_1'=>7,'Perk_2'=>10,'Perk_3'=>13,'PGF'=>16,'OK'=>19,'SGF'=>22,'Tac'=>25,'PGF_2'=>28,'DC'=>31,'PGF_3'=>34);
			
			unset($frame);
			$success = true;			
			
			/* Try to catch if there is an issue with roll settings */
			if(!isset($data['Roll']) || !is_array($data['Roll'])){
				serverlog("Issue with the roll settings: ".print_r($data,true));
				$data['Roll'] = [];
			}
			
			if(in_array('YallPoints', $data['Roll'])){ $classPoints = 10; }else{ $classPoints = rand(7, 10); }
			
			$frame = array('PointsUsed'=>$classPoints);
			
			/* if they choose they want a super gun */
     		if(in_array('Ysupergun', $data['Roll']) && $data['Level'] > $wildcardLevels['PGF_3']){
     			$frame =  array('PointsUsed'=>10,'Primary'=>1,'Primary_Optic'=>1,'Primary_Attach'=>5,'Wildcards'=>array('Primary Gunfighter 1','Primary Gunfighter 2','Primary Gunfighter 3'));
     			$classPoints = 0; 
			}elseif(in_array('Youmb', $data['Roll'])){
				$frame['Youmb'] = true;
				/* Add Secondary for combat knife */
				if($data['Level'] <= 13){ $frame = array('PointsUsed'=>6,'Secondary'=>1,'Lethal'=>1,'Tactical'=>1,'Perk_1'=>1,'Perk_2'=>1,'Perk_3'=>1); $classPoints = 0;}
				else{ $classPoints--; $frame['Secondary'] = 1; }
			}else{
				/* if they choose they want a primary */
	     		if(in_array('Yprimary', $data['Roll'])){ $classPoints--; $frame['Primary'] = 1; }
	
				/* if they choose they want a secondary */
	     		if(in_array('Ysecondary', $data['Roll'])){ $classPoints--; $frame['Secondary'] = 1; }
	
				/* if they choose they want a lethal */
	     		if(in_array('Ylethal', $data['Roll'])){ $classPoints--; $frame['Lethal'] = 1; }
	
				/* if they choose they want a tactical */
	     		if(in_array('Ytactical', $data['Roll'])){ $classPoints--; $frame['Tactical'] = 1; }

				/* if they choose they want a primary roll its attachment count */
				if(in_array('Yprimary', $data['Roll'])){
					$this->getAttachs('Primary', $frame, $data, $wildcardLevels, $classPoints);
					$this->getOptic('Primary', $frame, $classPoints);
				}

				/* if they choose they want a secondary roll its attachment count */
				if(in_array('Ysecondary', $data['Roll'])){
					$this->getAttachs('Secondary', $frame, $data, $wildcardLevels, $classPoints);
					$this->getOptic('Secondary', $frame, $classPoints);
				}
			}
			
			$loopCount = 0;
			while ($classPoints > 0) {
				$mypiece = $this->getPiece();
				if(in_array('Youmb', $data['Roll']) && ($mypiece == 'Primary')){/* If Youmb isset then dont allow guns */
					continue;
				}elseif(!isset($frame[$mypiece])){/* If piece isnt in frame already add it */
					if(isset($frame['Wildcards']) && in_array('Tactician', $frame['Wildcards']) && $mypiece == 'Lethal'){
						/* If tactician isset then dont allow lethal */
						continue; 
					}elseif(isset($frame['Wildcards']) && in_array('Overkill', $frame['Wildcards']) && $mypiece == 'Secondary'){
						/* If overkill isset then dont allow secondary */
						continue; 
					}elseif($mypiece == 'Tactician' && ($data['Level'] < $wildcardLevels['Tac'] || isset($frame['Lethal']) || !isset($frame['Tactical']) || $classPoints<2)){
						/* If lethal isset then dont allow tactician */
						continue;
					}else{
						if($mypiece == 'Tactician'){ $frame['Wildcards'][] = 'Tactician'; $subtract = 2; }else{ $subtract = 1; }
						$classPoints -= $subtract;
						$frame[$mypiece] = 1;

						/* Get Gun Attachs */
						if($mypiece == 'Primary' || $mypiece == 'Secondary' || $mypiece == 'Overkill'){
							$this->getAttachs($mypiece,$frame, $data, $wildcardLevels, $classPoints);
							$this->getOptic($mypiece, $frame, $classPoints);
						}
					}
					
				}elseif(strpos($mypiece, 'Perk') !== false && $frame[$mypiece] == 1 && $classPoints >= 2 && $data['Level'] > $wildcardLevels[$mypiece]){/* Check for more Perk greeds wildcard */
					$frame[$mypiece] = 2;
					$frame['Wildcards'][] = str_replace('_',' ',$mypiece).' Greed';
					$classPoints -= 2;
				}elseif($mypiece == 'Lethal' && isset($frame['Lethal']) && $classPoints >= 2 && !isset($frame['Tactician']) && !isset($frame['DangerClose']) && $data['Level'] > $wildcardLevels['DC']){/* Check for lethal to add danger close wildcard */
					$frame['DangerClose'] = 1;
					$frame['Wildcards'][] = 'Danger Close';
					$classPoints -= 2;
				}elseif($mypiece == 'Tactical' && $classPoints >= 1 && $frame['Tactical'] == 1){/* Add a second tactical */
					$frame['Tactical'] = 2;
					$classPoints -= 1;
				}elseif($mypiece == 'Tactician' && $classPoints >= 1 && !isset($frame['Lethal']) && $data['Level'] > $wildcardLevels['Tac'] && $frame['Tactician'] == 1){/* Check for tactical to add tactician wildcard */
					$frame['Tactician'] = 2;
					$classPoints -= 1;
				}elseif($mypiece == 'Primary' && isset($frame['Primary']) && $classPoints >= 2 && !isset($frame['Secondary']) && !isset($frame['Overkill']) && $data['Level'] > $wildcardLevels['OK']){/* Check for primary to add overkill wildcard */
					$frame['Overkill'] = 1;
					$frame['Wildcards'][] = 'Overkill';
					$classPoints -= 2;
				}
				
				/* Try to stop infinite loops */
				if($loopCount > 80){
					$success = false;
					break;
				}else{
					$loopCount++;
				}
			}/* while */
			
			
			if(!$success){
				return false;
			}else{
				/* if they choose they want a camo for thier guns */
				if(in_array('Ycamo', $data['Roll']) && isset($frame['Primary'])){ $frame['PrimaryCamo'] = true; }
				if(in_array('Ycamo', $data['Roll']) && isset($frame['Secondary'])){ $frame['SecondaryCamo'] = true; }
				if(in_array('Ycamo', $data['Roll']) && isset($frame['Overkill'])){ $frame['OverkillCamo'] = true; }
				
				/* if they choose they want a challenge to be rolled */
				if(in_array('Ychallenge', $data['Roll'])){ $frame['Challenge'] = true; }
				/* if they choose they want a gamemode to be rolled */
				if(in_array('Ygamemode', $data['Roll'])){ $frame['Gamemode'] = true; }
				/* if they choose they want killstreaks to be rolled */
				if(in_array('Ystreaks', $data['Roll'])){ $frame['Killstreaks'] = true; }
				/* if they choose they want a specialist to be rolled */
				if(in_array('Yspecialist', $data['Roll'])){ $frame['Specialist'] = true; }
	
				/* return frame */
				return $frame;
			}
		}/* Roll */

		private function getPiece(){
	     	$rand = rand(1, 9);
	     	switch ($rand) {
				case 2:
			    	$piece = 'Secondary';
			      	break;
			    case 3:
			      	$piece = 'Tactical';
			      	break;
			    case 4:
			      	$piece = 'Lethal';
			      	break;
			    case 5:
			      	$piece = 'Perk_1';
			      	break;
			    case 6:
			      	$piece = 'Perk_2';
			      	break;
			    case 7:
			      	$piece = 'Perk_3';
			      	break;
				case 8:
					$piece = 'Tactician';
			      	break;
			    default:
			    	$piece = 'Primary';
					break;
			}
			return $piece;
	  	}/* getPiece */

		public function getAttachs($string,&$frame,&$data,&$wildcardLevels,&$classPoints){
			global $db;
			$rollAttachs = rand(0, 10);
			$wildcardCost = 0;

			/*
			 * Max Attachments
			 *   - Primary = 5 (3 Primary Gun Fighters)
			 *   - Secondary = 2 (1 Secondary Gun fighter)
			 *   - Overkill = 2 (1 Secondary Gun fighter)
			 */

			if($rollAttachs % 2 == 0 && $classPoints >= 1){
				$attachs = rand(1, 5);

				if($string == 'Primary' && $attachs >= 3){
					if($data['Level'] > $wildcardLevels['PGF'] && $classPoints >= 4){
						$frame['Wildcards'][] = $string.' Gunfighter 1';
						$wildcardCost++;
						if($attachs >= 4 && $data['Level'] > $wildcardLevels['PGF_2'] && $classPoints >= 6){
							$frame['Wildcards'][] = $string.' Gunfighter 2';
							$wildcardCost++;
							if($attachs == 5 && $data['Level'] > $wildcardLevels['PGF_3'] && $classPoints >= 8){
								$frame['Wildcards'][] = $string.' Gunfighter 3';
								$wildcardCost++;
							}elseif($attachs == 5){
								$attachs--;
							}
						}elseif($attachs >= 4){
							$attachs--;
						}
					}else{
						$attachs--;
					}
				}elseif($string != 'Primary' && ($attachs == 2 || $attachs == 3)){
					$attachs = 2;
					if($data['Level'] > $wildcardLevels['SGF'] && $classPoints >= 3){
						$frame['Wildcards'][] = 'Secondary Gunfighter';
						$wildcardCost++;
					}else{
						$attachs--;
					}
				}else{
					$attachs = 0;
				}

				if($attachs > 0){
					$classPoints -= ($attachs + $wildcardCost);
					$frame[$string.'_Attach'] = $attachs;
				}
			}//If Its guna roll attachments
		}

		public function getOptic($string, &$frame, &$classPoints){
			$optic = rand(0, 10);

			//If even then add optic
			if($optic % 2 == 0){
				$frame[$string.'_Optic'] = 1;
				$classPoints -= 1;
			}
		}
	}/* ClassFrame */
