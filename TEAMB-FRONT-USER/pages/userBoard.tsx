import type { NextPage } from 'next';
import { CCardFooter, CCardHeader } from '@coreui/react';
import Link from 'next/link';
import {
    CCard,
    CRow,
    CCol,
    CButton,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardGroup,
    CCardImage,
} from '@coreui/react';
import Image from 'next/image';

const UserBoard: NextPage = () => {
    return (
        <>
            <div>오늘의 룩북</div>
            <CCardGroup className="p-5 border">
                <CCard className="m-2 bordered" style={{ minWidth: '13rem' }}>
                    <Image
                        src="/img/image_board1.jpg"
                        width="701"
                        height="496"
                    />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>

                <CCard className="m-2 border" style={{ minWidth: '13rem' }}>
                    <Image
                        src="/img/image_board1.jpg"
                        width="701"
                        height="496"
                    />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                        <CCardText>
                            오늘 서울의 날씨는 봄이 온 것 같아요. 가볍게 셔츠에
                            카키색 와이드 바지를 코디해주어 아메카지룩을
                            완성해봤습니다.
                        </CCardText>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>

                <CCard className="m-2 border" style={{ minWidth: '13rem' }}>
                    <Image
                        src="/img/image_board1.jpg"
                        width="701"
                        height="496"
                    />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>

                <CCard
                    className="m-2 border"
                    style={{ minWidth: '13rem', maxWidth: '20rem' }}
                >
                    <Image
                        src="/img/image_board1.jpg"
                        width="701"
                        height="496"
                    />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
            </CCardGroup>
        </>
    );
};

export default UserBoard;
