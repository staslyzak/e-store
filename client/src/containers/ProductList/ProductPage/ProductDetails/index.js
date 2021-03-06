import React from "react"
import "./styles.sass"
import {
  Typography,
  Hidden
} from "@material-ui/core"


const ProductDetails = ({
  title,
  description,
  images = [],
}) => {
  const descriptionImages = (count) => (
    Array.from(Array(count), (_, i) => (
      <div
        key={i}
        className={`ProductDetails-photo-partical p${++i}`}
        style={{backgroundImage: `url(${images[0]})` }}
      />
    ))
  )

  return (
    <div className="ProductDetails">
      <Hidden mdUp>
        <div>
          <Typography color='textSecondary'>
            {description}
          </Typography>
        </div>
      </Hidden>

      <Hidden smDown>
        <div className="ProductDetails-desktop">
          <div className="ProductDetails-photo">
            {descriptionImages(4)}
          </div>
            <Typography
              className="ProductDetails-desktop-title"
              variant="h3"
              align="right"
              paragraph
            >
              {title}
            </Typography>
            <div className="ProductDetails-desktop-body" >
              <Typography color='textSecondary'>
                {description}
              </Typography>
            </div>
        </div>
      </Hidden>
    </div>
  )
}

export default ProductDetails
