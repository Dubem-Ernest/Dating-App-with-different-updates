// components/PhotoIconWithPlus.tsx
'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PhotoIconWithPlus() {
  return (
    <div className="relative flex flex-col flex-1 h-full w-">

      <h2>Add photo</h2>
      {/* Main photo/image icon */}
      <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
        <FontAwesomeIcon icon={faImage} className="text-gray-600 text-3xl" />
      </div>

      {/* Plus icon overlay */}
      <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 text-xs shadow">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}