/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
//계정 리스트
import React, { useMemo, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import {
    CCallout,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
    CFormInput,
} from '@coreui/react';

// interface TableObj {
//     _username: 'name';
//     _position: 'posiont';
//     _email: 'email';
//     _authority: 'authority';
// }
// function isaddInforow(tablep: TableObj) {
//     return (
//         <>
//             <CTableHeaderCell scope="row">{tablep._username}</CTableHeaderCell>
//             <CTableDataCell>{tablep._position}</CTableDataCell>
//             <CTableDataCell>{tablep._authority}</CTableDataCell>
//             <CTableDataCell>{tablep._email}</CTableDataCell>
//             <CButton color="dark">수정</CButton>
//             <input
//                 type="text"
//                 id="fname"
//                 name="fname"
//                 value={tablep._email}
//             ></input>
//         </>
//     );
// }

const adminInfo: NextPage = () => {
    const isFindName1 = useRef<HTMLInputElement>(null);
    const isFindPosition1 = useRef<HTMLInputElement>(null);
    const isFindAuthority1 = useRef<HTMLInputElement>(null);
    const isFindEmail1 = useRef<HTMLInputElement>(null);

    // const inputDisabled = isFindName1.current?.disabled;
    //참조해서 값만 가져온것.
    // const conlog = console.log(inputDisabled);
    //return 내에서 disabled 의 값을 변경할수있게하는것.
    //즉 disabled에 false를 넣으면됨 그럴려면 해당 오브젝트에 접근을해야댐.

    //const data: Array<object> = [{ name1 }]; // array는 data의 type이고 오브젝트 안에 넣을 인터페이스를 또 정의해야함.
    return (
        <>
            <CCallout color="primary">관리자 정보 페이지입니다.</CCallout>
            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                        <CTableHeaderCell scope="col">직책</CTableHeaderCell>
                        <CTableHeaderCell scope="col">권한</CTableHeaderCell>
                        <CTableHeaderCell scope="col">email</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                {/* 테이블헤더 [0열] */}
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormInput
                                placeholder="이름"
                                aria-label="username"
                                name="inputusername"
                                aria-describedby="basic-addon1"
                                ref={isFindName1}
                                className="userName"
                            ></CFormInput>
                        </CTableHeaderCell>
                        <CButton color="dark">수정</CButton>

                        <CTableDataCell>
                            <CFormInput
                                placeholder="직책"
                                aria-label="position"
                                id="inputposition"
                                aria-describedby="basic-addon2"
                                ref={isFindPosition1}
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                placeholder="권한"
                                aria-label="authority"
                                id="inputauthority"
                                aria-describedby="basic-addon3"
                                ref={isFindAuthority1}
                                disabled
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="emailinfo"
                                placeholder="email"
                                name="inputemail"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                                ref={isFindEmail1}
                            />
                        </CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>
                    {/*데이터 1열 */}
                </CTableBody>
            </CTable>
        </>
    );
};

export default adminInfo;
