'use client'

import React from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { decrement, increment, reset } from '@/redux/features/counterSlice'

type Props = {}

const page = (props: Props) => {
  const state = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()
  console.log(state)
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          console.log('increment')
          dispatch(increment())
        }}>
        +
      </button>
    </div>
  )
}

export default page
