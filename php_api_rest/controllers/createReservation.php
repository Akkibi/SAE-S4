<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header("Access-Control-Allow-Methods: POST");

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';
require_once '../models/Reservation.php';

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $reservation = new Reservation($db);

    // On récupère les infos envoyées
    $dataReservation = json_decode(file_get_contents("php://input"));
    if (!empty($dataReservation->nom) && !empty($dataReservation->date_visite) && !empty($dataReservation->prenom) && !empty($dataReservation->age) && !empty($dataReservation->mail) && !empty($dataReservation->id_tarif)) {
        // On hydrate l'objet etudiant
        $reservation->nom = htmlspecialchars($dataReservation->nom);
        $reservation->date_visite = htmlspecialchars($dataReservation->date_visite);
        $reservation->prenom = htmlspecialchars($dataReservation->prenom);
        $reservation->age = htmlspecialchars($dataReservation->age);
        $reservation->mail = htmlspecialchars($dataReservation->mail);
        $reservation->id_utilisateur = htmlspecialchars($data->id_utilisateur);
        $reservation->id_tarif = htmlspecialchars($dataReservation->id_tarif);

        $result = $reservation->createReservation();
        if ($result) {
            http_response_code(201);
            echo json_encode(['message' => "reservation ajouté avec succès"]);
        } else {
            http_response_code(503);
            echo json_encode(['message' => "L'ajout de la reservation a échoué"]);
        }
    } else {
        echo json_encode(['message' => "Les données ne sont pas au complet"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}
