import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'antd';
import IFrame from './IFrame';
import { todayDate } from '../lib';

const PrintDocument = ({ children }) => {
  const [isPrint, setIsPrint] = useState(false);

  const onPrint = (fileName) => {
    const originalDocTitle = document.title;
    setIsPrint(true);
    setTimeout(() => {
      const print = document.getElementById('ardoc-print-iframe');
      if (print) {
        const title = fileName || `${uuidv4()}_${todayDate()}`;
        // change iframe title
        print.contentDocument.title = title;
        // change document title
        document.title = title;
        print.focus();
        print.contentWindow.print();
      }
      setIsPrint(false);
      document.title = originalDocTitle;
    }, 2500);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        // Check if the child is PrintDocument.Button
        if (
          React.isValidElement(child) &&
          child.type === PrintDocument.Button
        ) {
          const originalOnClick = child.props.onClick;
          const originLoading = child.props.loading;
          return React.cloneElement(child, {
            loading: originLoading || isPrint,
            onClick: (event) => {
              if (originalOnClick) {
                // Ensure compatibility with both sync and async functions
                const result = originalOnClick(() => onPrint(), event);

                // If the original function is asynchronous, wait for it
                Promise.resolve(result).then(() => {
                  if (!result) {
                    onPrint(); // Call onPrint if original function doesn't handle it
                  }
                });
              } else {
                onPrint(); // If no custom onClick is provided, just call onPrint
              }
            },
          });
        }
        return child;
      })}
    </div>
  );
};

PrintDocument.Button = Button;
PrintDocument.Area = IFrame;

export default PrintDocument;
