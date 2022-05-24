import './App.css';
import Cards from './components/cards'
import Display from './components/display'
import Content from './components/content'
import Navbar from './components/navbar'
import data from './data';


export default function App() {

  const cards=data.map(item=>
    {
      return(
        
        <Cards 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
        />
      )
    })
  return (
    <div>
      <Navbar/>
      <Display/>
      <Content/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
    
  )
}

