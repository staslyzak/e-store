import React from 'react'
import './Header.sass'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import SearchBox from './SearchBox/SearchBox'
import DesktopAccount from './Account/DesktopAccount/DesktopAccount'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'
import ShoppingBasket from './ShoppingBasket/ShoppingBasket'
import logo from '../../logo.png'

const CustomAppBar = withStyles({
  root: {
    borderBottom: '1px solid #e5e5e5',
    boxSizing: 'border-box',
  }
})(AppBar)

const Header = ({ categories }) => {
  const desktopMenuData = categories.map((item, i) => <DesktopMenu key={i} title={item.title} menu={item.categories} />)
  return (
    <>
      <CustomAppBar position='fixed' className='Header' color='inherit' elevation={0}>
        <Toolbar className='toolbar'>
          <div className='leftSide'>
            <Link to='/' className='logoButton' children={<img src={logo} className='logo' alt='logo' />} />
            <Hidden smDown>
              <div className='desktopMenu' children={desktopMenuData} />
            </Hidden>
          </div>
          <div className='rightSide'>
            <SearchBox />
            <DesktopAccount />
            <ShoppingBasket />
            <MobileMenu />
          </div>
        </Toolbar>
      </CustomAppBar>
      <Toolbar />
    </>
  );
}

const mapStateToProps = state => ({
  categories: state.products.categories
})

export default connect(mapStateToProps, null)(Header)