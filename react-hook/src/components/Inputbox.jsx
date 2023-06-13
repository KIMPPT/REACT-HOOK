import React, { useState } from "react";
import { useFormInput } from "../hook/useFormInput";
export default function Inputbox() {
  //이름 받아오는 useforminput
  const nameProps = useFormInput("");
  //전화번호 받아오는 useinput
  const phoneProps = useFormInput("");

  //확정된 이름을 기록하는 state
  const [name,setName]=useState("");
  //클릭했을 때 이름값을 저장하는 함수
  const addName=()=>{
    setName(nameProps.value);
  }

  //텍스트area를 받아오는 useTextarea
  const textareaProps=useFormInput("");
  //email을 받아오는 useEmail
  const emailProps=useFormInput("");
  //날짜를 받아오는 useDate
  const dateProps=useFormInput("");
  //텍스트area값을 기록하는 state
  const [textarea,setTextarea]=useState("");
  //email값을 기록하는 state
  const [email,setEmail]=useState("");
  //date값을 기록하는 state
  const [date,setDate]=useState("");
  //클릭했을 때 저장하는 함수
  const addTextarea=()=>{
    setTextarea(textareaProps.value);
  }
  
  const addEmail=()=>{
    setEmail(emailProps.value);
  }
  
  const addDate=()=>{
    setDate(dateProps.value);
  }
  return <div>
    <label>이름 : 
        <input {...nameProps}/>
    </label>
    <br />
    <label>전화번호 : 
        <input {...phoneProps}/>
    </label>
    <button onClick={addName}>확인</button>
    <p>이름 : {name}</p>
    <br />
    {/*useFormInput을 사용하여 아래 태그의 값을 가져오세요 */}
    <textarea name="" id="" cols="30" rows="10"{...textareaProps}></textarea>
    <button
    onClick={addTextarea}>텍스트area</button>
    <br />
    <input type="email" name="" id="" {...emailProps}/>
    <button
    onClick={addEmail}>이메일</button>
    <br />
    <input type="date" name="" id="" {...dateProps}/>
    <button
    onClick={addDate}>날짜</button>
    <p>텍스트area내용 : {textarea}</p>
    <p>email내용 : {email}</p>
    <p>date내용 : {date}</p>
  </div>;
}
