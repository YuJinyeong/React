* 클래스형 vs 함수형
* props vs state
props (properties)는 (매개변수처럼) 부모 컴포넌트가 자식 컴포넌트에게 데이터 값'만' 전달하지만,
state는 컴포넌트 내부에서 (지역변수처럼) 선언하며 이벤트 값을 '생성/변경'할 수 있습니다.

* 상위 컴포넌트에서 props의 값을 하위 컨포넌트로 전달 = 하위컨텐츠에서는 props를 통해서 상위 컴포넌트로부터 값을 전달

* 하위 컴포넌트에서 상위 컴포넌트의 props 값을 변경하고 싶다면,
    1. 하위컴포넌트에 이벤트를 만들고
    2. 그 이벤트의 함수가 작동했을때 
    3. 그 함수에서 상위컴포넌트로 전달한 인자 값을 받아서 
    4. 상위 컴포넌트에서 setState 를 이용하여 state 의 값을 변경
    5. 그 값이 변환 됨에 따른 if 문을 통해 props에 값이 변경

* setState() 관련 자료
    https://leehwarang.github.io/2020/07/28/setState.html

* 이벤트 처리하기
    1. 이벤트 핸들러에 인자 전달하기
        1) 화살표 함수
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        2) Function.prototype.bind
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

    