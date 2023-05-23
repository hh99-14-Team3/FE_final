import React from 'react';
import { useState } from 'react';

function SignUp(props) {
    const SignUp = () => {
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        // const [openModal, setOpenModal] = useState(false)
      



        
    return (
        <div>
           
            <form>
                <label>이메일</label>
                <input></input>
                <label>이름</label>
                <input></input>
                
                <label>비밀번호</label>
                <input></input>
                <input></input>
                <button>이메일 인증하여 완료</button>

//             </form>
        </div>
    );
}

export default SignUp;

