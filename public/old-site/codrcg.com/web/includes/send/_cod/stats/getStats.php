<?php
    $data = getconfig ('Cached_'.$gameAbbrev.'_Class_Count', 'Cached_'.$gameAbbrev.'_Class_Views', 'Cached_'.$gameAbbrev.'_Best_User');

    $month = date ("Y-m-d", strtotime (date ("Y-m-d", strtotime (date ("Y-m-d")))."-1 month"));
    $db->query ("SELECT `c`.`TinyUrl`,`c`.`Views`, IF(ISNULL(`m`.`Uname`),'Unregistered User',`m`.`Uname`) `User`
				FROM `COD_Classes` `c`
				LEFT JOIN `Members` `m` ON `m`.`ID`=`c`.`Member_ID`
				WHERE `c`.`CreationDate`>='$month' ".($gameID != 0  ? "AND `c`.`Game_ID`=$gameID" : '')."
				ORDER BY `c`.`Views` DESC
				LIMIT 10");
    if ($db->numRows () > 0) {
        $count = 0;
        while ($row = $db->fetchRecord ()) {
            $data['Monthly'][$count] = $row;
            $count++;
        }
    } else {
        $data['Monthly'] = '';
    }
    /* Get All Time Classes */
    $db->query ('SELECT `c`.`TinyUrl`,`c`.`Views`, IF(ISNULL(`m`.`Uname`),"Unregistered User",`m`.`Uname`) `User`
				FROM `COD_Classes` `c`
				LEFT JOIN `Members` `m` ON `m`.`ID`=`c`.`Member_ID`
				'.($gameID != 0  ? "WHERE `c`.`Game_ID`=$gameID" : '').'
				ORDER BY `c`.`Views` DESC
				LIMIT 10');
    if ($db->numRows () > 0) {
        $count = 0;
        while ($row = $db->fetchRecord ()) {
            $data['AllTime'][$count] = $row;
            $count++;
        }
    } else {
        $data['AllTime'] = '';
    }
?>