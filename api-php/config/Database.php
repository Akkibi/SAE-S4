<?php

class Database
{
    // Les propriétées de connexion à la base de données
    private $host = "localhost";
    private $dbname = "u695614801_sae_s4";
    private $username = "u695614801_sae_s4";
    private $password = "Mmi2_2023";

    // Connexion à la base de données
    public function getConnexion()
    {
        $conn = null;

        try {
            $conn = new PDO(
                "mysql:host=$this->host;dbname=$this->dbname;charset=utf8",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch (\PDOException  $e) {
            echo "Erreur de connexion : " . $e->getMessage();
        }

        return $conn;
    }
}
