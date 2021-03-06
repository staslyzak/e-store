import React, {createRef} from "react";
import "./styles.sass";
import {withStyles} from "@material-ui/core/styles";
import {Search, Close} from "@material-ui/icons";
import {
  IconButton,
  Backdrop,
  InputBase,
  Box
} from "@material-ui/core";


const CustomBackdrop = withStyles({
  root: {
    top: 64,
    height: "100vh",
  }
})(Backdrop)


const DesktopSearchBox = ({
  value,
  clear,
  onTextChange,
  suggestions,
  search,
  active,
  setActive,
}) => {
  const input = createRef()

  const exitInput = () => {
    input.current.blur()
    clear()
  }

  const searchBtnClick = () => {
    if(input.current.value){
      search(input.current.value)
    }
  }

  const onKeyUp = (evt) => {
    if(evt.target.value.length){
      if(evt.keyCode === 13){
        search(evt.target.value)
        exitInput()
      }
    }

    if(evt.keyCode === 27) {
      exitInput()
    }
  }

  const backdropClick = () => {
    clear()
    setActive(false)
  }

  const onChange = (evt) => {
    setActive(!!evt.target.value)
    onTextChange(evt)
  }

  return (
    <Box className="DesktopSearchBox">
      <IconButton color="primary" onClick={searchBtnClick}>
        <Search />
      </IconButton>
      <InputBase
        name="search"
        placeholder="Search..."
        inputRef={input}
        value={value}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
      {!!value.length && (
        <IconButton color="inherit" onClick={clear}>
          <Close />
        </IconButton>
      )}
      <CustomBackdrop open={active} onClick={backdropClick} />
      <Box className="suggestions-wrap">
        {suggestions}
      </Box>
    </Box>
  )
}

export default DesktopSearchBox
