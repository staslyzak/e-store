import React from "react";
import "./styles.sass";
import {Link} from "react-router-dom";
import {arrayFromNumber} from "utils";
import {Typography, IconButton} from "@material-ui/core";
import {Clear} from "@material-ui/icons";
import CustomSelect from "../CustomSelect";


const CartItem = ({
  data,
  currency,
  onChangeQty,
  onChangeSize,
  onDelete,
}) => {
  const {
    url,
    img,
    title,
    gender,
    color,
    size,
    sizes,
    availability,
    qty,
    price
  } = data

  return (
    <div className="ProductToBuy">
      <div className="ProductToBuy-content">
        <Link to={url} className="ProductToBuy-content-img">
          <img src={img} alt="img" />
        </Link>

        <div className="ProductToBuy-content-data">
          <Typography className="ProductToBuy-content-data-title">
            <Link to={url} children={title} />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Gender: {gender}'s
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Color: {color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Size: <CustomSelect
              data={sizes}
              primary={size}
              onChangeData={data}
              onChange={(data) => onChangeSize(data)}
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Quantity: <CustomSelect
              data={arrayFromNumber(availability)}
              primary={qty}
              onChangeData={data}
              onChange={(data) => onChangeQty(data)}
            />
          </Typography>
        </div>

        <div className="ProductToBuy-controls">
          <IconButton
            size="small"
            onClick={() => onDelete(data)}
          >
            <Clear fontSize="small" />
          </IconButton>
          <Typography variant="body2">
            {currency}{data.qty * price}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default CartItem
