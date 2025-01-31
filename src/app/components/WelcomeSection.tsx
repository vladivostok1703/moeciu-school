// import Image from 'next/image'

// export default function WelcomeSection() {
//   return (
//     <section id="about" className="welcome-section">
//       <div className="welcome-image-container">
//         <Image
//           src="/Satele-Moieciu-de-Jos-si-Moieciu-de-Sus.png"
//           alt="scoala"
//           fill
//           style={{objectFit: 'cover'}}
//           priority
//         />
//       </div>
//       <div className="welcome-content">
//         <div className="welcome-card">
//           <div className="welcome-school-image">
//             <Image
//               src="/300063406_596371548860443_7495238156915760607_n.png"
//               alt="School Building"
//               width={300}
//               height={300}
//               style={{objectFit: 'cover'}}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="welcome-text">
//             <h1>Școala Gimnazială Moieciu de Jos </h1>
//             <p>
//             ,,Învățământ de calitate, profesionalism și exigență''
//             </p>
//             <p>
//             Prin muncă, ambiție, perseverență și determinare se pot obține rezultate remarcabile indiferent de vârstă și nu există nu se poate. Educația este cheia cu ajutorul căreia putem deschide orice ușă’’!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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


