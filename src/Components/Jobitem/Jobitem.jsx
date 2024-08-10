import "./Jobitem.css";

function Jobitem({ eachJob }) {
  const QualifactionsArray = [...eachJob.languages, ...eachJob.tools];

  return (
    <div 
    className="Jobitemdiv"
    style={eachJob.new == true ? { borderLeft: "solid 2px hsl(180, 29%, 50%)"} : null}
    >
      <img className="logo" src={eachJob.logo}></img>
      <div className="Jobinfo">
        <div className="FirstRowInfo">
          <label className="CompaniesName"> {eachJob.company} </label>
          {eachJob.new == true ? <p className="Newlabel">new</p> : null}
          {eachJob.featured == true ? (
            <p className="Featuredlabel">featured</p>
          ) : null}
        </div>
        <p className="Positions">{eachJob.position}</p>
        <ul className="LastRowInfo">
          <li> {eachJob.postedAt} </li>
          <li> {eachJob.contract} </li>
          <li> {eachJob.location} </li>
        </ul>
      </div>
      <div className="Qualifactions">
        {QualifactionsArray.map((name , index) => {
          return <button key={index}> {name} </button>;
        })}
      </div>
    </div>
  );
}

export default Jobitem;
