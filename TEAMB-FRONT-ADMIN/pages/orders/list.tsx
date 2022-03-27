import React from 'react';
import { useState } from 'react';
import {
    CCard,
    CNavItem,
    CContainer,
    CButton,
    CFormSelect,
    CFormInput,
    CInputGroup,
    CDropdown,
    CNavbarNav,
    CCollapse,
    CNavbarBrand,
    CNavbar,
    CNavbarToggler,
} from '@coreui/react';
import type { NextPage } from 'next';
import DataTable, { TableColumn } from 'react-data-table-component';
import Link from 'next/link';

const OrderHeader = () => {
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
    const [visible, setVisible] = useState(false);

    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarBrand href="#">주문리스트</CNavbarBrand>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav>
                            <CNavItem>
                                <CDropdown variant="nav-item" popper={false}>
                                    <OrderChange />
                                </CDropdown>
                            </CNavItem>
                            <CFormSelect aria-label="Default select example">
                                <option>검색항목</option>
                                <option value="1">주문검색</option>
                                <option value="2">상품검색</option>
                            </CFormSelect>
                        </CNavbarNav>
                        <CInputGroup>
                            <CFormInput
                                type="search"
                                placeholder="검색"
                                aria-label="주문검색 with two button addons"
                            />
                            <CButton type="submit" color="secondary">
                                조회
                            </CButton>
                            <CButton type="submit" color="primary">
                                초기화
                            </CButton>
                        </CInputGroup>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
};

const OrderList: NextPage = () => {
    const DetailButton = function () {
        return (
            <Link href="/orders/details" passHref>
                <CButton>상세보기</CButton>
            </Link>
        );
    };

    type DataRow = {
        ordernumber: string;
        items: string;
        name: string;
        total: string;
        purchase: string;
    };

    const columns: TableColumn<DataRow>[] = [
        {
            name: '주문일시',
            selector: (row) => row.ordernumber,
            sortable: true,
        },
        {
            name: '주문상품',
            selector: (row) => row.items,
            sortable: true,
        },
        {
            name: '주문자/수령인',
            selector: (row) => row.name,
            sortable: true,
            // right: true,
        },
        {
            name: '주문금액/배송비',
            selector: (row) => row.total,
            sortable: true,
        },
        {
            name: '결제방식',
            selector: (row) => row.purchase,
            sortable: true,
        },
        {
            name: '상세보기',
            button: true,
            cell: () => <DetailButton />,
        },
    ];

    const data = [
        {
            id: 1,
            ordernumber: '주문번호',
            items: '티셔츠',
            name: '이서우',
            total: '10000',
            purchase: '신용카드',
        },
        {
            id: 2,
            ordernumber: '주문번호',
            items: '시계',
            name: '이서우',
            total: '100000',
            purchase: '신용카드',
        },
        {
            id: 3,
            ordernumber: '주문번호',
            items: '바지',
            name: '이서우',
            total: '20000',
            purchase: '신용카드',
        },
        {
            id: 4,
            ordernumber: '주문번호',
            items: '모자',
            name: '이서우',
            total: '5000',
            purchase: '현금',
        },
    ];
    return (
        <>
            <OrderHeader />
            <div className="Table1">
                <CCard>
                    <DataTable
                        title="Movies"
                        columns={columns}
                        data={data}
                        defaultSortFieldId="title"
                        // sortIcon={<SortIcon />}
                        pagination
                        selectableRows
                    />
                </CCard>
            </div>
        </>
    );
};

export default OrderList;
