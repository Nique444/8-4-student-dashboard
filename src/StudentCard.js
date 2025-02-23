import { useState } from "react";

const StudentCard = ({
  names,
  profilePhoto,
  username,
  dob,
  certifications,
  codewars,
  cohort,
}) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const checkCert = () => {
    if (
      certifications.resume === true &&
      certifications.linkedin === true &&
      certifications.github === true &&
      certifications.mockInterview === true
    ) {
      return <p>On track to Graduate</p>;
    }
  };


  const show = () => {
    if (showMore === true) {
      return (
        <div>
          <section>
            <h3>Codewars:</h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p>
              Percent of Goal Achieved:{" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed()}
              %
            </p>
          </section>
          <section>
            <h3>Scores</h3>
            <p>Assignments: {cohort.scores.assignments * 100}%</p>
            <p>Projects: {cohort.scores.projects * 100}%</p>
            <p>Assessments: {cohort.scores.assessments * 100}%</p>
          </section>
          <section>
            <h3>Certifications</h3>
            <p>Resume {certifications.resume ? "✓" : "x"}</p>
            <p>linkedin {certifications.linkedin ? "✓" : "x"}</p>
            <p>Mock Interview {certifications.mockInterview ? "✓" : "x"}</p>
            <p>GitHub {certifications.github ? "✓" : "x"}</p>
          </section>
        </div>
      );
    }
  };

  // console.log(dob)
  const bday = new Date(dob);

  return (
    <div className="studentCard">
      <img src={profilePhoto}  alt="" width="50px"></img>
      <h3>
        Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}
      </h3>
      <p>{checkCert()}</p>
      <p>Email: {username}</p>
      <p>Birthday: {" "} {new Intl.DateTimeFormat("en-US" , { dateStyle: "long"}).format(bday)}</p>
      <br></br>
      <button className="showMore" onClick={handleClick}>Show more...</button>
      <section>{show()}</section>
    </div>
  );
};

export default StudentCard;