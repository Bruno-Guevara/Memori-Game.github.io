import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';
import '../../App.css';

const Board = ({ animating, handleMemoClick, memoBlocks }) => {
    return (
        <main className='board'>
            {memoBlocks.map((memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    )
}

export default Board;