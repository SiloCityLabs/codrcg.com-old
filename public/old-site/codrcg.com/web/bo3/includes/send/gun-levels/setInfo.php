<?php
    require('../../../../includes/includes.php');
    ob_start('json_minify');
    new Session(['ALL']);
    header('Content-Type: application/json');

    $data['error'] = [];
    /* Get Class Frame */
    $dataObj = (isset($_POST['data']) ? trim_array($_POST['data']) : []);

    $Gun = new Gun();

    if(isset($_SESSION['SESS_MID'])){
        $dataObj = (is_array($dataObj) || is_object($dataObj) ? json_encode($dataObj) : $dataObj);

        $db->query("SELECT `ID` FROM `Member_Options` WHERE `Member_ID`=$_SESSION[SESS_MID] AND `OptionName`='BO3_GunLevels' LIMIT 1");
        if($db->numRows() == 1){
            $db->query("UPDATE `Member_Options` SET `OptionValue`='$dataObj' WHERE `Member_ID`=$_SESSION[SESS_MID] AND `OptionName`='BO3_GunLevels'");
        }else{
            $db->query("INSERT INTO `Member_Options`(`OptionName`,`OptionValue`,`Member_ID`) VALUES('BO3_GunLevels','$dataObj',$_SESSION[SESS_MID])");
        }
    }

    $_SESSION['BO3_GunLevels'] = $dataObj;


    $data['errorcount'] = count($data['error']);
    echo json_encode($data);
    exit();
?>