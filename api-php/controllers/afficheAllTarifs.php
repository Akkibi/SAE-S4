<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header("Access-Control-Allow-Methods: GET");

require_once '../config/Database.php';
require_once '../models/Reservation.php';
require_once '../models/Utilisateurs.php';
require_once '../models/Tarifs.php';

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $tarifs = new Tarifs($db);

    // Récupération des données
    $lol = $tarifs->AfficheAllTarifs();

    if ($lol->rowCount() > 0) {

        $dataTarifs = $lol->fetchAll();


        // on renvoie ses données sous format json
        http_response_code(200);
        echo json_encode($dataTarifs);
    } else {
        echo json_encode(["message" => "Aucune données à renvoyer"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}
