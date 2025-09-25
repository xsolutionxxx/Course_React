/* function WhoAmI(props) {
  return (
    <div>
      <h2>
        My name is {props.name}, surname - {props.surname}
      </h2>
      <a href={props.link}>My profile</a>
    </div>
  );
}

export default WhoAmI;*/

function WhoAmI126({ name, surname, link }) {
  return (
    <div>
      <h2>
        {/* My name is {name}, surname - {surname}
        My name is {name.first}, surname - {surname} */}
        My name is {name()}, surname - {surname}
      </h2>
      <a href={link}>My profile</a>
    </div>
  );
}

export default WhoAmI126;
