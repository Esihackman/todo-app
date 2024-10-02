import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
const Todos =() => {
    return (
        <div>
            <h1>All Todos </h1>
            <div>
                <TodoTile title={'creating a React App'} />
                <TodoTile title={'install Tailwind Css'} />
                <TodoTile title={'Commit code to GitHub'}/>
                <TodoTile title={'Host it on Nertifly'}/>
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    );
        
    
}

export default Todos;