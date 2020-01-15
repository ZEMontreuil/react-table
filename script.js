const container = document.querySelector("#root");

ReactDOM.render(
  <MyTable />, container
)

function MyRowJill(props) {
  return (<tr>
  <td>Jill</td>
  <td>Smith</td>
  <td>50</td>
  </tr>)
}

function MyRowEve(props) {
  return (<tr>
  <td>Eve</td>
  <td>Jackson</td>
  <td>94</td>
</tr>)
}

function MyRowBob(props) {
  return (<tr>
    <td>Bob</td>
    <td>Ross</td>
    <td>32</td>
  </tr>);
}


function MyRowHeaders(props) {
  return (
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>);
}

function MyRow(props) {
  // reuse this a billion times
  return (<tr>
    
  </tr>);
}

function MyTable(props) {
  return (
  <table>
    <tbody>
      <MyRowHeaders />
      <MyRowJill />
      <MyRowEve />
      <MyRowBob />
      <tr>
        <td>Geoffrey</td>
        <td>Chaucer</td>
        <td>677</td>
      </tr>
    </tbody>
    </table>
  );
}