import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

const Terms = () => {
  return (
    <div className="bg-[#fff8f6] text-gray-800">
      <Nav />

      {/* Terms & Conditions Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Terms & Conditions for Downtown by Heychat International Limited Service Bot
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          <strong>Effective Date:</strong> 6/9/2025
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-6">
          Welcome to Downtown by Heychat International Limited, your smart WhatsApp companion for printing, deliveries, and student support. 
          These Terms & Conditions (“Terms”) govern your use of Downtown by Heychat International Limited on WhatsApp and related services.
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-10">
          By interacting with Downtown by Heychat International Limited via WhatsApp, you agree to these Terms.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Who We Are</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Downtown is a chatbot service operated by Heychat International Limited. We provide support tools like:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-10 space-y-1">
          <li>Smart document printing & delivery</li>
          <li>Student helpdesk and info lookup</li>
          <li>AI-powered interactions for campus life</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How You Use Downtown by Heychat International Limited</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">To use Downtown by Heychat International Limited:</p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 space-y-1">
          <li>You must be at least 13 years old.</li>
          <li>You must use a valid WhatsApp account.</li>
          <li>All messages and files you send must comply with WhatsApp’s own terms of service and our acceptable use policy.</li>
          <li>Downtown by Heychat International Limited is not a human — but it's designed to assist you in real time.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Service Scope</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Downtown by Heychat International Limited helps users:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 space-y-1">
          <li>Upload documents for printing</li>
          <li>Order services like delivery (when available)</li>
          <li>Get information using AI prompts</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          We may add or remove services from time to time. Certain features may be limited to specific schools, locations, or operational hours.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">4. User Responsibilities</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          By using Downtown by Heychat International Limited, you agree:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 space-y-1">
          <li>Not to send illegal, abusive, or inappropriate content.</li>
          <li>Not to misuse the platform for spam or fraud.</li>
          <li>To provide correct and timely details when placing orders or making requests.</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          We reserve the right to block access to users who violate these rules.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Payments</h2>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-10 space-y-1">
          <li>Some services may require payment (e.g., printing or deliveries).</li>
          <li>You’ll receive a breakdown of fees before confirming your order.</li>
          <li>All payments are final unless otherwise stated.</li>
          <li>We use secure payment gateways and will never ask for your bank PIN or password.</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Refund & Cancellation</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          If your order is delayed, incorrect, or undelivered, please message “Support” for resolution. 
          Refunds are issued only in verified cases of service failure.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Data & Privacy</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          We collect basic information like your WhatsApp number, messages, and documents for the purpose of delivering services. 
          See our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for more info.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Intellectual Property</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          All content, branding, and chatbot logic are the property of Heychat International Limited 
          and may not be copied, repurposed, or distributed without permission.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Limitation of Liability</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Downtown by Heychat International Limited is provided “as is.” While we aim to be accurate and fast, we cannot guarantee 100% uptime or response accuracy. 
          We are not liable for losses arising from service delays, missed orders, or misuse.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Updates to Terms</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          These Terms may change as we improve our services. We’ll notify users via WhatsApp or on our website.
        </p>

        {/* Section 11 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Contact</h2>
        <p className="text-sm md:text-base text-gray-700 mb-2">
          📧 Email: <a href="mailto:askheychat@downtown.ng" className="text-blue-600 underline">askheychat@downtown.ng</a>
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-2">
          📱 Phone: <a href="tel:+2349028283115" className="text-blue-600 underline">+2349028283115</a>
        </p>
        <p className="text-sm md:text-base text-gray-700">
          🌐 Website: <a href="https://downtown.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">downtown.ng</a>
        </p>
      </section>

      <Footer />
    </div>
  )
}

export default Terms
