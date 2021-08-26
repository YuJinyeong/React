function TOC(props) {
  var lists = [];
  var data = props.data;
  var i = 0;
  // console.log('TOC Rendering');
  // console.log(data);
  while (i < data.length) {
    lists.push(<li><a
      href={"/content/" + data[i].id}
      data-id={data[i].id}
      onClick={(e) => {
        e.preventDefault();
        props.onChangePage(e.target.dataset.id);
      }}
    >{data[i].title}</a></li>);
    i = i + 1;
  }
  return (
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  );
}

export default TOC;