import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    };
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className='app-add-form'>
        <h3>To add a new employee you can here:</h3>
        <form className='add-form d-flex' onSubmit={this.onSubmit}>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Name?'
            name='name'
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='salary, USD?'
            name='salary'
            value={salary}
            onChange={this.onValueChange}
          />

          <button type='submit' className='btn btn-outline-light'>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
