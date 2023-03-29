import './RollDown.css';

export const RollDownMenu = () => {
    return (
        <div>
            <ul id="menu-demo2">
                <li><a href="#"><h3>Série les femmes dans les arts</h3></a>
                    <ul>
                        <li><a href="#">Galerie des femmes peintres</a></li>
                        <li><a href="#">Galerie des femmes musiciennes</a></li>
                        <li><a href="#">Galerie des femmes actrices</a></li>
                    </ul>
                </li><br />
                <li><a href="#"><h3>Série les femmes dans les sciences</h3></a>
                    <ul>
                        <li><a href="#">Ada Lovelace, la naissance de la programmation</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}