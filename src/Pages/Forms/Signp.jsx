import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Formbtn from './../../Components/Formbtn';
import { Link } from 'react-router-dom';
import { Apis, Posturl } from '../../Components/Apis';
import { RoleLink, ToastAlert } from './../../Components/Utility';
import { decodeToken } from 'react-jwt'

const Signp = () => {
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState(1)
  const [pass, setPass] = useState(false)
  const [pass2, setPass2] = useState(false)
  const Icon = pass ? FaEye : FaEyeSlash
  const Icon2 = pass2 ? FaEye : FaEyeSlash
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullname) return ('Fullname is required')
    if (!form.email) return ToastAlert('Email Address is required')
    if (!form.password) return ToastAlert('Password is required')
    if (!form.confirm_password) return ToastAlert('Confirm your Password')
    if (form.confirm_password !== form.password) return ToastAlert('Password(s) does not match')


    const data = {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      confirm_password: form.password,
    }

    setLoading(true)
    const res = await Posturl(Apis.user.Signup, data)
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
            <div className="text-center font-bold text-stone-800 text-3xl border-b pb-3 mb-3">Create Account</div>

            <div className="mb-4">
              <div className="">Fullname</div>
              <input type="text" name='fullname' value={form.fullname} onChange={handleForm} autoFocus className='input' />
            </div>

            <div className="mb-4">
              <div className="">Email Address</div>
              <input type="text" name='email' value={form.email} onChange={handleForm} autoFocus className='input' />
            </div>

            <div className="mb-4">
              <div className="">Password</div>
              <div onClick={() => setPass(!pass)} className="absolute top-8 right-3 cursor-pointer text-slate-600 text-xl"> <Icon /> </div>
              <input type={pass2 ? 'text' : 'password'} name='password' value={form.password} onChange={handleForm} autoFocus className='input' />
            </div>

            <div className="mb-4">
              <div onClick={() => setPass2(!pass2)} className="absolute top-8 right-3 cursor-pointer text-slate-600 text-xl"> <Icon2 /> </div>
              <div className="">confirm Password</div>
              <input type={pass2 ? 'text' : 'password'} name='confirm_password' value={form.confirm_password} onChange={handleForm} autoFocus className='input' />
            </div>

            <Formbtn title='Sign Up' loading={loading} />

            <div className="text-center mt-6 text-stone-800 text-sm">Already have an account?  <Link to='/login' className='text-indigo-700'>Login Account</Link></div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Signp
