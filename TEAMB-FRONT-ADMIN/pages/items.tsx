/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CForm,
    CFormLabel,
    CFormInput,
    CRow,
    CCol,
    CFormSelect,
} from '@coreui/react';
import type { NextPage } from 'next';

const List: NextPage = () => {
    return (
        <>
            <CCard>
                <CCardHeader>상품 리스트</CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                상품명
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                브랜드
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                상품 분류
                            </CFormLabel>
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
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                판매 가격
                            </CFormLabel>
                            <CCol>
                                <CFormSelect aria-label="Default select example">
                                    <option>선택하세요</option>
                                    <option value="1">만원 이하</option>
                                    <option value="2">만원 이상</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                    </CForm>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton color="primary">검색</CButton>
                        <CButton color="primary">초기화</CButton>
                    </div>
                </CCardBody>
            </CCard>
        </>
    );
};

export default List;
