import React, {useEffect, useState} from 'react';

const Input = () => {
    
    const User={
        email : 'abcd@gmail.net',
        pass : 'abcd1234&*'
    }
    const[email, setEmail] =useState('');
    const[pass, setPass] =useState('');
    const[emailValid, setEmailValid]=useState(false);
    const[passValid, setPassValid]=useState(false);
    const[notAllow, setNotAllow]=useState(true);
    const emailChange = (e)=>{
        setEmail(e.target.value);
        //email,password 정규표현식
        const regex= /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
          } else {
            setEmailValid(false);
          }
    }
    const passChange = (e)=>{
        setPass(e.target.value);
        const regex= /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pass)) {
          setPassValid(true);
        } else {
          setPassValid(false);
        }
    }

    const clickConfirm = () => {
        if(email === User.email && pass===User.pass){
            alert('로그인에 성공');
        }else if(email === User.email && pass!==User.pass){
            alert('비밀번호 틀림');
        }else{
            alert('등록되지 않은 회원');
        }
    }

    useEffect(() => {
        if(emailValid && passValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, passValid]);

    return(
        <div className='page'>
            <div className='subTitle'>
                로그인 페이지
            </div>
            <div className='cont_wrap'>
                <div className='inTitle'>이메일주소</div>
                <div className='inputItem'>
                    <input className='input' type="text"
                    value={email}
                    onChange={emailChange}
                     placeholder='abc@naver.com' />
                </div>
                <div className='errMassage'>
                    {
                        !emailValid && email.length > 0 && (
                            <div>이메일 @ 형식에 맞게 입력해주세요</div>
                        )
                    }
                    
                </div>
                <div className='inTitle'>비밀번호</div>
                <div className='inputItem'>
                    <input className='input' type="password"
                    value={pass}
                    onChange={passChange}
                     placeholder='영문, 숫자, 특수문자 8자허용' />
                </div>
                <div className='errMassage'>
                    {
                        !passValid && pass.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
                        )
                    }
                    
                </div>
            </div>
            <div >
                <button onClick={clickConfirm} className='btn' disabled={notAllow}>확인</button>
            </div>

            
        </div>
    );
};

export default Input;