const Card = (props) => {
  return (
    <div>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 10}}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  )
}

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event){
    event.preventDefault()

    fetch(`https://api.github.com/users/${this.state.userName}`).then(function(response) {
      return response.json()
    }).then((json) => {
      this.props.onSubmit(json)
      this.setState({userName: ''})
    })
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.userName} 
          onChange={(event) => this.setState({ userName: event.target.value })}
          type="text" placeholder="Github Username" />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cards: []
    }
    this.addNewCard = this.addNewCard.bind(this)
  }
  
  addNewCard(cardInfo){
    this.setState( prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }
  
  render(){
    return(
      <div>
        <Form onSubmit={this.addNewCard}/>        
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)