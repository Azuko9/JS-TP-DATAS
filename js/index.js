import Profile from "./modules/Profile.js";


const main = document.querySelector("main");
console.log(main);
try {
    const response = await fetch("./datas/mockData.json");
    const profiles = await response.json();
    console.log(profiles);

    for (const profile of profiles) {
        
        const newProfile = new Profile(
            profile.id,
            profile.nom,
            profile.prenom,
            profile.email,
            profile.mdp,
            profile.role,
        
        );
        console.log(newProfile);
        main.appendChild(newProfile.render());
    }
} catch (error) {
    console.log("error");
}
