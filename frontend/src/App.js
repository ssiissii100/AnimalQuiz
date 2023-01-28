import React, { useCallback, useState } from 'react';
import Start from './components/Start';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Finish from './components/Finish';
import Test from './components/Test';
import './App.css'

function App() {

  const [name, setName] = useState("0");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);


  let time = endTime-startTime

  const wrapperSetName = useCallback(val => {
    setName(val);
  }, [setName]);

  const wrapperSetStartTime = useCallback(val => {
    setStartTime(val);
  }, [setStartTime]);

  const wrapperSetEndTime = useCallback(val => {
    setEndTime(val);
  }, [setEndTime]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start nameSetter={wrapperSetName} timeSetter={wrapperSetStartTime} />}/>
        <Route path='/test' element={<Test startTime={startTime}/>} />
        <Route path='/finish' element={<Finish timeSetter={wrapperSetEndTime} time={time} name={name}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;