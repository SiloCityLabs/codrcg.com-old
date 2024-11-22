<?php

		/* Server Settings */
        define('SYS_URL_PATH','codrcg.com');
        define('SYS_INTERNAL_PATH','/var/www/codrcg.com/web');
        define('SITE_NAME','Call of Duty Random Class Generators');
        
        /*Powered by techreanimate header */
        header('X-Powered-By: Silo City Labs');
        header('X-XSS-Protection: 1; mode=block');
        header('X-Frame-Options: SAMEORIGIN');

		/* Site Settings */
		define('SiteTwitter','@silocitylabs');
		define('SITE_Image','favicon.ico');

        /* Modern Warfare Section Settings */
        define('MW_Title', 'Modern Warfare Random Class Generator');
        define('MW_Game_ID', 2);
        define('MW_Folder', 'modern-warfare');
        define('MW_Image', '/'.MW_Folder.'/favicon.ico');
        define('MW_Level', 55);

        /* Modern Warfare 2 Section Settings */
        define('MW2_Title', 'Modern Warfare 2 Random Class Generator');
        define('MW2_Game_ID', 5);
        define('MW2_Folder', 'modern-warfare-2');
        define('MW2_Image', '/'.MW2_Folder.'/favicon.ico');
        define('MW2_Level', 70);

        /* Modern Warfare 3 Section Settings */
        define('MW3_Title', 'Modern Warfare 3 Random Class Generator');
        define('MW3_Game_ID', 6);
        define('MW3_Folder', 'modern-warfare-3');
        define('MW3_Image', '/'.MW3_Folder.'/favicon.ico');
        define('MW3_Level', 80);

        /* Ghost Section Settings */
        define('GH_Title', 'Ghost Random Class Generator');
        define('GH_Game_ID', 10);
        define('GH_Folder', 'ghost');
        define('GH_Image', '/'.GH_Folder.'/favicon.ico');
        define('GH_Level', 60);

        /* WAW Section Settings */
        define('WAW_Game_ID', 8);
        define('WAW_Folder', 'black-ops');
		define('WAW_Title','World at War Random Class Generator');
		define('WAW_Image', '/'.WAW_Folder.'/favicon.ico');
        define('WAW_Level', 55);

        /* BO Section Settings */
        define('BO_Game_ID', 7);
        define('BO_Folder', 'black-ops');
		define('BO_Title','Black Ops Random Class Generator');
		define('BO_Image', '/'.BO_Folder.'/favicon.ico');
        define('BO_Level', 55);

        /* BO2 Section Settings */
        define('BO2_Game_ID', 4);
        define('BO2_Folder', 'black-ops-2');
		define('BO2_Title','Black Ops 2 Random Class Generator');
		define('BO2_Image', '/'.BO2_Folder.'/favicon.ico');
        define('BO2_Level', 55);

		/* BO2 Constants */
        $GLOBALS['BO2_PrestigeTypes'] = ['Gun' => '1', 'Perk' => '2', 'Streak' => '3', 'Equipment' => '4'];

        /* BO3 Section Settings */
        define('BO3_Game_ID', 1);
        define('BO3_Folder', 'bo3');
		define('BO3_Title','Black Ops 3 Random Class Generator');
		define('BO3_Image', '/'.BO3_Folder.'/favicon.ico');
        define('BO3_Level', 55);

        /* BO3 Constants */
        $GLOBALS['BO3_PrestigeTypes'] = ['Gun' => '1', 'Perk' => '2', 'Streak' => '3', 'Equipment' => '4', 'Specialist' => '5'];

        /* Infinite Warfare Section Settings */
        define ('IW_Title', 'Infinite Warfare Random Class Generator');
        define ('IW_Game_ID', 3);
        define ('IW_Folder', 'infinite-warfare');
        define ('IW_Image', '/'.IW_Folder.'/favicon.ico');
        define('IW_Level', 55);

        /* IW Constants */
        $GLOBALS['IW_PrestigeTypes'] = ['Gun' => '1', 'Perk' => '2', 'Streak' => '3', 'Equipment' => '4', 'Rigs' => '5'];

        /* Infinite Warfare Section Settings */
        define ('WW2_Title', 'World War II Random Class Generator');
        define ('WW2_Game_ID', 9);
        define ('WW2_Folder', 'world-war-2');
        define ('WW2_Image', '/'.WW2_Folder.'/favicon.ico');
        define('WW2_Level', 55);

        /* WW2 Constants */
        $GLOBALS['WW2_PrestigeTypes'] = ['Gun' => '1', 'Perk' => '2', 'Streak' => '3', 'Equipment' => '4', 'Division' => '5'];
?>
