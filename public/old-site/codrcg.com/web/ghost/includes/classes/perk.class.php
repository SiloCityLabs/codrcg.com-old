<?php
	class GH_Perk{
		/**
	     * Rolls and gets a single perk with all its information
	     */
	     public function Roll(){
	     	$rand = rand(1, 35);
	     	switch ($rand) {
			    case 1:
			        $perk['Name'] = 'Ready Up';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Speed';
			        break;
			    case 2:
			        $perk['Name'] = 'Sleight of Hand';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Speed';
			        break;
			    case 3:
			        $perk['Name'] = 'Agility';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Speed';
			        break;
			    case 4:
			        $perk['Name'] = 'Marathon';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Speed';
			        break;
			    case 5:
			        $perk['Name'] = 'Stalker';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Speed';
			        break;
			    case 6:
			        $perk['Name'] = 'Strong Arm';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Handling';
			        break;
			    case 7:
			        $perk['Name'] = 'On the Go';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Handling';
			        break;
			    case 8:
			        $perk['Name'] = 'Reflex';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Handling';
			        break;
			    case 9:
			        $perk['Name'] = 'Steady Aim';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Handling';
			        break;
			    case 10:
			        $perk['Name'] = 'Quickdraw';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Handling';
			        break;
			    case 11:
			        $perk['Name'] = 'Takedown';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Stealth';
			        break;
			    case 12:
			        $perk['Name'] = 'Blind Eye';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Stealth';
			        break;
			    case 13:
			        $perk['Name'] = 'Off the Grid';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Stealth';
			        break;
			    case 14:
			        $perk['Name'] = 'Dead Silence';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Stealth';
			        break;
			    case 15:
			        $perk['Name'] = 'Incog';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Stealth';
			        break;
			    case 16:
			        $perk['Name'] = 'Recon';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Awareness';
			        break;
			    case 17:
			        $perk['Name'] = 'Scavenger';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Awareness';
			        break;
			    case 18:
			        $perk['Name'] = 'Sitrep';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Awareness';
			        break;
			    case 19:
			        $perk['Name'] = 'Amplify ';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Awareness';
			        break;
			    case 20:
			        $perk['Name'] = 'Wiretap';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Awareness';
			        break;
			    case 21:
			        $perk['Name'] = 'Resilience';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Resistance';
			        break;
			    case 22:
			        $perk['Name'] = 'ICU';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Resistance';
			        break;
			    case 23:
			        $perk['Name'] = 'Focus';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Resistance';
			        break;
			    case 24:
			        $perk['Name'] = 'Tac Resist';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Resistance';
			        break;
			    case 25:
			        $perk['Name'] = 'Blast Shield';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Resistance';
			        break;
			    case 26:
			        $perk['Name'] = 'Extra Tactical';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Equipment';
			        break;
			    case 27:
			        $perk['Name'] = 'Extra Lethal';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Equipment';
			        break;
			    case 28:
			        $perk['Name'] = 'Fully Loaded';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Equipment';
			        break;
			    case 29:
			        $perk['Name'] = 'Extra Attachment';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Equipment';
			        break;
			    case 30:
			        $perk['Name'] = 'Danger Close';
					$perk['Cost'] = 4;
			        $perk['Cat'] = 'Equipment';
			        break;
			    case 31:
			        $perk['Name'] = 'Gambler';
					$perk['Cost'] = 1;
			        $perk['Cat'] = 'Elite';
			        break;
			    case 32:
			        $perk['Name'] = 'Hardline';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Elite';
			        break;
			    case 33:
			        $perk['Name'] = 'Ping';
					$perk['Cost'] = 2;
			        $perk['Cat'] = 'Elite';
			        break;
			    case 34:
			        $perk['Name'] = 'Overkill';
					$perk['Cost'] = 3;
			        $perk['Cat'] = 'Elite';
			        break;
			    case 35:
			        $perk['Name'] = 'Dead Eye';
					$perk['Cost'] = 5;
			        $perk['Cat'] = 'Elite';
			        break;
			    default:
			        $perk = 'NoPerk';
			}
			
			return $perk;
	     }/* Roll */
			
	}/* Perk */