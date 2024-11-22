<?php
    function getPrestigeUnlocks() {
        $strings = [];
        foreach($GLOBALS[ 'WW2_PrestigeTypes' ] as $type_key => $value){
            $strings[ $type_key ] = '';
        }
        /* Get Prestige Unlocks */
        if (isset($_SESSION['WW2_PrestigeUnlocks'])) {
            foreach ($_SESSION['WW2_PrestigeUnlocks'] as $key => $value) {
                foreach ($GLOBALS['WW2_PrestigeTypes'] as $type_key =>$type) {
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