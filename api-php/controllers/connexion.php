<?php
// Les entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset= UTF-8");
header("Access-Control-Allow-Methods: GET");

require_once '../config/Database.php';
require_once '../models/Utilisateurs.php';

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    // On instancie la base de données
    session_start();
    $database = new Database();
    $db = $database->getConnexion();

    // On instancie l'objet Utilisateur
    $utilisateur = new Utilisateur($db);


    // On récupère les infos envoyées
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->mail) && !empty($data->mdp)) {
        $utilisateur->mail = $data->mail;
        $utilisateur->mdp = $data->mdp;
        if ($utilisateur->connexion()) {
            $lol=$utilisateur->connexion();
            if ($lol->rowCount() == 1) {
                $data = $lol->fetch();
                $_SESSION["user"] = $data;
            http_response_code(200);
            echo json_encode("connected");
            } else {
            http_response_code(503);
            echo json_encode(array("message" => "Le mail ou le mot de passe est incorrect"));
            }
    } else {
        echo json_encode(['message' => "Erreur de connexion"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => "Merci de remplir tout les input"]);
}}
else{
    echo json_encode(['message' => "La méthode n'est pas autorisée"]);
}