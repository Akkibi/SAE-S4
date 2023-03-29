<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header("Access-Control-Allow-Methods: DELETE");

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';
require_once '../models/Reservation.php';

if ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    session_start();
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $reservation = new Reservation($db);

    // On récupère les infos envoyées
    $dataReservation = json_decode(file_get_contents("php://input"));

if(isset($_SESSION['user']) && !empty($dataReservation->id)){
    $reservation->id = $dataReservation->id;
    $test = $reservation->deleteReservation();
        if ($test) {
            http_response_code(200);
            echo json_encode(array("message" => "La suppression a été éffectué avec sucèss"));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "La suppression n'a été éffectué"));
        }
}else{
    echo json_encode(['message' => "Pas connecter"]);
}
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}
