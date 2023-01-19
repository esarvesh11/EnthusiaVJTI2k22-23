import React from 'react';

function Events() {
  return (
    <div className="box-content w-full py-10">
      <div class="">

        <div class="gap-8 max-w-2xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-extrabold uppercase  text-gray-200 tracking-wide mb-4">MAIN FEST <span class='text-orange-400'>EVENTS</span> 2k22-23</h2>
        </div>
        {/* displaying cards  */}
        <div class="grid sm:grid-cols-1 sm:justify-center md:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-10 xl:grid-cols-4 justify-center px-20 transition-all l">
        
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer " >
            <a href="/football"> <img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Football.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Football</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/basketball"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Basketball.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Basketball</h2>
          </div>
          <div class=" rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/cricket"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/cricket.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Cricket</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/volleyball"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Volleyball2.png' alt="couldnt load" /></a>
            <h2 class="text-white mt-1 text-2xl">Volleyball</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/throwball"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Throwball.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Throwball</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/khokho"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Kho Kho.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Kho-kho</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/kabadi"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Kabaddi.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Kabaddi</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer" >
            <a href="/swmming"><img class="h-64 hover:brightness-125 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Swimming2.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Swimming</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer xl:ml-48" >
            <a href="/tabletennis"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Table Tennis.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Table Tennis</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer xl:ml-48" >
            <a href="/chess"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Chess1.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Chess</h2>
          </div>
          <div class="rounded-2xl m-6 sm:w-52 cursor-pointer xl:ml-48" >
            <a href="/carrom"><img class="h-64 hover:brightness-110 rounded-2xl scale-125 hover:shadow-xl hover:shadow-cyan-500/30 duration-300 ease-in-out" src='newimages/Carrom.png' alt="couldnt load" /></a>
          <h2 class="text-white mt-1 text-2xl">Carrom</h2>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Events;
