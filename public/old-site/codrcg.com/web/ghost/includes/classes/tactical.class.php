<?php
	class Tactical{
		/**
	     * Rolls and gets a tactical equipment
	     */
		public function Roll(){
	     	$rand = rand(1, 6);
			switch ($rand) {
			    case 1:
			        $tac['Name'] = '9-Bang';
					$tac['Cost'] = 1;
			        break;
			    case 2:
			        $tac['Name'] = 'Concussion';
					$tac['Cost'] = 1;
			        break;
			    case 3:
			        $tac['Name'] = 'Smoke';
					$tac['Cost'] = 1;
			        break;
			    case 4:
			        $tac['Name'] = 'Trophy System';
					$tac['Cost'] = 1;
			        break;
			    case 5:
			        $tac['Name'] = 'Motion Sensor';
					$tac['Cost'] = 1;
			        break;
			    case 6:
			        $tac['Name'] = 'Thermobaric';
					$tac['Cost'] = 1;
			        break;
			    default:
			        $tac = 'NoTac';
			}/* switch */
			
			return $tac;
		}/* Roll */
	}/* Tactical */