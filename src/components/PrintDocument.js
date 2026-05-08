import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'antd';
import IFrame from './IFrame';
import { todayDate } from '../lib';

const PrintDocument = ({
  children,
  id = 'ardoc-print-iframe',
  delay = 2500,
}) => {
  const [isPrint, setIsPrint] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onPrint = (fileName) => {
    const originalDocTitle = document.title;
    setIsPrint(true);
    timerRef.current = setTimeout(() => {
      const print = document.getElementById(id);
      if (print) {
        const title = fileName || `${uuidv4()}_${todayDate()}`;
        // change iframe title
        if (print.contentDocument) {
          print.contentDocument.title = title;
        }
        // change document title
        document.title = title;
        print.focus();
        if (print.contentWindow) {
          print.contentWindow.print();
        }
      }
      setIsPrint(false);
      document.title = originalDocTitle;
    }, delay);
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
                // Pass onPrint as first argument; handler is responsible for calling it
                originalOnClick((props) => onPrint(props), event);
              } else {
                onPrint();
              }
            },
          });
        }
        if (React.isValidElement(child) && child.type === PrintDocument.Area) {
          if (!isPrint) {
            return null;
          }
          return React.cloneElement(child, {
            htmlID: id,
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
