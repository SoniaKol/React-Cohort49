import PropTypes from "prop-types";

const Person = ({ person }) => {
  return (
    <>
      {person && (
        <ul>
          <li>{person.firstName}</li>
          <li>{person.lastName}</li>
          <li>{person.email}</li>
        </ul>
      )}
    </>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
