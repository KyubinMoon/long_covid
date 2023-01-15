import React from 'react'
import '../css/survey.css'
import { useState } from 'react'

const Survey = ({ isJoined }) => {

  const [survey, setSurvey] = useState({
    gender: "",
    age: "",
    vaccination: "",
    test: false,
    testResult: "",
    whenPositive: "",
    whenLongCOVID: "",
    lastingLongCOVID: "",
    neuropsychiatric: false,
    neuropsychiatricSymptoms: {
      mood: false,
      fatigue: false,
      sleepDisorder: false,
      headache: false,
      cognition: false,
      dizziness: false,
      neurologicalAbnormalities: false,
      balanceProblems: false
    },
    nastrointestinal: false,
    nastrointestinalSymptoms: {
      abdominalPain: false,
      constipation: false,
      diarrhea: false,
      vomitingNausea: false
    },
    cardiorespiratory: false,
    cardiorespiratorySymptoms: {
      respiratorySymptoms: false,
      sputumNasalCogestion: false,
      orthostaticIntolerance: false,
      exerciseIntolerance: false,
      chestPain: false,
      rhinorrhea: false,
      cough: false,
      soreThroat: false,
      chestTightness: false,
      variationInHeartRate: false,
      palpitations: false
    },
    dermatologicTeguments: false,
    dermatologicTegumentsSymptoms: {
      hyperhidrosis: false,
      dermatologic: false,
      hairLoss: false
    },
    other: false,
    otherSymptoms: {
      lossOfAppetite: false,
      alteredSmell: false,
      bodyWeightChanges: false,
      myalgiaArthralgia: false,
      alteredTaste: false,
      otalgia: false,
      ophtalmologic: false,
      swollenLymphNodes: false,
      dysphonia: false,
      fever: false,
      musculoskeletalOther: false,
      changesInMenstruation: false,
      urinarySymptoms: false,
      dysphagia: false,
      speechDisturbances: false
    }
  })
  const { gender, age, vaccination, test, testResult, whenPositive, longCOVID, whenLongCOVID, lastingLongCOVID } = survey
  const { neuropsychiatric, neuropsychiatricSymptoms, nastrointestinal, nastrointestinalSymptoms, cardiorespiratory, cardiorespiratorySymptoms } = survey
  const { dermatologicTeguments, dermatologicTegumentsSymptoms, other, otherSymptoms } = survey
  const handleChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const toggleTestResult = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      test: e.target.checked,
      testResult: "",
      whenPositive: ""
    }))
  }
  const toggleWhenPositive = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      testResult: e.target.value,
      whenPositive: ""
    }))
  }
  const toggleLongCOVID = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      longCOVID: e.target.checked,
      whenLongCOVID: "",
      lastingLongCOVID: ""
    }))
  }
  const toggleNeuropsychiatricSymptoms = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
      neuropsychiatricSymptoms: {
        mood: false,
        fatigue: false,
        sleepDisorder: false,
        headache: false,
        cognition: false,
        dizziness: false,
        neurologicalAbnormalities: false,
        balanceProblems: false
      }
    }))
  }
  const handleNeuropsychiatricSymptomsChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      neuropsychiatricSymptoms: {
        ...prevState.neuropsychiatricSymptoms,
        [e.target.name]: e.target.checked
      }
    }))
  }
  const toggleNastrointestinalSymptoms = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
      nastrointestinalSymptoms: {
        abdominalPain: false,
        constipation: false,
        diarrhea: false,
        vomitingNausea: false
      }
    }))
  }

  const handleNastrointestinalSymptomsChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      nastrointestinalSymptoms: {
        ...prevState.nastrointestinalSymptoms,
        [e.target.name]: e.target.checked
      }
    }))
  }

  const toggleCardiorespiratorySymptoms = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
      cardiorespiratorySymptoms: {
      }
    }))
  }
  const handleCardiorespiratorySymptomsChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      cardiorespiratorySymptoms: {
        ...prevState.cardiorespiratorySymptoms,
        [e.target.name]: e.target.checked
      }
    }))
  }
  const toggleDermatologicTegumentsSymptoms = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
      dermatologicTegumentsSymptoms: {
      }
    }))
  }
  const handleDermatologicTegumentsSymptomsChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      dermatologicTegumentsSymptoms: {
        ...prevState.dermatologicTegumentsSymptoms,
        [e.target.name]: e.target.checked
      }
    }))
  }
  const toggleOtherSymptoms = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
      otherSymptoms: {
      }
    }))
  }
  const handleOtherSymptomsChange = (e) => {
    setSurvey(prevState => ({
      ...prevState,
      otherSymptoms: {
        ...prevState.otherSymptoms,
        [e.target.name]: e.target.checked
      }
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (gender === "" || age === "" || vaccination === "") {
      alert("Please fill out all Gender, Age, and Vaccination sections.")
      return
    }
    if (test && testResult === "") {
      alert("Please fill out whether your test result was positive or negative.")
      return
    }
    if (test && testResult === "positive" && whenPositive === "") {
      alert("Please fill out when you got diagnosed.")
      return
    }
    if (longCOVID && (whenLongCOVID === "" || lastingLongCOVID === "")) {
      alert("Please fill out the details for long COVID.")
      return
    }
    if (longCOVID && !neuropsychiatric && !nastrointestinal && !cardiorespiratory && !dermatologicTeguments && !other) {
      alert("Please fill out the details for long COVID symptoms.")
      return
    }
    if (neuropsychiatric) {
      let arr = []
      for (let key in neuropsychiatricSymptoms) {
        arr.push(neuropsychiatricSymptoms[key])
      }
      let result = arr.every(ele => !ele)
      if (result) {
        alert('Please check at least one of the neuropsychiatric symptoms.')
        return
      }
    }
    if (nastrointestinal) {
      let arr = []
      for (let key in nastrointestinalSymptoms) {
        arr.push(nastrointestinalSymptoms[key])
      }
      let result = arr.every(ele => !ele)
      if (result) {
        alert('Please check at least one of the nastrointestinal symptoms.')
        return
      }
    }
    if (cardiorespiratory) {
      let arr = []
      for (let key in cardiorespiratorySymptoms) {
        arr.push(cardiorespiratorySymptoms[key])
      }
      let result = arr.every(ele => !ele)
      if (result) {
        alert('Please check at least one of the cardiorespiratory symptoms.')
        return
      }
    }
    if (dermatologicTeguments) {
      let arr = []
      for (let key in dermatologicTegumentsSymptoms) {
        arr.push(dermatologicTegumentsSymptoms[key])
      }
      let result = arr.every(ele => !ele)
      if (result) {
        alert('Please check at least one of the dermatologic/terguments symptoms.')
        return
      }
    }
    if (other) {
      let arr = []
      for (let key in otherSymptoms) {
        arr.push(otherSymptoms[key])
      }
      let result = arr.every(ele => !ele)
      if (result) {
        alert('Please check at least one of the other symptoms.')
        return
      }
    }
    console.log(gender, age, vaccination, test, testResult, whenPositive, longCOVID, whenLongCOVID, lastingLongCOVID)
    console.log(neuropsychiatric, neuropsychiatricSymptoms, nastrointestinal, nastrointestinalSymptoms, cardiorespiratory, cardiorespiratorySymptoms)
    console.log(dermatologicTeguments, dermatologicTegumentsSymptoms, other, otherSymptoms)
  }





  return (
    isJoined ?
      <div className='subTitle'>
        You have already submitted the survey. Thank you!
      </div> :
      <>

        <div className='subTitle'>
          Please submit this survey.
        </div>
        <form className='surveyForm'>
          <span><b>
            1. Gender
          </b>
          </span>
          <br />
          <div onChange={handleChange}>
            <input type="radio" name="gender" value="male" />
            <label> Male</label><br />
            <input type="radio" name="gender" value="female" />
            <label> Female</label>
          </div>

          <br /><br />

          <span><b>
            2. International Age
          </b>
          </span>
          <br />
          &nbsp;
          &nbsp;
          <select name='age' onChange={handleChange}>
            <option value="">--age--</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
          </select>
          <br /><br />

          <span><b>
            3. Vaccination Status
          </b>
          </span>
          <br />
          <div onChange={handleChange}>
            <input type="radio" name="vaccination" value="0" /> <label> None</label><br />
            <input type="radio" name="vaccination" value="1" /> <label> 1st dose</label><br />
            <input type="radio" name="vaccination" value="2" /> <label> 2nd dose</label><br />
            <input type="radio" name="vaccination" value="3" /> <label> 3rd dose</label><br />
            <input type="radio" name="vaccination" value="4" /> <label> 4th dose</label>
          </div>
          <br /><br />

          <span><b>
            4. COVID test expereince?
          </b>
          </span>{" "}
          <input type="checkbox" name='test' onChange={toggleTestResult}></input>{" "}<label> Yes</label> <br />
          {
            test &&
            <div onChange={toggleWhenPositive}>
              <input type="radio" name="testResult" value="negative" /> <label> Negative</label><br />
              <input type="radio" name="testResult" value="positive" /> <label> Positive</label>
            </div>
          }
          {
            testResult === "positive" &&
            <select name='whenPositive' onChange={handleChange}>
              <option value="">---select when you diagnosed positive---</option>
              <option value="1">1 week ago</option>
              <option value="2">2 weeks ago</option>
              <option value="4">1 month ago</option>
              <option value="8">2 months ago</option>
              <option value="12">3 months ago</option>
              <option value="16">4 months ago</option>
              <option value="17"> more than 4 months ago</option>
            </select>
          }
          <br /><br />




          <span><b>
            5. Have you experienced/ Are you experiencing long COVID? **Need to be reworded**
          </b>
          </span>
          <br />
          <input type="checkbox" name="longCOVID" onChange={toggleLongCOVID} /> <label> Yes</label>
          {" "}<br />
          {
            longCOVID &&
            <>
              <select name="whenLongCOVID" onChange={handleChange}>
                <option value="">---When? (approximately)---</option>
                <option value="1">currently experiencing</option>
                <option value="2">2 weeks ago</option>
                <option value="3">3 weeks ago</option>
                <option value="4">1 months ago</option>
                <option value="8">2 months ago</option>
                <option value="12">3 months ago</option>
                <option value="16"> more than 4 months ago</option>
              </select><br />
              <select name="lastingLongCOVID" onChange={handleChange}>
                <option value="">---lasting period (approximately)---</option>
                <option value="2">for 2 weeks</option>
                <option value="4">for 4 weeks</option>
                <option value="6">for 6 weeks</option>
                <option value="8">for 8 weeks</option>
                <option value="12">for 12 weeks</option>
                <option value="13">more than 12 weeks</option>
              </select>
              <br /><br />

              <hr></hr>
              <div style={{ fontSize: "1.2rem" }}>Symptoms</div> <br />
              <span style={{ color: "red" }}>
                **Please select ALL the closest symptoms that you are experiencing** <br /><br />
              </span>
              <span>
                <b>I. Neuropsychiatric</b>{"  "}

                <input type="checkbox" name="neuropsychiatric" onChange={toggleNeuropsychiatricSymptoms} /> <label> Yes</label> <br />
                {
                  neuropsychiatric &&

                  <div onChange={handleNeuropsychiatricSymptomsChange}>
                    <input type="checkbox" name="mood" /><label> mood</label> <br />
                    <input type="checkbox" name="fatigue" /><label> fatigue</label> <br />
                    <input type="checkbox" name="sleepDisorder" /><label> sleep disorder</label> <br />
                    <input type="checkbox" name="headache" /><label> headache</label> <br />
                    <input type="checkbox" name="cognition" /><label> cognition</label> <br />
                    <input type="checkbox" name="dizziness" /><label> dizziness</label> <br />
                    <input type="checkbox" name="neurologicalAbnormalities" /><label> neurological abnormalities</label> <br />
                    <input type="checkbox" name="balanceProblems" /><label> balance problems</label>
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>II. Gastrointestinal</b>{"  "}
                <input type="checkbox" name="nastrointestinal" onChange={toggleNastrointestinalSymptoms} /> <label> Yes</label> <br />
                {nastrointestinal &&
                  <div onChange={handleNastrointestinalSymptomsChange}>
                    <input type="checkbox" name="abdominalPain" /><label> abdominal pain</label><br />
                    <input type="checkbox" name="constipation" /><label> constipation</label><br />
                    <input type="checkbox" name="diarrhea" /><label> diarrhea</label><br />
                    <input type="checkbox" name="vomitingNausea" /><label> vomiting/nausea</label><br />
                  </div>
                }
                <br />

              </span>
              <br /><br />

              <span>
                <b>III. Cardiorespiratory</b>{"  "}
                <input type="checkbox" name="cardiorespiratory" onChange={toggleCardiorespiratorySymptoms} /> <label> Yes</label> <br />
                {cardiorespiratory &&
                  <div onChange={handleCardiorespiratorySymptomsChange}>
                    <input type="checkbox" name="respiratorySymptoms" /><label> respiratory symptoms</label><br />
                    <input type="checkbox" name="sputumNasalCogestion" /><label> sputum/nasal cogestion</label><br />
                    <input type="checkbox" name="orthostaticIntolerance" /><label> orthostatic intolerance</label><br />
                    <input type="checkbox" name="exerciseIntolerance" /><label> exercise intolerance</label><br />
                    <input type="checkbox" name="chestPain" /><label> chest pain</label><br />
                    <input type="checkbox" name="rhinorrhea" /><label> rhinorrhea</label><br />
                    <input type="checkbox" name="cough" /><label> cough</label><br />
                    <input type="checkbox" name="soreThroat" /><label> sore throat</label><br />
                    <input type="checkbox" name="chestTightness" /><label> chest tightness</label><br />
                    <input type="checkbox" name="variationInHeartRate" /><label> variation in heart rate</label><br />
                    <input type="checkbox" name="palpitations" /><label> palpitations</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>IV. Dermatologic/Teguments</b>{"  "}
                <input type="checkbox" name="dermatologicTeguments" onChange={toggleDermatologicTegumentsSymptoms} /> <label> Yes</label> <br />
                {dermatologicTeguments &&
                  <div onChange={handleDermatologicTegumentsSymptomsChange}>
                    <input type="checkbox" name="hyperhidrosis" /><label> hyperhidrosis</label><br />
                    <input type="checkbox" name="dermatologic" /><label> dermatologic</label><br />
                    <input type="checkbox" name="hairLoss" /><label> hair loss</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>V. Others</b>{"  "}
                <input type="checkbox" name="other" onChange={toggleOtherSymptoms} /> <label> Yes</label> <br />
                {other &&
                  <div onChange={handleOtherSymptomsChange}>
                    <input type="checkbox" name="lossOfAppetite" /><label> loss of appetite</label><br />
                    <input type="checkbox" name="alteredSmell" /><label> altered smell</label><br />
                    <input type="checkbox" name="bodyWeightChanges" /><label> body weight changes</label><br />
                    <input type="checkbox" name="myalgiaArthralgia" /><label> myalgia/arthralgia</label><br />
                    <input type="checkbox" name="alteredTaste" /><label> altered taste</label><br />
                    <input type="checkbox" name="otalgia" /><label> otalgia</label><br />
                    <input type="checkbox" name="ophtalmologic" /><label> ophtalmologic</label><br />
                    <input type="checkbox" name="swollenLymphNodes" /><label> swollen lymph nodes</label><br />
                    <input type="checkbox" name="dysphonia" /><label> dysphonia</label><br />
                    <input type="checkbox" name="fever" /><label> fever</label><br />
                    <input type="checkbox" name="musculoskeletalOther" /><label> musculoskeletal other</label><br />
                    <input type="checkbox" name="changesInMenstruation" /><label> changes in menstruation</label><br />
                    <input type="checkbox" name="urinarySymptoms" /><label> urinary symptoms</label><br />
                    <input type="checkbox" name="dysphagia" /><label> dysphagia</label><br />
                    <input type="checkbox" name="speechDisturbances" /><label> speech disturbances</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />
            </>
          }
          <br /><br />
          <button onClick={handleSubmit} type='submit'>Submit</button>

        </form>
      </>
  )
}

export default Survey