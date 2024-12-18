import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsSection() {
  const news = [
    { title: 'Annual Science Fair', content: 'Join us for our annual science fair next month!' },
    { title: 'New Sports Facility', content: 'Our new sports facility will be opening next semester.' },
    { title: 'Academic Achievement', content: 'Congratulations to our students for their excellent exam results!' },
  ]

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

