<?php

    function getMemberOption($option,$default) {
        global $db;

        if (isset($_SESSION['SESS_MID'])) {
            /* Query to check if they have the BO3_Level MemberOption created already */
            $db->query ("SELECT `OptionValue` FROM `Member_Options` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `OptionName`='$option' LIMIT 1");

            /* IF member option exists get it */
            if ($db->numRows () == 1) {
                if(is_array($default) || is_object($default)){
                    $_SESSION[ $option ] = json_decode($db->fetchOne (),true);
                } else {
                    $_SESSION[ $option ] = $db->fetchOne();
                }
            } else {/* if member option doesnt exist  create it */
                if(is_array($default)){
                    $default = json_encode($default);
                }
                $db->query ("INSERT INTO `Member_Options`(`Member_ID`, `OptionName`, `OptionValue`) VALUES ($_SESSION[SESS_MID],'$option','$default')");
            }
        }else{
            $_SESSION[$option] = (isset($_SESSION[$option]) ? $_SESSION[$option]:$default );
        }

        if (isset($_SESSION[$option])){
            switch ($_SESSION[$option]) {
                case is_numeric ($default) && !is_numeric ($_SESSION[$option]):
                    $_SESSION[$option] = $default;
                    break;
                case is_array ($default) && !is_array ($_SESSION[$option]):
                    $_SESSION[$option] = $default;
                    break;
                case empty($_SESSION[$option]):
                    $_SESSION[$option] = $default;
                    break;
            }
        } else {
            $_SESSION[$option] = $default;
        }

        return $_SESSION[$option];
    }