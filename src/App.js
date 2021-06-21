import "./App.css";
import { connect } from "react-redux";
import Note from "./components/Note/Note";
import AddNote from "./components/AddNote/AddNote";

function App(props) {
  return (
    <div>
      <AddNote />
      {props.notes?.map((note, index) => {
        return <Note key={index} note={note} index={index} />;
      })}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    notes: state.noteReducer.notes,
  };
};

export default connect(mapStatetoProps, null)(App);
