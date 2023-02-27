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
          Please submit this survey. 설문을 채워주세요.
        </div>
        <form className='surveyForm'>
          <span><b>
            1. Gender 성별
          </b>
          </span>
          <br />
          <div onChange={handleChange}>
            <input type="radio" name="gender" value="male" />
            <label> Male 남성</label><br />
            <input type="radio" name="gender" value="female" />
            <label> Female 여성</label>
          </div>

          <br /><br />

          <span><b>
            2. International Age 만 나이
          </b>
          </span>
          <br />
          &nbsp;
          &nbsp;
          <select name='age' onChange={handleChange}>
            <option value="">--age 나이--</option>
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
            3. Vaccination Status 백신 접종
          </b>
          </span>
          <br />
          <div onChange={handleChange}>
            <input type="radio" name="vaccination" value="0" /> <label> None 미접종</label><br />
            <input type="radio" name="vaccination" value="1" /> <label> 1st dose 1차</label><br />
            <input type="radio" name="vaccination" value="2" /> <label> 2nd dose 2차</label><br />
            <input type="radio" name="vaccination" value="3" /> <label> 3rd dose 3차</label><br />
            <input type="radio" name="vaccination" value="4" /> <label> 4th dose 4차</label>
          </div>
          <br /><br />

          <span><b>
            4. COVID test expereince 코로나 검사 경험여부
          </b>
          </span>{" "} <br/>
          <input type="checkbox" name='test' onChange={toggleTestResult}></input>{" "}<label> Yes 경험 있음</label> <br />
          {
            test &&
            <div onChange={toggleWhenPositive}>
            </div>
          }
          {
            testResult === "positive" &&
            <select name='whenPositive' onChange={handleChange}>
              <option value="">---select when you diagnosed positive/양성 판정 날짜---</option>
              <option value="1">1 week ago 1주전</option>
              <option value="2">2 weeks ago 2주전</option>
              <option value="4">1 month ago 1달전</option>
              <option value="8">2 months ago 2달전</option>
              <option value="12">3 months ago 3달전</option>
              <option value="16">4 months ago 4달전</option>
              <option value="17"> more than 4 months ago 4달 이상</option>
            </select>
          }
          <br /><br />




          <span><b>
            5. Long COVID Experience 코로나 후유증 경험여부
          </b>
          </span>
          <br />
          <input type="checkbox" name="longCOVID" onChange={toggleLongCOVID} /> <label> Yes 경험 있음</label>
          {" "}<br />
          {
            longCOVID &&
            <>
              <select name="whenLongCOVID" onChange={handleChange}>
                <option value="">---When 언제(approximately 대략)---</option>
                <option value="1">currently experiencing 현재 경험 중</option>
                <option value="2">2 weeks ago 2주 전</option>
                <option value="3">3 weeks ago 3주 전</option>
                <option value="4">1 months ago 1달 전</option>
                <option value="8">2 months ago 2달 전</option>
                <option value="12">3 months ago 3달 전</option>
                <option value="16"> more than 4 months ago 4달 전 이상</option>
              </select><br />
              <select name="lastingLongCOVID" onChange={handleChange}>
                <option value="">---lasting period 지속 기간 (approximately 대략)---</option>
                <option value="2">for 2 weeks 2주</option>
                <option value="4">for 4 weeks 4주</option>
                <option value="6">for 6 weeks 6주</option>
                <option value="8">for 8 weeks 8주</option>
                <option value="12">for 12 weeks 12주</option>
                <option value="13">more than 12 weeks 12주 이상</option>
              </select>
              <br /><br />

              <hr></hr>
              <div style={{ fontSize: "1.2rem" }}>Symptoms 증상</div> <br />
              <span style={{ color: "red" }}>
                **Please select ALL the closest symptoms that you are experiencing** <br />
                **해당되는 증상들을 모두 선택해주세요**
                <br /><br/>
              </span>
              <span>
                <b>I. Neuropsychiatric 신경 및 정신적</b>{"  "}

                <input type="checkbox" name="neuropsychiatric" onChange={toggleNeuropsychiatricSymptoms} /> <label> Yes 경험 있음</label> <br />
                {
                  neuropsychiatric &&

                  <div onChange={handleNeuropsychiatricSymptomsChange}>
                    <input type="checkbox" name="mood" /><label> mood 기분변화</label> <br />
                    <input type="checkbox" name="fatigue" /><label> fatigue 피로</label> <br />
                    <input type="checkbox" name="sleepDisorder" /><label> sleep disorder 수면장애</label> <br />
                    <input type="checkbox" name="headache" /><label> headache 두통</label> <br />
                    <input type="checkbox" name="cognition" /><label> cognition 인식/인지</label> <br />
                    <input type="checkbox" name="dizziness" /><label> dizziness 어지러움</label> <br />
                    <input type="checkbox" name="neurologicalAbnormalities" /><label> neurological abnormalities 신경계 질환</label> <br />
                    <input type="checkbox" name="balanceProblems" /><label> balance problems 균형 기능 장애</label>
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>II. Gastrointestinal 위장 및 소화기관</b>{"  "}
                <input type="checkbox" name="nastrointestinal" onChange={toggleNastrointestinalSymptoms} /> <label> Yes 경험 있음</label> <br />
                {nastrointestinal &&
                  <div onChange={handleNastrointestinalSymptomsChange}>
                    <input type="checkbox" name="abdominalPain" /><label> abdominal pain 복통</label><br />
                    <input type="checkbox" name="constipation" /><label> constipation 변비</label><br />
                    <input type="checkbox" name="diarrhea" /><label> diarrhea 설사</label><br />
                    <input type="checkbox" name="vomitingNausea" /><label> vomiting/nausea 구토/메스꺼움</label><br />
                  </div>
                }
                <br />

              </span>
              <br /><br />

              <span>
                <b>III. Cardiorespiratory 심장 및 호흡기</b>{"  "}
                <input type="checkbox" name="cardiorespiratory" onChange={toggleCardiorespiratorySymptoms} /> <label> Yes 경험 있음</label> <br />
                {cardiorespiratory &&
                  <div onChange={handleCardiorespiratorySymptomsChange}>
                    <input type="checkbox" name="respiratorySymptoms" /><label> respiratory symptoms 호흡질환</label><br />
                    <input type="checkbox" name="sputumNasalCogestion" /><label> sputum/nasal cogestion 가래/코막힘</label><br />
                    <input type="checkbox" name="orthostaticIntolerance" /><label> orthostatic intolerance 기립성 불내증</label><br />
                    <input type="checkbox" name="exerciseIntolerance" /><label> exercise intolerance 운동불내성</label><br />
                    <input type="checkbox" name="chestPain" /><label> chest pain 가슴 통증</label><br />
                    <input type="checkbox" name="rhinorrhea" /><label> rhinorrhea 콧물</label><br />
                    <input type="checkbox" name="cough" /><label> cough 기침</label><br />
                    <input type="checkbox" name="soreThroat" /><label> sore throat 목아픔</label><br />
                    <input type="checkbox" name="chestTightness" /><label> chest tightness 가슴 답답함</label><br />
                    <input type="checkbox" name="variationInHeartRate" /><label> variation in heart rate 심박동수 변이</label><br />
                    <input type="checkbox" name="palpitations" /><label> palpitations 심계 항진 (두근거림)</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>IV. Dermatologic/Teguments 피부/외피</b>{"  "}
                <input type="checkbox" name="dermatologicTeguments" onChange={toggleDermatologicTegumentsSymptoms} /> <label> Yes 경험 있음</label> <br />
                {dermatologicTeguments &&
                  <div onChange={handleDermatologicTegumentsSymptomsChange}>
                    <input type="checkbox" name="hyperhidrosis" /><label> hyperhidrosis 다한증</label><br />
                    <input type="checkbox" name="dermatologic" /><label> dermatologic 피부 질환</label><br />
                    <input type="checkbox" name="hairLoss" /><label> hair loss 머리 빠짐</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />

              <span>
                <b>V. Others 기타 증상</b>{"  "}
                <input type="checkbox" name="other" onChange={toggleOtherSymptoms} /> <label> Yes 경험 있음</label> <br />
                {other &&
                  <div onChange={handleOtherSymptomsChange}>
                    <input type="checkbox" name="lossOfAppetite" /><label> loss of appetite 식욕부진</label><br />
                    <input type="checkbox" name="alteredSmell" /><label> altered smell 후각 변화</label><br />
                    <input type="checkbox" name="bodyWeightChanges" /><label> body weight changes 체중 변화</label><br />
                    <input type="checkbox" name="myalgiaArthralgia" /><label> myalgia/arthralgia 근육통/관절통</label><br />
                    <input type="checkbox" name="alteredTaste" /><label> altered taste 미각 변화</label><br />
                    <input type="checkbox" name="otalgia" /><label> otalgia 귀 통증</label><br />
                    <input type="checkbox" name="ophtalmologic" /><label> ophtalmologic 눈 질병</label><br />
                    <input type="checkbox" name="swollenLymphNodes" /><label> swollen lymph nodes 부은 림프절</label><br />
                    <input type="checkbox" name="dysphonia" /><label> dysphonia 발성 장애</label><br />
                    <input type="checkbox" name="fever" /><label> fever 열</label><br />
                    <input type="checkbox" name="musculoskeletalOther" /><label> musculoskeletal other 근골격과 관련된 다른 질환</label><br />
                    <input type="checkbox" name="changesInMenstruation" /><label> changes in menstruation 생리불순</label><br />
                    <input type="checkbox" name="urinarySymptoms" /><label> urinary symptoms 비뇨기 질환</label><br />
                    <input type="checkbox" name="dysphagia" /><label> dysphagia 삼킴곤란(삼키는데 어려움을 겪는 증상)</label><br />
                    <input type="checkbox" name="speechDisturbances" /><label> speech disturbances 말소리 장애</label><br />
                  </div>
                }
                <br />
              </span>
              <br /><br />
            </>
          }
          <br /><br />
          <button onClick={handleSubmit} type='submit'>Submit 제출</button>

        </form>
      </>
  )
}

export default Survey