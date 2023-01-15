import React from 'react'
import { Link } from 'react-router-dom';

const BoardView = () => {
  return (
    <div>
        <form>
            <p>
                Title
            </p>
            <p>
                Body
            </p>
            <br/><br/>
            <button type="submit"><Link to='/boardlist'>Cancel</Link></button>
            <button type="submit">Modify</button>
            <button type="submit">Delete</button>
        </form>
    </div>
  )
}

export default BoardView