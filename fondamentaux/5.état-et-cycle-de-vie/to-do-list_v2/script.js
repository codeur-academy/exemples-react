// Composant : Tâche
class Task extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let class_name = 'task'
    class_name += this.props.done ? ' task-success' : ' task-info';
  
    return (
      <div className={class_name}>
        <span>{this.props.value}</span>
        <i className="close">&times;</i>
      </div>
    )
  }
}

// Application
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksArray: [
        {value: 'Tâche 1', done: false},
      ],
      value: ''
    }

   // this.addTask()

    // Simuler l'événement click sur add
     this.timerID = setInterval(
      () => this.addTask(),
      1000
    );
  }


  addTask() {
    
    this.state.tasksArray.push({
      value: "Tâche " +  new Date().getSeconds(),
      done: false
    })

    

    
    this.setState(state => ({
      tasksArray: state.tasksArray
    }));

   
  }

  render() {
    let tasksArray = this.state.tasksArray.map((task, i) => {
      return (
        <Task 
          key={i}
          value={task.value}
          done={task.done}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Tâches à faire</h1>
            <form
              id="form-add"
              className="form-horizontal"
            >
              <div className="input-group">
                <input type="text" id="addInput" className="form-control"  placeholder="Description de la tâche..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>

            {tasksArray}
            
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));