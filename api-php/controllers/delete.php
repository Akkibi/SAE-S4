<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    session_start();
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $utilisateur = new Utilisateur($db);

    // On récupère les infos envoyées
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->id)) {
        $utilisateur->id = $data->id;
        if ($utilisateur->delete()) {
            http_response_code(200);
            echo json_encode(array("message" => "La suppression a été éffectué avec sucèss"));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "La suppression n'a été éffectué"));
        }
    } else {
        echo json_encode(['message' => "Vous devez precisé l'identifiant de l'étudiant"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}
