<?php
    function bo2_getPrestigeUnlocks() {
        $strings = [];
        foreach($GLOBALS[ 'BO2_PrestigeTypes' ] as $type_key => $value){
            $strings[ $type_key ] = '';
        }
        /* Get Black ops 2 Prestige Unlocks */
        if (isset($_SESSION['BO2_PrestigeUnlocks'])) {
            foreach ($_SESSION['BO2_PrestigeUnlocks'] as $key => $value) {
                foreach ($GLOBALS['BO2_PrestigeTypes'] as $type_key =>$type) {
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