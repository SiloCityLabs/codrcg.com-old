<?php
    require('../../../../includes/includes.php');
    ob_start('json_minify');
    new Session(['ALL']);
    header('Content-Type: application/json');

    $data['error'] = [];
    /* Get Class Frame */
    $dataObj = (isset($_POST['data']) ? $_POST['data'] : "");

    $Gun = new Gun();

    $data['Guns'] = $Gun->GetGuns(['Game_ID' => IW_Game_ID, 'GunLevels' => 1]);
    if(isset($_SESSION['SESS_MID'])){
        $db->query("SELECT `OptionValue` FROM `Member_Options` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `OptionName`='IW_GunLevels' LIMIT 1");
        if($db->numRows() == 1){
            $data['Info'] = json_decode($db->fetchOne(), TRUE);
            $_SESSION['IW_GunLevels'] = $data['Info'];
        }else{
            $data['Info'] = [];
        }
    }else{
        $data['Info'] = (isset($_SESSION['IW_GunLevels']) ? $_SESSION['IW_GunLevels']:[]);
    }

    $data['errorcount'] = count($data['error']);
    echo json_encode($data);
    exit();
?>