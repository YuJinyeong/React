function ReadContent(props) {
    return (
        <body>
            <article>
                <h2>{props.title}</h2>
                {props.desc}
            </article>
        </body>
    );
}

export default ReadContent;