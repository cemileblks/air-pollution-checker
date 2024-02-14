import actionsData from "../../assets/data/quality.json";

function Actions(index = 0) {

  return (
    <>
      <div>
        <h4>At risk individuals</h4>
        <p>{actionsData[index].at_risk_persons}</p>
      </div>
      <br />
      <div>
        <h4>General population</h4>
        <p>{actionsData[index].general_population}</p>
      </div>
    </>
  );
}
export default Actions;