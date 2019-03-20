<?php
header('Access-Control-Allow-Origin: *');
$last=file_get_contents("LastInfo.txt");
$last=json_decode($last);
$last->Temp_out=strval(rand(-30,50)*1.1);
$last->Temp_in=strval(rand(5,35)*1.1);
$last->Humidity=strval(rand(1,100));
$last->Moving=strval(rand(0,1));
$last->Pressure=strval(rand(1,10)*0.1);
$last->Light=strval(rand(0,1));
$last->Jalousie=strval(rand(1,119));
$otv=json_encode($last);
file_put_contents("LastInfo.txt", $otv);
echo $otv;
?>