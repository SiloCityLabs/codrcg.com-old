<?php
    function getPrestigeUnlocks() {
        $strings = [];
        foreach($GLOBALS[ 'IW_PrestigeTypes' ] as $type_key => $value){
            $strings[ $type_key ] = '';
        }
        /* Get Black ops 3 Prestige Unlocks */
        if (isset($_SESSION['IW_PrestigeUnlocks'])) {
            foreach ($_SESSION['IW_PrestigeUnlocks'] as $key => $value) {
                foreach ($GLOBALS['IW_PrestigeTypes'] as $type_key =>$type) {
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