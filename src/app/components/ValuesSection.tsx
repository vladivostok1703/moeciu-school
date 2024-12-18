import Image from 'next/image'

const values = [
  {
    title: "Abordare personalizată",
    description: "Fiecare elev are o poveste. Ne raportăm la toți copiii la fel, indiferent de mediul din care provin, capacitățile și abilitățile pe care le au.",
    color: "bg-red-50",
    icon: "/iconite_1_abordare-personalizata.png"
  },
  {
    title: "Gândire laterală",
    description: "Ajutăm elevii să treacă de limitele conceptuale ale gândirii clasice, impulsionându-i să vadă lucrurile în ansamblu și încurajându-i să fie creativi.",
    color: "bg-purple-50",
    icon: "/iconite_2_gandire-laterala.png"
  },
  {
    title: "Suport",
    description: "Ajutăm fiecare elev să își atingă potențialul maxim. Avem răbdare și înțelegem că lucrurile frumoase au nevoie de timp.",
    color: "bg-pink-50",
    icon: "/iconite_3_suport.png"
  },
  {
    title: "Înțelegere",
    description: "Suntem prezenți în fiecare etapă a dezvoltării elevilor și clădim împreună cu ei un viitor adult echilibrat, fericit și independent.",
    color: "bg-blue-50",
    icon: "/iconite_4_intelegere.png"
  }
]

export default function ValuesSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ce Valorant?</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className={`value-card ${value.color}`}>
              <div className="value-icon">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

