<?php
	class Challenge{
		/**
	     * Rolls and gets a random Challenge   */
		public function Roll(){
	     	$rand = rand(1, 20);
			switch ($rand) {
			    case 1:
			        $challenge['Name'] = 'Get a KEM Strike.';
			        $challenge['Type'] = 'none';
			        break;
			    case 2:
			        $challenge['Name'] = 'Get 5 Headshots.';
			        $challenge['Type'] = 'Gun';
			        break;
			    case 3:
			        $challenge['Name'] = 'Get 10 Headshots.';
			        $challenge['Type'] = 'Gun';
			        break;
			    case 4:
			        $challenge['Name'] = 'Get 40 Kills.';
			        $challenge['Type'] = 'none';
			        break;
			    case 5:
			        $challenge['Name'] = 'Get a 10 killstreak.';
			        $challenge['Type'] = 'none';
			        break;
			    case 6:
			        $challenge['Name'] = 'Get 20 kills.';
			        $challenge['Type'] = 'none';
			        break;
			    case 7:
			        $challenge['Name'] = 'Get 5 kills while prone.';
			        $challenge['Type'] = 'none';
			        break;
			    case 8:
			        $challenge['Name'] = 'Get a 360 Quickscope.';
			        $challenge['Type'] = 'Sniper Rifle';
			        break;
			    case 9:
			        $challenge['Name'] = 'Get 5 quickscopes.';
			        $challenge['Type'] = 'Sniper Rifle';
			        break;
			    case 10:
			        $challenge['Name'] = 'Get 10 quickscopes.';
			        $challenge['Type'] = 'Sniper Rifle';
			        break;
			    case 11:
			        $challenge['Name'] = 'Play a game with stick layout Legacy Southpaw.';
			        $challenge['Type'] = 'none';
			        break;
			    case 12:
			        $challenge['Name'] = 'Play a game with look inversion enabled.';
			        $challenge['Type'] = 'none';
			        break;
			    case 13:
			        $challenge['Name'] = 'Play on lowest sensitivity.';
			        $challenge['Type'] = 'none';
			        break;
			    case 14:
			        $challenge['Name'] = 'Play on max sensitivity.';
			        $challenge['Type'] = 'none';
			        break;
			    case 15:
			        $challenge['Name'] = 'Subtract 3 to your sensitivity.';
			        $challenge['Type'] = 'none';
			        break;
			    case 16:
			        $challenge['Name'] = 'Add 3 to your sensitivity.';
			        $challenge['Type'] = 'none';
			        break;
			    case 17:
			        $challenge['Name'] = 'Get 3 kills with you lethal.';
			        $challenge['Type'] = 'Lethal';
			        break;
			    case 18:
			        $challenge['Name'] = 'Get 3 knives.';
			        $challenge['Type'] = 'none';
			        break;
			    case 19:
			        $challenge['Name'] = 'Get 6 knives.';
			        $challenge['Type'] = 'none';
			        break;
			    case 20:
			        $challenge['Name'] = 'Play a game with button layout NOM4D Flipped.';
			        $challenge['Type'] = 'none';
			        break;
			    default:
			        $challenge['Name'] = 'NoChallenge';
			}/* switch */
			
			return $challenge;
		}/* Roll */
	}/* Challenge */