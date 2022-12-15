import React from 'react'

const Survey = () => {
  return (
    <form>
      <span>
        Gender
      </span>
      <input type="radio" name="gender" value="M"/> 
      <label>Male</label>
      <input type="radio" name="gender" value="F"/> 
      <label>Female</label> <br/><br/>
      
      <span>
        International Age 
      </span>
      &nbsp;
      &nbsp;
      <select>
        <option value="13">13</option>
        <option value="13">14</option>
        <option value="13">15</option>
        <option value="13">16</option>
        <option value="13">17</option>
        <option value="13">18</option>
        <option value="13">19</option>
      </select><br/><br/>
      
      <span>
        Vaccination Status
      </span>
      <input type="radio" name="vaccination" value="0"/> <label>None</label>
      <input type="radio" name="vaccination" value="1"/> <label>1st dose</label>
      <input type="radio" name="vaccination" value="2"/> <label>2nd dose</label>
      <input type="radio" name="vaccination" value="3"/> <label>3rd dose</label>
      <input type="radio" name="vaccination" value="4"/> <label>4th dose</label>
      <br/><br/>

      <span>
        COVID test
      </span>
      <input type="radio" name="test" value="1"/> <label>Positive</label>
      {" "}
      <select>
        <option value="1">1 week ago</option>
        <option value="2">2 weeks ago</option>
        <option value="4">1 month ago</option>
        <option value="8">2 months ago</option>
        <option value="12">3 months ago</option>
        <option value="16">4 months ago</option>
        <option value="17"> more than 4 months ago</option>
      </select>
      <input type="radio" name="test" value="0"/> <label>Negative</label>
      <br/><br/>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Survey