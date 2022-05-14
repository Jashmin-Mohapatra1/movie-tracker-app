import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import './SingleContent.css';
import ContentModal from "../ContentModal/ContentModal";
const SingleContent =({
 id,
 poster_path,
 title,
 date,
 media_type,
 vote_average,
})=> {
  return(
  <ContentModal media_type={media_type} id={id}>
    <Badge 
    badgeContent={vote_average} color={vote_average>6?'primary':'secondary'}></Badge>

      <img className="poster" src={poster_path?`${img_300}/${poster_path}`:unavailable} alt={title}/>
      <b className="title">{title}</b>
      <span className="sunTitle">
        {media_type==='tv'?"Tv series":"movie"}
        <span className="sunTitle">{date}</span>
      </span>
      
    </ContentModal>
  );
  
  
};

export default SingleContent;