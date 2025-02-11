import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({suggestedNames}) => {

  const uniqueSuggestedNames = [...new Set(suggestedNames)];

  const suggestedNameJsx = uniqueSuggestedNames.map((suggestedName) => {
      return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });

  return (
    <div className="results-container">{suggestedNameJsx}</div>
  );

};

export default ResultsContainer;
