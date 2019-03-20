<?php
header('Access-Control-Allow-Origin: *');
error_reporting(0);
$ip='http://192.168.43.177/get_data';
$status="online";
//$data = "Temp_out=24.50&Temp_in=zaglushka&Humidity=zaglushka&Moving=zaglushka&Pressure=zaglushka&Light=zaglushka&Jalousie=zaglushka";
try{
	$data=file_get_contents($ip);
	if($data==false)
		throw new Exception('Не удалось подключится!');
}
catch(Exception $e){
	//$status='{"status":"offline"}';
	$status='{"status":"offline"}';

}
finally{
if($status=="online"){
$keywords = preg_split("/[&]/", $data);
$answ1=[];
$answ2=[];
for($i=0; $i<count($keywords);$i++){
	$temp=preg_split("/[=]/", $keywords[$i]);
	$answ1[$i]=$temp[0];
	$answ2[$i]=$temp[1];
}
$last=file_get_contents("LastInfo.txt");
$last=json_decode($last);
$answ2[3]=$last->Moving;
$answ2[5]=$last->Light;
$answ2[6]=$last->Jalousie;
$answ2[8]="online";
$answ1[8]="status";
$otv=array_combine($answ1,$answ2);
$otv=json_encode($otv);
file_put_contents("LastInfo.txt", $otv);
echo $otv;
}
else
	echo $status;
}
?>