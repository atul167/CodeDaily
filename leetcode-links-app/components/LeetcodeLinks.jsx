import React from 'react';
import { leetcodeProblems } from '../db';
import POTD from './POTD';

const LeetcodeLinks = () => {
  return (
    <>
      <div>Leetcode POTD: <POTD /></div>
          <div>
              <h1>All problems!</h1>
        {leetcodeProblems.map((problem) => {
          return (
            <div key={problem.title}>
              <a href={problem.url} title={problem.title} target="_blank" rel="noopener noreferrer">
                {problem.title}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LeetcodeLinks;
