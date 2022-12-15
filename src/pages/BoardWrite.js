import React from 'react'

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
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BoardWrite