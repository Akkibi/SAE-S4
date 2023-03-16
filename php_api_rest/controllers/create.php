<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header("Access-Control-Allow-Methods: POST");

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $utilisateur = new Utilisateur($db);

    // On récupère les infos envoyées
    $data = json_decode(file_get_contents("php://input"));
    if (!empty($data->nom) && !empty($data->prenom) && !empty($data->age) && !empty($data->mdp) && !empty($data->mail)) {
        // On hydrate l'objet etudiant
        $utilisateur->nom = htmlspecialchars($data->nom);
        $utilisateur->prenom = htmlspecialchars($data->prenom);
        $utilisateur->age = htmlspecialchars($data->age);
        $utilisateur->mdp = sha1($data->mdp);
        $utilisateur->mail = htmlspecialchars($data->mail);

        $result = $utilisateur->create();
        if ($result) {
            http_response_code(201);
            echo json_encode(['message' => "utilisateur ajouté avec sucès"]);
        } else {
            http_response_code(503);
            echo json_encode(['message' => "L'ajout de l'utilisateur a échoué"]);
        }
    } else {
        echo json_encode(['message' => "Les données ne sont pas au complet"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}
