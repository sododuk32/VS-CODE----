import type { NextPage } from 'next';
import {
    CCard,
    CRow,
    CCol,
    CButton,
    CCardBody,
    CCardTitle,
    CCardText,
    CTable,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTableBody,
    CCardLink,
} from '@coreui/react';
import Link from 'next/link';

const Mypage: NextPage = () => {
    return (
        <>
            {/* 쿠폰 */}
            <CCard color="black" className="rounded-0">
                <CCardBody className="text-center">
                    <CRow>
                        <CCol>
                            <CCard
                                color="black"
                                textColor="white"
                                className="border-0"
                            >
                                <CCardBody>
                                    <CCardTitle>TEAMB님 반갑습니다</CCardTitle>
                                    <CCardText>
                                        현재 회원님의 등급은 vip입니다
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={2}>
                            <CCard
                                className="rounded-circle"
                                style={{ maxWidth: '6rem' }}
                            >
                                <CCardBody>
                                    <CCardTitle>쿠폰</CCardTitle>
                                    <CCardText>0</CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={2}>
                            <CCard
                                className="rounded-circle"
                                style={{ maxWidth: '6rem' }}
                            >
                                <CCardBody>
                                    <CCardTitle>포인트</CCardTitle>
                                    <CCardText>0p</CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={2}>
                            <CCard
                                className="rounded-circle"
                                style={{ maxWidth: '6rem' }}
                            >
                                <CCardBody className="fw-medium fs-4 lh-sm">
                                    <CCardText>
                                        <Link href="#t" passHref>
                                            <CCardText>고객센터</CCardText>
                                        </Link>
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={2}>
                            <CCard
                                className="rounded-circle"
                                style={{ maxWidth: '6rem' }}
                            >
                                <CCardBody className="fw-medium fs-4 lh-sm">
                                    <Link href="/main" passHref>
                                        <CCardLink
                                            style={{
                                                textDecorationLine: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            나의 정보
                                        </CCardLink>
                                    </Link>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            {/* 주문상태 */}
            <CCard color="light" className="rounded-0">
                <CCardBody className="text-center">
                    <CRow>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>입금/결제</CCardTitle>
                                    <CCardText>0</CCardText>
                                    <CButton color="light" shape="rounded-pill">
                                        주문내역
                                    </CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>배송중</CCardTitle>
                                    <CCardText>2</CCardText>
                                    <CButton
                                        href="#"
                                        color="light"
                                        shape="rounded-pill"
                                    >
                                        배송조회
                                    </CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>배송완료</CCardTitle>
                                    <CCardText>1</CCardText>
                                    <CButton
                                        href="#"
                                        color="info"
                                        shape="rounded-pill"
                                    >
                                        상세보기
                                    </CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>취소/교환/환불</CCardTitle>
                                    <CCardText>0</CCardText>
                                    <CButton
                                        href="#"
                                        color="info"
                                        shape="rounded-pill"
                                    >
                                        상세보기
                                    </CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>

            {/* 주문목록테이블 */}

            <CTable className="">
                <CTableHead>
                    <CTableRow
                        className="fw-medium fs-4 lh-lg text-center"
                        style={{ height: '5rem' }}
                    >
                        <CTableHeaderCell scope="col" colSpan={5}>
                            장바구니목록
                        </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow className="text-center">
                        <CTableHeaderCell scope="col">
                            상품정보
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문일자
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문번호
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문금액
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문상태
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow className="text-center">
                        <CTableHeaderCell
                            scope="row"
                            colSpan={5}
                            style={{ height: '10rem' }}
                        >
                            주문내역이 없습니다
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableBody>
            </CTable>

            {/* 장바구니목록 */}
            <CTable className="">
                <CTableHead>
                    <CTableRow className="fw-medium fs-4 lh-lg text-center">
                        <CTableHeaderCell scope="col" colSpan={5}>
                            주문리스트
                        </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="col" colSpan={5} color="light">
                            <span className="m-3">2022.01.01</span>
                            <span>주문번호</span>
                        </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow className="text-center">
                        <CTableHeaderCell scope="col">
                            상품정보
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문일자
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문번호
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문금액
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문상태
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow className="text-center">
                        <CTableHeaderCell
                            scope="row"
                            colSpan={5}
                            style={{ height: '10rem' }}
                        >
                            주문내역이 없습니다
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    );
};

export default Mypage;
