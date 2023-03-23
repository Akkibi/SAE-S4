<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header("Access-Control-Allow-Methods: GET");

require_once '../config/Database.php';
require_once '../models/Reservation.php';
require_once '../models/Utilisateurs.php';

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    session_start();
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $reservation = new Reservation($db);
    // Récupération des données

    $dataReservation = json_decode(file_get_contents("php://input"));

    if (isset($_SESSION['user'])){

    $lol = $reservation->afficheReservationUser();

    if ($lol->rowCount()) {

        $dataReservation = $lol->fetchAll();
        var_dump($lol);


        // on renvoie ses données sous format json
        http_response_code(200);
        echo json_encode($dataReservation);
    } else {
        echo json_encode(["message" => "Aucune données à renvoyer"]);
    }
}else{
    echo json_encode(["message" => "NON"]);
}
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}