<?php
	class Primary{
		/**
	     * Rolls and gets a single perk with all its information
	     */
		public function Roll(){
	     	$rand = rand(1, 34);
			switch ($rand) {
			    case 1:
			        $gun['Name'] = 'Bizon';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
				case 2:
			        $gun['Name'] = 'CBJ-MS';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
				case 3:
			        $gun['Name'] = 'K7';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
				case 4:
			        $gun['Name'] = 'MTAR-X';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
				case 5:
			        $gun['Name'] = 'Vector CRB';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
				case 6:
			        $gun['Name'] = 'Vepr';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
			    case 7:
			        $gun['Name'] = 'AK-12';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 8:
			        $gun['Name'] = 'ARX-160';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 9:
			        $gun['Name'] = 'FAD';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 10:
			        $gun['Name'] = 'Honey Badger';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 11:
			        $gun['Name'] = 'MSBS';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 12:
			        $gun['Name'] = 'Remington R5';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 13:
			        $gun['Name'] = 'SA-805';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 14:
			        $gun['Name'] = 'SC-2010';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    case 15:
			        $gun['Name'] = 'IA-2';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Marksman Rifle';
			        break;
			    case 16:
			        $gun['Name'] = 'Mk14 EBR';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Marksman Rifle';
			        break;
			    case 17:
			        $gun['Name'] = 'MR-28';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Marksman Rifle';
			        break;
			    case 18:
			        $gun['Name'] = 'SVU';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Marksman Rifle';
			        break;
			    case 19:
			        $gun['Name'] = 'L115';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Sniper Rifle';
			        break;
			    case 20:
			        $gun['Name'] = 'Lynx';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Sniper Rifle';
			        break;
			    case 21:
			        $gun['Name'] = 'USR';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Sniper Rifle';
			        break;
			    case 22:
			        $gun['Name'] = 'VKS';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Sniper Rifle';
			        break;
			    case 23:
			        $gun['Name'] = 'FP6';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Shotgun';
			        break;
			    case 24:
			        $gun['Name'] = 'MTS-255';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Shotgun';
			        break;
			    case 25:
			        $gun['Name'] = 'Bulldog';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Shotgun';
			        break;
			    case 26:
			        $gun['Name'] = 'Tac 12';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Shotgun';
			        break;
			    case 27:
			        $gun['Name'] = 'Riot Shield';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Shield';
			        break;
			    case 28:
			        $gun['Name'] = 'Ameli';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'LMG';
			        break;
			    case 29:
			        $gun['Name'] = 'Chain SAW';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'LMG';
			        break;
				case 30:
			        $gun['Name'] = 'Ripper';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
			    case 31:
			        $gun['Name'] = 'LSAT';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'LMG';
			        break;
			    case 32:
			        $gun['Name'] = 'M27-IAR';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'LMG';
			        break;
				case 33:
			        $gun['Name'] = 'Maverick A2';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Sniper Rifle';
			        break;
				case 34:
			        $gun['Name'] = 'Maverick';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Assault Rifle';
			        break;
			    default:
			        $gun['Name'] = 'MTAR-X';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'SMG';
			        break;
			}/* switch */
			
			return $gun;
		}/* Roll */
	
		public function rollCamo(){
	     	$rand = rand(1, 26);
			
			switch ($rand) {
				case 1:
					$camo['name'] = 'None';
					$camo['img'] = 'none';
					break;
				case 2:
					$camo['name'] = 'Snow';
					$camo['img'] = 'snow';
					break;
				case 3:
					$camo['name'] = 'Brush';
					$camo['img'] = 'brush';
					break;
				case 4:
					$camo['name'] = 'Autumn';
					$camo['img'] = 'autumn';
					break;
				case 5:
					$camo['name'] = 'Ocean';
					$camo['img'] = 'ocean';
					break;
				case 6:
					$camo['name'] = 'Scale';
					$camo['img'] = 'scale';
					break;
				case 7:
					$camo['name'] = 'Crocodile';
					$camo['img'] = 'crocodile';
					break;
				case 8:
					$camo['name'] = 'Red';
					$camo['img'] = 'red';
					break;
				case 9:
					$camo['name'] = 'Caustic';
					$camo['img'] = 'caustic';
					break;
				case 10:
					$camo['name'] = 'Green';
					$camo['img'] = 'green';
					break;
				case 11:
					$camo['name'] = 'Net';
					$camo['img'] = 'net';
					break;
				case 12:
					$camo['name'] = 'Trail';
					$camo['img'] = 'trail';
					break;
				case 13:
					$camo['name'] = 'Woodland';
					$camo['img'] = 'woodland';
					break;
				case 14:
					$camo['name'] = 'Gold';
					$camo['img'] = 'gold';
					break;
				case 15:
					$camo['name'] = 'Body Count';
					$camo['img'] = 'body_count';
					break;
				case 16:
					$camo['name'] = 'Kiss of Death';
					$camo['img'] = 'kiss_of_death';
					break;
				case 17:
					$camo['name'] = 'Festive';
					$camo['img'] = 'festive';
					break;
				case 18:
					$camo['name'] = 'CPT Price';
					$camo['img'] = 'cpt_price';
					break;
				case 19:
					$camo['name'] = 'Space Cats';
					$camo['img'] = 'space_cats';
					break;
				case 20:
					$camo['name'] = 'Inferno';
					$camo['img'] = 'inferno';
					break;
				case 21:
					$camo['name'] = 'Ducky';
					$camo['img'] = 'ducky';
					break;
				case 22:
					$camo['name'] = 'Circuit';
					$camo['img'] = 'circuit';
					break;
				case 23:
					$camo['name'] = 'Spectrum';
					$camo['img'] = 'spectrum';
					break;
				case 24:
					$camo['name'] = 'War Cry';
					$camo['img'] = 'war_cry';
					break;
				case 25:
					$camo['name'] = 'Ice';
					$camo['img'] = 'ice';
					break;
				case 26:
					$camo['name'] = 'Makarov';
					$camo['img'] = 'makarov';
					break;
				default:
					$camo['name'] = 'none';
					$camo['img'] = 'none';
					break;
			}
			return $camo;
		}/* rollCamo */
		
		public function rollRedDot(){
	     	$rand = rand(1, 21);
			
			switch ($rand) {
				case 1:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'reddot_default';
					break;
				case 2:
					$reticle['name'] = 'Precision';
					$reticle['img'] = 'all_precision';
					break;
				case 3:
					$reticle['name'] = 'Vertex';
					$reticle['img'] = 'all_vertex';
					break;
				case 4:
					$reticle['name'] = 'Blue Dot';
					$reticle['img'] = 'all_bluedot';
					break;
				case 5:
					$reticle['name'] = 'Precision Dot';
					$reticle['img'] = 'all_precisiondot';
					break;
				case 6:
					$reticle['name'] = 'Delta';
					$reticle['img'] = 'all_delta';
					break;
				case 7:
					$reticle['name'] = 'Halo';
					$reticle['img'] = 'reddot_halo';
					break;
				case 8:
					$reticle['name'] = 'Denny';
					$reticle['img'] = 'reddot_denny';
					break;
				case 9:
					$reticle['name'] = 'Elite';
					$reticle['img'] = 'reddot_elite';
					break;
				case 10:
					$reticle['name'] = 'Viper';
					$reticle['img'] = 'reddot_viper';
					break;
				case 11:
					$reticle['name'] = 'Deuce';
					$reticle['img'] = 'reddot_deuce';
					break;
				case 12:
					$reticle['name'] = 'Triad';
					$reticle['img'] = 'all_triad';
					break;
				case 13:
					$reticle['name'] = 'Festive';
					$reticle['img'] = 'all_festive';
					break;
				case 14:
					$reticle['name'] = 'CPT Price';
					$reticle['img'] = 'all_cpt_price';
					break;
				case 15:
					$reticle['name'] = 'Space Cats';
					$reticle['img'] = 'all_space_cats';
					break;
				case 16:
					$reticle['name'] = 'Inferno';
					$reticle['img'] = 'all_inferno';
					break;
				case 17:
					$reticle['name'] = 'Ducky';
					$reticle['img'] = 'all_ducky';
					break;
				case 18:
					$reticle['name'] = 'Circuit';
					$reticle['img'] = 'all_circuit';
					break;
				case 19:
					$reticle['name'] = 'Spectrum';
					$reticle['img'] = 'all_spectrum';
					break;
				case 20:
					$reticle['name'] = 'War Cry';
					$reticle['img'] = 'all_war_cry';
					break;
				case 21:
					$reticle['name'] = 'Makarov';
					$reticle['img'] = 'all_makarov';
					break;
				default:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'reddot_default';
					break;
			}
			return $reticle;
		}/* rollRedDot */

		public function rollAcog(){
	     	$rand = rand(1, 21);
			
			switch ($rand) {
				case 1:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'acog_default';
					break;
				case 2:
					$reticle['name'] = 'Precision';
					$reticle['img'] = 'all_precision';
					break;
				case 3:
					$reticle['name'] = 'Vertex';
					$reticle['img'] = 'all_vertex';
					break;
				case 4:
					$reticle['name'] = 'Blue Dot';
					$reticle['img'] = 'all_bluedot';
					break;
				case 5:
					$reticle['name'] = 'Precision Dot';
					$reticle['img'] = 'all_precisiondot';
					break;
				case 6:
					$reticle['name'] = 'Delta';
					$reticle['img'] = 'all_delta';
					break;
				case 7:
					$reticle['name'] = 'Omega';
					$reticle['img'] = 'acog_omega';
					break;
				case 8:
					$reticle['name'] = 'Target Drop';
					$reticle['img'] = 'acog_targetdrop';
					break;
				case 9:
					$reticle['name'] = 'Cross Dot';
					$reticle['img'] = 'acog_crossdot';
					break;
				case 10:
					$reticle['name'] = 'Vector';
					$reticle['img'] = 'acog_vector';
					break;
				case 11:
					$reticle['name'] = 'Inverse';
					$reticle['img'] = 'acog_inverse';
					break;
				case 12:
					$reticle['name'] = 'Triad';
					$reticle['img'] = 'all_triad';
					break;
				case 13:
					$reticle['name'] = 'Festive';
					$reticle['img'] = 'all_festive';
				case 14:
					$reticle['name'] = 'CPT Price';
					$reticle['img'] = 'all_cpt_price';
					break;
				case 15:
					$reticle['name'] = 'Space Cats';
					$reticle['img'] = 'all_space_cats';
					break;
				case 16:
					$reticle['name'] = 'Inferno';
					$reticle['img'] = 'all_inferno';
					break;
				case 17:
					$reticle['name'] = 'Ducky';
					$reticle['img'] = 'all_ducky';
					break;
				case 18:
					$reticle['name'] = 'Circuit';
					$reticle['img'] = 'all_circuit';
					break;
				case 19:
					$reticle['name'] = 'Spectrum';
					$reticle['img'] = 'all_spectrum';
					break;
				case 20:
					$reticle['name'] = 'War Cry';
					$reticle['img'] = 'all_war_cry';
					break;
				case 21:
					$reticle['name'] = 'Makarov';
					$reticle['img'] = 'all_makarov';
					break;
				default:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'acog_default';
					break;
			}
			return $reticle;
		}/* rollAcog */
			
		public function rollHolo(){
	     	$rand = rand(1, 21);
			
			switch ($rand) {
				case 1:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'holo_default';
					break;
				case 2:
					$reticle['name'] = 'Precision';
					$reticle['img'] = 'all_precision';
					break;
				case 3:
					$reticle['name'] = 'Vertex';
					$reticle['img'] = 'all_vertex';
					break;
				case 4:
					$reticle['name'] = 'Blue Dot';
					$reticle['img'] = 'all_bluedot';
					break;
				case 5:
					$reticle['name'] = 'Precision Dot';
					$reticle['img'] = 'all_precisiondot';
					break;
				case 6:
					$reticle['name'] = 'Delta';
					$reticle['img'] = 'all_delta';
					break;
				case 7:
					$reticle['name'] = 'Precision Tech';
					$reticle['img'] = 'holo_precisiontech';
					break;
				case 8:
					$reticle['name'] = 'Square Tech';
					$reticle['img'] = 'holo_squaretech';
					break;
				case 9:
					$reticle['name'] = 'Zombie Stopper';
					$reticle['img'] = 'holo_zombiestopper';
					break;
				case 10:
					$reticle['name'] = 'Tracker';
					$reticle['img'] = 'holo_tracker';
					break;
				case 11:
					$reticle['name'] = 'Delta Tech';
					$reticle['img'] = 'delta_tech';
					break;
				case 12:
					$reticle['name'] = 'Triad';
					$reticle['img'] = 'all_triad';
					break;
				case 13:
					$reticle['name'] = 'Festive';
					$reticle['img'] = 'all_festive';
				case 14:
					$reticle['name'] = 'CPT Price';
					$reticle['img'] = 'all_cpt_price';
					break;
				case 15:
					$reticle['name'] = 'Space Cats';
					$reticle['img'] = 'all_space_cats';
					break;
				case 16:
					$reticle['name'] = 'Inferno';
					$reticle['img'] = 'all_inferno';
					break;
				case 17:
					$reticle['name'] = 'Ducky';
					$reticle['img'] = 'all_ducky';
					break;
				case 18:
					$reticle['name'] = 'Circuit';
					$reticle['img'] = 'all_circuit';
					break;
				case 19:
					$reticle['name'] = 'Spectrum';
					$reticle['img'] = 'all_spectrum';
					break;
				case 20:
					$reticle['name'] = 'War Cry';
					$reticle['img'] = 'all_war_cry';
					break;
				case 21:
					$reticle['name'] = 'Makarov';
					$reticle['img'] = 'all_makarov';
					break;
				default:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'holo_default';
					break;
			}
			return $reticle;
		}/* rollHolo */
		
		public function rollVMR(){
	     	$rand = rand(1, 21);
			
			switch ($rand) {
				case 1:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'vmr_default';
					break;
				case 2:
					$reticle['name'] = 'Precision';
					$reticle['img'] = 'all_precision';
					break;
				case 3:
					$reticle['name'] = 'Vertex';
					$reticle['img'] = 'all_vertex';
					break;
				case 4:
					$reticle['name'] = 'Blue Dot';
					$reticle['img'] = 'all_bluedot';
					break;
				case 5:
					$reticle['name'] = 'Precision Dot';
					$reticle['img'] = 'all_precisiondot';
					break;
				case 6:
					$reticle['name'] = 'Delta';
					$reticle['img'] = 'all_delta';
					break;
				case 7:
					$reticle['name'] = 'Halo';
					$reticle['img'] = 'vmr_halo';
					break;
				case 8:
					$reticle['name'] = 'Plus Drop';
					$reticle['img'] = 'vmr_plusdrop';
					break;
				case 9:
					$reticle['name'] = 'Predator';
					$reticle['img'] = 'vmr_predator';
					break;
				case 10:
					$reticle['name'] = 'Variable';
					$reticle['img'] = 'vmr_variable';
					break;
				case 11:
					$reticle['name'] = 'Elevation';
					$reticle['img'] = 'vmr_elevation';
					break;
				case 12:
					$reticle['name'] = 'Triad';
					$reticle['img'] = 'all_triad';
					break;
				case 13:
					$reticle['name'] = 'Festive';
					$reticle['img'] = 'all_festive';
				case 14:
					$reticle['name'] = 'CPT Price';
					$reticle['img'] = 'all_cpt_price';
					break;
				case 15:
					$reticle['name'] = 'Space Cats';
					$reticle['img'] = 'all_space_cats';
					break;
				case 16:
					$reticle['name'] = 'Inferno';
					$reticle['img'] = 'all_inferno';
					break;
				case 17:
					$reticle['name'] = 'Ducky';
					$reticle['img'] = 'all_ducky';
					break;
				case 18:
					$reticle['name'] = 'Circuit';
					$reticle['img'] = 'all_circuit';
					break;
				case 19:
					$reticle['name'] = 'Spectrum';
					$reticle['img'] = 'all_spectrum';
					break;
				case 20:
					$reticle['name'] = 'War Cry';
					$reticle['img'] = 'all_war_cry';
					break;
				case 21:
					$reticle['name'] = 'Makarov';
					$reticle['img'] = 'all_makarov';
					break;
				default:
					$reticle['name'] = 'Default';
					$reticle['img'] = 'vmr_default';
					break;
			}
			return $reticle;
		}/* rollVMR */
		
		public function rollAttachments($type, $total, $gun_name, $lethal){
		    $i=0;
            while($i < $total){
    			$skip = false;
    		    switch ($type) {
    				case 'Assault Rifle':
    					$tmp_attach = $this->rollAssAttach();
    					break;
                    case 'SMG':
                        $tmp_attach = $this->rollSmgAttach();
                        break;
                    case 'Marksman Rifle':
                        $tmp_attach = $this->rollMarkAttach();
                        break;
                    case 'LMG':
                        $tmp_attach = $this->rollLmgAttach();
                        break;
                    case 'Sniper Rifle':
                        $tmp_attach = $this->rollSnipAttach();
                        break;
                    case 'Shotgun':
                        $tmp_attach = $this->rollShotAttach();
                        break;
                    case 'Shield':
                        $tmp_attach = $this->rollShieldAttach();
						$total = 1;
                        break;
    			}/* switch */
    			
    			/* Attachemnt checks for guns with built in attachments */
    			if($gun_name == 'CBJ-MS' && $tmp_attach['name'] == 'Armor-Piercing'){
    				$skip = true;
    			}
				if(($gun_name == 'K7' || $gun_name == 'Honey Badger' || $gun_name == 'VKS') && $tmp_attach['type'] == 'Barrel'){
    				$skip = true;
    			}
				if($gun_name != 'MSBS' && $tmp_attach['name'] == 'Automatic Fire'){
    				$skip = true;
    			}
				if($gun_name == 'MSBS' && $tmp_attach['name'] == 'Burst Fire'){
    				$skip = true;
    			}
				if($gun_name == 'Chain SAW' && ($tmp_attach['type'] == 'Sights' || $tmp_attach['name'] == 'Shotgun' || $tmp_attach['name'] == 'Foregrip' || $tmp_attach['name'] == 'Flash Suppressor')){
    				$skip = true;
    			}
				if($gun_name == 'SVU' && $tmp_attach['name'] == 'Tracker Sight'){
    				$skip = true;
    			}
				if(($gun_name == 'FP6' || $gun_name == 'MTS-255') && $tmp_attach['name'] == 'Extended Mags'){
    				$skip = true;
    			}
				
				/* check if there is a lethal */
				if($lethal == 0 && ($tmp_attach['name'] == 'Shotgun' || $tmp_attach['name'] == 'Grenade Launcher')){
    				$skip = true;
    			}
				
    			
    			if(!$skip){
	    			if($i == 0){
	    			    $myattach[] = $tmp_attach;
	                    $i++;
	    			}else{
	    			    $attMatch = false;
	    			    foreach ($myattach as $key => $value) {
							if($tmp_attach['name'] == $value['name']){
	                            $attMatch = true;
							    break;
						    }
							/* Default check can only have one attach from each type */
							if($tmp_attach['type'] == $value['type']){
	                            $attMatch = true;
							    break;
						    }
						}
	                    
	                    if(!$attMatch){
	                        $myattach[] = $tmp_attach;
	                        $i++;
	                    }/* no match = use attachment */
	    			}
				}
			}/* while */
			return $myattach;
		}/* rollAttachments */
		
        private function rollAssAttach(){
            $rand = rand(1, 17);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Red Dot Sight';
                    $attach['img'] = 'red_dot';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'ACOG Scope';
                    $attach['img'] = 'acog';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
		      		$attach['type'] = 'Sights';
                    break;
                case 4:
                    $attach['name'] = 'VMR Sight';
                    $attach['img'] = 'vmr';
		      		$attach['type'] = 'Sights';
                    break;
                case 5:
                    $attach['name'] = 'Thermal Hybrid Scope';
                    $attach['img'] = 'thermal_hybrid';
		      		$attach['type'] = 'Sights';
                    break;
                case 6:
                    $attach['name'] = 'Tracker Sight';
                    $attach['img'] = 'tracker';
		      		$attach['type'] = 'Sights';
                    break;
                case 7:
                    $attach['name'] = 'Flash Suppressor';
                    $attach['img'] = 'flash_supp';
		      		$attach['type'] = 'Barrel';
                    break;
                case 8:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		      		$attach['type'] = 'Barrel';
                    break;
                case 9:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
		      		$attach['type'] = 'Barrel';
                    break;
                case 10:
                    $attach['name'] = 'Foregrip';
                    $attach['img'] = 'foregrip';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 11:
                    $attach['name'] = 'Shotgun';
                    $attach['img'] = 'shotgun';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 12:
                    $attach['name'] = 'Grenade Launcher';
                    $attach['img'] = 'grenade_launcher';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 13:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		      		$attach['type'] = 'Mod';
                    break;
                case 14:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
		      		$attach['type'] = 'Mod';
                    break;
                case 15:
                    $attach['name'] = 'Semi-automatic';
                    $attach['img'] = 'semi_auto';
		      		$attach['type'] = 'Mod';
                    break;
                case 16:
                    $attach['name'] = 'Burst Fire';
                    $attach['img'] = 'burst_fire';
		      		$attach['type'] = 'Mod';
                    break;
                case 17:
                    $attach['name'] = 'Automatic Fire';
                    $attach['img'] = 'automatic_fire';
		      		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollAssAttach */
    
        private function rollSmgAttach(){
            $rand = rand(1, 13);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Red Dot Sight';
                    $attach['img'] = 'red_dot';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'ACOG Scope';
                    $attach['img'] = 'acog';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
		      		$attach['type'] = 'Sights';
                    break;
                case 4:
                    $attach['name'] = 'VMR Sight';
                    $attach['img'] = 'vmr';
		      		$attach['type'] = 'Sights';
                    break;
                case 5:
                    $attach['name'] = 'Thermal Hybrid Sight';
                    $attach['img'] = 'thermal_hybrid';
		      		$attach['type'] = 'Sights';
                    break;
                case 6:
                    $attach['name'] = 'Tracker Sight';
                    $attach['img'] = 'tracker';
		      		$attach['type'] = 'Sights';
                    break;
                case 7:
                    $attach['name'] = 'Flash Suppressor';
                    $attach['img'] = 'flash_supp';
		      		$attach['type'] = 'Barrel';
                    break;
                case 8:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		      		$attach['type'] = 'Barrel';
                    break;
                case 9:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
		      		$attach['type'] = 'Barrel';
                    break;
                case 10:
                    $attach['name'] = 'Foregrip';
                    $attach['img'] = 'foregrip';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 11:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		      		$attach['type'] = 'Mod';
                    break;
                case 12:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
		      		$attach['type'] = 'Mod';
                    break;
                case 13:
                    $attach['name'] = 'Rapid Fire';
                    $attach['img'] = 'rapid_fire';
		      		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollSmgAttach */

        private function rollLmgAttach(){
            $rand = rand(1, 15);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Red Dot Sight';
                    $attach['img'] = 'red_dot';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'ACOG Scope';
                    $attach['img'] = 'acog';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
		      		$attach['type'] = 'Sights';
                    break;
                case 4:
                    $attach['name'] = 'VMR Sight';
                    $attach['img'] = 'vmr';
		      		$attach['type'] = 'Sights';
                    break;
                case 5:
                    $attach['name'] = 'Thermal Hybrid Scope';
                    $attach['img'] = 'thermal_hybrid';
		      		$attach['type'] = 'Sights';
                    break;
                case 6:
                    $attach['name'] = 'Tracker Sight';
                    $attach['img'] = 'tracker';
		      		$attach['type'] = 'Sights';
                    break;
                case 7:
                    $attach['name'] = 'Flash Suppressor';
                    $attach['img'] = 'flash_supp';
		      		$attach['type'] = 'Barrel';
                    break;
                case 8:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		      		$attach['type'] = 'Barrel';
                    break;
                case 9:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
		      		$attach['type'] = 'Barrel';
                    break;
                case 10:
                    $attach['name'] = 'Foregrip';
                    $attach['img'] = 'foregrip';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 11:
                    $attach['name'] = 'Shotgun';
                    $attach['img'] = 'shotgun';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 12:
                    $attach['name'] = 'Grenade Launcher';
                    $attach['img'] = 'grenade_launcher';
		      		$attach['type'] = 'Under Barrel';
                    break;
                case 13:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		      		$attach['type'] = 'Mod';
                    break;
                case 14:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
		      		$attach['type'] = 'Mod';
                    break;
                case 15:
                    $attach['name'] = 'Rapid Fire';
                    $attach['img'] = 'rapid_fire';
		      		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollLmgAttach */

        private function rollMarkAttach(){
            $rand = rand(1, 12);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Red Dot Sight';
                    $attach['img'] = 'red_dot';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'ACOG Scope';
                    $attach['img'] = 'acog';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
		      		$attach['type'] = 'Sights';
                    break;
                case 4:
                    $attach['name'] = 'Iron Sight';
                    $attach['img'] = 'iron_sight';
		      		$attach['type'] = 'Sights';
                    break;
                case 5:
                    $attach['name'] = 'Thermal Hybrid Scope';
                    $attach['img'] = 'thermal_hybrid';
		      		$attach['type'] = 'Sights';
                    break;
                case 6:
                    $attach['name'] = 'Tracker Sight';
                    $attach['img'] = 'tracker';
		      		$attach['type'] = 'Sights';
                    break;
                case 7:
                    $attach['name'] = 'Flash Suppressor';
                    $attach['img'] = 'flash_supp';
		      		$attach['type'] = 'Barrel';
                    break;
                case 8:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		      		$attach['type'] = 'Barrel';
                    break;
                case 9:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
		      		$attach['type'] = 'Barrel';
                    break;
                case 10:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		      		$attach['type'] = 'Mod';
                    break;
                case 11:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
		      		$attach['type'] = 'Mod';
                    break;
                case 12:
                    $attach['name'] = 'Burst Fire';
                    $attach['img'] = 'burst_fire';
		      		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollMarkAttach */

        private function rollShotAttach(){
            $rand = rand(1, 7);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Red Dot Sight';
                    $attach['img'] = 'red_dot';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		     		$attach['type'] = 'Barrel';
                    break;
                case 4:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
		     		$attach['type'] = 'Barrel';
                    break;
                case 5:
                    $attach['name'] = 'Foregrip';
                    $attach['img'] = 'foregrip';
		     		$attach['type'] = 'Under Barrel';
                    break;
                case 6:
                    $attach['name'] = 'Slug Rounds';
                    $attach['img'] = 'slug_rounds';
		     		$attach['type'] = 'Mod';
                    break;
                case 7:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		     		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollShotAttach */

        private function rollSnipAttach(){
            $rand = rand(1, 7);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'ACOG';
                    $attach['img'] = 'acog';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'Thermal Scope';
                    $attach['img'] = 'thermal_hybrid';
		      		$attach['type'] = 'Sights';
                    break;
                case 3:
                    $attach['name'] = 'Variable Zoom Lens';
                    $attach['img'] = 'variable_zoom';
		     		$attach['type'] = 'Sights';
                    break;
                case 4:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
		     		$attach['type'] = 'Barrel';
                    break;
                case 5:
                    $attach['name'] = 'Chrome Lined';
                    $attach['img'] = 'chrome_lined';
		     		$attach['type'] = 'Barrel';
                    break;
                case 6:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
		     		$attach['type'] = 'Mod';
                case 7:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
		     		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollSnipAttach */

        private function rollShieldAttach(){
            $rand = rand(1, 3);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Scrambler';
                    $attach['img'] = 'scrambler';
		      		$attach['type'] = 'Sights';
                    break;
                case 2:
                    $attach['name'] = 'Titanium Frame';
                    $attach['img'] = 'titanium_frame';
		     		$attach['type'] = 'Mod';
                case 3:
                    $attach['name'] = 'Radar';
                    $attach['img'] = 'radar';
		     		$attach['type'] = 'Mod';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollSnipAttach */

	}/* Primary */