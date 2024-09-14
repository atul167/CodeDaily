import React from 'react';
import { leetcodeProblems } from '../db';

function POTD() {
  // Get a random integer index based on the length of the array
  const index = Math.floor(Math.random() * leetcodeProblems.length);
  
  return (
    <h1>
      Problem for today is <strong>{leetcodeProblems[index].title}</strong> with link: 
      <a href={leetcodeProblems[index].url} target="_blank" rel="noopener noreferrer">
        {leetcodeProblems[index].url}
      </a>
    </h1>
  );
}

export default POTD;
