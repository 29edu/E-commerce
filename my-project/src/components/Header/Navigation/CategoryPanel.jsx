import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const CategoryPanel = (props) => {
  // To check the state whether the drawer is opne or close
  // useEffect(() => {
  //   alert(props.isOpenCatPanel)
  // },[])

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex == index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By categories{" "}
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <IoIosArrowDown
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <IoIosArrowForward
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <IoIosArrowDown
                      className="absolute top-[10px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <IoIosArrowForward
                      className="absolute top-[10px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Crepe T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Outwear
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <IoIosArrowDown
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <IoIosArrowForward
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <IoIosArrowDown
                      className="absolute top-[10px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <IoIosArrowForward
                      className="absolute top-[10px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Crepe T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !text-left !justify-start !px-3 transitio text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
