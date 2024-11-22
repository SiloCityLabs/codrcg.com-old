<?php
    class GH_Killstreaks {
        /**
         * Rolls and gets the killstreaks for the class. Can choose to make it high or low killstreaks only if you choose.
         */
         public function __construct(){
             $GLOBALS['StrikePackage'] = array();
             $GLOBALS['tmpStreaks'] = array();
         }
         
         
         public function RollAll($package = NULL, $highLow = NULL){
             $GLOBALS['tmpStreaks'] = array();
             $Streaks = array();
             if($package == NULL){
                 /* Make a function to roll the package */
                 $package = $this->rollPackage();
             }
             switch ($package) {
                case 'Assault':
                    $count = 3;
                    $GLOBALS['StrikePackage'] = 'Assault';
                    do{
                        $GLOBALS['tmpStreaks'] = array();
                        $this->RollAss($highLow);
                        if(count($GLOBALS['tmpStreaks']) > 0){
                            if(count($Streaks) > 0){
                                $same = 0;
                                foreach ($Streaks as $val => $key) {
                                    if($GLOBALS['tmpStreaks']['Name'] == $key['Name'] || $GLOBALS['tmpStreaks']['Points'] == $key['Points']){
                                        $same++;
                                    }
                                }/* Foreach */
                                
                                if($same == 0){
                                    $Streaks[] = $GLOBALS['tmpStreaks'];
                                    $count--;
                                }
                            }else{
                                /* This is the first streak */
                                $Streaks[] = $GLOBALS['tmpStreaks'];
                                $count--;
                            }/* $Streaks count if/else */
                        }/* $GLOBALS['tmpStreaks'] count if */
                    }while($count > 0);
                    break;
                case 'Support':
                    $count = 3;
                    $GLOBALS['StrikePackage'] = 'Support';
                    do{
                        $GLOBALS['tmpStreaks'] = array();
                        $this->RollSupp($highLow);
                        if(count($GLOBALS['tmpStreaks']) > 0){
                            if(count($Streaks) > 0){
                                $same = 0;
                                foreach ($Streaks as $val => $key) {
                                    if($GLOBALS['tmpStreaks']['Name'] == $key['Name'] || $GLOBALS['tmpStreaks']['Points'] == $key['Points']){
                                        $same++;
                                    }
                                }/* Foreach */
                                
                                if($same == 0){
                                    $Streaks[] = $GLOBALS['tmpStreaks'];
                                    $count--;
                                }
                            }else{
                                /* This is the first streak */
                                $Streaks[] = $GLOBALS['tmpStreaks'];
                                $count--;
                            }/* $Streaks count if/else */
                        }/* $GLOBALS['tmpStreaks'] count if */
                    }while($count > 0);
                    break;
                case 'Specialist':
                    $GLOBALS['StrikePackage'] = 'Specialist';
					break;
            }/* Switch */
            
            /* Returns the array of Killstreaks */
            return $Streaks;
         }/* RollAll */
         
         public function rollPackage(){
            $rand = rand(1, 6);
            
            switch ($rand) {
                case 1:
                    $pack = 'Assault';
                    break;
                case 2:
                    $pack = 'Specialist';
                    break;
                case 3:
                    $pack = 'Support';
                    break;
                case 4:
                    $pack = 'Support';
                    break;
                case 5:
                    $pack = 'Assault';
                    break;
                case 6:
                    $pack = 'Specialist';
                    break;
            }
            
            return $pack;
         }/* rollPackage */
         
         public function RollAss($highLow = NULL){
            
            switch ($highLow) {
                case 'High':
                    $rand = rand(6, 13);
                    break;
                case 'Low':
                    $rand = rand(1,5);
                    break;
                default:
                    $rand = rand(1, 13);
                    break;
            }/* high/low switch */
            
            switch ($rand) {
                case 1:
                    $GLOBALS['tmpStreaks']['Name'] = 'Sat Com';
                    $GLOBALS['tmpStreaks']['Points'] = 3;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'sat_com';
                    break;
                case 2:
                    $GLOBALS['tmpStreaks']['Name'] = 'I.M.S';
                    $GLOBALS['tmpStreaks']['Points'] = 5;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'ims';
                    break;
                case 3:
                    $GLOBALS['tmpStreaks']['Name'] = 'Guard Dog';
                    $GLOBALS['tmpStreaks']['Points'] = 5;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'guard_dog';
                    break;
                case 4:
                    $GLOBALS['tmpStreaks']['Name'] = 'Sentry Gun';
                    $GLOBALS['tmpStreaks']['Points'] = 7;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'sentry';
                    break;
                case 5:
                    $GLOBALS['tmpStreaks']['Name'] = 'Trinity Rocket';
                    $GLOBALS['tmpStreaks']['Points'] = 7;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'trinity_rocket';
                    break;
                case 6:
                    $GLOBALS['tmpStreaks']['Name'] = 'Gryphon';
                    $GLOBALS['tmpStreaks']['Points'] = 10;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'gryphon';
                    break;
                case 7:
                    $GLOBALS['tmpStreaks']['Name'] = 'Vulture';
                    $GLOBALS['tmpStreaks']['Points'] = 9;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'vulture';
                    break;
                case 8:
                    $GLOBALS['tmpStreaks']['Name'] = 'Battle Hind';
                    $GLOBALS['tmpStreaks']['Points'] = 9;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'battle_hind';
                    break;
                case 9:
                    $GLOBALS['tmpStreaks']['Name'] = 'Juggernaut Maniac';
                    $GLOBALS['tmpStreaks']['Points'] = 10;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'maniac';
                    break;
                case 10:
                    $GLOBALS['tmpStreaks']['Name'] = 'Juggernaut';
                    $GLOBALS['tmpStreaks']['Points'] = 11;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'juggernaut';
                    break;
                case 11:
                    $GLOBALS['tmpStreaks']['Name'] = 'Helo Pilot';
                    $GLOBALS['tmpStreaks']['Points'] = 12;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'helo_pilot';
                    break;
                case 12:
                    $GLOBALS['tmpStreaks']['Name'] = 'Loki';
                    $GLOBALS['tmpStreaks']['Points'] = 15;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Assault';
                    $GLOBALS['tmpStreaks']['file'] = 'loki';
                    break;
                default:
                    $GLOBALS['tmpStreaks'] = array();
                    break;
            }
         }/* Roll Assault Strike Package */
         
         public function RollSupp($highLow = NULL){
            
            switch ($highLow) {
                case 'High':
                    $rand = rand(1, 12);
                    break;
                case 'Low':
                    $rand = rand(1, 12);
                    break;
                default:
                    $rand = rand(1, 12);
                    break;
            }/* high/low switch */
            
            switch ($rand) {
                case 1:
                    $GLOBALS['tmpStreaks']['Name'] = 'Sat Com';
                    $GLOBALS['tmpStreaks']['Points'] = 4;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'sat_com';
                    break;
                case 2:
                    $GLOBALS['tmpStreaks']['Name'] = 'Ballistic Vests';
                    $GLOBALS['tmpStreaks']['Points'] = 8;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'ballistic_vest';
                    break;
                case 3:
                    $GLOBALS['tmpStreaks']['Name'] = 'Ammo Crate';
                    $GLOBALS['tmpStreaks']['Points'] = 6;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'ammo_crate';
                    break;
                case 4:
                    $GLOBALS['tmpStreaks']['Name'] = 'Night Owl';
                    $GLOBALS['tmpStreaks']['Points'] = 10;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'night_owl';
                    break;
                case 5:
                    $GLOBALS['tmpStreaks']['Name'] = 'MAAWS';
                    $GLOBALS['tmpStreaks']['Points'] = 9;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'maaws';
                    break;
                case 6:
                    $GLOBALS['tmpStreaks']['Name'] = 'Ground Jammer';
                    $GLOBALS['tmpStreaks']['Points'] = 12;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'ground_jammer';
                    break;
                case 7:
                    $GLOBALS['tmpStreaks']['Name'] = 'Air Superiority';
                    $GLOBALS['tmpStreaks']['Points'] = 12;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'air_superiority';
                    break;
                case 8:
                    $GLOBALS['tmpStreaks']['Name'] = 'Support Squadmate';
                    $GLOBALS['tmpStreaks']['Points'] = 11;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'support_squadmate';
                    break;
                case 9:
                    $GLOBALS['tmpStreaks']['Name'] = 'Helo Scout';
                    $GLOBALS['tmpStreaks']['Points'] = 13;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'helo_scout';
                    break;
                case 10:
                    $GLOBALS['tmpStreaks']['Name'] = 'Oracle';
                    $GLOBALS['tmpStreaks']['Points'] = 14;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'oracle';
                    break;
                case 11:
                    $GLOBALS['tmpStreaks']['Name'] = 'Juggernaut Recon';
                    $GLOBALS['tmpStreaks']['Points'] = 14;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'jugg_recon';
                    break;
                case 12:
                    $GLOBALS['tmpStreaks']['Name'] = 'ODIN';
                    $GLOBALS['tmpStreaks']['Points'] = 16;
                    $GLOBALS['tmpStreaks']['Cat'] = 'Support';
                    $GLOBALS['tmpStreaks']['file'] = 'odin';
                    break;
                default:
                    $GLOBALS['tmpStreaks'] = array();
                    break;
            }
         }/* Roll Support Strike Package */
         
         /* Get Private vars */
         public function getStrikePackage(){
             return $GLOBALS['StrikePackage'];
         }/* getStrikePackage */
    }/* Killstreaks */