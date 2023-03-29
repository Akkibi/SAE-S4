import { Card } from './components/Card/CardExpo.jsx';

export const Expo = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Card titre='BILLET EXPOSITION' date='Du mardi 03 avril au dimanche 25 juin' text='FEMMES PEINTRES' image_name="peintresse" image='assets/images/miniatures/Peintresse.png' />
        <Card titre='BILLET EXPOSITION' date='Du 30 juin au 30 septembre' text='FEMMES MUSICIENNES' image='assets/images/miniatures/danseuse.png' image_name="musicienne" />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES SCIENTIFIQUES' image='assets/images/miniatures/ScienceWomen.png' image_name="scientifique" />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES ACTRICES' image='assets/images/miniatures/StylishWomen.png' image_name="actrice" />
      </header>
    </div>
  );
};