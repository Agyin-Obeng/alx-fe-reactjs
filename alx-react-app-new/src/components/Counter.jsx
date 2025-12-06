import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '10px', textAlign: 'center', width: '250px', backgroundColor: '#f9f9f9' }}>
            <h2>Simple Counter</h2>
            <p style={{ fontSize: '1.2em', margin: '15px 0' }}>Current Count: {count}</p>
            <div>
                <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 15px' }}>Increment</button>
                <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 15px' }}>Decrement</button>
                <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 15px' }}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
