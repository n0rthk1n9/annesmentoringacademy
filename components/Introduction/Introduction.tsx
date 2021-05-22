export function Introduction(): JSX.Element {
  return (
    <div className="bg-primary-blue-gray max-w p-2 md:p-6 mx-2 md:mx-20 my-2 md:my-20 rounded-xl shadow-md items-center text-white">
      <div className="mb-2 md:mb-5">
        <h1>
          OHNE SELBSTZWEIFEL UND STRESS ZUM MOTIVATIONSSCHREIBEN FÜR DEIN
          TRAUMSTUDIENPLATZ.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-2 md:space-y-0">
        <div className="flex-shrink-0">
          <img className="h-24" src="/memoji_anne.png" alt="creatorImage" />
        </div>
        <p className="flex-auto">
          Ich bin Anne, 28 Jahre alt und habe in einen Masterabschluss in
          Umweltingenieurwesen. Momentan promoviere im Bereich Hydrogeologie in
          München. In meinem Leben bin ich sehr oft mit der Erstellung von
          Motivationsschreiben konfrontiert ob für eine Bewerbung für einen
          Arbeitsplatz, eines Forschungsfonds oder für Stipendien. Lange Zeit
          war dies eine sehr unangenehme Aufgabe verbunden mit viel Stress und
          Selbstzweifeln. In der Mitte des Bachelorstudiums war es mein großer
          Herzenswunsch ein Auslandssemester zu machen aber meine Noten waren
          nicht die Besten und würden nicht allein Überzeugungen. Also habe ich
          beschlossen mich den Motivationsschreiben zu stellen und einen Weg zu
          finden mit diesen die Jury zu überzeugen mir ein
          Auslandssemesterstipendium zu geben!
        </p>
      </div>
    </div>
  );
}
