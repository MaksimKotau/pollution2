<?php

//Adress de requette à Openwethermap
$api_key = '6a9775d9a9b0db81bd98b8002033af73';
$url = "http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&lang=fr&units=metric&appid={$api_key}";

//Recevoire de contenu de reponse
$contents = file_get_contents($url);
$clima=json_decode($contents);

//Set timezone actuelle
date_default_timezone_set('Canada/Eastern');

//Obtenez les données nécessaires à envoyer au client
$result=array();
$result['temp']=$clima->main->temp;
$result['icon']='http://openweathermap.org/img/w/'.$clima->weather[0]->icon.'.png';
$result['today'] = date('Y/m/d');
$result['cityname'] = $clima->name; 

//Envoyer le resultat
echo json_encode($result);

?>