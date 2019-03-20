<?php
$parex=array(
			'user_id' => USID,
			'message' => "КАРАУЛ ГРАБЯТ",
			'access_token' => API_KEY,
			'v' => '5.85'
			);	
			file_get_contents('https://api.vk.com/method/messages.send?' . http_build_query($parex));
echo "ok";
?>