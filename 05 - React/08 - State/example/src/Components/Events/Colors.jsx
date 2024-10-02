
export default function Colors() {
    return (
        <div>
            <h1>Colors</h1>
            <div style={{ background: 'blue', padding: '50px' }}
                onMouseEnter={() => console.log('Entered Blue')}
                onMouseLeave={() => console.log('Left Blue')}
                onClick={() => console.log('Clicked Blue')}>
                <h2>Box 1</h2>
            </div>
            <div style={{ background: 'yellow', padding: '50px' }}>
                <h2>Box 2</h2>
            </div>
            <div style={{ background: 'green', padding: '50px' }}>
                <h2>Box 3</h2>
            </div>
        </div>
    );
}