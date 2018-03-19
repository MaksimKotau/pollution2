<?php

//Obtenez l'adresse de l'article
$articleUrl="../files/".$_GET['xmlUrl'].".xml";

//Obtenir un document xslt
$xslDoc = new DOMDocument();
$xslDoc->load("../files/style.xsl");

//Obtenir un document xml
$xmlDoc = new DOMDocument();
$xmlDoc->load($articleUrl);

//Appliquer xsl à xml
$proc = new XSLTProcessor();
$proc->importStylesheet($xslDoc);

//envoyer le resultat
echo $proc->transformToXML($xmlDoc);
?>