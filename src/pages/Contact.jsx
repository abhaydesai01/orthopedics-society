import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Medical Center Drive
                    <br />
                    Mangalore, Karnataka 575001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@medicohealthcare.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Emergency Contact</h2>
            <div className="space-y-4">
              <p className="text-gray-600">24/7 Emergency Helpline:</p>
              <p className="text-2xl font-bold text-sky-500">+91 9876543210</p>
              <p className="text-gray-600">
                For medical emergencies, please call our emergency helpline number immediately. Our team is available
                24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

