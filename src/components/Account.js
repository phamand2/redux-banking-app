import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react';
import { increment, decrement } from '../redux/actions';



export default function Account({title, id}) {
  const amount = useSelector((state) => state[id]);
  const dispatch = useDispatch();
  // Create State
  const [value, setValue] = useState('0')


  const handlePlus = () => {
    dispatch(increment(parseFloat(value, 10), id))
  }

  const handleMinus = () => {
    dispatch(decrement(parseFloat(value, 10), id))
  }

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" textAlign="center">{title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header textAlign='center' size="huge" color="blue">${amount}</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Button icon onClick={handleMinus}>
                    <Icon name="minus" />
                  </Button>
                  <Input type="number" onChange={(e) => {setValue(e.target.value)}} value={value} />
                  <Button icon onClick={handlePlus}>
                    <Icon name="plus" />
                  </Button>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}