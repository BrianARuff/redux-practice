export default function Note(props) {
  return <p key={props.index}>{props.note.name}</p>;
}
