export default function CookiebeleidDutch() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookiebeleid</h1>
      
      <p className="text-gray-400 mb-8 leading-relaxed">
        Laatst bijgewerkt: 1 januari 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Wat zijn cookies?</h2>
        <p className="leading-relaxed mb-4">
          Cookies zijn kleine tekstbestanden die op jouw apparaat worden opgeslagen wanneer je een website bezoekt. 
          Ze helpen websites om jouw voorkeuren te onthouden en je ervaring te verbeteren.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. Welke cookies gebruiken wij?</h2>
        
        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Essentiële cookies</h3>
        <p className="leading-relaxed mb-4">
          Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld. 
          Ze worden meestal alleen ingesteld als reactie op acties die je uitvoert, zoals het instellen van privacyvoorkeuren 
          of het invullen van formulieren.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Analytische cookies</h3>
        <p className="leading-relaxed mb-4">
          Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken door informatie anoniem te verzamelen. 
          Dit stelt ons in staat de website te verbeteren en de gebruikerservaring te optimaliseren.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Functionele cookies</h3>
        <p className="leading-relaxed mb-4">
          Deze cookies stellen de website in staat om verbeterde functionaliteit en personalisatie te bieden. 
          Ze kunnen worden ingesteld door ons of door externe providers waarvan wij diensten op onze pagina's hebben toegevoegd.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Cookies beheren</h2>
        <p className="leading-relaxed mb-4">
          Je kunt jouw cookievoorkeuren op elk moment beheren via de instellingen van jouw browser. 
          Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van de website kan beïnvloeden.
        </p>
        <p className="leading-relaxed mb-4">
          Voor meer informatie over het beheren van cookies in specifieke browsers:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-wissen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Cookies van derden</h2>
        <p className="leading-relaxed mb-4">
          Sommige cookies worden geplaatst door externe diensten die op onze pagina's verschijnen. 
          Wij hebben geen controle over deze cookies. We raden je aan het privacybeleid van deze derde partijen te raadplegen 
          voor meer informatie over hoe zij cookies gebruiken.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Contact</h2>
        <p className="leading-relaxed mb-4">
          Voor vragen over ons cookiebeleid kun je contact met ons opnemen via{" "}
          <a href="mailto:info@thedigitalpepper.nl" className="text-red-400 hover:text-red-300 transition">
            info@thedigitalpepper.nl
          </a>
        </p>
      </section>
    </div>
  );
}
