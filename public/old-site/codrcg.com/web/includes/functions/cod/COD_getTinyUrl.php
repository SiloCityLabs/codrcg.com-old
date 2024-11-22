<?php

	function getTinyUrl($data){
		global $db;
	    $class_url = "https://".SYS_URL_PATH."/$data[SiteSection]/class/".$data['ID'];
		$class_url = $db->real_escape_string($class_url);

		//Old tra.li code
		// if(!IS_DEV){	        
	    //     $APIUrl = "http://tra.li/api/v1/".getconfig('TINY_KEY')."/shorturl/create/url/".base64_encode($class_url).".json";
	        
	    //     $options = array (  CURLOPT_RETURNTRANSFER => true, /* return web page */
	    //                             CURLOPT_HEADER => false, /* don't return headers */
	    //                             CURLOPT_ENCODING => "", /* handle compressed */
	    //                             CURLOPT_USERAGENT => "CODRCG-Server", /* who am i */
	    //                             CURLOPT_AUTOREFERER => false, /* set referer on redirect */
	    //                             CURLOPT_REFERER => "http://".SYS_URL_PATH,
	    //                             CURLOPT_CONNECTTIMEOUT => 10, /* timeout on connect */
	    //                             CURLOPT_TIMEOUT => 10, /* timeout on response */
	    //                         );
	    
	    //     $ch = curl_init( $APIUrl );
	    //     curl_setopt_array( $ch, $options );
	    //     $content = curl_exec( $ch );
	    //     $err = curl_errno( $ch );
	    //     $errmsg = curl_error( $ch );
	    //     $header = curl_getinfo( $ch );
	    //     $httpCode = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
	    
	    //     curl_close ( $ch );
	        
	    //     if($httpCode != 200){
	    //     	serverlog("Tiny URL ERROR: 
	    //     		API_URL= $APIUrl, 
	    //     		Header= $header, 
	    //     		HTTP_CODE= $httpCode, 
	    //     		Content= ".print_r($content,true).", 
	    //     		Site Section= ".$data['SiteSection']);
	    //         /* TODO: do we want to exit or just give them the regular link exit("Error: 3"); */
	    //     }else{
	    //         $content = json_decode($content,true);
	    //         $db->query("UPDATE `COD_Classes` SET `TinyUrl` = '".$content['data']['short_url']."', `URL_ID` = ".$content['data']['url_id']." WHERE `ID` = ".$data['ID']);
		// 		$class_url = $content['data']['short_url'];
	    //     }
	    // }else{
	    	$db->query("UPDATE `COD_Classes` SET `TinyUrl` = '$class_url' WHERE `ID` = ".$data['ID']);
	    // }
		
		return $class_url;
	}

?>
