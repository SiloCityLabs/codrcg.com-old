<?php
	class Lethal{
		/**
	     * Rolls and gets a lethal equipment
	     */
		public function Roll(){
	     	$rand = rand(1, 6);
			switch ($rand) {
			    case 1:
			        $lethal['Name'] = 'Frag Grenade';
					$lethal['Cost'] = 1;
			        break;
			    case 2:
			        $lethal['Name'] = 'Semtex';
					$lethal['Cost'] = 1;
			        break;
			    case 3:
			        $lethal['Name'] = 'Throwing Kinfe';
					$lethal['Cost'] = 1;
			        break;
			    case 4:
			        $lethal['Name'] = 'I.E.D';
					$lethal['Cost'] = 1;
			        break;
			    case 5:
			        $lethal['Name'] = 'C4';
					$lethal['Cost'] = 1;
			        break;
			    case 6:
			        $lethal['Name'] = 'Canister Bomb';
					$lethal['Cost'] = 1;
			        break;
			    default:
			        $lethal['Name'] = 'Semtex';
					$lethal['Cost'] = 1;
			        break;
			}/* switch */
			
			return $lethal;
		}/* Roll */
	}/* Lethal */