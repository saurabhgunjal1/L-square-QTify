import React from "react";
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import './card.css'

export default function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { id, image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}` }>
              <div className="wrapper">
                <div>
                  
                <div className="card">
                  
                  <img src={image} alt="Album" loading="lazy" className="cardimg" />
                  <div className="chipdiv">
                    <Chip
                      label={`${follows} Follows`}
                      className="chip"
                      size="small"
                    />
                </div>
                  </div>
                  <div className="title">
                    <p className="ptag ">{title}</p>
                  </div>
                </div>

              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
          <div>
            
          <div className="card">
            
            <img src={image} alt="Album" loading="lazy" className="cardimg" />
            <div className="chipdiv">
              <Chip
                label={`${likes} likes`}
                className="chip"
                size="small"
              />
          </div>
            </div>
            <div className="title">
              <p className="ptag ">{title}</p>
            </div>
          </div>

        </div>
        );
      }
      default:
        return null;
    }
  };

  return getCard(type);
}
