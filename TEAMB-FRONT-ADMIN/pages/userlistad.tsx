import {
    CCard,
    CCardHeader,
    CCardBody,
    CCardTitle,
    CCardText,
} from '@coreui/react';
import type { NextPage } from 'next';

const List: NextPage = () => {
    return (
        <>
            {[{ color: 'dark' }].map((item, index) => (
                <CCard
                    textColor={item.color}
                    className={`mb-3 border-top-${item.color} border-top-3`}
                    style={{ maxWidth: '65rem' }}
                    key={index}
                >
                    <CCardHeader>유저 관리자 페이지</CCardHeader>
                    <CCardBody>
                        <CCardTitle> 가입자 : ID </CCardTitle>
                        <CCardText>유저 가입 정보</CCardText>
                    </CCardBody>
                </CCard>
            ))}
        </>
    );
};
export default List;
