
function Athletics() {
    return (
        <div className="box-content mb-8 w-full">
            <h1 className="text-2xl p-2">Athletics</h1>

            <div className="flex text-blue-500 text-lg justify-center">
                <div>
                    <img src="images/Carrom Final.jpg" alt="Carrom poster" className="h-96 scale-125 my-28 rounded-2xl" />

                </div>
                <div className="ml-32 mt-20">
                    <div className="flex text-xl text-slate-200 justify-center mb-5">
                        <h2>Participation requirement:</h2>
                    </div>
                    <div className="font-sans text-xl text-bold text-slate-400 mb-5"><p>Team participation</p></div>

                    <div className="flex text-xl text-slate-200 justify-center mb-5">
                        <h2>Entry fees:</h2>
                    </div>
                    {/* <div className="font-sans text-lg text-bold text-slate-400">VJTI students - <span className="text-blue-500">180/-</span> <span className="text-pink-700">(this amount will be refunded within 5 working days, post participation)</span></div> */}
                    <div className="font-sans text-lg text-bold text-slate-400 ">
                        <div className="mb-4"> <span className="text-blue-500">9v9 : 3000/- (per Team)</span> <span className="text-pink-700">(exclusive of taxes)</span></div>
                        <div className="mb-4"> <span className="text-blue-500"> Rink(Boys) : 1600/-(per Team)</span> <span className="text-pink-700">(exclusive of taxes)</span></div>
                        <div className="mb-4"> <span className="text-blue-500">Rink(Girls) : 1400/- (per Team)</span> <span className="text-pink-700">(exclusive of taxes)</span></div>
                    </div>
                    <div className="flex text-xl text-slate-200 justify-center mb-5">
                        <h2>Prize pool:</h2>
                    </div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>9v9 : Rs. 20,000+Trophy</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Rink(Boys) : Rs. 8,000+Trophy</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Rink(Girls) : Rs. 7,000+Trophy</p></div>
                </div>

            </div>

            <div className="flex text-xl text-slate-200 justify-center">
                <h2>Register here:</h2>
            </div>

            <div className="flex justify-center cols-2 gap-4">
                <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
                    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScksw4nyuNPJ-lCyHcqa15CjCYPadP-N7kTI6ftaqWpkdUItw/viewform">Link</a>
                </button>
            </div>

            <button class="bg-transparent hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                <a target='_blank' href="">Event brochure</a>
            </button>

        </div>
    )
}

export default Athletics;