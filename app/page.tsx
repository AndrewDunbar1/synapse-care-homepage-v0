import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import ClientSynapseNetwork from "@/components/client-synapse-network"
import { Database, Layers, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Neural Network Background */}
      <ClientSynapseNetwork />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <header className="py-6">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Synapse Care" width={800} height={240} className="h-48 w-auto" priority />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="bg-teal-900/50 text-teal-400 border-teal-700 mb-6">
              Now in Beta
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-teal-400">AI-Powered</span> <br />
              Patient Matching
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg mx-auto max-w-3xl">
              SynapseCare uses sophisticated AI algorithms to find the best patients for your clinical trials. Plugs
              directly into your hospital's API for seamless integration.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-teal-800 transition-all">
              <div className="bg-gray-800/70 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hospital API Integration</h3>
              <p className="text-gray-400">
                Seamlessly connects to your existing hospital systems to access patient data securely and efficiently.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-teal-800 transition-all">
              <div className="bg-gray-800/70 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sophisticated Algorithms</h3>
              <p className="text-gray-400">
                Our AI analyzes complex eligibility criteria and patient records to find optimal matches for clinical
                trials.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-teal-800 transition-all">
              <div className="bg-gray-800/70 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Matching</h3>
              <p className="text-gray-400">
                Identify eligible patients for your trials with precision, improving recruitment rates and trial
                success.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 mb-10">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your <span className="text-teal-400">clinical trial recruitment?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our beta program and be among the first to leverage AI-powered patient matching.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/logo.png" alt="Synapse Care" width={600} height={180} className="h-32 w-auto" />
            </div>
            <div className="text-gray-400 text-sm">© 2025 Synapse Care. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </main>
  )
}
