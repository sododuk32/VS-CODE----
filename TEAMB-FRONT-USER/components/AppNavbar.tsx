import React from "react";
import { useState } from "react";
import Head from "next/head";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CForm,
  CDropdown,
  CDropdownDivider,
  CFormInput,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import * as icon from "@coreui/icons";
import { FiUser } from "react-icons/fi";
import { BsBasket } from "react-icons/bs";

function AppNavbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-white">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <strong>NYMPHE</strong>
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink href="#" active>
                  아우터
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  상의
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  바지
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  스커트
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  원피스
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  신발
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  모자
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CNavbarNav>
              <FiUser size="35" />
              <BsBasket size="35" />
              <CForm className="d-flex">
                <CFormInput type="search" placeholder="검색" />
              </CForm>
              {/* <CIcon icon={icon.cilUser} size="xxl" className="ms-2" />
              <CIcon icon={icon.cilBasket} size="xxl" className="ms-2" /> */}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default AppNavbar;
