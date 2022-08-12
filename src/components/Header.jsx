import { FaSignInAlt, FaSignOutAlt, FaUser, FaEdit } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { edituser, logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onEdit = () => {
        dispatch(edituser())
    }

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <a href='/#' className='btn-logout' onClick={onLogout}>
                                    <FaSignOutAlt /> Logout
                            </a>
                        </li>
                    </>
                ) :
                    (
                        <>
                            <li>
                                <Link to='/login'>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <FaUser /> Register
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </header>
    )
}

export default Header