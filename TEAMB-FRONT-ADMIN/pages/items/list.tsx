import {
    CHeader,
    CContainer,
    CHeaderBrand,
    CCard,
    CCardHeader,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CForm,
    CFormLabel,
    CFormInput,
    CFormText,
    CRow,
    CCol,
    CFormSelect,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
} from '@coreui/react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import type { NextPage } from 'next';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: '상품명', width: 400 },
    { field: 'color', headerName: '컬러', width: 150 },
    { field: 'brand', headerName: '브랜드', width: 250 },
    { field: 'size', headerName: '사이즈', width: 150 },
    { field: 'category', headerName: '카테고리', width: 150 },
    { field: 'price', headerName: '가격', width: 150, type: 'number' },
];

const rows = [
    {
        id: 1,
        name: '핫한 세미와이드 슬랙스',
        color: '베이지',
        brand: '귀여운 마녀',
        size: '26',
        category: '슬랙스',
        price: 22000,
    },
    {
        id: 2,
        name: '멋진 테이퍼드 슬랙스',
        color: '블랙',
        brand: '멋진 남자',
        size: '29',
        category: '슬랙스',
        price: 28000,
    },
    {
        id: 3,
        name: '핫한 세미와이드 슬랙스',
        color: '베이지',
        brand: '귀여운 마녀',
        size: '26',
        category: '슬랙스',
        price: 22000,
    },
    {
        id: 4,
        name: '멋진 테이퍼드 슬랙스',
        color: '블랙',
        brand: '멋진 남자',
        size: '29',
        category: '슬랙스',
        price: 28000,
    },
    {
        id: 5,
        name: '핫한 세미와이드 슬랙스',
        color: '베이지',
        brand: '귀여운 마녀',
        size: '26',
        category: '슬랙스',
        price: 22000,
    },
    {
        id: 6,
        name: '멋진 테이퍼드 슬랙스',
        color: '블랙',
        brand: '멋진 남자',
        size: '29',
        category: '슬랙스',
        price: 28000,
    },
    {
        id: 7,
        name: '핫한 세미와이드 슬랙스',
        color: '베이지',
        brand: '귀여운 마녀',
        size: '26',
        category: '슬랙스',
        price: 22000,
    },
];

const List: NextPage = () => {
    return (
        <>
            <CCard className="mb-1">
                <CCardHeader component="h5">상품 리스트</CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    상품명
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    브랜드
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    상품 분류
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormSelect aria-label="Default select example">
                                    <option>선택하세요</option>
                                    <option value="1">상의</option>
                                    <option value="2">하의</option>
                                    <option value="3">아우터</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    판매 가격
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormSelect aria-label="Default select example">
                                    <option>선택하세요</option>
                                    <option value="1">만원 이하</option>
                                    <option value="2">만원 이상</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                    </CForm>
                    <div className="gap-2 d-md-flex justify-content-md-center">
                        <CButton color="primary">검색</CButton>
                        <CButton color="secondary">초기화</CButton>
                    </div>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </CCardBody>
            </CCard>
        </>
    );
};

export default List;
