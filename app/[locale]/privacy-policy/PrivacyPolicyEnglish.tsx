export default function PrivacyPolicyEnglish() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <p className="text-gray-400 mb-8 leading-relaxed">
        Last updated: January 1, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
        <p className="leading-relaxed mb-4">
          TheDigitalPepper respects your privacy and is committed to protecting your personal data. 
          This privacy policy explains how we collect, use, share, and protect your data in accordance 
          with the General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. Data we collect</h2>
        <p className="leading-relaxed mb-4">
          We only collect data necessary to provide and improve our services. 
          This may include:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Name and contact details (email address, phone number)</li>
          <li>Company information</li>
          <li>Communication history</li>
          <li>Technical data (IP address, browser type, device information)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Purposes of processing</h2>
        <p className="leading-relaxed mb-4">
          We use your data for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Providing our services and answering questions</li>
          <li>Improving our website and services</li>
          <li>Sending relevant information (with your consent)</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Your rights</h2>
        <p className="leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Access your personal data</li>
          <li>Request correction of incorrect data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Request data portability</li>
        </ul>
        <p className="leading-relaxed mb-4">
          To exercise these rights, you can contact us at{" "}
          <a href="mailto:info@thedigitalpepper.nl" className="text-red-400 hover:text-red-300 transition">
            info@thedigitalpepper.nl
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Security</h2>
        <p className="leading-relaxed mb-4">
          We take appropriate technical and organizational measures to protect your personal data 
          against unauthorized access, loss, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">6. Contact</h2>
        <p className="leading-relaxed mb-4">
          For questions about this privacy policy or about the processing of your data, you can contact us:
        </p>
        <p className="leading-relaxed mb-4">
          TheDigitalPepper<br />
          Email: <a href="mailto:info@thedigitalpepper.nl" className="text-red-400 hover:text-red-300 transition">info@thedigitalpepper.nl</a>
        </p>
      </section>
    </div>
  );
}

