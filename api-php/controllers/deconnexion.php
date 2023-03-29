s<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header("Access-Control-Allow-Methods: DELETE");

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';


if ($_SERVER['REQUEST_METHOD'] === "GET") {
    session_start();
    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet etudiant
    $utilisateur = new Utilisateur($db);

    // On récupère les infos envoyées
    $data = json_decode(file_get_contents("php://input"));

    if(isset($_SESSION['user'])){

    $coucou = $utilisateur->deconnexion();

    if ($coucou == true) {
            echo json_encode(array("message" => "Deconnexion réussie"));
            }
    else {
        echo json_encode(['message' => "Erreur de déconnexion"]);
    }
}else{
    echo json_encode(['message' => "Vous n'êtes pas connecté"]);
}
}else{
    echo json_encode(['message' => "Mauvaise méthode"]);
    }