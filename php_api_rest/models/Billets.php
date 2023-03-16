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

        public function AfficheAll()
        {
            // On ecrit la requete
            $sql = "SELECT u.nom, prenom, age,u.id, mdp, mail
                    r.id FROM $this->table u LEFT JOIN reservation r ON id_reservation = r.id ORDER BY u.created_at DESC ";
    
            // On éxecute la requête
            $req = $this->connexion->query($sql);
    
            // On retourne le resultat
            return $req;
        }
?>