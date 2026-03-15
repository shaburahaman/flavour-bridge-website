const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-10">

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-10">
            Last Updated: 2026
          </p>

          <div className="space-y-8 text-gray-700">

            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Flavour Bridge website, you accept and
                agree to comply with these Terms of Service. If you do not agree
                with any part of these terms, you must not use this website.
              </p>
            </section>

            {/* Company */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. About Our Company
              </h2>
              <p>
                Flavour Bridge LLP is an international exporter of premium Indian
                agricultural products including spices, rice, pulses, and other
                food commodities sourced directly from trusted Indian farms and
                suppliers.
              </p>
            </section>

            {/* Products */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Product Information
              </h2>
              <p>
                We aim to provide accurate product descriptions, images, and
                specifications. However, minor variations in packaging, color,
                or product appearance may occur due to natural sourcing and
                agricultural conditions.
              </p>
            </section>

            {/* Orders */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Orders and Payments
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to confirmation and availability.</li>
                <li>Prices may change without prior notice.</li>
                <li>Payments must be completed before shipment processing.</li>
                <li>Bulk export orders may require advance payment.</li>
              </ul>
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Shipping and Delivery
              </h2>
              <p>
                Flavour Bridge offers global shipping through trusted logistics
                partners. Delivery time varies depending on destination,
                shipping method, and customs clearance procedures.
              </p>
            </section>

            {/* Export */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Export Compliance
              </h2>
              <p>
                Buyers are responsible for ensuring that imported products comply
                with their local country regulations including food safety,
                import duties, and documentation requirements.
              </p>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                Flavour Bridge LLP shall not be held liable for any indirect,
                incidental, or consequential damages arising from the use of our
                products or website.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                8. Intellectual Property
              </h2>
              <p>
                All content on this website including logos, images, text, and
                product designs are the intellectual property of Flavour Bridge
                LLP and may not be reproduced without permission.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to update or modify these terms at any time.
                Continued use of the website after changes indicates acceptance
                of the revised terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                10. Contact Information
              </h2>

              <p>
                If you have any questions regarding these Terms of Service,
                please contact us:
              </p>

              <div className="mt-3">
                <p><strong>Company:</strong> Flavour Bridge LLP</p>
                <p><strong>Email:</strong> support@flavourbridgellp.com</p>
                <p><strong>WhatsApp:</strong> +91 91777 18097</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;