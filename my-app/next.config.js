/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
const withImages = require('next-images');
//파일 위치 잡아줌
module.exports = withImages({
    images: {
        disableStaticImages: true,
    },
});

// static 타입 이미지 처리 비활성화
