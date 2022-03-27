import React from 'react';
import {
    // CSidebar,
    // CSidebarBrand,
    // CSidebarNav,
    // CNavItem,
    // CNavGroup,
    // CSidebarToggler,
    // CBadge,
    CHeader,
    CContainer,
    CHeaderBrand,
    // CHeaderToggler,
    // CCollapse,
    CHeaderNav,
    // CNavLink,
    CDropdown,
    CDropdownMenu,
    CDropdownToggle,
    CDropdownItem,
    CDropdownDivider,
    // CForm,
    // CFormInput,
    // CButton,
    CAvatar,
} from '@coreui/react';

function AppSidebar() {
    return (
        <>
            <CHeader className="mb-3">
                <CContainer fluid>
                    <CHeaderBrand>헤더</CHeaderBrand>
                    <CHeaderNav>
                        <CDropdown variant="nav-item">
                            <CDropdownToggle caret={false}>
                                <CAvatar
                                    color="warning"
                                    textColor="white"
                                    size="lg"
                                >
                                    제혁
                                </CAvatar>
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">
                                    마이페이지
                                </CDropdownItem>
                                <CDropdownItem href="#">
                                    회원정보 수정
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">로그아웃</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CHeaderNav>
                </CContainer>
            </CHeader>
        </>
    );
}

export default AppSidebar;
