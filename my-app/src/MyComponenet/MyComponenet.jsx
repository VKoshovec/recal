import items from "../items";
import scss from './MyComponenet.module.scss';

const MyComponenet = ({ message }) => {

    return (<>
    <h2 className={ scss.bodyText } >My Componenet</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate repellat fugit eligendi facere, vero veniam reiciendis quidem impedit deserunt animi sunt excepturi cumque quos consectetur non porro praesentium. Explicabo.</p>
    <p>{ message }</p>
    { items.map((el)=> {return <h3 key = {el.id} > {el.name} </h3>} ) }
    <div className={ scss.thumb_cover }>
      <div className={ scss.thumb }>Hello!!!</div>
    </div>
    </>)
};

export default MyComponenet;