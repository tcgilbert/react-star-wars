import Nav from './Nav';
import StarshipInfo from './StarshipInfo';

function StarshipPage(props) {

  console.log(props);

  const starships = props.starships.map((ship, index) => {
    return <li key={index}>{ship.name}</li>
  })

  return (
    <div>
      <Nav />
      <ul>
        {starships}
      </ul>
    </div>
  )
}

export default StarshipPage;