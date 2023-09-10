import { toast } from 'react-toastify'


export const ToastAlert = (text) => {
    return (
        toast.success(text, {
            position: "top-center",
            autoClose: 5500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )
}


export const ErrorAlert = (text) => {
    return (
        toast.error(text, {
            position: "top-center",
            autoClose: 5500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    )
}


export const RoleLink = [
    {
        role: 'user',
        url: '/'
    },
    {
        role: 'Admin',
        url: '/auth/admin'
    },
]