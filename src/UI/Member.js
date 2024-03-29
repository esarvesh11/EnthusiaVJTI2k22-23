import React from "react";
// import { useState } from "react";

function Member(props, styles) {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <div class="group relative">
      <div
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none"
      >
        <img
          // style={{height: "45vh"}}
          src={props.src}
          alt={props.alt}
          style={{ width: "125%", height: "125%" }} 
          class="w-full object-center object-cover lg:w-full lg:h-full"
        />
        {/* <div className={styles.image_overlay}>
          <div className={styles.image_title}>Bricks</div>
          <div>
            <p className={styles.image_description}>
              Here we have a brick wall.
            </p>
          </div>
        </div> */}
      </div>
      <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-red-400">
              <p style={{fontSize: "17px"}}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {props.name}
              </p>
            </h3>
          </div>
      </div>
    </div>
  );
}

export default Member;
