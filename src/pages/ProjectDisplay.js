import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";
import  GitHubIcon from "@material-ui/icons/GitHub";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function ProjectDisplay() {

  const {id} = useParams();
  const project = projectList[id];
  const navigate = useNavigate();



  return  (
  <div className='project'>

    <h1>{project.name}</h1>

      <div className="buttons">
          <ArrowCircleLeftIcon onClick= {() => {navigate(project.navigateBack);}} className="backButton"/>
          <ArrowCircleRightIcon onClick= {() => {navigate(project.navigateNext);}} className="nextButton"/>
      </div>



      <video controls   src={project.video} type="video/mp4" />

    <p>


       <b> Skills : </b> {project.skill}
    </p>
      <a
          href= {project.link}
          target="_blank"
          rel="noreferrer"
      >
          <GitHubIcon
          />
      </a>


    </div>



);
  
}

export default ProjectDisplay