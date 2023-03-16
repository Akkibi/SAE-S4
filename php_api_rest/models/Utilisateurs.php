<?php
class Utilisateur
{
    // Toutes les méthodes et propriétés nécessaires à la gestion des données de la tables etudiants
    private $table = "utilisateurs";
    private $connexion = null;

    // Les propritées de l'objet etudiant
    public $id;
    public $nom;
    public $prenom;
    public $age;
    public $mdp;
    public $mail;
    public $id_reservation;

    public function __construct($db)
    {
        if ($this->connexion == null) {
            $this->connexion = $db;
        }
    }

    // Lecture des étudiants

    public function readAll()
    {
        // On ecrit la requete
        $sql = "SELECT nom, prenom, age, id, mdp, mail, id_reservation FROM $this->table ORDER BY created_at DESC ";

        // On éxecute la requête
        $req = $this->connexion->query($sql);

        // On retourne le resultat
        return $req;
    }
    public function create()
    {
        $sql = "INSERT INTO $this->table(nom,prenom,age,mdp,mail,created_at) VALUES(:nom,:prenom,:age,:mdp,:mail,NOW())";

        // Préparation de la réqête
        $req = $this->connexion->prepare($sql);

        // éxecution de la reqête
        $re = $req->execute([
            ":nom" => $this->nom,
            ":prenom" => $this->prenom,
            ":age" => $this->age,
            ":mdp" => $this->mdp,
            ":mail" => $this->mail
        ]);
        if ($re) {
            return true;
        } else {
            return false;
        }
    }

    public function update()
    {
        $sql = "UPDATE $this->table SET nom=:nom, prenom=:prenom, age=:age, mdp=:mdp,  mail=:mail id_reservation=:id_reservation WHERE id=:id";

        // Préparation de la réqête
        $req = $this->connexion->prepare($sql);

        // éxecution de la reqête
        $re = $req->execute([
            ":nom" => $this->nom,
            ":prenom" => $this->prenom,
            ":age" => $this->age,
            ":mdp" => $this->mdp,
            ":mail" => $this->mail,
            ":id_reservation" => $this->id_reservation,
            ":id" => $this->id
        ]);
        if ($re) {
            return true;
        } else {
            return false;
        }
    }

    public function delete()
    {
        $sql = "DELETE FROM $this->table WHERE id = :id";
        $req = $this->connexion->prepare($sql);

        $re = $req->execute(array(":id" => $this->id));

        if ($re) {
            return true;
        } else {
            return false;
        }
    }

    public function connexion(){
        $sql = "SELECT * FROM $this->table WHERE mail = :mail AND mdp = :mdp";
        $req = $this->connexion->prepare($sql);
        $re = $req->execute([
        ":mail" => $this->mail,
        ":mdp" => $this->mdp
        ]);
        return $req;
    }

    public function deconnexion(){
        session_start();
        $data = array();
        session_destroy();
    }
}
