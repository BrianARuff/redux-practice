import { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

function AddNote(props) {
  const [formData, setFormData] = useState({ name: "" });

  const handleInput = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    props.addNote(formData);
  };

  return (
    <form>
      <div>
        <label>Add Note</label>
        <input onChange={handleInput} name="name" />
      </div>
      <button onClick={handleAddNote} type="submit">
        Submit Note
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addNote,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(AddNote);
