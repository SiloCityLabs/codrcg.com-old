<?php
    $data = getconfig ('Cached_MW_Class_Count', 'Cached_MW_Class_Views', 'Cached_MW_Best_User');

    $month = date ("Y-m-d", strtotime (date ("Y-m-d", strtotime (date ("Y-m-d")))."-1 month"));
    $db->query ("SELECT `c`.`TinyUrl`,`c`.`Views`, IF(ISNULL(`m`.`Uname`),'Unregistered User',`m`.`Uname`) `User`
				FROM `COD_Classes` `c` 
				LEFT JOIN `Members` `m` ON `m`.`ID`=`c`.`Member_ID`
				WHERE `c`.`CreationDate`>='$month' AND `c`.`Game_ID`=".MW_Game_ID."
				ORDER BY `c`.`Views` DESC 
				LIMIT 10");
    if ($db->numRows () > 0) {
        $count = 0;
        while ($row = $db->fetchRecord ()) {
            $data['Monthly'][$count] = $row;
            $count++;
        }
    }
    else {
        $data['Monthly'] = '';
    }
    /* Get All Time Classes */
    $db->query ('SELECT `c`.`TinyUrl`,`c`.`Views`, IF(ISNULL(`m`.`Uname`),"Unregistered User",`m`.`Uname`) `User`
				FROM `COD_Classes` `c` 
				LEFT JOIN `Members` `m` ON `m`.`ID`=`c`.`Member_ID`
				WHERE `c`.`Game_ID`='.MW_Game_ID.'
				ORDER BY `c`.`Views` DESC 
				LIMIT 10');
    if ($db->numRows () > 0) {
        $count = 0;
        while ($row = $db->fetchRecord ()) {
            $data['AllTime'][$count] = $row;
            $count++;
        }
    }
    else {
        $data['AllTime'] = '';
    }
?>