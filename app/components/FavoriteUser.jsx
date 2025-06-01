import React from "react";

const FavoriteUser = () => {
  return (
    <div className="shadow-lg block  h-custom w-custom card-color flex flex-col items-center rounded-lg mt-2 ml-2">
      <div className="card-img-height w-full relative">
        <img
          className="h-full w-full object-cover rounded-t-lg "
          src={user.backgroundImage}
          alt=""
        />

        <div className="absolute translate-custom border-4 border- card-width card-height rounded-full bg-black">
          <img
            src={user.roundedImage}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex justify-between block">
          {" "}
          <div className="flex flex-col py-2">
            <h1 className="text-xs font-bold py-1">
              {user.name},{user.age}
            </h1>
            <h1 className="text-xs font-bold">{user.Nationality}</h1>
          </div>
          <div className="flex flex-col block items-center py-2 ">
            <h2 className="text-xs font-bold py-1">{user.percentage}, match</h2>
            {user.verified && (
              <div className="flex space-x-1 items-center">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-sm px-1 text-blue-500 "
                />
                <p className="text-xs font-bold py-1 ">Verified address</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs pt-5 pb-3">{user.description}</p>
        <div className="flex justify-center items-center w-full justify-between py-3">
          <button
            className={`w-24 h-8 p-2  text-xs text-white rounded-full ${
              user.view_info ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {user.view_info ? "More info" : "View info"}
          </button>{" "}
          <FontAwesomeIcon
            onClick={() => addFavorite(i)}
            icon={faHeart}
            size="xl"
            className={`cursor-pointer ${
              user.favorite ? "text-red-500" : "text-green-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteUser;
