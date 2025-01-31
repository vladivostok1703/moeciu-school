// 'use client'

// import Image from 'next/image'
// import { Facebook, Mail, Phone, MapPin } from 'lucide-react'
// import dynamic from 'next/dynamic'
// import { useCallback } from 'react'

// const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//   e.preventDefault();
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };


// const LocationSection = dynamic(() => import('./LocationSection'), {
//   ssr: false,
//   loading: () => <p>Încărcare hartă...</p>
// })

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-grid">
//           <div>
//             <Image
//               src="https://www.cylex.ro/images/category-images/schools.svg"
//               alt="Logo Școala Gimnazială"
//               width={150}
//               height={150}
//               className="footer-logo"
//             />
//             <p>Școala Gimnazială Moieciu de Jos este o instituție educațională situată în comuna Moieciu, județul Brașov, România. Aceasta oferă învățământ gimnazial elevilor din localitate și din zonele învecinate.</p>
//             <div className="footer-contact">
//               <div className="flex items-center gap-2 mb-2">
//                 <Phone className="w-5 h-5" />
//                 <span>0268 236 899</span>
//               </div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Mail className="w-5 h-5" />
//                 <span>moieciuscoala@yahoo.ro</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5" />
//                 <span>
//                 Strada Principală 514, Moieciu de Jos, 507135, Braşov</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="footer-links">
//             <h3>Legături Rapide</h3>
//             <ul>
//               <li><a href="#about">Despre Noi</a></li>
//               <li><a href="#news">Noutăți</a></li>
//               <li><a href="#calendar">Calendar</a></li>
//               <li><a href="#resources">Resurse</a></li>
//             </ul>
//           </div>
          
//           <div className="footer-links">
//             <h3>Legături Rapide</h3>
//             <ul>
//               <li><a href="#about">Despre Noi</a></li>
//               <li><a href="#news">Noutăți</a></li>
//               <li><a href="#calendar">Calendar</a></li>
//               <li><a href="#resources">Resurse</a></li>
//               <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>Despre Noi</a></li>
//               <li><a href="#values" onClick={(e) => handleSmoothScroll(e, 'values')}>Valori</a></li>
//               <li><a href="#stats" onClick={(e) => handleSmoothScroll(e, 'stats')}>Statistici</a></li>
//               <li><a href="#news" onClick={(e) => handleSmoothScroll(e, 'news')}>Noutăți</a></li>
//               <li><a href="#calendar" onClick={(e) => handleSmoothScroll(e, 'calendar')}>Calendar</a></li>
//               <li><a href="#resources" onClick={(e) => handleSmoothScroll(e, 'resources')}>Resurse</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="footer-map">
//           {/* <LocationSection /> */}
//         </div>
        
//         <div className="footer-bottom">
//           <p>© 2023 Școala Gimnazială Mareșal Alexandru Aversescu. Toate drepturile rezervate.</p>
//           <div className="social-links justify-center">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <Facebook className="w-6 h-6" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'

import Image from 'next/image'
import { Facebook, Mail, Phone, MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useCallback } from 'react'

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LocationSection = dynamic(() => import('./LocationSection'), {
  ssr: false,
  loading: () => <p>Încărcare hartă...</p>
})

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="https://www.cylex.ro/images/category-images/schools.svg"
              alt="Logo Școala Gimnazială"
              width={150}
              height={150}
              className="footer-logo"
            />
            <p>Școala Gimnazială Moieciu de Jos este o instituție educațională situată în comuna Moieciu, județul Brașov, România. Aceasta oferă învățământ gimnazial elevilor din localitate și din zonele învecinate.</p>
            <div className="footer-contact">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" />
                <span>0268 236 899</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5" />
                <span>moieciuscoala@yahoo.ro</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Strada Principală 514, Moieciu de Jos, 507135, Braşov</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Legături Rapide</h3>
            <ul>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'welcome')}>Despre</a></li>
              <li><a href="#values" onClick={(e) => handleSmoothScroll(e, 'values')}>Valori</a></li>
              <li><a href="#stats" onClick={(e) => handleSmoothScroll(e, 'stats')}>Statistici</a></li>
              <li><a href="#news" onClick={(e) => handleSmoothScroll(e, 'news')}>Noutăți</a></li>
              <li><a href="#calendar" onClick={(e) => handleSmoothScroll(e, 'calendar')}>Calendar</a></li>
              <li><a href="#resources" onClick={(e) => handleSmoothScroll(e, 'resources')}>Resurse</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Informații Utile</h3>
            <ul>
              <li><a href="#projects">Despre Noi</a></li>
              <li><a href="#gallery">Anunturi</a></li>
              <li><a href="#teachers">Profesorii Noștri</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-map">
          <LocationSection />
        </div>
        
        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Școala Gimnazială Moeciu de Jos. Toate drepturile rezervate.</p>
          <div className="social-links justify-center">
            <a href="https://www.facebook.com/people/%C8%98coala-Gimnazial%C4%83-Moieciu-de-Jos/100054628082330/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
