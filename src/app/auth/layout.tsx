
const AuthLayout = ({ children }: any) => {
    return (
        <div>
            <nav className="font-semibold bg-red-500 text-white">
                this is login navbar
            </nav>
            {children}
        </div>
    )

}

export default AuthLayout