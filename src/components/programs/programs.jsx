import "./programs.css";
import ProgramsList from '../../data/progam';
import RightArrow from '../../assets/rightArrow.png';
function Programs() {
  return (
    <>
      <div className="Programs" id="programs">
        <div className="program_header">
          <span className="stroke-text">Explore our</span>
          <span>Programs</span>
          <span className="stroke-text">to Shape you</span>
        </div>

      <div className="program-catagory">
      {ProgramsList.map((program, index) => (
        <div className="catogary" key={index}>
          <div>{program.image}</div>
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="join-now">
            Join Now
            <span className="uniq"><img src={RightArrow}  alt="" /></span>
          </div>
        </div>
      ))}
      </div>
       
      </div>
    </>
  );
}
export default Programs;
