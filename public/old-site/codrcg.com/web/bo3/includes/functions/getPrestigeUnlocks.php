<?php
    function getPrestigeUnlocks() {
        $strings = [];
        foreach($GLOBALS[ 'BO3_PrestigeTypes' ] as $type_key => $value){
            $strings[ $type_key ] = '';
        }
        /* Get Black ops 3 Prestige Unlocks */
        if (isset($_SESSION['BO3_PrestigeUnlocks'])) {
            foreach ($_SESSION['BO3_PrestigeUnlocks'] as $key => $value) {
                foreach ($GLOBALS['BO3_PrestigeTypes'] as $type_key =>$type) {
                    if ($value['Type'] == $type) {
                        $strings[$type_key] .= "$value[ID], ";
                        continue;
                    }
                }
            }

            if(!empty( $strings )){
                foreach($strings as $key => $value){
                    $strings[ $key ] = rtrim($value, ', ');
                }
            }
        }


        return $strings;
    }