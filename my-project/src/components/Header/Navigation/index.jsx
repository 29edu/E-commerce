import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import "../Navigation/style.css";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-9">
          <di className="col1 w-[15%] ">
            <Button
              className="Nav !text-black gap-2 w-full"
              sx={{ textTransform: "none" }}
              onClick={openCategoryPanel}
            >
              <IoMenu className="menu-icon size-5" />
              Categories
              <FaAngleDown className="text-[14px] ml-auto font-bold " />
            </Button>
          </di>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>



                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full relative">
                              <Link to="/" className="w-full">
                                <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  T shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  FootWear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pant
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!capitalize !text-[rgba(0,0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    sx={{ textTransform: "none" }}
                    className="link transition "
                  >
                    Jewellary
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col3 w-[25%] ">
            <p className="text-[14px] font-[500] flex justify-end gap-3 mr-10">
              <GoRocket className="size-5" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
