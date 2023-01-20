import React from "react";
import Member from "../UI/Member.js";

function Team() {
  return (
    <div className="py-10">
      
      <div class="">
      
        <div class="gap-8 max-w-2xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl uppercase font-extrabold tracking-tight text-gray-200">Core Committee 2k22-23</h2>

          <div class="w-full shadow-xl shadow-orange-500/30 border-2 rounded-md my-4 border-slate-100">
            <h1 class="text-xl">SECRETARIES</h1>
            <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Aaditya%20Joshi.JPG?raw=true" alt="Secretary-Aaditya" name="Aaditya Joshi"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Aditi%20Khadse.jpg?raw=true" alt="Secretary-Aditi" name="Aditi Khadse"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Kratin%20Jain.jpg?raw=true" alt="Secretary-Kratin" name="Kratin Jain"/>
          </div>
        </div>        

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">TREASURERS</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Esha%20Jain.jpg?raw=true" alt="Treasurer-Esha" name="Esha Jain"/>

            <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Yash%20Kabra.jpg?raw=true" alt="Treasurer-Yash" name="Yash Kabra"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 rounded-md my-4 border-slate-100">
            <h1 class="text-xl">EXECUTIVE DIRECTORS</h1>
            <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Chirag%20Kathoye.jpg?raw=true" alt="ED-Chirag" name="Chirag Kathoye"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Diya%20Rajeevan.jpg?raw=true" alt="ED-Diya" name="Diya Rajeevan"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Sam%20Fernandes_.jpg?raw=true" alt="ED-Sam" name="Sam Fernandes"/>

            </div>
          </div>

          <div class="w-full shadow-xl shadow-orange-500/30 border-2 rounded-md my-4 border-slate-100">
            <h1 class="text-xl">Head OPs</h1>
            <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Sahil%20Thakare_.jpg?raw=true" alt="OPs-Sahil" name="Sahil Thakare"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Snehil%20Rughani.jpg?raw=true" alt="OPs-Snehil" name="Snehil Rughani"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/RahulKumar.Chaure.jpg?raw=true" alt="OPs-Rahul" name="Rahul Chaure"/>
            </div>
          </div>

          {/* <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">MNC Heads</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Heads\KARTEEK NAYAK.jpg" alt="Head-Karteek" name="Karteek Nayak"/>

            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Heads\Sayali Fegade.jpg" alt="Head-Sayali" name="Sayali Fegade"/>

          </div>
        </div> */}

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">Spons Heads</h1>
          <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Akshat%20Agrawal_.jpg?raw=true" alt="Spons-Akshat" name="Akshat Agrawal"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Amey%20Shinde_Spons.jpg?raw=true" alt="Spons-Amey" name="Amey Shinde"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Kunal%20Zade.jpg?raw=true" alt="Spons-Kunal" name="Kunal Zade"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Maitray%20Wani.jpg?raw=true" alt="Spons-Maitray" name="Maitray Wani"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">PR Heads</h1>
          <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Pratiksha%20Naik.jpg?raw=true" alt="PR-Pratiksha" name="Pratiksha Naik"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Shalvi%20Bhoyar.jpg?raw=true" alt="PR-Shalvi" name="Shalvi Bhoyar"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Shreyas%20Bhatlawande.jpg?raw=true" alt="PR-Shreyas" name="Shreyas Bhatlawnade"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Udit%20Dhankar.jpg?raw=true" alt="PR-Udit" name="Udit Dhankar"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">Marketing Heads</h1>
          <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Chinmay%20Narkhede_.jpg?raw=true" alt="Marketing-Chinmay" name="Chinmay Narkhede"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Madhura%20Pote.jpg?raw=true" alt="Marketing-Madhura" name="Madhura Pote"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Nilesh%20Yadav.webp?raw=true" alt="Marketing-Nilesh" name="Nilesh Yadav"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/SMIT%20DHENGRE_.jpg?raw=true" alt="Marketing-Smit" name="Smit Dhengre"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">Design Heads</h1>
          <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Avani%20Khadkikar.jpg?raw=true" alt="Design-Avani" name="Avani Khadkikar"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Divyank%20Jain.jpg?raw=true" alt="Design-Divyank" name="Divyank Jain"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Prachi%20Sunil%20Katela.jpg?raw=true" alt="Design-Prachi" name="Prachi Katela"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Satvik%20Sharma.jpg?raw=true" alt="Design-Satvik" name="Satvik Sharma"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">Digital Heads</h1>
          <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Deven%20Choudhari_.jpg?raw=true" alt="Digital-Deven" name="Deven Choudhari"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Saloni%20Paliwal.jpg?raw=true" alt="Digital-Saloni" name="Saloni Paliwal"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Sarvesh%20Shirude.jpg?raw=true" alt="Digital-Sarvesh" name="Sarvesh Shirude"/>

              <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Sharayu%20Korade.jpg?raw=true" alt="Digital-Sharayu" name="Sharayu Korade"/>

          </div>
        </div>

        {/* <div class="w-full shadow-xl shadow-orange-500/30 border-2 rounded-md my-4 border-slate-100">
            <h1 class="text-xl">MNC Head OPs</h1>
            <div class="p-6 flex flex-wrap justify-center">
              <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Ops\Vedant_Tichkule.jpg" alt="OPs-Vedant" name="Vedant Tichkule"/>
            </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">MNC Spons Heads</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Sponsorship\Anshika Shinde.jpg" alt="Spons-Anshika" name="Anshika Shinde"/>

            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Sponsorship\Siddhant Waghanna.jpg" alt="Spons-Siddhant" name="Siddhant Waghanna"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 rounded-md my-4 border-slate-100">
            <h1 class="text-xl">MNC PR Heads</h1>
            <div class="p-6 flex flex-wrap justify-evenly">
              <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC PR\Brajesh Patil.jpg" alt="PR-Brajesh" name="Brajesh Patil"/>

              <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC PR\Kimaya Mutha.jpeg" alt="PR-Kimaya" name="Kimaya Mutha"/>

              <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC PR\Saumil Parsodkar .jpg" alt="PR-Saumil" name="Saumil Parsodkar"/>
            </div>
          </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">MNC Marketing Heads</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Marketing\Rohit Talande.jpeg" alt="Marketing-Rohit" name="Rohit Talande"/>

            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Marketing\Sakshi Hiroji .jpg" alt="Marketing-Sakshi" name="Sakshi Hiroji"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">MNC Design Heads</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Design\AadityaPatil.jpg" alt="Design-Aaditya" name="Aaditya Patil"/>

            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Design\Prajakta Barde.jpg" alt="Design-Aaditya" name="Prajakta Barde"/>

          </div>
        </div>

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">MNC Digital Head</h1>
          <div class="p-6 flex flex-wrap justify-center">
            <Member src="images\VJTI Sports Committee 22-23\MNC main\MNC Digital\Vishwesh Jadhav.jpg" alt="Digital-Vishwesh" name="Vishwesh Jadhav"/>
          </div>
        </div> */}

        <div class="w-full shadow-xl shadow-orange-500/30 border-2 my-4 rounded-md border-slate-100">
          <h1 class="text-xl">Web Developer Heads</h1>
          <div class="p-6 flex flex-wrap justify-evenly">
            <Member src="https://github.com/esarvesh11/Pictures/blob/main/core_team/Aman%20Singh.jpg?raw=true" alt="Web_Dev-Aman" name="Aman Singh"/>

            <Member src="https://pbs.twimg.com/profile_images/1592419201058484224/oR3Djqw2.jpg" alt="Web_Dev-Vishal" name="Vishal Dhanger"/>

          </div>
        </div>


        </div>
  </div>
</div>

  );
}

export default Team;