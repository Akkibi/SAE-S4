<?php
class Reservation
{
        // Toutes les méthodes et propriétés nécessaires à la gestion des données de la tables etudiants
        private $table = "reservation";
        private $connexion = null;
    
        // Les propritées de l'objet etudiant
        public $id;
        public $nom;
        public $prenom;
        public $age;
        public $id_utilisateur;
        public $mail;
        public $date_visite;
        public $id_tarif;
    
        public function __construct($db)
        {
            if ($this->connexion == null) {
                $this->connexion = $db;
            }
        }

        public function createReservation()
        {

            $user_id = $_SESSION['user']['id'];
            $sql = "INSERT INTO $this->table(nom,id_utilisateur,prenom,age,mail,date_visite,id_tarif) VALUES(:nom,:id_utilisateur,:prenom,:age,:mail,:date_visite,:id_tarif)";
    
            // Préparation de la réqête
            $req = $this->connexion->prepare($sql);
    
            // éxecution de la reqête
            $re = $req->execute([
                ":nom" => $this->nom,
                "id_utilisateur" => $this->id_utilisateur,
                ":prenom" => $this->prenom,
                ":age" => $this->age,
                ":mail" => $this->mail,
                ":date_visite" => $this->date_visite,
                ":id_tarif" => $this->id_tarif
            ]);
            if ($re) {
                return true;
            } else {
                return false;
            }
        }

        public function afficheReservation()
        {
                    // On ecrit la requete
        $sql = "SELECT nom, id_utilisateur, prenom, age, mail, date_visite, id_tarif FROM $this->table";

        // On éxecute la requête
        $req = $this->connexion->query($sql);

        // On retourne le resultat
        return $req;
        }

        public function afficheReservationUser()
        {

            $user_id = $_SESSION['user']['id'];
                    // On ecrit la requete
        $sql = "SELECT id, nom, id_utilisateur, prenom, age, mail, date_visite, id_tarif FROM $this->table WHERE id_utilisateur = $user_id";

        // On éxecute la requête
        $req = $this->connexion->query($sql);

        // On retourne le resultat
        return $req;
        }

        public function deleteReservation()
        {
                    $sql = "DELETE FROM $this->table WHERE id = :id";
                    $req = $this->connexion->prepare($sql);
            
                    $re = $req->execute([
                        ":id" => $this->id
                    ]);
            
                    if ($re) {
                        return true;
                    } else {
                        return false;
                    }
        }
}
