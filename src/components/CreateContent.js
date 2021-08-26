function CreateContent(props) {
    return (
        <body>
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                        console.log('submit!!!!!');
                    }}>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        </body>
    );
}

export default CreateContent;