export const ACTION_INCREMENT = 'INCREMENT';
export const ACTION_DECREMENT = 'DECREMENT';




export function increment(num, account){
  // return an action
  return {
    type: 'INCREMENT',
    payload: {
      amount: num,
      account
    }
  }
}

export function decrement(num, account){
  return {
    type: 'DECREMENT',
    payload: {
      amount: num,
      account
    }
  }
}