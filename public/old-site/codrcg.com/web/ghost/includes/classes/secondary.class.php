<?php
	class Secondary{
		/**
	     * Rolls and gets a single perk with all its information
	     */
		public function Roll(){
	     	$rand = rand(1, 8);
			switch ($rand) {
			    case 1:
			        $gun['Name'] = '.44 Magnum';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Handgun';
			        break;
			    case 2:
			        $gun['Name'] = 'M9A1';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Handgun';
			        break;
			    case 3:
			        $gun['Name'] = 'MP-443 GRACH';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Handgun';
			        break;
			    case 4:
			        $gun['Name'] = 'P226';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Handgun';
			        break;
			    case 5:
			        $gun['Name'] = 'PDW';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Handgun';
			        break;
			    case 6:
			        $gun['Name'] = 'Kastet';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Launcher';
			        break;
			    case 7:
			        $gun['Name'] = 'MK32';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Launcher';
			        break;
			    case 8:
			        $gun['Name'] = 'Panzerfaust';
					$gun['Cost'] = 1;
			        $gun['Cat'] = 'Launcher';
			        break;
			    default:
			        $gun = 'NoGun';
			}/* switch */
			
			return $gun;
		}/* Roll */
	
		public function rollAttachments($total, $gun_name){
		    $i=0;
            while($i < $total){
            	$skip = false;
    			$tmp_attach = $this->rollAttach();
				/* Attachemnt checks for guns with built in attachments */
    			if(($gun_name != '.44 Magnum' || $gun_name != 'PDW') && $tmp_attach['name'] == 'ACOG'){
    				$skip = true;
    			}
				if($gun_name != 'PDW' && ($tmp_attach['name'] == 'Red Dot' || $tmp_attach['name'] == 'Holographic Sight')){
    				$skip = true;
    			}
				if($gun_name == '.44 Magnum' && $tmp_attach['name'] == 'Extended Mags'){
    				$skip = true;
    			}
				if($gun_name == 'PDW' && $tmp_attach['name'] == 'Akimbo'){
    				$skip = true;
    			}
				
				if(!$skip){
	    			if($i == 0){
	    			    $myattach[] = $tmp_attach;
	                    $i++;
	    			}else{
	    			    $attMatch = false;
						if($tmp_attach['name'] == $myattach[0]['name']){
	                        $attMatch = true;
					    }
					    if($tmp_attach['type'] == $myattach[0]['type']){
	                        $attMatch = true;
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
		
        private function rollAttach(){
            $rand = rand(1, 10);
            
            switch ($rand) {
                case 1:
                    $attach['name'] = 'Flash Suppressor';
                    $attach['img'] = 'flash_supp';
                    $attach['type'] = 'Barrel';
                    break;
                case 2:
                    $attach['name'] = 'Silencer';
                    $attach['img'] = 'silencer';
                    $attach['type'] = 'Barrel';
                    break;
                case 3:
                    $attach['name'] = 'Muzzle Brake';
                    $attach['img'] = 'muzzle_brake';
                    $attach['type'] = 'Barrel';
                    break;
                case 4:
                    $attach['name'] = 'Tactical Knife';
                    $attach['img'] = 'tac_knife';
                    $attach['type'] = 'Under Barrel';
                    break;
                case 5:
                    $attach['name'] = 'Akimbo';
                    $attach['img'] = 'akimbo';
                    $attach['type'] = 'Under Barrel';
                    break;
                case 6:
                    $attach['name'] = 'Extended Mags';
                    $attach['img'] = 'ext_mags';
                    $attach['type'] = 'Mod';
                    break;
                case 7:
                    $attach['name'] = 'Armor-Piercing';
                    $attach['img'] = 'piercing';
                    $attach['type'] = 'Mod';
                    break;
                case 8:
                    $attach['name'] = 'ACOG';
                    $attach['img'] = 'acog';
                    $attach['type'] = 'Sights';
                    break;
                case 9:
                    $attach['name'] = 'Red Dot';
                    $attach['img'] = 'red_dot';
                    $attach['type'] = 'Sights';
                    break;
                case 10:
                    $attach['name'] = 'Holographic Sight';
                    $attach['img'] = 'holo';
                    $attach['type'] = 'Sights';
                    break;
                default:
                    $attach['name'] = 'None';
                    break;
            }/* Switch */
            return $attach;
        }/* rollAttach */
    
	}/* Secondary */