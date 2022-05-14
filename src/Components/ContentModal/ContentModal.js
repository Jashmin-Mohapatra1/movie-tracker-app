import Backdrop from '@mui/material/Backdrop';
import React, { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./ContentModal.css";
import Carousel from "../Carousel/Carousel";
import axios from 'axios';
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";

export const api_key = "6ec8eaea73d892934034c3d8b4356794";


const useStyles = {
  paper:{
  position: 'absolute',
  width: "90%",
  height:"80%",
  border: "2px solid #282c34",
  padding: "1,1,3",
},
  modal:{
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    
  },
};

export default function ContentModal(
  {
    children,
    media_type,
    poster_path,
    id
  }) 

 {
  const classes = useState();
  const [open, setOpen] = React.useState(false);
  const[content, setContent] = useState();
  const[video,setVideo] = useState();
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const fetchData = async() => {
  const {data} = await axios.get( `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${api_key}&language=en-US`);
  
  console.log(data);
   setContent(data);
};

const fetchVideo = async() => {
  const {data} = await axios.get( `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${api_key}&language=en-US`);
  
  //console.log(data);
  setVideo(data.results[0]?.key)
};

useEffect(() => {
  fetchData();
  fetchVideo();
   // eslint-disable-next-line

},[])

return(
   
  <>
     <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inerit"
        onClick={handleOpen}
      >
        {children}
      </div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
          <div className={classes.paper}>
          <div className='ContentModal' >
                <img 
                   src={
                  content.poster_path
                  ?`${img_500}/${content.poster_path}`
                  :unavailable
                } 
                alt={content.name || content.title}
                className="ContentModal__portrait"
               
             /> 

            <img  
            src={
              content.backdrop_path
                ? `${img_500}/${content.backdrop_path}`
                : unavailableLandscape
              }
              alt={content.name || content.title}
            className="ContentModal__landscape"
            />


          <div className="ContentModal__about">
            <span className="ContentModal__title">
              {content.name || content.title} (
              {(
                content.first_air_date ||
                content.release_date ||
                "-----"
              ).substring(0, 4)}
              )
            </span>
            
            {content.tagline && (
              <h4 className="tagline"><i>//{content.tagline}//</i></h4>
            )}

            <span className="ContentModal__description">
              {content.overview}
            </span>
          <div>
          <Carousel id={id} media_type={media_type} />
          </div>
            

            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="primary"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${video}`} 
              >
              Watch the Trailer
            </Button>
         </div>
          </div>
          </div>
        )}
        </Fade>
      </Modal>
    
    </>
  );
      }
