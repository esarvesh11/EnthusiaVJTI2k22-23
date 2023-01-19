
function Basketball() {
    return (
        <div className="box-content mb-8 w-full">
            <h1 className="text-2xl p-2">Basketball</h1>

            <div className="flex flex-wrap text-blue-500 text-lg justify-center">
                <div>
                    <img src="images/Basketball Final.jpg" alt="Basketball poster" className="h-96 scale-125 my-28 rounded-2xl" />

                </div>
                <div className="xl:ml-20 lg:ml-15 md:ml-12 mt-16">
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Participation requirement:</h2>
                    </div>
                    <div className="font-sans text-xl text-bold text-slate-400 mb-2 font-bold"><p>Team participation</p></div>

                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Entry fees:</h2>
                    </div>
                    {/* <div className="font-sans text-lg text-bold text-slate-400">VJTI students - <span className="text-blue-500">180/-</span> <span className="text-pink-700">(this amount will be refunded within 5 working days, post participation)</span></div> */}
                    <div className="font-sans text-lg text-bold text-slate-400 ">
                        <div className="mb-4"> <span className="text-blue-500">Boys 5v5 : Rs 2500/-</span> <span className="text-pink-700">(per Team)</span></div>
                        <div className="mb-4"> <span className="text-blue-500"> Girls 5v5 : Rs 1300/-</span> <span className="text-pink-700">(per Team)</span></div>
                        <div className="mb-4"> <span className="text-blue-500">Boys 3v3 : Rs 1100/-</span> <span className="text-pink-700">(per Team)</span></div>
                        <div className="mb-4"> <span className="text-blue-500">Girls 3v3 : Rs 675/-</span> <span className="text-pink-700">(per Team)</span></div>
                    </div>
                    <div className="flex text-xl text-slate-200 justify-center mb-2">
                        <h2>Prize pool:</h2>
                    </div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Boys 5v5 : Rs 18,000/-</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Girls 5v5 : Rs 10,000/-</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Boys 3v3 : Rs 8000/-</p></div>
                    <div className="font-sans text-lg text-bold text-slate-400 mb-4 font-extrabold"><p>Girls 3v3 : Rs 8000/-</p></div>
                </div>

            </div>


            <div className="flex text-xl text-slate-200 justify-center mb-2">
                <h2>Register here:</h2>
            </div>

            <div className="flex justify-center cols-2 gap-4 ">
                <button class="bg-black hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSd-CqWMw3WNKbZOndc9Sn0_Ew9Ne174SCI8ILmHsXnQOuqX7A/viewform">Link</a>
                </button>
                <button class="bg-black hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
                    <a target='_blank' href="https://drive.google.com/file/d/1ePskeeiTcCCoXLc3SxukoN9NcIh6kWAD/view">Rule Book</a>
                </button>
            </div>



        </div>
    )
}

export default Basketball;