import React from 'react'
import { Link } from 'react-router-dom'

const BoardWrite = () => {
  return (
    <div>
        <form>
            <p>
                Title
            </p>
            <input type="text" name="title" value=""/>
            <p>
                Body
            </p>
            <textarea rows="20" cols="100" name="Description" value=""></textarea> 
            <br/><br/>
            <button type="submit"><Link to='/boardlist'>Cancel</Link></button>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BoardWrite