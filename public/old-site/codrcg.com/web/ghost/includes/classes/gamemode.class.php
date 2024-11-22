<?php
	class Gamemode{
		/**
	     * Rolls and gets a random Class   */
		public function Roll(){
	     	$rand = rand(1, 10);
			switch ($rand) {
			    case 1:
			        $mode = 'Team Deathmatch';
			        break;
			    case 2:
			        $mode = 'Heavy Duty';
			        break;
			    case 3:
			        $mode = 'Cranked';
			        break;
			    case 4:
			        $mode = 'Blitz';
			        break;
			    case 5:
			        $mode = 'Search & Rescue';
			        break;
			    case 6:
			        $mode = 'Search & Destroy';
			        break;
			    case 7:
			        $mode = 'Domination';
			        break;
			    case 8:
			        $mode = 'Kill Confirmed';
			        break;
			    case 9:
			        $mode = 'Free-For-All';
			        break;
			    case 10:
			        $mode = 'Hunted Free-For-All';
			        break;
			    default:
			        $mode = 'NoMode';
			}/* switch */
			
			return $mode;
		}/* Roll */
	}/* Gamemode */