const parseType = (type) => {
  switch(type){
    case 'teaching':
      return <i class="fas fa-chalkboard-teacher" style="font-size: 50px;"></i>;
    case 'programming':
      return <i class="fas fa-laptop-code" style="font-size: 50px;"></i>;
    default:
      return <i class="fas fa-people-carry" style="font-size: 50px;"></i>;
  }
}

/** description is a list */
const Experience = ({
  type,
  date,
  website,
  name,
  location,
  jobTitle,
  descriptions,
}) => {
  <div className="job text-left">
    <div className="col-sm-1">
      {parseType(type)}
      {/* Change based on the type */}
    </div>
    <div className="col-sm-5 text-left">
      <span className="date">{date}</span>
      <br />
      <span className="company">
        <a href={website} target="_blank">
          {name}
        </a>
      </span>
      <br />
      <span className="location">{location}</span>
    </div>
    <div className="col-sm-6">
      <span className="title">{jobTitle}</span>
      <br />
      <span className="description">
        {descriptions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </span>
      <br />
      <br />
    </div>
  </div>;
};

module.exports = Experience;
