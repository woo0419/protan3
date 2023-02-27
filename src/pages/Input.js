import React, {useState} from "react";

export default function Input(){
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        tel:'',
    });
    const {name, email, tel} = inputs;
    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]:value,
        });
    }
    return(
        <div>
            <h2>텍스트 입력시 state로 변경하고 배열 복제</h2>
            <div className="input_wrap">
                <div>
                    <label for="name">이름</label>
                    <input type="text" id="name" value={name} onChange={onChange} />
                </div>
                <div>
                    <label for="email">이메일</label>
                    <input type="email" id="email" value={email} onChange={onChange} />
                </div>
                <div>
                    <label for="tel">전화번호</label>
                    <input type="tel" id="tel" value={tel} onChange={onChange} />
                </div>
            </div>
            <div className="input_copy">
                <ul>
                    <li>이름 : {name}</li>
                    <li>이메일 : {email}</li>
                    <li>전화번호 : {tel}</li>
                </ul>
            </div>
        </div>
    )
}