import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, siteUrl, tag }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="d-flex flex-column gap-4">
        <h4>{tag}</h4>
        <div className="proj-imgbx">
          <a href={siteUrl} target="_blank">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;
