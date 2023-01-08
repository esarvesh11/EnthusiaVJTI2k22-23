import React from "react";
import styles from "./team-name.css";
import { useState } from "react";

function Member(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div class="group relative">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          src={props.src}
          alt={props.alt}
          style={{ width: "125%", height: "125%" }}
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
        <div className={styles.image_overlay}>
          <div className={styles.image_title}>Bricks</div>
          <p className={styles.image_description}>Here we have a brick wall.</p>
        </div>
      </div>
      <div class="mt-4 flex justify-between">
        {isHovering && (
          <div>
            <h3 class="text-sm text-red-400">
              <p>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {props.name}
              </p>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Member;
