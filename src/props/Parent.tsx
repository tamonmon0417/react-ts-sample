import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('ss')}>
      <div>;;</div>
    </ChildAsFC>
  )
}

export default Parent
