<?php
    class RCG_Execute{
        /**
         * Does all the stuff an execute file would do
         */
        public function executeAll($level, $settings) {
        	global $db;
			global $clean;
            /* Array to store validation errors */
            $errmsg_arr = array();
            $errflag = false;
			/* Other */
			$overKillYes = false;
			$done = false;
			$perkcount = 0;
			$loop = false;
			
			/* Get the users ip */
			$regip = $clean->UserInput($_SERVER['REMOTE_ADDR']);
        
            /* Variables for cod_class table */
            $primary_gun = 0;
            $second_primary_gun = 0;
            $secondary_gun = 0;
            $lethal_equip = 0;
            $tactical_equip = 0;
            
            /* Class Objects */
            $ClassFrame = new ClassFrame();
            $Perk = new GH_Perk();
            $Primary = new Primary();
            $Secondary = new Secondary();
            $Tactical = new Tactical();
            $Lethal = new Lethal();
            $Streaks = new GH_Killstreaks();
            $GameMode = new Gamemode();
            $Challenge = new Challenge();
			
			/* Check if user is logged in */
            $mid = (isset($_SESSION['SESS_MID']) ? "'".$_SESSION['SESS_MID']."'" : "NULL" );
            
            /* get the frame */
            $frame = $ClassFrame->Roll($settings);
			
			$gameType = (in_array('Ygamemode', $settings) ? "'".$GameMode->Roll()."'" : "NULL");
            
            foreach ($frame as $key => $value) {
                if($value == 'Perk') { $perkcount++; }
                if($value == 'Primary') {
					$primgun = $Primary->Roll();
                    $primary_gun = 1;
                    $camo = $Primary->rollCamo();
                    $primAttachCount = $ClassFrame->getPrimaryAttach();
                }
                if($value == 'Secondary') {
                    $secgun = $Secondary->Roll();
                    $secondary_gun = 1;
                    $secAttachCount = $ClassFrame->getSecAttach();
                }
                if($value == 'Tactical') {
                    $tac = $Tactical->Roll();
                    $tactical_equip = 1;
                }
                if($value == 'Lethal') {
                    $lethal = $Lethal->Roll();
                    $lethal_equip = 1;
                }
            }/* Foreach */

			/* Challenge Check */
			if(in_array('Ychallenge', $settings)) {
				$chall_check = false;
				while(!$chall_check) {
					$chall_arr = $Challenge->Roll();
					if($chall_arr['Type'] != 'none') {
						if($chall_arr['Type'] == 'Gun' && !isset($primgun) && !isset($secgun)) {
							continue;
						}
						if(isset($primgun)) {
							if($chall_arr['Type'] == $primgun['Cat']) {
								$challengeName = "'".$chall_arr['Name']."'";
								$chall_check = true;
							}
						}/* primgun isset */
						
						if(isset($secgun) && !$chall_check) {
							if($chall_arr['Type'] == $secgun['Cat']) {
								$challengeName = "'".$chall_arr['Name']."'";
								$chall_check = true;
							}
						}/* secgun isset */
						
						if(!$chall_check) {
							if($chall_arr['Type'] == 'Lethal' && isset($lethal)) {
								$challengeName = "'".$chall_arr['Name']."'";
								$chall_check = true;
							}else if($chall_arr['Type'] == 'Tactical' && isset($tac)) {
								$challengeName = "'".$chall_arr['Name']."'";
								$chall_check = true;
							}
						}
					}else{
						$challengeName = "'".$chall_arr['Name']."'";
						$chall_check = true;
					}
				}/* while */
			}else{
				$challengeName = "NULL";
			}
            
            /* Roll the streaks */
            $streaks_Arr = $Streaks->RollAll();
            $packageName = $Streaks->getStrikePackage();
            
            /* ################## GET THE PERKS #################### */
            $perkpoints = $perkcount;
            while($perkcount > 0) {
                $checkperk = null;
                $checkperk = $Perk->Roll();
                
				if(in_array('YPerkCompat', $settings)) {
					switch ($checkperk['Name']) {
						case !isset($primgun) && $checkperk['Name'] == 'Overkill': /* if theres no primary you cant get a second primary */
						case !isset($primgun) && $checkperk['Name'] == 'Overkill': /* if theres no secondary you cant get a second primary */
						case !isset($secgun) && $checkperk['Name'] == 'Extra Attachment' && !isset($primgun): /* if the perk is Extra Attachment and there is no primary and no secondary */
						case $checkperk['Name'] == 'Extra Lethal' && !isset($lethal): /* if extra lethal is rolled and theres no lethal */
						case $checkperk['Name'] == 'Danger Close' && !isset($lethal): /* if extra lethal is rolled and theres no lethal */
						case $checkperk['Name'] == 'Extra Tactical' && !isset($tac):  /* if extra tactical is rolled and theres no tactical */
						case !isset($secgun) && $checkperk['Name'] == 'Stalker' && !isset($primgun): /* if the perk is Stalker and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Sleight of Hand' && !isset($primgun): /* if the perk is Sleight of Hand and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Ready Up' && !isset($primgun): /* if the perk is Ready Up and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Steady Aim' && !isset($primgun): /* if the perk is Steady Aim and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Quickdraw' && !isset($primgun): /* if the perk is Quickdraw and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Scavenger' && !isset($primgun): /* if the perk is Scavenger and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Fully Loaded' && !isset($primgun): /* if the perk is Fully Loaded and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Dead Eye' && !isset($primgun): /* if the perk is Dead Eye and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'On the Go' && !isset($primgun): /* if the perk is On the Go and there is no primary and no secondary */
						case !isset($secgun) && $checkperk['Name'] == 'Reflex' && !isset($primgun) && !isset($tac) && !isset($lethal): /* if the perk is Stalker and there is no primary and no secondary and no tactical and no lethal */
						case !isset($tac) && $checkperk['Name'] == 'Strong Arm' && !isset($lethal): /* if the perk is Strong Arm and there is no tactical and no lethal */
						case !isset($tac) && $checkperk['Name'] == 'Recon' && !isset($lethal): /* if the perk is Recon and there is no tactical and no lethal */
						case !isset($secgun) && $checkperk['Name'] == 'Focus' && !isset($primgun): /* if the perk is Focus and there is no primary and no secondary */
							continue;
							break;
					}
				}/* Perk Compatibility IF */
				
                
                $perkMatch = false;
                if(isset($perks)) {
                    foreach($perks as $key => $values) {
                        if($values['Name'] == $checkperk['Name']) {
                            $perkMatch = true;
                            break;
                        }/* match if */
                    }
                }
                
                if(!$perkMatch) {
                    $perkcount = $perkcount - $checkperk['Cost'];
                    $secAttachCount = null;
                    if($perkcount >= 0) {
                        $perks[] = $checkperk;
						if(isset($primgun)) {
	                        if($primAttachCount >= 0 && $checkperk['Name'] == 'Extra Attachment') {
	                            $primAttachCount = 3;
	                        }
						}
						if(isset($secgun)) {
							if($secAttachCount >= 0 && $checkperk['Name'] == 'Extra Attachment' && $secgun['Cat'] != 'Launcher') {
	                            $secAttachCount = 2;
	                        }
						}
                        
						if($checkperk['Name'] == 'Overkill') {
		                	$secgun = null;
							$secondary_gun = 0;
							$secAttachCount = null;
							
		                    $second_primary_gun = 1;
							$overKillYes = true;
		                }/* you can get a second primary */
                    }else{
                        $perkcount += $checkperk['Cost'];
                    }
                }/* if the perk is already there dont add the perk again */
            }/* while */
            
            /* overkill */
            if($second_primary_gun == 1) {
            	$x = 1;
            	while($x > 0) {
            		$secPrimGun = null;
            		$secPrimGun = $Primary->Roll();
					
					if(isset($primgun)) {
						if($primgun['Name'] != $secPrimGun['Name']) {
							$x -= 2;
						}
					}else{
						$x -= 2;
					}
						
            	}/* while */
            	if($overKillYes) {
            		$secPrimAttachCount = 2;
            	}else{
                	$secPrimAttachCount = $ClassFrame->getSecAttach();
            	}
            }
            
            /* ####################### Roll secondary and primary gun attachments */
            if(isset($primgun) && $primAttachCount > 0) {$pAttach = $Primary->rollAttachments($primgun['Cat'], $primAttachCount, $primgun['Name'], $lethal_equip);}
            if(isset($secgun)) {if($secgun['Cat'] != 'Launcher' && $secAttachCount > 0) {$sAttach = $Secondary->rollAttachments($secAttachCount, $secgun['Name']);}else{$secAttachCount = 0;}}
            if(isset($secPrimGun) && $secPrimAttachCount > 0) {$secPAttach = $Primary->rollAttachments($secPrimGun['Cat'], $secPrimAttachCount, $secPrimGun['Name'], $lethal_equip);}
			
			
			if(isset($pAttach)) {
				foreach ($pAttach as $key => $value) {
					switch ($value['img']) {
						case 'red_dot':
							$Reticle = $Primary->rollRedDot();
							break;
						case 'acog':
							$Reticle = $Primary->rollAcog();
							break;
						case 'holo':
							$Reticle = $Primary->rollHolo();
							break;
						case 'vmr':
							$Reticle = $Primary->rollVMR();
							break;
						default:
							continue;
							break;
					}/* switch */
				}/* foreach */
			}/* if */
			
			/* HERE */
            
            if(!$errflag) {
                if(isset($lethal)) {
                	if(isset($pAttach)) {
                		$letAttach = false;
                		foreach ($pAttach as $key => $value) {
                			if($value['name'] == 'Shotgun' || $value['name'] == 'Grenade Launcher') {
			                    $lethal['name'] = $value['name'];
			                    $lethal['img'] = $value['img'];
                				$letAttach = true;
                				break;
                			}
						}
                	}
                }
				
				$return = [
					'Primary' => (isset($primgun) ? $primgun : ''),
					'Primary_Attach' => (isset($pAttach) ? $pAttach : ''),
					'Primary_Reticle' => (isset($Reticle) ? $Reticle : ''),
					'Overkill' => (isset($secPrimGun) ? $secPrimGun : ''), //Overkill
					'Overkill_Attach' => (isset($secPAttach) ? $secPAttach : ''),
					'Secondary' => (isset($secgun) ? $secgun : ''),
					'Secondary_Attach' => (isset($sAttach) ? $sAttach : ''),
					'Tactical' => (isset($tac) ? $tac : ''),
					'Lethal' => (isset($lethal) ? $lethal : ''),
					'PackageName' => (isset($packageName) ? $packageName : ''),
					'Perks' => (isset($perks) ? $perks : ''),
				];
                
                if($packageName == 'Specialist') {
					$no_perks = ['Overkill','Extra Attachment','Extra Lethal','Extra Tactical','Fully Loaded'];
                    $perkcount = 11;
                    while($perkcount > 0) {
                        $checkperk = null;
                        $checkperk = $Perk->Roll();
                        
                        if(in_array($checkperk['Name'], $no_perks)) {
                            continue;
                        }
                        
                        $perkMatch = false;
                        if(isset($spec_perks)) {
                            foreach($spec_perks as $key => $values) {
                                if($values['Name'] == $checkperk['Name']) {
                                    $perkMatch = true;
                                    break;
                                }/* match if */
                            }
                        }/* specialist perks */
                        
                        if(isset($final_perks)) {
                            foreach($final_perks as $key => $values) {
                                if($values['Name'] == $checkperk['Name']) {
                                    $perkMatch = true;
                                    break;
                                }/* match if */
                            }
                        }/* specialist perks */
                        
                        if(isset($perks) && !$perkMatch) {
                            foreach($perks as $key => $values) {
                                if($values['Name'] == $checkperk['Name']) {
                                    $perkMatch = true;
                                    break;
                                }/* match if */
                            }
                        }/* Classes perks */
                        
                        if(!$perkMatch) {
                            if($perkcount >= 0) {
                                if($perkcount > 8) {
                                    $checkperk['Cost'] += 1;
                                    $spec_perks[] = $checkperk;
                                    $perkcount -= 1;
                                }else{/* store the top 3 perks */
                                    $perkcount -= $checkperk['Cost'];
									if($perkcount < 0) {
                                    $perkcount += $checkperk['Cost'];
									}else{
                                    	$final_perks[] = $checkperk;
									}
                                }
                            }
                        }/* if the perk is already there dont add the perk again */
                    }/* while */
                        
                    
                    $return['Specialist_Perks'] = $spec_perks;
                    $return['Super_Solider_Perks'] = $final_perks;
                    
                }else{
                    $streak_0 = false;
                    $streak_1 = false;
                    $streak_2 = false;
                    /* Check for smallest streak */
                    if($streaks_Arr[0]['Points'] < $streaks_Arr[1]['Points'] && $streaks_Arr[0]['Points'] < $streaks_Arr[2]['Points']) {
                        $streak1 = $streaks_Arr[0];
                        $streak_0 = true;
                    }else if($streaks_Arr[1]['Points'] < $streaks_Arr[2]['Points']) {
                        $streak1 = $streaks_Arr[1];
                        $streak_1 = true;
                    }else{
                        $streak1 = $streaks_Arr[2];
                        $streak_2 = true;
                    }
                    
                    /* Check for Largest streak */
                    if($streaks_Arr[0]['Points'] > $streaks_Arr[1]['Points'] && $streaks_Arr[0]['Points'] > $streaks_Arr[2]['Points']) {
                        $streak3 = $streaks_Arr[0];
                        $streak_0 = true;
                    }else if($streaks_Arr[1]['Points'] > $streaks_Arr[2]['Points']) {
                        $streak3 = $streaks_Arr[1];
                        $streak_1 = true;
                    }else{
                        $streak3 = $streaks_Arr[2];
                        $streak_2 = true;
                    }
                    
                    /* Check for Middle streak */
                    if($streak_1 && $streak_2) {
                        $streak2 = $streaks_Arr[0];
                    }elseif($streak_0 && $streak_2) {
                        $streak2 = $streaks_Arr[1];
                    }elseif($streak_1 && $streak_0) {
                        $streak2 = $streaks_Arr[2];
                    }
					
					$return['Killstreaks'] = [
						0 => $streak1,
						1 => $streak2,
						2 => $streak3,
					];
                }/* if else for specialist */
            }/* big if */
            
            return $return;
        }/* function executeAll */
    }/* class RCG_Execute */