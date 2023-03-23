<?php
class Tarifs
{
        // Toutes les méthodes et propriétés nécessaires à la gestion des données de la tables etudiants
        private $table = "tarifs";
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

        public function AfficheAllTarifs()
        {
            // On ecrit la requete
            $sql = "SELECT id, designation, prix FROM $this->table";
    
            // On éxecute la requête
            $req = $this->connexion->query($sql);
    
            // On retourne le resultat
            return $req;
        }

    }
?>