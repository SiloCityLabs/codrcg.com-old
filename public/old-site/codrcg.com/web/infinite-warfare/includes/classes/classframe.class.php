<?php
	class ClassFrame {
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
			//TODO: Update Anything at level 13!!!!
			$wildcardLevels = [
				'PGE'=>13, 'PGE_2' => 27,'PGE_3' => 39,
				'SGE' => 24, 'SGE_2' => 34,
				'OK'=>0,
				'Perk_1' => 6, 'Perk_2' => 9, 'Perk_3' => 19,
				'ET'=>0, 'EL' => 32
			];

			unset($frame);
			$success = true;

			/* Try to catch if there is an issue with roll settings */
			if(!isset($data['Roll']) || !is_array($data['Roll'])){
				serverlog("Issue with the roll settings in IW: ".print_r($data,true));
				$data['Roll'] = [];
			}

			if(in_array('YallPoints', $data['Roll'])){ $classPoints = 10; }else{ $classPoints = rand(7, 10); }

			$frame = ['PointsUsed'=>$classPoints,'Userlevel' => $data['Level']];

			/* if they choose they want a super gun */
     		if(in_array('Ysupergun', $data['Roll']) && $data['Level'] > $wildcardLevels['PGE_3']){
     			$frame =  array('PointsUsed'=>10,'Primary'=>1,'Primary_Optic'=>1,'Primary_Attach'=>5,'Wildcards'=>array('Primary Expert I','Primary Expert II','Primary Expert III'));
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
					if(isset($frame['Wildcards']) && in_array('Overkill', $frame['Wildcards']) && $mypiece == 'Secondary'){
						/* If overkill isset then dont allow secondary */
						continue;
					}else{
						$classPoints -= 1;
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
				}elseif($mypiece == 'Lethal' && isset($frame['Lethal']) && $classPoints >= 2 && !isset($frame['ExtraLethal']) && $data['Level'] > $wildcardLevels['EL']){/* Check for lethal to add extra lethal wildcard */
					$frame['ExtraLethal'] = 1;
					$frame['Wildcards'][] = 'Extra Lethal';
					$classPoints -= 2;
				}elseif ($mypiece == 'Tactical' && isset($frame['Tactical']) && $classPoints >= 2 && !isset($frame['ExtraTactical']) && $data['Level'] > $wildcardLevels['ET']) {/* Check for tactical to add extra tactical wildcard */
					$frame['ExtraTactical'] = 1;
					$frame['Wildcards'][] = 'Extra Tactical';
					$classPoints -= 2;
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
				/* if they choose they want a challenge to be rolled */
				if(in_array('Ychallenge', $data['Roll'])){ $frame['Challenge'] = true; }
				/* if they choose they want a gamemode to be rolled */
				if(in_array('Ygamemode', $data['Roll'])){ $frame['Gamemode'] = true; }
				/* if they choose they want killstreaks to be rolled */
				if(in_array('Ystreaks', $data['Roll'])){ $frame['Killstreaks'] = true; }
				/* if they choose they want a rig to be rolled */
				if(in_array('Yrig', $data['Roll'])){ $frame['Rig'] = true; }

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

				if($string == 'Primary'){
					switch ($attachs) {
						case 5:
							if ($data['Level'] > $wildcardLevels['PGE_3'] && $classPoints >= 8) {
								$frame['Wildcards'][] = $string.' Expert III';
								$wildcardCost++;
							}else{
								$attachs = 4;
							}
						case 4:
							if ($data['Level'] > $wildcardLevels['PGE_2'] && $classPoints >= 6) {
								$frame['Wildcards'][] = $string.' Expert II';
								$wildcardCost++;
							} else {
								$attachs = 3;
							}
						case 3:
							if ($data['Level'] > $wildcardLevels['PGE'] && $classPoints >= 4) {
								$frame['Wildcards'][] = $string.' Expert I';
								$wildcardCost++;
							} else {
								$attachs = 2;
							}
						case 2:
							if ($classPoints < 2) {
								$attachs = 1;
							}
						case 1:
							if ($classPoints < 1) {
								$attachs = 0;
							}
						default:
							break;
					}
				}elseif($string != 'Primary') {
					switch ($attachs) {
						case 4:
							if ($data['Level'] > $wildcardLevels['SGE_2'] && $classPoints >= 6) {
								$frame['Wildcards'][] = $string.' Expert II';
								$wildcardCost++;
							}else {
								$attachs = 3;
							}
						case 3:
							if ($data['Level'] > $wildcardLevels['SGE'] && $classPoints >= 4) {
								$frame['Wildcards'][] = $string.' Expert I';
								$wildcardCost++;
							}else {
								$attachs = 2;
							}
						case 2:
							if ($classPoints < 2) {
								$attachs = 1;
							}
						case 1:
						case 5:
							if ($classPoints < 1) {
								$attachs = 0;
							}
						default:
							break;
					}
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
			if($optic % 2 == 0 && $classPoints >= 1){
				$frame[$string.'_Optic'] = 1;
				$classPoints -= 1;
			}
		}
	}/* ClassFrame */
?>
