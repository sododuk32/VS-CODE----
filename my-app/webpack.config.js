module.exports = {
    loaders: [
        {
            test: /\.(gif|svg|jpg|png)$/,
            loader: 'file-loader',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');

module.exports = withImages(); // 이렇게만 해줘도 된다고 나온다.다른 설정도 같이 해주면 감싸주자.
