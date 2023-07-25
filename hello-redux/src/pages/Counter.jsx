import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment} from '../redux/actions'
export default function Counter() {
    const count = useSelector(state => state.handleCount)
    const dispatch = useDispatch()
  return (
    <>
    <div className='d-flex flex-column align-items-center mt-5'>
        <p className='badge bg-secondary w-10 p-4'>{count}</p>
        <div className='d-flex flex-row'>
            <button className='btn btn-primary m-2' onClick={() => dispatch(increment())}>
                INC
            </button>
            <button className='btn btn-primary m-2' onClick={() => dispatch(decrement())}>
                DEC
            </button>
        </div>
    </div>
    </>
    
  )
}
