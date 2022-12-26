import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ccd6f6">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#112240', color: '#ccd6f6' }}
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title" >
            Valjevo Gymnasium - Social Sciences
          </h5>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#112240', color: '#ccd6f6' }}
          date="2021 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Singidunum University  - Software and Data Engineering
          </h5>

        
           <p>Bachelor's Degree</p>
          

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "red", color: "#fff" }}
          contentStyle={{ background: '#112240', color: '#ccd6f6' }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Data Processing Analyst - Ipsos Strategic Marketing
          </h5>
          <p> <ArrowRightIcon color="secondary"/> Interpreting data, Analyzing statistical results in SPSS.
            <hr/> <ArrowRightIcon color="secondary"/>Reporting activites, preparing excel/word reports and
            power point for internal and external clients.
          </p>
        </VerticalTimelineElement>     
      </VerticalTimeline>
    </div>
  );
}

export default Experience;