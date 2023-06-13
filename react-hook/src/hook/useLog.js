import { useEffect } from "react";

//firebase의 값을 redux에 넣어서 쓰거나
//state에 넣어서 쓸 수 있다
export default function useLog(){
    useEffect(()=>{
        console.log("컴포넌트가 생성되었습니다")
    },[])
    useEffect(()=>{
        //firebase에서 값을 가져옴
        //redux에 값 저장 : useDispatch이용
        //state에 값 저장 : useState 이용 > return을 통해 내보내줌
    },[])
}