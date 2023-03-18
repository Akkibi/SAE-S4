export const Form = () => {
    return (
        <form>
            <label for="nom">Nom: </label>
            <input type="text" name="nom" id="nom"/>

            <label for="prenom">Prénom: </label>
            <input type="text" name="prenom" id="prenom"/>

            <label for="age">Âge: </label>
            <input type="text" name="age" id="age"/>

            <label for="email">Email: </label>
            <input type="email" name="email" id="email"/>

            <label for="date">Date: </label>
            <input type="date" name="date" id="date"/>

            <input type="submit" name="submit" id="submit"/>
        </form>
    );
}