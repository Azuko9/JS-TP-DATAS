export default class Profile {
    id;
    nom;
    prenom;
    email;
    mdp;
    role;



    constructor(id, nom, prenom, email, mdp, role) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.mdp = mdp;
        this.role = role;
    };

    render() {
        const articleProfile = document.createElement("article");
        articleProfile.setAttribute("id", this.id);
        const nom = document.createElement("h2");
        nom.textContent = this.nom;
        const prenom = document.createElement("h3");
        prenom.textContent = this.prenom;
        const email = document.createElement("p");
        email.textContent = `${this.email}, mdp: ${this.mdp}`;
        const role = document.createElement("p");
        role.textContent = this.role;
        articleProfile.appendChild(nom);
        articleProfile.appendChild(prenom);
        articleProfile.appendChild(email);
        articleProfile.appendChild(role);
        return articleProfile;
    }

};

