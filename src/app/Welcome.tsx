import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section id="about" className="welcome-section">
      <div className="welcome-image-container">
        <Image
          src="/Satele-Moieciu-de-Jos-si-Moieciu-de-Sus.png"
          alt="scoala"
          fill
          style={{objectFit: 'cover'}}
          priority
        />
      </div>
      <div className="welcome-content">
        <div className="welcome-card">
          <div className="welcome-school-image">
            <Image
              src="/300063406_596371548860443_7495238156915760607_n.png"
              alt="School Building"
              width={300}
              height={300}
              style={{objectFit: 'cover'}}
              className="rounded-lg"
            />
          </div>
          <div className="welcome-text">
            <h1>Școala Gimnazială Moieciu de Jos </h1>
            <p>
            ,,Învățământ de calitate, profesionalism și exigență''
            </p>
            <p>
            Prin muncă, ambiție, perseverență și determinare se pot obține rezultate remarcabile indiferent de vârstă și nu există nu se poate. Educația este cheia cu ajutorul căreia putem deschide orice ușă’’!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

