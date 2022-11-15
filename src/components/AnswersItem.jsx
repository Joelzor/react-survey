// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

// const answersSet = {
//   swimming: "Swimming",
//   bathing: "Bathing",
//   chatting: "Chatting",
//   noTime: "I don't like to spend time with it",
// };

// function ItemsList({ list }) {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li>{answersSet[item]}</li>
//       ))}
//     </ul>
//   );
// }

// This is the main component being exported from this file
export default function AnswersItem(props) {
  const { ownerName, colourRating, spendTime, comments, id, editAnswer } =
    props;

  return (
    <li>
      <article className="answer">
        <h3>{ownerName || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colourRating}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          {/* <ItemsList list={spendTime} /> */}
          <span className="answer__line">{spendTime}</span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{comments}</span>
        </p>
        <button type="button" onClick={() => editAnswer(id)}>
          Edit
        </button>
      </article>
    </li>
  );
}
