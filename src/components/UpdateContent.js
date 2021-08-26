import React, { useState } from 'react';

function UpdateContent(props) {
    const [inputs, setInputs] = useState({
        id: props.data.id,
        title: props.data.title,
        desc: props.data.desc
    });
    const { id, title, desc } = inputs; // 비구조화 할당을 통해 값 추출
    // const [title, setTitle] = useState(props.data.title);
    // const [desc, setDesc] = useState(props.data.desc);

    function inputFormHandler(e) {
        const { value, name } = e.target; //e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,   // 기존의 input 객체를 전개 구문으로 펼쳐서 /복사
            [name]: value
        });    // name 키를 가진 값을 value 로 설정
    }

    return (
        <body>
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.onSubmit(
                            inputs.id,
                            inputs.title,
                            inputs.desc
                        );
                        console.log('submit!!!!!');
                    }}>
                    <input type="hidden" name="id" value={id}></input>
                    <p>
                        <input type="text" name="title" placeholder="title" value={title} onChange={e => {
                            console.log(e.target.value);
                            inputFormHandler(e);
                            // setTitle(e.target.value);
                        }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description" value={desc} onChange={e => {
                            console.log(e.target.value);
                            inputFormHandler(e);
                            // setDesc(e.target.value);
                        }}></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        </body>
    );
}

export default UpdateContent;