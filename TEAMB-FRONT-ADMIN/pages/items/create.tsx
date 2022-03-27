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
    CFormTextarea,
} from '@coreui/react';
import type { NextPage } from 'next';

const Create: NextPage = () => {
    return (
        <>
            <CCard className="mb-1">
                <CCardHeader component="h5">상품 등록</CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    이미지 선택
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput type="file" id="formFile" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    상품명
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    브랜드
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput type="text" />
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
                                    컬러
                                </CFormLabel>
                            </CCol>
                            <CCol xs={6}>
                                <CFormSelect aria-label="Default select example">
                                    <option>컬러 목록</option>
                                    <option value="1">베이지</option>
                                    <option value="2">블랙</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="text" />
                            </CCol>
                            <CCol>
                                <CButton color="primary" variant="outline">
                                    추가
                                </CButton>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    사이즈
                                </CFormLabel>
                            </CCol>
                            <CCol xs={6}>
                                <CFormSelect aria-label="Default select example">
                                    <option>사이즈 목록</option>
                                    <option value="1">28</option>
                                    <option value="2">29</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="text" />
                            </CCol>
                            <CCol>
                                <CButton color="primary" variant="outline">
                                    추가
                                </CButton>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CCol xs={1}>
                                <CFormLabel className="col-form-label">
                                    판매 가격
                                </CFormLabel>
                            </CCol>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                    </CForm>
                </CCardBody>
            </CCard>
            <CCard className="mb-1">
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                            <CFormLabel>상세설명</CFormLabel>
                            <CFormTextarea rows="10"></CFormTextarea>
                        </div>
                        <div className="d-grid col-1 mx-auto">
                            <CButton color="primary">등록</CButton>
                        </div>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
};

export default Create;
