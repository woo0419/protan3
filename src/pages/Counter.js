import React, {useState} from "react";
export default function Counter(){
        const[num, setNum] = useState(0);

        const increase = () => {
            setNum(num + 1);
        }
        const decrease = () => {
            setNum(num - 1);
        }
    return(
        <div>
            <h2>숫자 카운터 = 더하기와 빼기</h2>

            <div className="counter_wrap">
                <button onClick={increase}> +1 </button>
                <span>{num}</span>
                <button onClick={decrease}> -1 </button>
            </div>
        </div>
    )
}