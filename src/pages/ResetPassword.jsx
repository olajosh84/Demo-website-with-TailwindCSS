const ResetPassword = () => {
    return (
        <section className="container mx-auto my-16 w-[95vw] bg-white shadow-2xl p-4 max-w-[450px] rounded-xl">
            <h1 className="text-2xl capitalize text-center mb-8">reset password</h1>
            <form>
                <label className="block capitalize font-semibold my-2">username</label>
                <input className="form-control" type="text" placeholder="Username" />
                <button className="my-4 shadow-lg shadow-slate-400 block border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit">submit</button>
                
            </form>
            {/*<form>
                <label className="block capitalize font-semibold my-2">password</label>
                <input className="form-control" type="password" placeholder="Enter new password" />
                <label className="block capitalize font-semibold my-2">retype password</label>
                <input className="form-control" type="text" placeholder="Retype password" />
                <button className="my-4 shadow-lg shadow-slate-400 block border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit">reset password</button>
    </form>*/}
        </section>
    )
}

export default ResetPassword;