import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <div className="welcome-text animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Școala Gimnazială<br />
              <span className="text-primary-color">Moieciu de Jos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            ,,Educația este cheia cu ajutorul căreia putem deschide orice ușă!”
            </p>
          </div>
          <div className="welcome-image-container animate-on-scroll delay-200">
            <Image
               src="/300063406_596371548860443_7495238156915760607_n.png"
              alt="Școala Gimnazială Mareșal Alexandru Averescu"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}


