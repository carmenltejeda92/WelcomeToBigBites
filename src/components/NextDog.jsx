function NextDog(props) {
    function handleClick(){
        props.setCounter(props.counter +1)
    }


  return <button onClick={handleClick}>See another puppy!</button>
}

export default NextDog
