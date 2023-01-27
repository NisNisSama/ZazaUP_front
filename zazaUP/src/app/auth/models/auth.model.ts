export class AuthModel {
    identifiant!: string;
    password!: string;
}

export class CreateEtudiantsModel {
    nom!: string;
    prenoms!: string;
    ecole!: string;
    niveau_etude!: string;
    tel1!: string;
    tel2?: string;
    email!: string;
    password!: string;
    promotion_id!: number;
    region_id!: number;
    domaine_id!: number;
    filiere_id!: number;
    status_id!: number;
}

export class PromotionsModel {
    id!: number;
    annee!: number;
    nom!: string;
}

export class RegionsModel {
    id!: number;
    nom!: string;
    path!: string;
    nombre_etudiants!: number;
}

export class DomaineCompetencesModel {
    id!: number;
    nom!: string;
    liste_filieres!: any[];
}

export class FilieresModel {
    id!: number;
    nom_filiere!: string;
    nom_domaine!: string;
}

export class StatusProfessionnelsModel {
    id!: number;
    status!: string;
}
