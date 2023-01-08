import React from 'react';

function Events() {
  return (
    <div className="box-content w-full py-10">
      <div class="">

        <div class="gap-8 max-w-2xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-extrabold uppercase  text-gray-200 tracking-wide mb-4">MAIN FEST <span class='text-blue-400'>EVENTS</span> 2k22-23</h2>
        </div>
        {/* displaying cards  */}
        <div class="grid sm:grid-cols-1 sm:justify-center md:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-10 xl:grid-cols-4 justify-center px-20 transition-all l">
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/football"> <img class="h-80 hover:brightness-125 rounded-2xl scale-150 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='images/Football Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/basketball"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 hover:shadow-xl hover:shadow-blue-500/30 duration-300 ease-in-out" src='images/Basketball Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class=" rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/cricket"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 hover:shadow-xl hover:shadow-indigo-500/30 duration-300 ease-in-out" src='images/Cricket Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/throwball"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Throwball Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/vollyball"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Volleyball Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/khokho"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Kho-Kho Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/kabadi"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Kabaddi Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/swmming"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Swimming Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/tabletennis"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Table Tennis Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/chess"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Chess Final.jpg' alt="couldnt load" /></a>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer my-24" >
            <a href="/carrom"><img class="h-80 hover:brightness-125 rounded-2xl scale-150 duration-300 ease-in-out" src='images/Carrom Final.jpg' alt="couldnt load" /></a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Events;
