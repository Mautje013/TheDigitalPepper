export default function CookiebeleidEnglish() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
      
      <p className="text-gray-400 mb-8 leading-relaxed">
        Last updated: January 1, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. What are cookies?</h2>
        <p className="leading-relaxed mb-4">
          Cookies are small text files that are stored on your device when you visit a website. 
          They help websites remember your preferences and improve your experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. Which cookies do we use?</h2>
        
        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Essential cookies</h3>
        <p className="leading-relaxed mb-4">
          These cookies are necessary for the website to function and cannot be disabled. 
          They are usually only set in response to actions you take, such as setting privacy preferences 
          or filling out forms.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Analytical cookies</h3>
        <p className="leading-relaxed mb-4">
          These cookies help us understand how visitors use our website by collecting information anonymously. 
          This enables us to improve the website and optimize the user experience.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">Functional cookies</h3>
        <p className="leading-relaxed mb-4">
          These cookies enable the website to provide enhanced functionality and personalization. 
          They may be set by us or by external providers whose services we have added to our pages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Managing cookies</h2>
        <p className="leading-relaxed mb-4">
          You can manage your cookie preferences at any time through your browser settings. 
          Please note that disabling certain cookies may affect the functionality of the website.
        </p>
        <p className="leading-relaxed mb-4">
          For more information about managing cookies in specific browsers:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition">
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Third-party cookies</h2>
        <p className="leading-relaxed mb-4">
          Some cookies are placed by external services that appear on our pages. 
          We have no control over these cookies. We recommend that you consult the privacy policies of these third parties 
          for more information about how they use cookies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Contact</h2>
        <p className="leading-relaxed mb-4">
          For questions about our cookie policy, you can contact us at{" "}
          <a href="mailto:info@thedigitalpepper.nl" className="text-red-400 hover:text-red-300 transition">
            info@thedigitalpepper.nl
          </a>
        </p>
      </section>
    </div>
  );
}

