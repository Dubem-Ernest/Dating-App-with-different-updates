import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUsers } from "./lib/slices/usersSlice";


import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";

const MainLayout = ({children}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter.users)

  
  const pathname = usePathname();
  const sideNavRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        dispatch(getUsers(myJson));
        
      });
  };



  useEffect(() => {
    getData();
  }, [getData]);

  // useEffect(() => {
  //   getData();
  // }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      // Implement your close side navigation bar logic here
      setSidebarOpen(false);
    }
  }

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function closeMenu() {
    setSidebarOpen(false);
  }

  

  return (
    <div>
      <Nav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className="grid md:grid-cols-8 gap-2 h-screen ">
        {/* Fixed Sidebar Button */}

        <div className="hidden md:block md:col-span-1 left-5 pl-6 items-center">
          <span
            className="material-icons  cursor-pointer mt-16"
            style={{ fontSize: "2rem" }}
            onClick={handleSidebar}
          >
            menu
          </span>
        </div>

        <div
          className={`fixed inset-0 bg-black  duration-1000 z-30 ${
            sidebarOpen
              ? "  opacity-25 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div
          className={` top-0 right-0 inset-0 translate-y-16 transition-transform z-40 duration-1000  absolute ease-in-out custom-width rounded-lg bg-white flex flex-col custom-height transform  ${
            sidebarOpen ? "translate-x-20" : "-translate-x-full"
          } `}
        >
          <div
            className="flex flex-col p-3 justify-center items-center space-y-8"
            ref={sideNavRef}
          >
            <div className="pt-10 space-y-2">
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt=""
                className="rounded-full h-24 object-cover w-24 "
              />
              <h1 className="text-lg font-bold">Dubem Ernest</h1>
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3 flex items-center gap-14 ${
                  pathname === "/" ? "active bg-red-500 rounded-lg  " : ""
                }`}
                href="/"
              >
                {" "}
                <span className="material-icons-round">grid_view</span>
                <p className="text-sm">Home</p>
              </Link>
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3   flex items-center gap-14 ${
                  pathname === "/profile" ? "active bg-red-500 rounded-lg " : ""
                }`}
                href="profile"
              >
                <span className="material-icons-outlined">manage_accounts</span>
                <p className="text-sm">My Profile</p>
              </Link>
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3   flex items-center gap-14 ${
                  pathname === "/favorite"
                    ? "active bg-red-500 rounded-lg "
                    : ""
                }`}
                href="favorite"
              >
                {" "}
                <span className="material-icons-outlined">favorite</span>
                <p className="text-sm">Favourite</p>
              </Link>
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3   flex items-center gap-14 ${
                  pathname === "/My_Mutuals"
                    ? "active bg-red-500 rounded-lg "
                    : ""
                }`}
                href="My_Mutuals"
              >
                {" "}
                <span className="material-icons-two-tone">diversity_1</span>
                <p className="text-sm">My Mutuals</p>
              </Link>
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3   flex items-center gap-14 ${
                  pathname === "/subscriptions"
                    ? "active bg-red-500 rounded-lg "
                    : ""
                }`}
                href="My_Subscribed"
              >
                <i className="material-icons">
                  <h2>subscriptions</h2>
                </i>{" "}
                <p className="text-sm">Subscribed</p>
              </Link>
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3  flex items-center gap-14 ${
                  pathname === "/favorite"
                    ? "active bg-red-500 rounded-lg  "
                    : ""
                }`}
                href="Interested_in_me"
              >
                Interested in me
              </Link>{" "}
              <Link
                onClick={closeMenu}
                className={`w-48 h-12 p-3  flex items-center gap-14 ${
                  pathname === "/favorite"
                    ? "active bg-red-500 rounded-lg  "
                    : ""
                }`}
                href="Settings"
              >
                <span className="material-icons-outlined">manage_accounts</span>
                <p className="text-sm">Settings</p>
              </Link>{" "}
              <Link
                onClick={closeMenu}
                className={`w-40 h-12 p-3  flex items-center gap-14  ${
                  pathname === "/favorite"
                    ? "active bg-red-500 rounded-lg  "
                    : ""
                }`}
                href="logout"
              >
                <span className="material-symbols-outlined text-3xl">
                  logout
                </span>
                <span>LogOut</span>{" "}
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <main className="no-scrollbar col-span-3 md:col-span-7 bg-green pr-20 pl-8">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
