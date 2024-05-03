import Banner from "../components/Banner"
import Card from "../components/Card"
import bannerImage from "../assets/HomeBanner.jpg"
import logements from "../logements"

function Home() {
  return (
    <main className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs"/>
      <div className="cards-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  )
}

export default Home