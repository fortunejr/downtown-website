import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

const Privacy = () => {
  return (
    <div className="bg-[#fff8f6] text-gray-800">
      <Nav />

      {/* Privacy Policy Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy for Downtown by Heychat International Limited
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          <strong>Effective Date:</strong> 5/9/2025
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-6">
          Heychat International Limited (“we,” “our,” or “us”) is committed to protecting your privacy.
          This Privacy Policy outlines how we collect, use, and protect your information when you interact with us via WhatsApp.
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-10">
          By using our WhatsApp-based services (the “Services”), you agree to the terms of this policy.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>

        <h3 className="font-medium text-gray-800 mt-4 mb-1">a. Information You Provide via WhatsApp</h3>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 space-y-1">
          <li><strong>Chat Messages:</strong> We collect the messages, commands, or requests you send while chatting with our bot.</li>
          <li><strong>Contact Details:</strong> Your WhatsApp phone number and profile name as provided by WhatsApp.</li>
          <li><strong>File Uploads:</strong> If you send documents or media files through the bot (e.g., for printing or inquiries), we store them temporarily to fulfill your request.</li>
        </ul>

        <h3 className="font-medium text-gray-800 mt-4 mb-1">b. Automatically Collected Data</h3>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-10 space-y-1">
          <li><strong>Timestamps & Session Logs:</strong> For service improvement and usage tracking.</li>
          <li><strong>Technical Identifiers:</strong> Such as device type or platform info where available (e.g., iOS, Android).</li>
          <li><strong>Interaction History:</strong> For personalized service and faster responses in future sessions.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">We use your information to:</p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-10 space-y-1">
          <li>Respond to your queries, orders, or requests</li>
          <li>Process and deliver services (like printing or order confirmations)</li>
          <li>Improve bot experience and efficiency</li>
          <li>Monitor misuse or unauthorized access</li>
          <li>Fulfill legal obligations (if applicable)</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Sharing</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          We do not sell your information.
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          We only share limited data with:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-10 space-y-1">
          <li><strong>Service providers:</strong> For file handling, hosting, or delivery coordination.</li>
          <li><strong>Law enforcement or regulatory bodies:</strong> If legally required.</li>
          <li><strong>Internal partners:</strong> For customer support or service improvements.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Data Retention</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Message logs are retained only as long as needed to provide you with service.
          Uploaded files are deleted automatically after the task is completed or after a short holding period.
          You can request your data be deleted anytime by messaging us directly.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Security Measures</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          We use secure storage systems and access controls to keep your data safe. However, WhatsApp is a third-party platform —
          while we protect what we collect, you’re also subject to WhatsApp’s own privacy practices.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Children’s Privacy</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Our services are not intended for users under 13 years of age. We do not knowingly collect data from children.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Your Rights</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          You may request:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 space-y-1">
          <li>A copy of your interaction history</li>
          <li>Deletion of your chat data or files</li>
          <li>Clarification on how your data is used</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          To make such a request, simply message: <strong>“Delete my data”</strong> or email us directly.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
        <p className="text-sm md:text-base text-gray-700 mb-2">📧 Email: <a href="mailto:askheychat@downtown.ng" className="text-blue-600 underline">askheychat@downtown.ng</a></p>
        <p className="text-sm md:text-base text-gray-700">🌐 Website: <a href="https://downtown.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">downtown.ng</a></p>
      </section>

      <Footer />
    </div>
  )
}

export default Privacy
