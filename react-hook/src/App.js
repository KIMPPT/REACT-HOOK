import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";
function App() {
  /*onchange와 연결되어 있는 값은 바로 사용하기보단 : 연결된 값은 언제든지 변경됨
  완전히 결정되었을 때 사용하는 값을 따로 두어서 쓰기 : name*/
  const [input, setInput] = useState();
  //input의 값을 확인버튼을 눌렸을 때 가져옴
  const [name, setName] = useState("홍길동");
  //name 값을 가져와서 name의 길이를 출력하는 함수(return)
  const countName = (name) => {
    console.log("이름의 길이를 계산하는 중입니다");
    return name.length;
  };
  //위의 함수가 onchange 함수 때문에 input의 값이 수정될때마다 실행된다
  //그러므로 return html에 바로 사용되는 함수의 값을 고정해서 쓰기 위해
  //useMemo 사용
  //화살표함수 셩태로 사용해서 함수의 값을 return 해줘야 한다
  //useMemo(함수,[의존할 값(state,props)])형태
  const memoCountName=useMemo(()=>countName(name),[name])

  //첫번째 글자만 가져오는 함수
  const takeWord=(name)=>{
    console.log("글자의 첫번째 문자를 들고 오는 중입니다")
    return name[0];
  }
  //useMemo를 통해서 name 값이 바뀔때만 실행 할 수 있게

  return (
    <div className="App">
      <h3>{input}</h3>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={()=>{setName(input)}}>확인</button>
      <p>이름의 길이 : {memoCountName}</p>
      <p>{takeWord("홍길동")}</p>
    </div>
  );
}

export default App;
