import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <Container>
        {/* Top Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 – Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Hotel Ankita
            </h2>
            <p className="text-sm leading-relaxed">
              A modern hotel experience offering comfort, cleanliness,
              and quality service. Manage bookings, rooms, and guest
              experiences seamlessly.
            </p>
          </div>

          {/* Column 2 – Product */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Room Management</li>
              <li>Reservations</li>
              <li>Housekeeping</li>
              <li>Billing & Invoices</li>
              <li>Reports & Analytics</li>
            </ul>
          </div>

          {/* Column 3 – Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>User Guides</li>
              <li>FAQs</li>
              <li>System Status</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Column 4 – Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Partners</li>
              <li className="pt-2">
                <span className="block">Email:</span>
                <span className="text-white">
                  support@hotelankita.com
                </span>
              </li>
              <li>
                <span className="block">Phone:</span>
                <span className="text-white">
                  +91 9199753698
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-4 text-xs text-gray-400">
            <p>
              © {new Date().getFullYear()} Hotel Ankita. All rights reserved.
            </p>

            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>Accessibility</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
