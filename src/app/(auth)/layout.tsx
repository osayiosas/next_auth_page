const  AuthLayout = ({ children }: any) => {
    return (
        <div>
            <nav className="font-semibold bg-red-500 text-white">
                this is a login layout
            </nav>
            {children}
        </div>
    )
}

export default AuthLayout