import { Component } from 'react'
import Form from 'react-bootstrap/Form'

class OptionSelector extends Component {


helperFunction = (e) => {

  const numOfHorns = e.target.value;
  this.props.handleSelect(numOfHorns)

}
  render() {

    return (
      <Form.Select onChange={this.helperFunction} aria-label="Default select example">
        <option>Filter by number of horns</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={100}>One Hundred</option>
      </Form.Select>
    )
  }
}
export default OptionSelector;