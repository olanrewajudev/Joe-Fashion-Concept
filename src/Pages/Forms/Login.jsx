import { useState } from 'react'
import Layout from '../../Components/Layout'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Formbtn from '../../Components/Formbtn'
import { Link } from 'react-router-dom'
import { Apis, Posturl } from '../../Components/Apis'
import { ErrorAlert, RoleLink, ToastAlert } from '../../Components/Utility'
import {decodeToken} from 'react-jwt'


const Login = () => {
  const [loading, setLoading] = useState(false)
  const [pass, setPass] = useState(false)
  const Icon = pass ? FaEye : FaEyeSlash
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email) return ToastAlert('Email Address is required')
    if (!form.password) return ToastAlert('Password is required')

    const data = {
      email: form.email,
      password: form.password,
    }
    setLoading(true)
    const res = await Posturl(Apis.user.login, data)
    setLoading(false)
    if (res.status === 200) {
      ToastAlert(res.msg)
      const decoded = decodeToken(res.token)
      const findRole = RoleLink.find((item) => item.role === decoded.role)
      setTimeout(() => {
        window.location = `${findRole.url}`
      }, 2000)
    } else {
      return ErrorAlert(res.msg)
    }
  }
  return (
    <Layout>
      <div className="">
        <div className="w-11/12 mx-auto max-w-md bg-white p-4 shadow-xl rounded-lg my-10">
          <form onSubmit={handleSubmit}>
            <div className="text-center font-bold text-stone-800 text-3xl border-b pb-3 mb-3">Login Account</div>

            <div className="mb-4">
              <div className="">Email Address</div>
              <input type="text" name='email' value={form.email} onChange={handleForm} autoFocus className='input' />
            </div>

            <div className="mb-4">
              <div className="">Password</div>
              <div onClick={() => setPass(!pass)} className="absolute top-8 right-3 cursor-pointer text-slate-600 text-xl"> <Icon /> </div>
              <input type={pass ? 'text' : 'password'} name='password' value={form.password} onChange={handleForm} autoFocus className='input' />
            </div>


            <Formbtn title='Login' loading={loading} />

            <div className="text-center mt-6 text-stone-800 text-sm">Dont have an account?  <Link to='/signup' className='text-indigo-700'>Create Account</Link></div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
