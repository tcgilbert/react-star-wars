import StarshipLink from './StarshipLink';

function StarshipPage(props) {

  const starships = props.starships.map((ship, index) => {
    return <StarshipLink key={index} shipId={index} name={ship.name} />
  })

  return (
    <div>
      <ul>
        {starships}
      </ul>
    </div>
  )
}

export default StarshipPage;