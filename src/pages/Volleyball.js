
function Volleyball() {
    return (
        <div className="box-content mb-8 w-full">
            <h1 className="text-3xl p-2">Volleyball</h1>

            <div className="flex flex-wrap text-blue-500 text-lg justify-center">
                <div>
                    <img src="images/Volleyball.jpg" alt="Vollyball-poster" className="h-96 scale-125 my-28 rounded-2xl" />

                </div>
                <div className="xl:ml-20 lg:ml-15 md:ml-12 mt-20">
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Participation requirement:</h2>
                    </div>
                    <div className="font-sans text-xl text-bold text-slate-400 mb-2 font-bold"><p>Team participation</p></div>

                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Entry fees:</h2>
                    </div>
                    {/* <div className="font-sans text-lg text-bold text-slate-400">VJTI students - <span className="text-blue-500">180/-</span> <span className="text-pink-700">(this amount will be refunded within 5 working days, post participation)</span></div> */}
                    <div className="font-sans text-lg text-bold text-slate-400 font-extrabold ">
                        <div className="mb-4"> <span className="text-blue-500">Rs 1500/-</span> <span className="text-pink-700">(per Team)</span></div>
                    </div>
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Prize pool:</h2>
                    </div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Winner : Rs 10,000/-</p></div>
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Runnr ups:</h2>
                    </div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Rs 5000/-</p></div>
                </div>

            </div>


            <div className="flex text-xl text-slate-200 justify-center">
                <h2>Register here:</h2>
            </div>

            <div className="flex justify-center cols-2 gap-4 mt-2">
                <button class="bg-black hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                    <a class="no-underline " target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfn3mMGUji5i9mxPs6lZMIpC3K9G0SytVnHE3Wcuo_NtSci3w/viewform">Link</a>
                </button>

                <button class="bg-black hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                    <a class="no-underline" target='_blank' href="https://drive.google.com/file/d/1ePskeeiTcCCoXLc3SxukoN9NcIh6kWAD/view">Rule Book</a>
                </button>

            </div>

        </div>
    )
}

export default Volleyball;