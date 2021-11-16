import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import logo from '../images/logo.png'
import { fetchCategory } from '../redux/category/category.actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const [keyword, setKeyword] = useState('')

	const { categories } = useSelector(({ category }) => ({
		categories: category.categories
	}))

	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(fetchCategory())
	}, [])

	const search = useCallback(() => {
		if (keyword !== '') {
			history.push(`/search?keyword=${keyword}`)
		}
	}, [keyword])

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__top'>
					<div className='header__logo'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
					</div>
					<div className='header__search'>
						<input
							type='text'
							className='header__search__input'
							placeholder='Nhập từ khóa'
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<Button onClick={search}>
							<FontAwesomeIcon icon={faSearch} />
						</Button>
					</div>
				</div>
				{/* <div className='header__bot'>
					<ul className='header__bot__list'>
						<li
							className={`header__bot__list__item ${
								pathname.includes('category') ? '' : 'active'
							}`}
						>
							<Link to={`/`}>Home</Link>
						</li>
						{categories &&
							categories.length > 0 &&
							categories.map((item) => (
								<li
									className={`header__bot__list__item ${
										pathname.includes(item._id) ? 'active' : ''
									}`}
									key={item._id}
								>
									<Link to={`/category/${item._id}`}>
										{item.category}
									</Link>
								</li>
							))}
					</ul>
				</div> */}
			</div>
		</header>
	)
}

export default Header
