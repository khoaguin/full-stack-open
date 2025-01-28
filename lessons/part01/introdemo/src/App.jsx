const Hello = (props) => {
  return (
    <div>
      <p>Hello, I am {props.name}. I am {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const name1 = "Pho"
  const name2 = "Hat De"
  const age1 = 5
  const age2 = 2

  // return (
  //   <div>
  //     <h1>My first React App</h1>
  //     <Hello name={name1} age={age1} />
  //     <Hello name={name2} age={age2} />
  //   </div>
  // )

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
    </div>
  )
}

export default App
