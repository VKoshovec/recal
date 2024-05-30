import items from "../items";

const MyComponenet = ({ message }) => {

    return (<>
    <h2>My Componenet</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate repellat fugit eligendi facere, vero veniam reiciendis quidem impedit deserunt animi sunt excepturi cumque quos consectetur non porro praesentium. Explicabo.</p>
    <p>{ message }</p>
    { items.map((el)=> {return <h3 key = {el.id} > {el.name} </h3>} ) }
    </>)
};

export default MyComponenet;