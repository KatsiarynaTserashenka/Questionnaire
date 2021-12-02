import React, { FC } from 'react';

const ShowResult: FC = () => {
  const resultsStr = localStorage.getItem('results');
  const results: { key: string; value: [string] } =
    resultsStr && JSON.parse(resultsStr);
  console.log(results);
  const items: any = Object.entries(results);
  console.log(items);

  return (
    <div className="show-result">
      {items &&
        items.map((item: any) => {
          console.log(item);
          return (
            <div>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ShowResult;
