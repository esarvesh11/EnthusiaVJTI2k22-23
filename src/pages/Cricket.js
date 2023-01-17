
function Cricket() {
    return (
        <div className="box-content mb-8 w-full">
            <h1 className="text-2xl p-2">Cricket</h1>

            <div className="flex flex-wrap text-blue-500 text-lg justify-center">
                <div>
                    <img src="images/Cricket Final.jpg" alt="Cricket poster" className="h-96 scale-125 my-28 rounded-2xl" />

                </div>
                <div className="xl:ml-20 lg:ml-15 md:ml-12 mt-24">
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Participation requirement:</h2>
                    </div>
                    <div className="font-sans text-xl text-bold text-slate-400 mb-2"><p>Team participation</p></div>

                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Entry fees:</h2>
                    </div>
                    {/* <div className="font-sans text-lg text-bold text-slate-400">VJTI students - <span className="text-blue-500">180/-</span> <span className="text-pink-700">(this amount will be refunded within 5 working days, post participation)</span></div> */}
                    <div className="font-sans text-lg text-bold text-slate-400 ">
                        <div className="mb-4"> <span className="text-blue-500">Tennis : Rs 3500/-</span> <span className="text-pink-700">(per Team)</span></div>
                        <div className="mb-4"> <span className="text-blue-500"> Leather : Rs 7500/-</span> <span className="text-pink-700">(per Team)</span></div>
                    </div>
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Prize pool:</h2>
                    </div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Tennis : Rs 18,000 + Trophy</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Leather : Rs 24,000 + Trophy</p></div>
                </div>

            </div>

            <div className="flex text-xl text-slate-200 justify-center">
                <h2>Register here:</h2>
            </div>

            <div className="flex justify-center cols-2 gap-4 mt-2">
                <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
                    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSd_NM_vMhnmD98KjztrZNXmku4CoHrObEmaYEZxvYLVZTcHJg/viewform">Cricket (Leather Ball) </a>
                </button>
                <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
                    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSflqqMFIVansfQEcaKPqBQK9wiuXg01aoQRUvqlQuM3xns5Pg/viewform">Cricket (Tennis Ball)</a>
                </button>
            </div>
            <button class="bg-transparent hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                <a target='_blank' href="">Event brochure</a>
            </button>

        </div>
    )
}

export default Cricket;