<?php
header('Access-Control-Allow-Origin: *');error_reporting(0);
$ip='http://192.168.43.177/';
$file=file_get_contents('lastinfo.txt');
$file=json_decode($file);
$status="online";
if(isset($_GET["Rotate"])){ //5-115
	$Rot=intval($_GET["Rotate"]);
	
	$ip1=$ip."set_window?";
	$par1 = array('Rotate' => $Rot);
	if(file_get_contents($ip1.http_build_query($par1))==false)
		$status="offline";
	else
		$file->Jalousie=strval($Rot);
		$status = $Rot;
}
if(isset($_GET["Light"])){ //0-1
	$Lg=intval($_GET["Light"]);
	
	$ip2=$ip."set_light?";
	$par2 = array('Light' => $Lg);
	if(file_get_contents($ip2.http_build_query($par2))==false)
		$status="offline";
	else
		$file->Light=strval($Lg);
		$status = $Lg;
}
if(isset($_GET["Guard"])){ //0-1
	$Gu=intval($_GET["Guard"]);
	
	$ip3=$ip."set_guard?";
	$par3 = array('Guard' => $Gu);
	if(file_get_contents($ip3.http_build_query($par3))==false)
		$status="offline";
	else
		$file->Guard=strval($Gu);
		$status = $Gu;

	if($Gu==1){
		$parex=array(
			'user_id' => ,
			'message' => "Охрана включена! ON",
			'access_token' => ,
			'v' => '5.85'
			);	
			file_get_contents('https://api.vk.com/method/messages.send?' . http_build_query($parex));
		}
	else if($Gu==0){
		$parex=array(
			'user_id' => ,
			'message' => "Охрана выключена! OFF",
			'access_token' => ,
			'v' => '5.85'
			);	
			file_get_contents('https://api.vk.com/method/messages.send?' . http_build_query($parex));
		}
}
$file=json_encode($file);
file_put_contents('lastinfo.txt', $file);
echo $status;
?>