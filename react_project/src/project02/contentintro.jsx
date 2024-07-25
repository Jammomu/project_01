import React from 'react';

export function CompanyIntro ()  {
  const containerStyle = {
    marginBottom: '50px',
    width: '800px',
    left: '100px',
    top: '10px',
    position: 'relative',
    zIndex: '-1'
  };

  const headingStyle = {
    fontWeight: 'bold',
    textAlign: 'left'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>회사소개 스타일1</h1>
    </div>
  );
};

