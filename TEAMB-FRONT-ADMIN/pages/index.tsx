import type { NextPage } from 'next';

import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Home: NextPage = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h3>제목: 홈페이지</h3>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae iste error, maiores minus magnam dignissimos ratione
                qui numquam officia sequi id deleniti adipisci cumque esse
                tempora maxime consequuntur. Id, delectus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae iste error, maiores minus magnam dignissimos ratione
                qui numquam officia sequi id deleniti adipisci cumque esse
                tempora maxime consequuntur. Id, delectus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae iste error, maiores minus magnam dignissimos ratione
                qui numquam officia sequi id deleniti adipisci cumque esse
                tempora maxime consequuntur. Id, delectus.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae iste error, maiores minus magnam dignissimos ratione
                qui numquam officia sequi id deleniti adipisci cumque esse
                tempora maxime consequuntur. Id, delectus.
            </p>
        </>
    );
};

export default Home;
