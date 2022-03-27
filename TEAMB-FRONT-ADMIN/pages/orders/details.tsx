import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import {
    CCard,
    CCardHeader,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CCardBody,
    CCardFooter,
    CContainer,
    CRow,
    CCol,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
    CFormSelect,
} from '@coreui/react';

const OrderDetail: NextPage = () => {
    const DetailButton = function () {
        return (
            <Link href="/orderdetail" passHref>
                <CButton>상세보기</CButton>
            </Link>
        );
    };

    const OrderChange = () => {
        return (
            <CFormSelect aria-label="Default select example">
                <option>상태</option>
                <option value="1">입금</option>
                <option value="2">결제완료</option>
                <option value="3">상품준비중</option>
                <option value="4">배송</option>
                <option value="5">구매확정</option>
                <option value="6">취소요청</option>
                <option value="7">반품요청</option>
                <option value="8">교환요청</option>
                <option value="9">환불완료</option>
                <option value="10">교환완료</option>
            </CFormSelect>
        );
    };

    const [activeKey, setActiveKey] = useState(1);
    return (
        <>
            <CNav variant="tabs" role="tablist">
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 1}
                        onClick={() => setActiveKey(1)}
                    >
                        주문정보
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 2}
                        onClick={() => setActiveKey(2)}
                    >
                        결제정보
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 3}
                        onClick={() => setActiveKey(3)}
                    >
                        배송정보
                    </CNavLink>
                </CNavItem>
            </CNav>
            <CTabContent>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="주문정보-tab"
                    visible={activeKey === 1}
                >
                    <CCard>
                        <CCardHeader component="h5">
                            <CContainer>
                                <CRow>
                                    <CCol sm="auto">주문번호 123123123</CCol>
                                    <CCol sm="auto">
                                        주문일시 2022.01.01 시간
                                    </CCol>
                                </CRow>
                            </CContainer>
                        </CCardHeader>
                        <CCardBody className="text-center">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            주문상품
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문상태
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            송장번호
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                            <Link
                                                href="/orders/cancel"
                                                passHref
                                            >
                                                <a>취소/교환/반품 상세보기</a>
                                            </Link>
                                        </CTableDataCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                        <CTableDataCell>
                                            택배사&송장번호
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                        <CTableDataCell>
                                            택배사&송장번호
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                        <CTableDataCell>
                                            택배사&송장번호
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            관리자메모
                                        </CTableHeaderCell>
                                        <CTableDataCell
                                            colSpan={4}
                                        ></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CButton>수정</CButton>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="결제정보-tab"
                    visible={activeKey === 2}
                >
                    <CCard className="text-center">
                        <CCardHeader>결제 방식 : 신용카드</CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 상품금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 할인금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>0000원</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                        <CCardFooter className="text-medium-emphasis">
                            최종 결제 금액 : 000000원
                        </CCardFooter>
                    </CCard>
                    <CCard className="text-center">
                        <CCardHeader>결제 방식 : 무통장 입금</CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            입금자명
                                        </CTableHeaderCell>
                                        <CTableDataCell>이서우</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            임금계좌
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            0000000000000
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            현금영수증
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            방식/번호
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 할인금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>0000원</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                        <CCardFooter className="text-medium-emphasis">
                            최종 결제 금액 : 000000원
                        </CCardFooter>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="배송정보-tab"
                    visible={activeKey === 3}
                >
                    <CCard className="text-center">
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            수령인
                                        </CTableHeaderCell>
                                        <CTableDataCell>이서우</CTableDataCell>
                                        <CTableHeaderCell scope="row">
                                            전화번호
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            000-0000-0000
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            주소
                                        </CTableHeaderCell>
                                        <CTableDataCell colSpan={4}>
                                            주소 찾기 + 상세 주소
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            요청사항
                                        </CTableHeaderCell>
                                        <CTableDataCell
                                            colSpan={4}
                                        ></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CTabPane>
            </CTabContent>
        </>
    );
};

export default OrderDetail;
